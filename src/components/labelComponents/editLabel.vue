<template>
  <div>
    <div class="headline">
      <span @click="back"> &lt; &nbsp;&nbsp;返回</span>
    </div>
    <label class="amend" for="">
      <span>修改标签</span>
      <input type="text" v-model="labelWrite">
    </label>
    <div class="delete">
      <button>删除标签</button>
    </div>
  </div>
</template>
 
<script>
import labelListModel from '@/models/labelListModel'
labelListModel.fetch()
export default {
  data(){
    return{
      labelWrite:''
    }
  },
 methods: {
   back(){
     this.$router.push('/label')
   }
 },
 watch:{
  labelWrite(nv){
    if(nv){
        const success = labelListModel.create(nv)
        if(!success){
          window.alert('标签列表中已存在相同标签名')
        }
      }
  }
 }
}
</script>
 
<style lang = "less" scoped>
.headline{
  height: 40px;
  line-height: 40px;
  background: #fdfdfd;
  font-weight: bold;
  span{
    margin-left: 15px;
  }
}
.amend{
  display: block;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
  span{
    font-weight: bold;
    margin-left: 40px;
    margin-right: 20px;
  }
  input{
    height: 20px;
    line-height: 20px;
  }
}
.delete{
  display: block;
  margin-top: 30px;
  height: 30px;
  width: 100%;
  text-align: center;
  button{
  padding: 10px;
  font-size: 1em;
  border-radius: 20px;
  background: #eaa838;
  }
}
</style>