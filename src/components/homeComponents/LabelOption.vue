<template>
  <div>
    <ul class="labelOption">
      <li :class="selectedLabels.indexOf(label)>=0 && 'selected'" v-for="(label,index) in labels" :key="index" @click="select(label)">{{label}}</li>
      <li class="label" @click="create">+ 增加</li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      selectedLabels:[]
    }
  },
  props:['labels'],
  methods:{
    select(label){
      // 选择或取消选择标签
      const index = this.selectedLabels.indexOf(label)
      if( index >= 0){
        this.selectedLabels.splice(index,1)
      }else{
        this.selectedLabels.push(label)
      }
      this.$emit('update:value',this.selectedLabels)
    },
    create(){
      // 新建标签
      const name = window.prompt('请输入标签名：')
      if(name === '' || name === ' '){
        window.alert('标签名不能为空') 
      }else if(name === null){
        console.log(null);
      }else{
        this.labels.push(name)
        this.$emit('labels',this.labels)
      }
    }
  }
 
}
</script>
 
<style lang = "less" scoped>
.labelOption {
  display: flex;
  flex-wrap: wrap;
}
li {
    margin: 2.5%;
    border: 1px solid #444;
    border-radius: 5px;
    width: 20%;
    padding: 5px;
    text-align: center;
    background: #efefef;
  }
  .selected{
    background: rgb(231, 210, 170);
  }
</style>