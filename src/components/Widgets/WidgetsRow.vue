<template>
<div>
    <h2 class="mb-5 text-center" style="font-weight: bold;">Сервисы</h2>
    <div class="wrapper">
        <!-- <arrow direction="left" @click="scrollLeft()"></arrow> -->
        <div class="widgets" ref="widgets">
            <div class="widgets-wrapper" :style="{right:getOffset+'%'}">
                <c-widget 
                    v-for="service in services" :key="service"
                    ref="widget" 
                    :title="service.title" 
                    :description="service.description"
                    :image_url="'url('+require('../../assets/images/'+service.image)+')'"
                    :style="{width:widgetWidth+'%'}">
                </c-widget>
            </div>
        </div>
        <!-- <arrow direction="right" @click="scrollRight()"></arrow> -->
    </div>
</div>
</template>

<script>
import Arrow from '../assets/arrow.vue'
import services_json from '../../data/services.json'
export default {
    components:{
        arrow: Arrow
    },
    data(){
        return{
            offsetRight: 1,
            widgetWidth: 19,
            position: 0,
            services: services_json
        }
    },
    computed:{
        widgetInRow(){
            return Math.trunc(100/this.widgetWidth)
        },
        widgetCount(){
            return this.services.length
        },
        canMoveRight(){
            return this.position < this.widgetCount-this.widgetInRow
        },
        canMoveLeft(){
            return this.position > 0
        },
        getOffset(){
            return (this.widgetWidth+this.offsetRight)*this.position -0.01;
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
        overflow: hidden;
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