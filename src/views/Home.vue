<template>
  <div class="home">
    <div class="contentArea">
      <div class="headline">Yuan 记账</div>
      <FundsOption @update:value="onUpdatedFunds" />
      <Write @update:value1="onUpdatedNumber" @update:value2="onUpdatedString" />
      <h3>标签</h3>
      <LabelOption :labels.sync="labels" @update:value="onUpdatedLabel" />
    </div>
    <div class="buttonArea">
      <button class="ok" @click="submit">确 定</button>
    </div>
  </div>
</template>
 
<script>
import FundsOption from '@/components/homeComponents/FundsOption.vue'
import Write from '@/components/homeComponents/Write.vue'
import LabelOption from '@/components/homeComponents/LabelOption.vue'
import recordListModel from '@/models/recordListModel.js'
import labelListModel from '@/models/labelListModel.js'
window.localStorage.setItem('version','0.0.1')

export default {
  name: 'home',
  components: {
    FundsOption, Write, LabelOption
  },
  data() {
    return {
      // 先存储到recordList
      recordList: recordListModel.fetch(),
      labels: labelListModel.fetch(),
      record: {
        labels: [],
        note: '',
        amount: 0,
        funds: '-',
        createdAt:''
      }
    }
  },
  methods: {
    // 子传父收到的数据
    onUpdatedLabel(value) {this.record.labels = value},
    onUpdatedString(value) {this.record.note = value},
    onUpdatedFunds(value) {this.record.funds = value},
    onUpdatedNumber(value) {
      if(value===''){
        this.record.amount = 0
      }else{
        this.record.amount = value
      }
    },
    // 数据提交
    submit() {
      // 深拷贝
      const record2 = JSON.parse(JSON.stringify(this.record))
      record2.createdAt = new Date()
      // 存储到recordList中
      this.recordList.push(record2)
      // 将数据存储到localStorage中
      recordListModel.save(this.recordList)
      // 刷新页面
      window.alert('数据已保存')
      this.$router.go(0)
    }
  },
}
</script>
 
<style lang = "less" scoped>
.home {
  height: 100%;
}
.contentArea {
  height: 85%;
  overflow: auto;
}
.headline {
  background: #f8f8f8;
  height: 30px;
  width: 100%;
  line-height: 30px;
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
  .ok {
    height: 50px;
    width: 240px;
    padding: 10px 0;
    color: #fff;
    font-weight: 700;
    border-radius: 20px;
    background: #fab949;
    text-align: center;
    font-size: 1.1em;
    &:focus {
      outline: none;
    }
  }
}
</style>