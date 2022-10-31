<template>
  <div class="home">
    <div class="headline"><span>记一笔</span></div>
    <form action="">
      <p>备注</p>
      <input type="text" placeholder="在此输入备注" >
    </form>
    <div class="number">
      <p>数目</p>
      <input type="number">
    </div>
</div>
</template>
 
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
 
<style lang = "less" scoped>


form{
  display: flex;
  height: 50px;
  padding: 10px;
  border: 1px solid black;
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

  p{
    font-weight: bold;
  }
  input{
    margin-left: 20px;
  }
}
</style>