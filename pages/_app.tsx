import '@/css/tailwind.css'
import '@/css/prism-shades-of-purple.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import siteMetadata from '@/data/siteMetadata'
const Analytics = dynamic(() => import('@/components/analytics'))
const LayoutWrapper = dynamic(() => import('@/components/LayoutWrapper'))
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
