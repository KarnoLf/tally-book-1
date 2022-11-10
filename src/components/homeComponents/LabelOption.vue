<template>
  <div class="labelOption">
    <div class="label" v-show="false"></div>
    <div class="label"> + 增加</div>
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
.labelOption {
  display: flex;
  flex-wrap: wrap;

  .label {
    margin: 2.5%;
    border: 1px solid #444;
    border-radius: 5px;
    width: 20%;
    padding: 5px;
    text-align: center;
    background: #efefef;
  }
}
</style>