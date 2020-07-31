const MonacoEditorPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/stylesheets/main.scss";',
      },
    },
  },
  configureWebpack: {
    plugins: [
      new MonacoEditorPlugin({
        languages: ['javascript', 'css', 'html', 'typescript'],
      }),
    ],
  },
};
