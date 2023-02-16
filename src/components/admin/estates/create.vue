<template>
  <form v-on:submit.stop.prevent="submit()" method="POST" class="row">
    <input type="file" placeholder="Images" name="images[]">
    <input type="number" placeholder="Price" name="price" v-model="price">
    <input type="checkbox" placeholder="Is studio" name="is_studion" v-model="is_studion">
    <input type="number" placeholder="Rooms" name="rooms" v-model="rooms">
    <input type="number" placeholder="Area" name="area" v-model="area">
    <input type="number" placeholder="Floor amount" name="floor_amount" v-model="floor_amount">
    <input type="number" placeholder="Floor" name="floor" v-model="floor">
    <input type="text" placeholder="Region" name="region" v-model="region">
    <input type="text" placeholder="City" name="city" v-model="city">
    <input type="text" placeholder="Street" name="street" v-model="street">
    <input type="text" placeholder="House" name="house" v-model="house">
    <input type="number" placeholder="Flat number" name="flat_number" v-model="flat_number">
  </form>
</template>

<script>
export default {
  data(){
    return{
      images: Array,
      price: Number,
      is_studion: Boolean,
      rooms: Number,
      area: Number,
      floor_amount: Number,
      floor: Number,
      region: String,
      city: String,
      street: String,
      house: String,
      flat_number: Number
    }
  },
  methods:{
    submit(){
      this.axios.post('/api/estates/create',
      {
        images: images,
        price: price,
        is_studion: is_studion,
        rooms: rooms,
        area: area,
        floor_amount: floor_amount,
        floor: floor,
        region: region,
        city: city,
        street: street,
        house: house,
        flat_number: flat_number
      });
    }
  }
}
</script>

<style>

</style>