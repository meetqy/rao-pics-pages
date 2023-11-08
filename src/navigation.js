import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/#'),
    },
    {
      text: '功能',
      href: getPermalink('/#features'),
    },
    {
      text: '介绍',
      href: getPermalink('/#introduces'),
    },
    {
      text: '常见问题',
      href: getPermalink('/#faqs'),
    },
    {
      text: '其他版本',
      links: [{ text: 'v0.7.x', href: 'https://v0.rao.pics' }],
    },
    // {
    // text: 'Homes',
    // links: [
    //   {
    //     text: 'SaaS',
    //     href: getPermalink('/homes/saas'),
    //   },
    //   {
    //     text: 'Startup',
    //     href: getPermalink('/homes/startup'),
    //   },
    //   {
    //     text: 'Mobile App',
    //     href: getPermalink('/homes/mobile-app'),
    //   },
    //   {
    //     text: 'Personal',
    //     href: getPermalink('/homes/personal'),
    //   },
    // ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: '立即下载', href: 'https://github.com/meetqy/rao-pics/releases', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '所有页面',
      links: [
        { text: '首页', href: getPermalink('/#') },
        { text: '功能', href: getPermalink('/#features') },
        { text: '介绍', href: getPermalink('/#introduces') },
        { text: '常见问题', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: '平台',
      links: [
        { text: 'MacOS', href: 'https://github.com/meetqy/rao-pics/releases' },
        { text: 'Windows', href: 'https://github.com/meetqy/rao-pics/releases' },
      ],
    },
    {
      title: '交流',
      links: [
        { text: 'Github', href: 'https://github.com/meetqy/rao-pics' },
        { text: '知乎问答', href: 'https://www.zhihu.com/question/628935474/answer/3275283448' },
        { text: '小众软件', href: 'https://meta.appinn.net/t/topic/48463/1' },
        { text: '爱发电', href: 'https://afdian.net/a/raopics?tab=home' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/meetqy' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/meetqy/rao-pics' },
  ],
  secondaryLinks: [],
  footNote: `
  <p>
    <span>Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/meetqy"> meetqy</a> · All rights reserved.</span>
    <span>Thanks, <a target="_blank" href="https://github.com/onwidget/astrowind">astrowind</a>.</span>
    </p>
  `,
};
