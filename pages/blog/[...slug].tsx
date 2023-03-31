import fs from 'fs'
// import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'
import Link from '@/components/Link'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  post: { mdxSource: string; toc: Toc; frontMatter: PostFrontMatter }
  authorDetails: AuthorFrontMatter[]
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
}> = async ({ params }) => {
  const slug = (params.slug as string[]).join('/')
  const allPosts = await getAllFilesFrontMatter('blog')
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slug)
  const prev: { slug: string; title: string } = allPosts[postIndex + 1] || null
  const next: { slug: string; title: string } = allPosts[postIndex - 1] || null
  const post = await getFileBySlug<PostFrontMatter>('blog', slug)
  // @ts-ignore
  const authorList = post.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug<AuthorFrontMatter>('authors', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts)
    fs.writeFileSync('./public/feed.xml', rss)
  }

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function Blog({
  post,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <>
      {'draft' in frontMatter && frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
              <span role="img" aria-label="roadwork sign">
                🚧
              </span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              이 페이지는 공사중입니다..
            </p>
            <p className="mb-8">게시글이 지워졌을 수도 있고요..</p>
            <Link href="/">
              <button className="inline rounded-lg border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-500 focus:outline-none dark:hover:bg-primary-300">
                메인 페이지로 돌아가기
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
