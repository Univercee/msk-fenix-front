<template>
  <div class="filter">
    <div class="container-xl">
        <div class="d-flex filter-nav">
          <div 
          v-for="category in deal_categories" :key="category" 
          class="col py-3 section-link"
          @click="setCategory(category)"
          :class="[active_category == category ? 'section-link-active' : '']">
            {{category}}
          </div>
        </div>
      <c-filter-body :deal_category="active_category"></c-filter-body>
    </div>
  </div>
</template>

<script>
import FilterBody from './FilterNav.vue'
export default {
  components:{
    'c-filter-body': FilterBody
  },
  data() {
    return {
      deal_categories: ["Купить", "Снять", "Продать", "Сдать", "Оформить ипотеку", "Оценить"],
      active_category: "Купить"
    }
  },
  methods: {
    setCategory(category){
      this.active_category = category
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .filter{
    padding: 0 !important;
  }
}
  .filter-nav{
    font-size: 18px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .filter-nav::-webkit-scrollbar{
    display: none;
  }
  .filter{
    background-size: cover;
    background-position-y: 50%;
    overflow: hidden;
    padding: 5%;
    color: whitesmoke;
  }
  .section-link{
    text-align: center;
    vertical-align: baseline;
    cursor: pointer;
    border-bottom: solid 2px transparent;
    white-space: nowrap;
    padding: 10px;
  }
  .section-link:hover{
    opacity: 100% !important;
    border-bottom: solid 2px #FF8001;
  }
  .section-link-active{
    opacity: 100% !important;
    border-bottom: solid 2px #FF8001;
  }
  .section-link-slider{
    height: 2px;
    background-color: #FF8001;
  }
</style>