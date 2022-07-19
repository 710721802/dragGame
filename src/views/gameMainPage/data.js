/*
 * @Date: 2022-06-18 22:07:58
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-10 19:47:23
 * @FilePath: \zb\src\views\gameMainPage\data.js
 */
let STEP = [
  {
    value: '角色',
    key: 0,
    isFinished: false
  },
  {
    value: '情绪',
    key: 1,
    isFinished: false
  },
  {
    value: '人际关系',
    key: 2,
    isFinished: false
  },
  {
    value: '心境属性',
    key: 3,
    isFinished: false
  },
  {
    value: '生理',
    key: 4
  },
  {
    value: '环境',
    key: 5,
    isFinished: false
  },
]

let ADD_MODEL_BOX_LIST = [
  [
    {
      defaultName: '主角',
      showAdd: true,
    }
  ],
  [
    {
      defaultName: '高兴',
      showAdd: true,
    },
    {
      defaultName: '愤怒',
      showAdd: true,
    },
    {
      defaultName: '哀愁',
      showAdd: true,
    },
    {
      defaultName: '快乐',
      showAdd: true,
    },
    {
      defaultName: '恐惧',
      showAdd: true,
    }
  ],
  [
    {
      defaultName: '爱人',
      showAdd: true,
    },
    {
      defaultName: '爸爸',
      showAdd: true,
    },
    {
      defaultName: '妈妈',
      showAdd: true,
    },
    {
      defaultName: '爷爷',
      showAdd: true,
    },
    {
      defaultName: '奶奶',
      showAdd: true,
    },
  ],
  [
    {
      defaultName: '安全感',
      showAdd: true,
    },
    {
      defaultName: '自我价值',
      showAdd: true,
    },
    {
      defaultName: '社交能力',
      showAdd: true,
    },
    {
      defaultName: '智力',
      showAdd: true,
    },
  ],
  [
    {
      defaultName: '身体',
      showAdd: true,
    },
  ],
  [
    {
      defaultName: '工作',
      showAdd: true,
    },
    {
      defaultName: '学习',
      showAdd: true,
    },
  ],
]
// 背景图片
let IMG_DATA = [
  {
    key: 0,
    url: require('@/assets/gameSection/banner01.png')
  },
  {
    key: 1,
    url: require('@/assets/gameSection/banner02.png')
  },
  {
    key: 2,
    url: require('@/assets/gameSection/banner03.png')
  },
  {
    key: 3,
    url: require('@/assets/gameSection/banner04.png')
  },
  {
    key: 4,
    url: require('@/assets/gameSection/banner05.png')
  },
]
export {
  ADD_MODEL_BOX_LIST,
  IMG_DATA,
  STEP,
}