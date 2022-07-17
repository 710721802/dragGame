<!--
 * @Date: 2022-07-17 18:35:59
 * @LastEditors: whq 710721802@qq.com
 * @LastEditTime: 2022-07-17 18:58:06
 * @FilePath: \zb\src\components\OrientLayer.vue
-->
<template>
  <!--竖屏浏览提示-->
  <div id="orientLayer" class="mod-orient-layer">
    <div class="mod-orient-layer_content">
      <div class="mod-orient-layer_desc"></div>
    </div>
  </div>
</template>

<script>
export default {

  mounted(){

    this.init()
  },

  methods:{

    checkDirect() {

      if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {

        return "portrait"
      } else {

        return "landscape"
      }
    },

    orientNotice() {

      let orientLayer = document.getElementById("orientLayer")
      let orient = this.checkDirect() //判断是否是竖屏

      if (orient == "portrait") {

        orientLayer.style.display = "block"   //竖屏则展示提示
      } else {

        orientLayer.style.display = "none"  
      }
    },

    init() {

      this.orientNotice()
      setTimeout(this.orientNotice, 300)
      document.addEventListener('DOMContentLoaded', this.orientNotice, false)
      window.addEventListener('resize', this.orientNotice, false)
      window.addEventListener('load', this.orientNotice, false)
    }
  }
}
</script>
<style scoped>
  /*orient tips*/
  .mod-orient-layer {  display: none;  position: fixed;  height: 100%;  width: 100%;  left: 0;  top: 0;  right: 0;  bottom: 0; background:rgba(0,0,0,1);  z-index: 9997  }
  .mod-orient-layer_content { width: 100%; position:absolute; left:50%; top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%); text-align: center;  }
  .mod-orient-layer_content::after{content:"为了更好的体验，请将手机/平板转过来";text-align:center;font-size:16px;color:#fff;position:absolute;top:50%;left:0;height:30px;width:100%;margin-top:50px;z-index:99999;}
  .mod-orient-layer_content::before{content:"";position:absolute;z-index:99999;height:200px;width:100px;left:50%;top:50%;margin:-140px 0 0 -50px;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:100px auto;}
</style>
