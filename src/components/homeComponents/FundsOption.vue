<template>
  <div class="fundsOption">
    <ul>
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
 
<style lang = "less" scoped>
.fundsOption{
  height: 50px;
  justify-content: space-around;
  line-height: 50px;
  margin-bottom: 10px;
  ul{
    display: flex;
    li{
      flex-grow: 1;
      text-align: center;
      &.selected{
        border-bottom: 3px solid #333;
      }
    }
    li:active{
      background: gold;
     
    }
  }
}
</style>