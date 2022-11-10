<template>
  <div class="fundsOption">
    <ul>
      <li :class="type === '-' && 'selected'" @click="selectType('-')"><span>支出</span></li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')"><span>收入</span></li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      // '-'代表支出，'+'代表收入
      type:'-'
    }
  },
  methods:{
    // type 只能有 '-'和'+'两个值，不能有其他值
    selectType(type){
      if(type !== '-' && type !== '+'){
        throw new Error('type is unknown')
      }
      this.type = type
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
      span{
        background: #e9e4e4;
        border-radius: 10px;
        padding: 5px 20px;
        color: #eaa838;
        font-size: 1.1em;
        font-weight: bold;
      }
      &.selected{
        span{
          background: #eaa838;
          color: white;
        }
      }
    }
  }
}
</style>