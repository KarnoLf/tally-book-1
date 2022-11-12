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
      const index = this.selectedLabels.indexOf(label)
      if( index < 0){
        this.selectedLabels.push(label)
      }else{
        this.selectedLabels.splice(index,1)
      }
    },
    create(){
      const name = window.prompt('请输入标签名：')
      if(name === '' || name === ' '){ window.alert('标签名不能为空') }
      if(name === null){console.log(null);}
      if(this.labels){
        this.labels.push(name)
        console.log(this.labels);
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