<template>
  <div>
    <div class="headline">
      <span>管理标签</span>
    </div>
    <ul>
      <li @click="create" class="create">新建标签 
        <v-icon class="svg" iconClass="right"/>
      </li>
      <li v-for="label in labels" :key="label.id">
        {{label.name}}
        <span @click="labelDelete">
          <v-icon class="svg" iconClass="delete"  />
        </span>
      </li>
    </ul>
    
  </div>
</template>
 
<script>
import labelListModel from '@/models/labelListModel';
import '@/icons/svg/delete.svg'

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
    labelDelete(){
      const confirmDelete = window.confirm('确认要删除吗？')
      if(confirmDelete){
        console.log(123);
      }
    }
  }
}
</script>
 
<style lang = "less" scoped>
.headline{
  height: 40px;
  line-height: 40px;
  background: #f8f8f8;
  font-weight: bold;
  width: 100%;
  text-align: center;
  border-bottom: #c5c5c5 1px solid;
}
ul{
  .create{
    padding-left: 65%;
  }
  li{
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    height: 3em;
    line-height: 3em;
    padding-left: 30px;
    border-bottom: 1px solid #c5c5c5;
    .svg{
      margin-top: 15px;
      margin-right: 15px;
      font-size: 1em;
      cursor:pointer;
    }
  }
}

</style>