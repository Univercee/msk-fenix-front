<template>
  <div class="widget" :style="'background-image: '+image_url">
    <div class="mask">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        color: String,
        text: String,
        image_url: String
    }
}
</script>

<style lang="scss">
    .widget{
        height: 100%;
        border-radius: 15px;
        font-size: 23px;
        background-size: cover;
        color: whitesmoke;
        flex-shrink: 0;
        cursor: pointer;
    }
    .mask{
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background-color: rgba(0,0,0,0.4);
    }

    p{
      padding: 15px;
    }
</style>