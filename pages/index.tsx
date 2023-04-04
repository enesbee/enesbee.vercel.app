import dynamic from 'next/dynamic'
const Link = dynamic(() => import('@/components/Link'))
const PageSEO = dynamic(() => import('@/components/SEO').then((mod) => mod.PageSEO))
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

const MAX_DISPLAY = 10

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="space-y-2">
                    <div className="space-y-5">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-wide">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-600 dark:text-gray-300">
                          {summary}
                        </div>
                      </div>
                      <div className="text-xs font-medium leading-6">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-xs font-bold leading-6 text-gray-600 dark:text-gray-500">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:bg-gray-900 dark:text-white"
            aria-label="all posts"
          >
            All Posts &rArr;
          </Link>
        </div>
      )}
    </>
  )
}
