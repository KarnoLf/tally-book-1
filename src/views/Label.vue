<template>
  <div>
    <ul>
      <li v-for="label in labels" :key="label.id" @click="jumpClick(label.id)">
        {{label.name}}
        <span>></span>
      </li>
    </ul>
    <div class="button">
      <button @click="create">新建标签</button>
    </div>
  </div>
</template>
 
<script>
import labelListModel from '@/models/labelListModel';

labelListModel.fetch()
export default {
  data(){
    return{
      labels:labelListModel.data
    }
  },
  methods:{
    create(){
      const name = window.prompt('请输入标签名')
      if(name){
        const success = labelListModel.create(name)
        if(!success){
          window.alert('标签列表中已存在相同标签名')
        }
      }
    },
    jumpClick(id){
      this.$router.push(`/label/edit/${id}`)
    }
  }
}
</script>
 
<style lang = "less" scoped>
ul{
  li{
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    height: 3em;
    line-height: 3em;
    padding-left: 30px;
    background: #fff;
    border-bottom: 1px solid #c5c5c5;
    span{
      padding: 0 20px;
      font-size: 1.5em;
      cursor:pointer;
    }
  }
}
.button{
  text-align: center;
  button{
  background: #eaa838;
  border-radius: 15px;
  height: 40px;
  padding: 0 20px;
  margin: 10px;
  outline:none;
}
}

</style>