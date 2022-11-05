<template>
  <svg class="svg-icon" :fill="iconColor">
    <use :xlink:href="iconName" />
  </svg>
</template>
 
<script>
export default {
  name:'svgIcon',
  props:{
    iconClass:{
      type:String,
      required:true
    },
    iconColor:{
      type:String,
      default:'#666'
    }
  },
  computed:{
    iconName(){
      return `#icon-${this.iconClass}`
    }
  }
}
</script>
 
<style lang = "less" scoped>
.svg-icon{
    width: 1.5em;
    height: 1.5em;
    // svg随着包裹它的容器的要求改变而改变颜色；
    fill: currentColor;
  }
</style>