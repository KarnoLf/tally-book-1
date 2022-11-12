<template>
  <div>
    <label class="write">
      <span>备注</span>
      <input type="text" placeholder="在此输入备注" v-model="writeValue">
    </label>
    <label class="write">
      <span>数目</span>
      <input type="number" oninput="if(value.length>16)value=value.slice(0,16)" v-model="numberValue">
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
  methods:{
   
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
  }
}
</style>