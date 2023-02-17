<template>
  <div class="wrapper">
    <arrow direction="left" @click="scrollLeft()"></arrow>
    <div class="widgets" ref="widgets">
        <div class="widgets-wrapper" :style="{right:getOffset+'%'}">
            <c-widget ref="widget" text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_2.jpg')+')'}"></c-widget>
            <c-widget text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_1.jpg')+')'}"></c-widget>
            <c-widget text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_3.jpg')+')'}"></c-widget>
            <c-widget text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_4.jpg')+')'}"></c-widget>
            <c-widget text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_5.jpg')+')'}"></c-widget>
            <c-widget text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_6.jpg')+')'}"></c-widget>
            <c-widget text="Widget text" :style="{width:widgetWidth+'%', backgroundImage:'url('+require('../../assets/images/widget_7.jpg')+')'}"></c-widget>
        </div>
    </div>
    <arrow direction="right" @click="scrollRight()"></arrow>
  </div>
</template>

<script>
import Arrow from '../assets/arrow.vue'
export default {
    components:{
        arrow: Arrow
    },
    data(){
        return{
            offsetRight: 1,
            widgetCount: 7,
            widgetWidth: 19,
            position: 0
        }
    },
    computed:{
        widgetInRow(){
            return Math.trunc(100/this.widgetWidth)
        },
        canMoveRight(){
            return this.position < this.widgetCount-this.widgetInRow
        },
        canMoveLeft(){
            return this.position > 0
        },
        getOffset(){
            return (this.widgetWidth+this.offsetRight)*this.position -0.1;
        }
    },
    methods:{
        scrollLeft(){
            if(this.canMoveLeft) this.position--
            else this.position = this.widgetCount-this.widgetInRow
        },
        scrollRight(){
            console.log(this.getOffset);
            if(this.canMoveRight) this.position++
            else this.position = 0
        }
    }
}
</script>

<style lang="scss">
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        & i{
            font-size: 40px;
            margin: 0 1%;
            cursor: pointer;
        }
    }
    .widgets{
        scroll-behavior: smooth;
        flex-grow: 1;
        overflow: hidden visible;
        position: relative;
        width: 100%;
        &-wrapper{
            display: flex;
            gap: 1%;
            height: 300px;
            position: relative;
            transition-duration: 1s;
        }
    }
</style>