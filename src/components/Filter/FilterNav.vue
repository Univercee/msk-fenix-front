<template>
  <div class="mt-3 p-4" style="min-height:350px;" ref="wrapper">
    <!--  -->
    <div v-if="deal_category=='Купить'">
      <div class="row">
        <div v-for="category in active_property_categories" :key="category" 
        @click="setCategory(category)" 
        class="col py-3 filter-link" 
        :class="[category == active_category ? 'filter-link-active' : '']">
          {{category}}
        </div>
      </div>
      <c-filter-form :property_category="active_category"></c-filter-form>
    </div>

    <!--  -->
    <div v-else-if="deal_category=='Снять'">
      <div class="row">
        <div v-for="category in active_property_categories" :key="category" 
        @click="setCategory(category)" 
        class="col py-3 filter-link" 
        :class="[category == active_category ? 'filter-link-active' : '']">
          {{category}}
        </div>
      </div>
      <c-filter-form :property_category="active_category"></c-filter-form>
    </div>

    <!--  -->
    <div v-else-if="deal_category=='Продать'">
      <div class="row">
        <div class="col-8">
          <h2 class="mb-4">Поможем <span class="text-primary">продать</span> недвижимость на <span class="text-primary">индивидуальных</span> условиях для каждого клиента.</h2>
          <h2><span class="text-primary">Бесплатно</span> организуем для Вас консультацию, оценку и фотосессию объекта.</h2>
          <div class="d-flex align-items-center mt-5">
            <button class="btn btn-lg btn-outline-primary text-nowrap me-4">+ Добавить объявление</button>
            <h5 class="mb-0">Разместите объявление о продаже или <br>свяжитесь с нашим агентом для консультации</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="contact-us bg-primary">
            <div class="contact-us-title">
              <h5 class="text-center mx-2">бесплатную консультацию<br>Получить </h5>
              <div class="text-center fs-1">
                <i class="fa-solid fa-angle-down contact-us-arrow"></i>
              </div>
            </div>
            <div class="contact-us-body text-primary">
              <div class="text-center mt-4">
                <h5>Позвоните по номеру</h5>
                <a :href="'tel:'+socials.Phone.value" class="btn btn-primary">{{socials.Phone.formatted_value}}</a>
              </div>
              <div class="text-center mt-4">
                <h5 class="mb-0">Или напишите нам в соц-сетях</h5>
                <c-socials></c-socials>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div v-else-if="deal_category=='Сдать'">
      <div class="row">
        <div class="col-8">
          <h2>Поможем <span class="text-primary">сдать</span> недвижимость на <span class="text-primary">индивидуальных</span> условиях для каждого клиента.</h2>
          <h2>Найдем <span class="text-primary">подходящих</span> арендаторов с учетом ваших пожеланий.</h2>
          <h2><span class="text-primary">Бесплатно</span> организуем для Вас консультацию, оценку и фотосессию объекта.</h2>
          <div class="d-flex align-items-center mt-5">
            <button class="btn btn-lg btn-outline-primary text-nowrap me-4">+ Добавить объявление</button>
            <h5 class="mb-0">Разместите объявление о сдаче или <br>свяжитесь с нашим агентом для консультации</h5>
          </div>
        </div>
        <div class="col-4">
          <div class="contact-us bg-primary">
            <div class="contact-us-title">
              <h5 class="text-center mx-2">бесплатную консультацию<br>Получить </h5>
              <div class="text-center fs-1">
                <i class="fa-solid fa-angle-down contact-us-arrow"></i>
              </div>
            </div>
            <div class="contact-us-body text-primary">
              <div class="text-center mt-4">
                <h5>Позвоните по номеру</h5>
                <a :href="'tel:'+socials.Phone.value" class="btn btn-primary">{{socials.Phone.formatted_value}}</a>
              </div>
              <div class="text-center mt-4">
                <h5 class="mb-0">Или напишите нам в соц-сетях</h5>
                <c-socials></c-socials>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div v-else-if="deal_category=='Оформить ипотеку'">
      <div class="row">
        <div class="col-8">
          <h2 class="mb-4">Наше агенство недвижимости является <span class="text-primary">сертифицированным</span> ипотечным брокером.</h2>
          <h2>Мы предлагаем проведение и оформление ипотечного кредитования от банков-партнеров с <span class="text-primary">индивидуальными</span> условиями для каждого клиента.</h2>
        </div>
        <div class="col-4">
          <div class="contact-us bg-primary">
            <div class="contact-us-title">
              <h5 class="text-center mx-2">бесплатную консультацию<br>Получить </h5>
              <div class="text-center fs-1">
                <i class="fa-solid fa-angle-down contact-us-arrow"></i>
              </div>
            </div>
            <div class="contact-us-body text-primary">
              <div class="text-center mt-4">
                <h5>Позвоните по номеру</h5>
                <a :href="'tel:'+socials.Phone.value" class="btn btn-primary">{{socials.Phone.formatted_value}}</a>
              </div>
              <div class="text-center mt-4">
                <h5 class="mb-0">Или напишите нам в соц-сетях</h5>
                <c-socials></c-socials>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <div v-else-if="deal_category=='Оценить'">
      <div class="row">
        <div class="col-8">
          <h2>Свяжитесь с нашим специалистом для консультации и узнайте <span class="text-primary">рыночную цену</span> Вашей недвижимости.</h2>
        </div>
        <div class="col-4">
          <div class="contact-us bg-primary">
            <div class="contact-us-title">
              <h5 class="text-center mx-2">бесплатную консультацию<br>Получить </h5>
              <div class="text-center fs-1">
                <i class="fa-solid fa-angle-down contact-us-arrow"></i>
              </div>
            </div>
            <div class="contact-us-body text-primary">
              <div class="text-center mt-4">
                <h5>Позвоните по номеру</h5>
                <a :href="'tel:'+socials.Phone.value" class="btn btn-primary">{{socials.Phone.formatted_value}}</a>
              </div>
              <div class="text-center mt-4">
                <h5 class="mb-0">Или напишите нам в соц-сетях</h5>
                <c-socials></c-socials>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterForm from './FilterForm.vue'
export default {
  components:{
    'c-filter-form': FilterForm
  },
  props: {
    deal_category:{
      type: String,
      required: true
    }
  },
  data() {
    return {
      active_category: ""
    }
  },
  watch:{
    deal_category(newVal, oldVal){
      this.active_category = this.active_property_categories[0]??""
    }
  },
  mounted(){
    this.active_category = this.active_property_categories[0]??""
  },
  computed:{
    active_property_categories(){
      switch (this.deal_category) {
        case "Купить":
          return ["Вторичная", "Новостройки", "Дома и участки", "Коммерческая", "Гаражи"]
        case "Снять":
          return ["Вторичная", "Дома и участки", "Коммерческая"]
        default:
          return []
      }
    }
  },
  methods:{
    setCategory(category){
      this.active_category = category
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-us{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 15px 0 0 15px;
  position: relative;
  right:-100%;
  width: 150%;
  height: 260px;
  transition: 1.5s;
  box-shadow: 0 0 10px black;

  &-title{
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
  }
  &-body{
    display: none;
  }
  &-arrow{
    transform: rotate(-90deg);
  }
  &:hover{
    align-items: center;
    background-color: whitesmoke !important;
    writing-mode: horizontal-tb;
    right: 0;
    & .contact-us-body{
      display: initial;
    }
    & .contact-us-title{
      display: none;
    }
  }
}
.filter-link{
    text-align: center;
    vertical-align: baseline;
    cursor: pointer;
    border-bottom: solid 2px lightgray;
    white-space: nowrap;
  }
  .filter-link:hover{
    border-bottom: solid 2px #FF8001;
  }
  .filter-link-active{
    border-bottom: solid 2px #FF8001;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
</style>