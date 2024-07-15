// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/test-utils/module",
    "nuxt-scheduler",
    [
      "nuxt-openapi-docs-module",
      {
        folder: "./docs/openapi", // Path to the folder containing OpenAPI specification files
        name: "OpenApiDocs", // Name of the main component
        files: function () {
          // Function returning an object mapping file names to display names
          return {
            "news-api": "News API",
            "pages-api": "Pages API docs",
            "tradingview-api": "TradingView API docs",
          };
        },
        debug: true, // Enable debug mode to print information to the console
        list: true, // Toggle the display of document listings
        locales: ["en", "fr", "es"], // Define supported locales
        footer: "© 2024 Company Name. All rights reserved.", // Custom footer content
      },
    ],
  ],
  css: [
    "@/assets/css/swagger-ui.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
});
