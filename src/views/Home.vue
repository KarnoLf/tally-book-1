<template>
  <div class="home">
    <div class="contentArea">
      <div class="headline">Yuan 记账</div>
      <FundsOption />
      <Write />
      <h3>标签</h3>
      <LabelOption :labels.sync="labels" />
    </div>
    <div class="buttonArea">
      <Ok/>
    </div>
  </div>
</template>
 
<script>
import FundsOption from '@/components/homeComponents/FundsOption.vue'
import Write from '@/components/homeComponents/Write.vue'
import LabelOption from '@/components/homeComponents/LabelOption.vue'
import Ok from '@/components/homeComponents/Ok.vue'

export default {
  name: 'home',
  components: {
    FundsOption, Write, LabelOption,Ok
  },
  data(){
    return{
      labels:['衣','食','住','行'],
    }
  },
}
</script>
 
<style lang = "less" scoped>
.home{
  height: 100%;
}
.contentArea{
  height: 85%;
  overflow: auto;
}

.headline {
  background: #f8f8f8;
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  letter-spacing: 0.5em;
  font-size: 1.2em;
  font-weight: bold;
}
h3 {
  margin: 10px 20px;
  padding-top: 5px;
  border-top: 1px solid #bbb;
}

.buttonArea {
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>