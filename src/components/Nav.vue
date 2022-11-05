<template>
  <div>
    <ul class="nav">
     <li :class="$route.path==='/label' ? 'active' : ''"  @click="goLabel">
      <v-icon class="svg" iconClass="label" />
      标签
    </li>
     <li :class="$route.path==='/home' ? 'active' : ''" @click="goHome">
      <v-icon class="svg" iconClass="money" />
      记账
    </li>
     <li :class="$route.path==='/statistics' ? 'active' : ''"  @click="goStatistics">
      <v-icon class="svg" iconClass="statistics" />
      数据
    </li>
    </ul>
  </div>
</template>
 
<script>
// import 一个目录
const dir = require.context('../icons/svg',true,/\.svg$/)
try{
  dir.keys().forEach(dir)
}catch(error){
  console.log(error);
}
// import '@/icons/svg/label.svg'
// import '@/icons/svg/money.svg'
// import '@/icons/svg/statistics.svg'
export default {
  methods:{
    goHome(){
      this.$router.push('/')
    },
    goLabel(){
      this.$router.push('/label')
    },
    goStatistics(){
      this.$router.push('/statistics')
    },
  }
}
</script>
 
<style lang = "less" scoped>
.nav{
  background: #fff;
  border-top: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 60px;
  align-items: center;
  li{
    display: flex;
    flex-direction: column;
    &.active{
      color: rgb(196, 55, 13);
      font-weight: bold;
    }
    .svg{
      margin: auto;
    }
  }
}
</style>