import eslintPlugin from "vite-plugin-eslint";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/main.css",
    "~/assets/css/blog.css",
  ],
  plugins: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
  ],
  modules: ["@nuxtjs/google-fonts"],
  components: true,
  ssr: true,
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
