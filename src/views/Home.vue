<template>
  <div class="home">
    <div class="headline">记一笔</div>
    <FundsOption/>
    <Write/>
    <h3>分类</h3>
    <LabelOption/>
</div>
</template>
 
<script>
import FundsOption from '@/components/homeComponents/FundsOption.vue'
import Write from '@/components/homeComponents/Write.vue'
import LabelOption from '@/components/homeComponents/LabelOption.vue'
export default {
  name:'home',
  components:{
    FundsOption,Write,LabelOption
  }
}
</script>
 
<style lang = "less" scoped>
.headline{
  background: #f8f8f8;
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  letter-spacing: 0.5em;
  font-size: 1.2em;
  font-weight: bold;
}
h3{
    margin:10px 20px;
    padding-top: 5px;
    border-top:1px solid #bbb;
  }
</style>