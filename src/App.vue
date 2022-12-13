<template>
  <div id="app">
    <div class="router-content">
      <router-view />
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default{
  components:{
    Nav
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  list-style: none;
  // 去除选中后的蓝色背景
  -webkit-tap-highlight-color: transparent;
}
body{
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
a{
  text-decoration: none;
}
a:link,a:visited{
  color: black;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fffefc;
  font-family: Georgia, "Nimbus Roman No9 L", "Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", "Source Han Serif CN", STSong, "AR PL New Sung", "AR PL SungtiL GB", NSimSun, SimSun, "TW\-Sung", "WenQuanYi Bitmap Song", "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE", PMingLiU, MingLiU, serif;
}
.router-content{
  flex-grow: 1;
  overflow: auto;
}

</style>
