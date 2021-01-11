import client from "@/plugins/contentful.js";
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "my_blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
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
  modules: ["@nuxtjs/markdownit", "nuxt-fontawesome", "nuxt-webfontloader"],

  webfontloader: {
    google: {
      families: ["Caveat"]
    }
  },

  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: false
  },

  fontawesome: {
    component: "fa"
  },

  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost"
        }),
        client.getEntries({
          content_type: "category"
        })
      ]).then(([posts, categories]) => {
        return [
          ...posts.items.map(post => `post/${post.fields.slug}`),
          ...categories.items.map(category => `category/${category.sys.id}`)
        ];
      });
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
