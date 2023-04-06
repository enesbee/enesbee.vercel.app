const siteMetadata = {
  title: 'ENESBEElog',
  author: 'enesbee',
  headerTitle: 'log',
  description: '배우거나 배울 것들을 기록하는 블로그',
  language: 'ko-kr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://enesbee.vercel.app',
  siteRepo: 'https://github.com/enesbee/enesbee.vercel.app',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'enesbee.dev@gmail.com',
  github: 'https://github.com/enesbee',
  twitter: 'https://twitter.com/enesbee_dev',
  velog: 'https://velog.io/@enesbee',
  // facebook: 'https://facebook.com/enesbee.nam',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/enesbee',
  locale: 'ko-KR',
  analytics: {
    googleAnalyticsId: 'G-NT735W9LBV', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // sort the comments area in reverse order: "top" = enable / "bottom" = disable
      position: 'top',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
