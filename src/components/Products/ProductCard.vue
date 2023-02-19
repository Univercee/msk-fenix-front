<template>
  <div class="mb-4">
    <div class="product-card d-flex flex-column">
      <p class="text-center">{{image_index+1}}/{{product_data.images.length}}</p>
      <div class="product-card__image d-grid">
        <p class="product-card__image-controls" @click="prevImageIndex()">-</p>
        <img :src="VUE_APP_DATA_SERVICE_URL+'/storage/images/'+product_data.images[image_index]" alt="image">
        <p class="product-card__image-controls" style="justify-self:end" @click="nextImageIndex()">+</p>
      </div>
      <div class="p-2 product-card__body">
        <div class="mt-2">
          <p class="product-card__repair">{{product_data.repair_type}}</p>
        </div>
        <div class="mt-2">
          <p class="product-card__price">{{ product_data.price }} ₽</p>
          <p class="product-card__price-for-meter">{{ parseInt(product_data.price/product_data.area) }} ₽/м.кв.</p>
        </div>
        <div class="d-flex mt-2">
          <p class="product-card__rooms" v-if="product_data.rooms">{{ product_data.rooms }}-комн. квартира</p>
          <p class="product-card__rooms" v-else>Студия</p>
          <p class="product-card__area">{{ product_data.area }} м<sup>2</sup></p>
          <p class="product-card__floor">{{ product_data.floor }}/{{ product_data.floor_amount }} эт.</p>
        </div>
        <div class="mt-2">
          <p class="product-card__address">{{ product_data.address }}</p>
          <p class="product-card__metro">метро {{ product_data.metro }}</p>
        </div>
        <div class="d-flex justify-content-center align-items-center mt-3 w-100">
          <a :href="'tel:'+socials.Phone.formatted_value" class="btn btn-outline-primary" style="margin-right:5px">{{ socials.Phone.formatted_value }}</a>
          <a :href="'https://wa.me/'+socials.Phone.formatted_value" class="btn btn-outline-primary" style="margin-left:5px">Написать</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['product_data'],
    data(){
      return{
        image_index: 0,
        VUE_APP_DATA_SERVICE_URL: process.env.VUE_APP_DATA_SERVICE_URL
      }
    },
    methods:{
      nextImageIndex(){
        this.image_index = (this.image_index+1)%this.product_data.images.length
      },
      prevImageIndex(){
        this.image_index = this.image_index-1
        this.image_index = this.image_index < 0 ? this.product_data.images.length + this.image_index : this.image_index
        this.image_index = this.image_index%this.product_data.images.length
      }
    }
}
</script>

<style lang="scss" scoped>
  .product-card{
    white-space: nowrap;
    & p{
      margin: 0;
      padding: 5px;
    }

    &__body{
      border: solid lightgray 1px;
      border-top: none;
    }

    &__image{
      
      & img{
        object-fit: contain;
        width: 100%;
        height: 300px;
      }

      &-controls{
        position:absolute;
        align-self: center;
        font-size: 30px;
        background-color: white;
        cursor: pointer;
      }
    }

    &__repair{
      color: grey;
    }

    &__price{
      font-size: 20px;
      font-weight: bold;
      margin: 0 !important;
    }

    &__price-for-meter{
      color: gray;
    }

    &__rooms{
      padding-right: 5px;
      border-right: solid lightgray 2px;
      color: #0d6efd;
    }

    &__area{
      margin-right: 10px;
      font-weight: bold;
    }

    &__floor{
      padding-left: 5px;
      border-left: solid lightgray 2px;
      font-weight: bold;
    }
  }
</style>
