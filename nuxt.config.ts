// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: false },

  // experimental: {
  //   scanPageMeta: "after-resolve",
  //   sharedPrerenderData: false,
  //   compileTemplate: true,
  //   resetAsyncDataToUndefined: true,
  //   templateUtils: true,
  //   relativeWatchPaths: true,
  //   normalizeComponentNames: false,
  //   spaLoadingTemplateLocation: "within",
  //   defaults: {
  //     useAsyncData: {
  //       deep: true,
  //     },
  //   },
  // },
  // features: {
  //   inlineStyles: true,
  // },
  // unhead: {
  //   renderSSRHeadOptions: {
  //     omitLineBreaks: false,
  //   },
  // },

  // devtools: { enabled: true },

  /** Configure **/
  app: {
    head: {
      title: "Bistro Bliss",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/ui-pro",
    "@nuxtjs/i18n",
  ],

  css: ["~/assets/css/main.css"],
  i18n: {
    locales: [
      {
        code: "de",
        name: "Deutsch",
      },
      {
        code: "en",
        name: "English",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
  },

  hooks: {},

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
});
