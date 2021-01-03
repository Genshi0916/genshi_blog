module.exports = {
  title: 'げんしのブログ',
  description: 'どうでもいいことはこっちに書いていく',
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  // Theme to use
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'ja-JP',
    personalInfo: {
      // Nickname
      nickname: 'げんし',
      description: 'genshi0916',
      email: 'genshi0916@gmail.com',
      avatar: '',
      sns: {
        github: {
          account: 'Genshi0916',
          link: 'https://github.com/Genshi0916/',
        },
        facebook: {
          account: 'Genki Kano',
          link: 'https://www.facebook.com/genki.kano.794',
        },
        twitter: {
          account: '@genshi0916',
          link: 'https://twitter.com/genshi0916',
        },
      },
    },

    header: {
      background: {
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
    },

    infoCard: {
      headerBackground: {
        useGeo: true,
      },
    },

    lastUpdated: false,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    comments: false,

    pagination: {
      perPage: 5,
    },

    defaultPages: {
      home: true,
      posts: true,
    },

  },

}