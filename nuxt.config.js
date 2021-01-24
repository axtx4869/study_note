const config = require("./contentful.json");
const contentful = require("contentful");
const client = contentful.createClient({
  space: config.CTF_SPACE_ID,
  accessToken: config.CTF_CDA_ACCESS_TOKEN
});
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "STUDY NOTE | エンジニアを目指す大学生のアウトプット用ブログ",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "エンジニアを目指す大学生のブログです。技術や日常について書いています。"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/css/reset.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~plugins/font-awesome", ssr: false }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics"
  ],

  googleAnalytics: {
    id: "UA-12345-0" //自身のアナリティクスコード
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/markdownit",
    "nuxt-fontawesome",
    "nuxt-webfontloader",
    ["@nuxtjs/google-analytics", { id: "G-QF9B65LERJ" }],
    ["@nuxtjs/robots"],
    ["@nuxtjs/sitemap"]
  ],

  robots: {
    UserAgent: "*",
    Sitemap: "https://study-note.blog/sitemap.xml"
  },

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://study-note.blog"
  },

  webfontloader: {
    google: {
      families: ["Caveat", "Comic Neue"]
    }
  },

  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: true,
    use: ["markdown-it-br"]
  },

  fontawesome: {
    component: "fa"
  },

  generate: {
    async routes() {
      const [posts, categories] = await Promise.all([
        client.getEntries({
          content_type: "blogPost"
        }),
        client.getEntries({
          content_type: "category"
        })
      ]);
      return [
        ...posts.items.map(post => `post/${post.fields.slug}`),
        ...categories.items.map(category => `category/${category.fields.slug}`)
      ];
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
