<template>
  <div id="app">
    <div class="router-content">
      <router-view/>
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
}
body{
  background: #efefef;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.router-content{
  flex-grow: 1;
  overflow: auto;
}

</style>
