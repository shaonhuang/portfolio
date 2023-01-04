const siteConfig = {
  title: 'shaonhuang',
  description: "Shaonhuang's Blog",
  url: 'https://shaonhuang-blog.vercel.app/',
  author: { name: 'shaonhuang', email: 'yukuaihuang@icloud.com' },
  links: {
    github: 'https://github.com/shaonhuang',
    twitter: 'https://twitter.com/yukuaihuang',
    linkedin: 'https://www.linkedin.com/in/yukuaihuang/',
  },
  twitter: {
    handle: '@yukuaihuang',
  },
  /** @type {import('@giscus/react').GiscusProps} */
  giscus: {
    repo: 'shaonhuang/shaonhuang-blog',
    repoId: 'R_kgDOIso1uQ',
    category: 'General',
    categoryId: 'DIC_kwDOIso1uc4CTVkk',
    strict: '1',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'preferred_color_scheme',
    lang: 'en',
  },
};

export default siteConfig;
