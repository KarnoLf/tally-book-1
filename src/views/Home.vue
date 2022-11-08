<template>
  <div class="home">
    <div class="headline">记一笔</div>
    <div class="fundsOption">
      <ul>
        <li>支出</li>
        <li>收入</li>
      </ul>
    </div>
    <label class="write">
      <span>备注</span>
      <input type="text" placeholder="在此输入备注" >
    </label>
    <label class="write">
      <span>数目</span>
      <input type="number">
    </label>
    <h3>分类</h3>
    <div class="labelOption">
      <div class="label"></div>
      <div class="label"> + 增加</div>
    </div>
</div>
</template>
 
<script>
export default {
  name:'home'
}
</script>
 
<style lang = "less" scoped>
.headline{
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
.fundsOption{
  height: 50px;
  justify-content: space-around;
  line-height: 50px;
  margin-bottom: 10px;
  ul{
    display: flex;
    li{
      flex-grow: 1;
      text-align: center;
      &.selected{
        border-bottom: 3px solid black;
      }
    }
    li:active{
      background: gold;
     
    }
  }
}
.write{
  display: flex;
  height: 50px;
  padding: 10px;
  // border-bottom:1px solid #bbb;
  span{
    font-weight: bold;
    margin-left: 15px;
  }
  input{
    background: white;
    margin-left: 40px;
    padding-left: 5px;
  }
}
h3{
    margin:10px 20px;
    padding-top: 5px;
    border-top:1px solid #bbb;
  }
.labelOption{
  display: flex;
  flex-wrap: wrap;
  .label{
    margin: 2.5%;
    border: 1px solid #444;
    border-radius: 5px;
    width: 20%;
    padding: 5px;
    text-align: center;
  }
}
</style>