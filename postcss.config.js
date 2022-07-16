/*
 * @Date: 2022-07-16 12:56:45
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-16 12:57:03
 * @FilePath: \zb\postcss.config.js
 */
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};