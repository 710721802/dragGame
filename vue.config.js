const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    .set("@", resolve("src"))
    .set("assets", resolve("src/assets"))
    .set("components", resolve("src/components"))
    .set("views", resolve("src/views"))
  },
  publicPath: "./",
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
      // src下的文件夹
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
      },
    },
  },
}