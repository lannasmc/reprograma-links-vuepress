module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@screens': '../images/screens'
      }
    }
  },
  title: '{reprograma} Links',
  description: '',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '../images/favicon.png',
        sizes: '32x32'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Categorias', link: '/categorias/' }
    ],
    sidebar: {
      '/categorias/': [
        {
          title: 'Categorias',
          collapsable: false,
          children: [
            '',
            'girlpower',
            'ux',
            'html-css',
            'javascript',
            'github',
            'plataformasdeestudo',
            'diversos'
          ]
        }
      ]
    },
    repo: 'https://github.com/lannasmc/reprograma-links-vuepress',
    repoLabel: 'Contribua!',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Nos ajude a melhorar essa página!',
    lastUpdated: 'Última atualiação'
  }
};
