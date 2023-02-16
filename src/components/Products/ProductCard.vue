<template>
  <div class="mb-4">
    <div class="product-card d-flex flex-column">
      <div class="product-card__image">
        <img src="../../assets/images/product.jpg" alt="image">
      </div>
      <div class="p-2 product-card__body">
        <div class="mt-2">
          <p class="product-card__repair">Евроремонт</p>
        </div>
        <div class="mt-2">
          <p class="product-card__price">3 000 000 ₽</p>
          <p class="product-card__price-for-meter">100 000 ₽/м.кв.</p>
        </div>
        <div class="d-flex mt-2">
          <p class="product-card__rooms">2-комн. квартира</p>
          <p class="product-card__area">10 м.кв.</p>
          <p class="product-card__floor">5/10 эт.</p>
        </div>
        <div class="mt-2">
          <p class="product-card__address">г.Москва ул.Пушкина д.5</p>
          <p class="product-card__metro">метро Пушкинская</p>
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
    props:{
        product_data:{
            required: true,
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
  .product-card{
    white-space: nowrap;
    & p{
      margin: 0;
    }

    &__body{
      border: solid lightgray 1px;
      border-top: none;
    }

    &__image{
      width: 100%;

      & img{
        object-fit: cover;
        width: 100%;
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
      padding: 0 5px;
      margin-right: 10px;
      font-weight: bold;
    }

    &__floor{
      padding-left: 5px;
      border-left: solid lightgray 2px;
      font-weight: bold;
    }

    &__address{

    }

    &__metro{

    }
  }
</style>