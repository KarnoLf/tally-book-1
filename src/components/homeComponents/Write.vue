<template>
  <div>
    <label class="write">
      <span>备注</span>
      <input type="text" placeholder="在此输入备注" v-model="writeValue">
    </label>
    <label class="write">
      <span>数目</span>
      <input type="number" placeholder="在此输入数字" oninput="if(value.length>16)value=value.slice(0,16)" v-model="numberValue">
      <!-- 限制长度 -->
    </label>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      writeValue:'',
      numberValue:''
    }
  },
  watch:{
    // nv -> new value,ov -> old value
    writeValue:function(nv){
      this.$emit('update:value2',nv)
    },
    numberValue:function(nv){
      this.$emit('update:value1',nv)
    }
  }
}
</script>
 
<style lang = "less" scoped>
.write {
  display: flex;
  height: 50px;
  padding: 10px;
  // border-bottom:1px solid #bbb;
  span {
    font-weight: bold;
    margin-left: 15px;
  }

  input {
    background: white;
    margin-left: 40px;
    padding-left: 5px;
    border: 1px solid rgb(228, 228, 228);
    overflow: hidden;
    &:hover{
      border: 1px solid #fab949;
    }
    &:focus{
    outline:1px solid #fab949;
    }
  }
}
</style>