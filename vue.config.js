module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/stylesheets/main.scss";',
      },
    },
  },
};
