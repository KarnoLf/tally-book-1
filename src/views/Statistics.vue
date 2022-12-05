<template>
  <div>
    <div id="nav">
      <router-link to="/statistics/pay">支出</router-link>
      <router-link to="/statistics/incoming">收入</router-link>
    </div>
    <router-view />
  </div>
</template>
 
<script>

</script>
 
<style lang = "less" scoped>
 #nav{
   text-align: right;
   padding: 10px;
   background: rgb(255, 216, 143);
   a{
     display: inline-block;
     padding: 2px;
     margin-left: 15px;
     padding: 4px;
     font-size: 1em;
     background: rgb(255, 191, 72);
     border-radius: 20px;
     font-family: "Gill Sans", sans-serif;
   }
 }
 .router-link-active{
   color: white;
   font-weight: bold;
 }

</style>