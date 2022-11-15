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

export default {
  name: 'home',
  components: {
    FundsOption, Write, LabelOption
  },
  data() {
    return {
      // 先存储到recordList
      recordList: [],
      labels: ['衣', '食', '住', '行'],
      record: {
        labels: [],
        note: '',
        amount: 0,
        funds: '-'
      }
    }
  },
  methods: {
    onUpdatedLabel(value) {
      this.record.labels = value
    },
    onUpdatedString(value) {
      this.record.note = value
    },
    onUpdatedFunds(value) {
      this.record.funds = value
    },
    onUpdatedNumber(value) {
      this.record.amount = value
    },
    submit() {
      // 深拷贝
      const record2 = JSON.parse(JSON.stringify(this.record))
      // 存储到recordList中
      this.recordList.push(record2)
      // 提交后提示
      // 变量
      let labels = record2.labels
      let type = ''
      let amount =record2.amount
      let note = record2.note
      // 判断函数
      if (record2.funds === '-') {
        type = '支出'
      } else {
        type = '收入'
      }
      if (amount === '') {
        amount = 0
      }
      if (note === '') {
        note = '您未输入备注'
      }
      if (labels.length === 0){
        labels = '您未选择标签'
      }
      console.log(type, amount, note, labels);
      const info = `
        您的${type}如下所示,
        标签：${labels},
        备注：${note},
        数目：${amount}
      `
      const result = window.confirm(info)
      // 将数据存储到localStorage中
      if(result){
        console.log(123);
        localStorage.setItem('recordList',JSON.stringify(this.recordList))
        window.alert('数据已保存')
      }
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