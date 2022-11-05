<template>
  <div class="home">
    <div class="headline">记一笔</div>

    <div class="write">
      <p>备注</p>
      <input type="text" placeholder="在此输入备注" >
    </div>
    <div class="number">
      <p>数目</p>
      <input type="number">
    </div>
    <div class="fundsOption">
      <div>
        <input type="radio" id="funds0" name="funds-option" value="0" checked="checked">
        <label for="funds0">支出</label>
      </div>
      <div>
        <input type="radio" id="funds1" name="funds-option" value="1">
        <label for="funds1">收入</label>
      </div>
    </div>
    <h3>分类</h3>
    <div class="labelOption">
      <div class="label"></div>
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
  display: flex;
  justify-content: space-around;
  border-bottom:1px solid #bbb;
  line-height: 50px;
  input{
    margin-right: 5px;
  }
}
.write{
  display: flex;
  height: 50px;
  padding: 10px;
  // border-bottom:1px solid #bbb;
  p{
    font-weight: bold;
  }
  input{
    background: inherit;
    margin-left: 20px;
  }
}
.number{
  display: flex;
  height: 50px;
  padding: 10px;
  // border-bottom:1px solid #bbb;
  p{
    font-weight: bold;
  }
  input{
    margin-left: 20px;
  }
}
h3{
    margin-left: 10px;
  }
.labelOption{
  display: flex;
  flex-wrap: wrap;
  .label{
    margin: 2.5%;
    border: 1px solid #444;
    border-radius: 5px;
    height: 30px;
    width: 20%;
  }
}
</style>