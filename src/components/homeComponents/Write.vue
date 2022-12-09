<template>
  <div>
    <label class="write">
      <span>备注</span>
      <input 
      type="text" 
      placeholder="在此输入备注" 
      v-model="writeValue"
      @focus="blur"
      >
    </label>
    <label class="write">
      <span>数目</span>
      <input 
      type="text" 
      maxlength="2"
      placeholder="在此输入数字" 
      oninput="if(value.length>16)value=value.slice(0,16)" 
      v-model="numberValue"
      @focus="focus"
      >
      <!-- 限制长度 -->
    </label>
    <div v-show="visible">
      <p class="back" @click="blur">收起键盘</p>
      <div class="numberPad">
        <span @click=keyEvent(1)>1</span>
        <span @click=keyEvent(2)>2</span>
        <span @click=keyEvent(3)>3</span>
        <span @click=keyEvent(4)>4</span>
        <span @click=keyEvent(5)>5</span>
        <span @click=keyEvent(6)>6</span>
        <span @click=keyEvent(7)>7</span>
        <span @click=keyEvent(8)>8</span>
        <span @click=keyEvent(9)>9</span>
        <span @click=keyEvent(0)>0</span>
        <span @click=dot>.</span>
        <span @click="remove">删除</span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      writeValue:'',
      numberValue:'',
      visible:false
    }
  },
  methods:{
    focus(){
      this.visible = true
      // 禁止系统自带软键盘跳出，原理就是被聚焦的元素失焦
      document.activeElement.blur()
    },
    blur(){
      this.visible = false
    },
    keyEvent(key){
      if(this.numberValue === '0'){
        if(key === '0'){return}
      }else if(this.numberValue.length>16){return}
      else{this.numberValue += key}
    },
    dot(){
      if(this.numberValue === ''){
        return 
      }else if(this.numberValue.includes('.')){
        return
      }else{
        this.numberValue += '.'
      }
    },
    remove(){
      const number = this.numberValue.slice(0,-1)
      this.numberValue = number
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
.back{
  position: absolute;
  bottom: 360px;
  height: 40px;
  width: 100%;
  text-align: center;
  background: rgb(223, 237, 255);
  font-family: "Gill Sans", sans-serif;
  padding: 10px 0 0 0;
}
.numberPad{
  position: absolute;
  bottom: 60px;
  height: 300px;
  width: 100%;
  background: white;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  span{
    font-size: 1.5em;
    font-family: "Gill Sans", sans-serif;
    width: 33%;
    padding: 30px 0 0 0;
    border: 1px solid #ccc;
  }
}
</style>