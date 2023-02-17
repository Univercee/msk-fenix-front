<template>
    <div :class="direction" class="arrow">
        <div class="arrow-top"></div>
        <div class="arrow-bottom"></div>
    </div>
</template>

<script>
export default {
    props:{
        direction: String
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
.right{
  scale: 1 1;
}
.left{
    scale: -1 1;
}
.arrow {
    cursor: pointer;
    height: 60px;
    transition: transform .1s;
    width: 40px;
    $transition-time: .15s;
    
    &-top,
    &-bottom {
      background-color: #666;
      height: 4px;
      left: -5px;
      position: absolute;
      top: 50%;
      width: 100%;
      
      &:after {
        background-color: $primary;
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        transition: all $transition-time;
      }
    }
    
    &-top {
      transform: rotate(45deg);
      transform-origin: bottom right;
      
      &:after {
        left: 100%;
        right: 0;
        transition-delay: 0s;
      }
    }
    
    &-bottom {
      transform: rotate(-45deg);
      transform-origin: top right;
      
      &:after {
        left: 0;
        right: 100%;
        transition-delay: $transition-time;
      }
    }
    
    &:hover & {
      
      &-top:after {
        left: 0;
        transition-delay: $transition-time;
      }
  
      &-bottom:after {
        right: 0;
        transition-delay: 0s;
      }
    } 
  }
</style>