<template>
 <div>
  <button class="ok">确 定</button>
 </div>
</template>
 
<script>
export default {
 data () {
 return {

 }
 }
}
</script>
 
<style lang = "less" scoped>
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
    &:focus{
      outline: none;
    }
  }
</style>