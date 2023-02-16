const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/msk-fenix-front/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles.scss";`,
      },
    },
  },
});
