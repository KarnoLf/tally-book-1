<template>
  <div>
    edit
  </div>
</template>
 
<script>
import labelListModel from '../../models/labelListModel';

export default {
  mounted(){
    console.log(this.$route.params.id);
  }
  // created(){
  //   const id = this.$route.params.id
  //   labelListModel.fetch()
  //   const labels = labelListModel.data
  //   const label = labels.filter(lb => lb.id === id)[0]
  //   if(label){
  //     console.log(label);
  //   }else{
  //     this.$router.replace('/404')
  //   }
  // }
}
</script>
 
<style lang = "less" scoped>

</style>