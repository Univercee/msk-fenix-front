<template>
  <div class="widget" :style="'background-image: '+image_url">
    <div class="mask">
      <h3 class="p-0">{{title}}</h3>
      <p class="p-0">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      title: String,
      description: String,
      image_url: String
    }
}
</script>

<style lang="scss">
    .widget{
        height: 100%;
        border-radius: 15px;
        background-size: cover;
        color: whitesmoke;
        flex-shrink: 0;
        cursor: pointer;
    }
    .mask{
      padding: 15px;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      background-color: rgba(0,0,0,0.4);
    }

    p{
      padding: 15px;
    }
</style>