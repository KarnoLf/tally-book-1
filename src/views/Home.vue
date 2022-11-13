<template>
  <div class="home">
    <div class="contentArea">
      <div class="headline">Yuan 记账</div>
      <FundsOption @update:value="onUpdatedFunds" />
      <Write @update:value1="onUpdatedNumber" @update:value2="onUpdatedString"/>
      <h3>标签</h3>
      <LabelOption :labels.sync="record.labels" @update:value="onUpdatedLabel" />
    </div>
    <div class="buttonArea">
      <button class="ok">确 定</button>
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
      record: {
        labels: ['衣', '食', '住', '行'],
        note: '',
        number: 0,
        funds: '-'
      }
    }
  },
  methods: {
    onUpdatedLabel(value) {
      console.log(value);
      this.record.labels = value
    },
    onUpdatedString(value) {
      console.log(value);
      this.record.note = value
    },
    onUpdatedFunds(value) {
      console.log(value);
      this.record.funds = value
    },
    onUpdatedNumber(value) {
      console.log(value);
      this.record.number = value
    },
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