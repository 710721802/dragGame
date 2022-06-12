/*
 * @Date: 2022-06-11 20:37:00
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-06-12 14:39:04
 * @FilePath: \zb\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
