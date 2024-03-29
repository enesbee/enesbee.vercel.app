import dynamic from 'next/dynamic'

const MDXLayoutRenderer = dynamic(() =>
  import('@/components/MDXComponents').then((mod) => mod.MDXLayoutRenderer)
)
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

const DEFAULT_LAYOUT = 'AuthorLayout'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', ['default'])
  const { mdxSource, frontMatter } = authorDetails
  return { props: { authorDetails: { mdxSource, frontMatter } } }
}

export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
