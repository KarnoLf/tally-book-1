<template>
  <div>
    <label class="write">
      <span>备注</span>
      <input type="text" placeholder="在此输入备注" :value="writeValue" @input="onInputT">
    </label>
    <label class="write">
      <span>数目</span>
      <input type="number" oninput="if(value.length>16)value=value.slice(0,16)" :value="numberValue" @input="onInputN">
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
    onInputT(event){
      this.writeValue = event.target.value
    },
    onInputN(event){
      this.numberValue = event.target.value
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
  }
}
</style>