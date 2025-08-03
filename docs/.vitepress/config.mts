import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // srcDir: './src',
  title: "红皮书--汇聚计算机语言与技术文档大全",
  lang: 'zh-CN',
  description: "",
  // 1. 禁用默认的标题模板
  // titleTemplate: false,
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
              { text: 'HTML', link: '/java' },
              { text: 'CSS', link: '/java' },
              { text: 'JS', link: '/java' },
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
          { text: '博主软考之旅', link: '/softexam/myselftrip/' },
          { 
            text: '中级·软件设计师', 
            items: [
              { text: '基础知识·计算机系统基础', link: '/softexam/middle/computerFoundation' },
              { text: '基础知识·系统开发和运行', link: '/softexam/middle/systemDevelopment' },
              { text: '基础知识·面向对象基础', link: '/softexam/middle/objectOriented' },
              { text: '基础知识·网络与信息安全', link: '/softexam/middle/networkAndInfoSecurity' },
              { text: '基础知识·标准化信息化和知识产权', link: '/softexam/middle/intellectualPropertyRight' },
            ]
          },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '公路车组装知识', link: '/other/roadbikes/zz' },
        ]
      },
      { text: '关于站长', link: '/about/me' }
      
    ],

    sidebar: {
      '/about/': [
        {
          text: '站长',
          items: [
            { text: '关于站长', link: '/about/me' },
            { 
              text: '我的故事', 
              items: [
                { text: '25岁失业半年，没收入没存款，我选择进厂了', link: '/about/two' },
                { text: '很遗憾，25岁才开始记录我的人生', link: '/about/one' },
              ]
            }
          ]
        }
      ],
      '/softexam/': [
        {
           text:'博主软考之旅',
           link:'/softexam/myselftrip/'
        },
        {
          text: '中级·软件设计师',
          items: [
            { text: '基础知识·计算机系统基础', link: '/softexam/middle/computerFoundation' },
            { text: '基础知识·系统开发和运行', link: '/softexam/middle/systemDevelopment' },
            { text: '基础知识·面向对象基础', link: '/softexam/middle/objectOriented' },
            { text: '基础知识·网络与信息安全', link: '/softexam/middle/networkAndInfoSecurity' },
            { text: '基础知识·标准化信息化和知识产权', link: '/softexam/middle/intellectualPropertyRight' },
          ]
        }
      ],
      '/other/': [
        {
          text: '公路车相关知识',
          link: '/other/roadbikes/zz'
        }
      ]
    },

    socialLinks: [
      // { icon: { svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="IconifyId193f43fc02f3e91300"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"/><path fill="#555" fill-rule="evenodd" d="M31 7v17z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 7v17"/><path fill="#555" fill-rule="evenodd" d="m16.636 6.636l14.142 14.142z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m16.636 6.636l14.142 14.142"/><path fill="#555" fill-rule="evenodd" d="M7 17h17z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 17h17"/><path fill="#555" fill-rule="evenodd" d="M20.364 17.636L6.222 31.778z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.364 17.636L6.222 31.778"/><path fill="#555" fill-rule="evenodd" d="M17 25v17z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 25v17"/><path fill="#555" fill-rule="evenodd" d="m17.636 27.636l14.142 14.142z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m17.636 27.636l14.142 14.142"/><path fill="#555" fill-rule="evenodd" d="M24 31h18z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31h18"/><path fill="#555" fill-rule="evenodd" d="M42.364 16.636L28.222 30.778z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.364 16.636L28.222 30.778"/><path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId193f43fc02f3e91300)"/></svg>'}, link: 'https://www.wazicode.top' }
    ],
    footer: {
      message: 'MIT Licensed | Copyright © 2023-present',
      copyright: '哇子 | <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023022177号-1</a>'
    },
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    
  },
  // 添加 transformPageData 钩子
  transformPageData(pageData, ctx) {
    // 获取页面相对路径（如 "blog/post1.md"）
    const relativePath = pageData.relativePath;
    console.log(pageData)
    // console.log("ctx",ctx)
    // console.log(relativePath);
    // 定义需要添加短语的路径前缀（支持数组）
    const targetPaths = ["about/","softexam/myselftrip/","other/"];
    
    // 检查页面路径是否匹配目标路径
    const shouldAddSuffix = targetPaths.some(prefix => 
      relativePath && relativePath.startsWith(prefix))
    
    // 添加固定短语（仅对目标路径生效）
    if (pageData.title && shouldAddSuffix) {
      pageData.title += " - 哇子";
    }
    
    return pageData;
  }
})
