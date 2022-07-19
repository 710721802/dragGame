/*
 * @Date: 2022-07-16 12:56:45
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-17 19:16:10
 * @FilePath: \zb\postcss.config.js
 */
// postcss.config.js
module.exports = {
  plugins: {
      autoprefixer: {},
      // flexible配置
      "postcss-pxtorem": {
          "rootValue": 102, // 设计稿宽度的1/10
          "propList": ["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
      }
  }
}