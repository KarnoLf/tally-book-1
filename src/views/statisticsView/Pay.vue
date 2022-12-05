<template>
  <div>
   <div class="total">
       <span id="pay">支出:￥{{totalPay}}</span>
     </div>
     <ul v-for="data in totalData" :key="data.createdAt">
       <li v-if="data.funds==='-'">
         <span id="labelName" v-for="(labelName,index) in data.labels" :key="index">{{labelName.name}}</span>
         <div id="fundsAmount">
           <span class="red">{{data.funds}}</span>
           <span class="red">￥{{data.amount}}</span>
         </div>
         <p id="note">{{data.note}}</p>
         <p id="date">
           {{getDate(data.createdAt)}} 
           <span @click="remove(data.createdAt)"><v-icon class="svg" iconClass="delete"/>
           </span>
         </p>
       </li>
     </ul>
  </div>
 </template>
  
 <script>
 import recordListModel from '@/models/recordListModel.js'
 import '@/icons/svg/delete.svg'
 recordListModel.fetch()
 export default {
   data() {
     return {
       totalData:recordListModel.fetch()
     }
   },
   computed:{
     totalPay(){
       let totalPay = 0
       let arr = []
       this.totalData.map((item) => {
         if(item.funds === '-'){
           arr.push(item)
         }
         return arr
       })
       arr.map(item => totalPay += parseInt(item.amount))
      return totalPay
     }
   },
   methods: {
     getDate(date){
       date = new Date()
       return date.toLocaleDateString('zh-CN')
     },
     remove(id){
       if(this.totalData){
         const confirmDelete = window.confirm('确认要删除吗？')
         if(confirmDelete){
           recordListModel.remove(id)
         }
       }
     }
   },
 }
 </script>
  
 <style lang = "less" scoped>
 
 ul{
   li{
     margin: 10px;
     min-height: 40px;
     // border-bottom: 1px solid #c5c5c5;
     position:relative;
     clear: both;
     background: #fffcf8;
     #labelName{
       margin: 5px;
       font-size: 1.1em;
       font-weight: bold;
       color: rgba(252, 195, 89, 0.822);
     }
     #fundsAmount{
       display: inline;
       position: absolute;
       right: 10px;
     }
     #note{
       font-size: 0.9em;
       color: grey;
       width: 80%;
       margin-left: 6px;
     }
     #date{
       margin: 2px 10px;
       display: flex;
       justify-content: space-between;
     }
   }
 }
 .total{
   padding: 20px;
   text-align: left;
   background: rgb(255, 216, 143);
   span{
     font-weight: bold;
     font-size: 1.5em;
     overflow: auto;
     display: block;
     font-family: "Gill Sans", sans-serif;
   }
   #pay{
    color:white;
   }
 }
 .red{
   color:red;
   font-weight: bold;
 }
 </style>