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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #efefef;
}
.router-content{
  flex-grow: 1;
  overflow: auto;
}

</style>
