import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // srcDir: './src',
  title: "红皮书--汇聚计算机语言与技术文档大全",
  description: "",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
    siteTitle: "红皮书",
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端开发',
        items: [
          { 
            text: '前端基础', 
            items: [
              { text: '基础三剑客', link: '/java' },
            ]
          },
          { 
            text: '框架', 
            items: [
              { text: 'Vue2', link: '/java' },
              { text: 'Vue3', link: '/java' },
              { text: 'React', link: '/java' },
            ]
          },
        ]
      },
      {
        text: '后端开发',
        items: [
          { 
            text: 'JAVA开发', 
            items: [
              { text: 'JAVA基础', link: '/java' },
            ] 
          },
          { 
            text: 'GO开发', 
            items: [
              { text: 'GO基础', link: '/java' },
            ] 
          },
          { 
            text: 'Node开发', 
            items: [
              { text: 'Node开发', link: '/java' },
            ] 
          },
          { 
            text: 'Python开发', 
            items: [
              { text: 'Python开发', link: '/java' },
            ] 
          },
          { 
            text: 'PHP开发', 
            items: [
              { text: 'PHP开发', link: '/java' },
            ] 
          },
        ]
      },
      {
        text: 'Linux运维',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: '计算机网络',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: '软考相关',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '公路车', link: '/html' },
        ]
      }
      
    ],

    sidebar: {

    },

    socialLinks: [
      { icon: { svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="IconifyId193f43fc02f3e91300"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"/><path fill="#555" fill-rule="evenodd" d="M31 7v17z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 7v17"/><path fill="#555" fill-rule="evenodd" d="m16.636 6.636l14.142 14.142z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m16.636 6.636l14.142 14.142"/><path fill="#555" fill-rule="evenodd" d="M7 17h17z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 17h17"/><path fill="#555" fill-rule="evenodd" d="M20.364 17.636L6.222 31.778z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.364 17.636L6.222 31.778"/><path fill="#555" fill-rule="evenodd" d="M17 25v17z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 25v17"/><path fill="#555" fill-rule="evenodd" d="m17.636 27.636l14.142 14.142z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m17.636 27.636l14.142 14.142"/><path fill="#555" fill-rule="evenodd" d="M24 31h18z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31h18"/><path fill="#555" fill-rule="evenodd" d="M42.364 16.636L28.222 30.778z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.364 16.636L28.222 30.778"/><path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId193f43fc02f3e91300)"/></svg>'}, link: 'https://www.wazicode.top' }
    ],
    footer: {
      message: 'MIT Licensed | Copyright © 2023-present',
      copyright: '哇子 | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023022177号-1</a>'
    },
  }
})
