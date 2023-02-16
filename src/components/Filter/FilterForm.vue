<template>
  <!-- Вторичная -->
  <div v-if="property_category=='Вторичная'">
    <form id="filter-form" class="row py-4" action="">
      <div class="col-lg my-4">
        <label class="form-label">Города</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4" style="min-width: max-content;">
        <label class="form-label">Комнатность</label>
        <div class="row m-0" id="roominess-container">
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_0" value="0">
            <label style="border-radius: 0.375rem 0 0 0.375rem" for="roominess_0">Студия</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_1" value="1">
            <label for="roominess_1">1</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_2" value="2">
            <label for="roominess_2">2</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_3" value="3">
            <label for="roominess_3">3</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_4" value="4">
            <label for="roominess_4" style="border-radius: 0 0.375rem 0.375rem 0">4+</label>
          </div>
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Стоимость, ₽</label>
        <div class="row m-0">
          <input type="number" min=0 class="form-control col merged-input-left" placeholder="От">
          <input type="number" min=0 class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Площадь, м2</label>
        <div class="row m-0">
          <input type="text" class="form-control col merged-input-left" placeholder="От">
          <input type="text" class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Район</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Улица</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Жилой комплекс</label>
        <input type="text" class="form-control">
      </div>
      <button class="btn btn-primary" type="submit">Найти объявления</button>  
    </form>
  </div>

  <!-- Новостройки -->
  <div v-else-if="property_category=='Новостройки'">
    <form id="filter-form" class="row py-4" action="">
      <div class="col-lg my-4">
        <label class="form-label">Города</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4" style="min-width: max-content;">
        <label class="form-label">Комнатность</label>
        <div class="row m-0" id="roominess-container">
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_0" value="0">
            <label style="border-radius: 0.375rem 0 0 0.375rem" for="roominess_0">Студия</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_1" value="1">
            <label for="roominess_1">1</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_2" value="2">
            <label for="roominess_2">2</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_3" value="3">
            <label for="roominess_3">3</label>
          </div>
          <div class="">
            <input type="checkbox" name="roominess" id="roominess_4" value="4">
            <label for="roominess_4" style="border-radius: 0 0.375rem 0.375rem 0">4+</label>
          </div>
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Стоимость, ₽</label>
        <div class="row m-0">
          <input type="number" min=0 class="form-control col merged-input-left" placeholder="От">
          <input type="number" min=0 class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Площадь, м2</label>
        <div class="row m-0">
          <input type="text" class="form-control col merged-input-left" placeholder="От">
          <input type="text" class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Район</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Тип сделки</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Жилой комплекс</label>
        <input type="text" class="form-control">
      </div>
      <input class="btn btn-primary" type="submit" value="Найти объявления">
    </form>
  </div>

  <!-- Дома и участки -->
  <div v-else-if="property_category=='Дома и участки'">
    <form id="filter-form" class="row py-4" action="">
      <div class="col-lg my-4">
        <label class="form-label">Города</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Тип недвижимости</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Стоимость, ₽</label>
        <div class="row m-0">
          <input type="number" min=0 class="form-control col merged-input-left" placeholder="От">
          <input type="number" min=0 class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Площадь участка, сот</label>
        <div class="row m-0">
          <input type="text" class="form-control col merged-input-left" placeholder="От">
          <input type="text" class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Тракт, улица, шоссе</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Район</label>
        <input type="text" class="form-control">
      </div>
      <button class="btn btn-primary" type="submit">Найти объявления</button>  
    </form>
  </div>

  <!-- Коммерческая -->
  <div v-else-if="property_category=='Коммерческая'">
    <form id="filter-form" class="row py-4" action="">
      <div class="col-lg my-4">
        <label class="form-label">Города</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Тип недвижимости</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Стоимость, ₽</label>
        <div class="row m-0">
          <input type="number" min=0 class="form-control col merged-input-left" placeholder="От">
          <input type="number" min=0 class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Площадь, м2</label>
        <div class="row m-0">
          <input type="text" class="form-control col merged-input-left" placeholder="От">
          <input type="text" class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Район</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Улица</label>
        <input type="text" class="form-control">
      </div>
      <input class="btn btn-primary" type="submit" value="Найти объявления">
    </form>
  </div>

  <!-- Гаражи -->
  <div v-else-if="property_category=='Гаражи'">
    <form id="filter-form" class="row py-4" action="">
      <div class="col-lg my-4">
        <label class="form-label">Города</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Тип недвижимости</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Стоимость, ₽</label>
        <div class="row m-0">
          <input type="number" min=0 class="form-control col merged-input-left" placeholder="От">
          <input type="number" min=0 class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Площадь, м2</label>
        <div class="row m-0">
          <input type="text" class="form-control col merged-input-left" placeholder="От">
          <input type="text" class="form-control col merged-input-right" placeholder="До">
        </div>
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Район</label>
        <input type="text" class="form-control">
      </div>
      <div class="col-lg my-4">
        <label class="form-label">Улица</label>
        <input type="text" class="form-control">
      </div>
      <input class="btn btn-primary" type="submit" value="Найти объявления">
    </form>
  </div>
</template>

<script>
export default {
  props:{
    property_category:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  #filter-form label{
    white-space: nowrap;
  }
  #roominess-container div{
    padding: 0 !important;
    margin: 0 !important;
    width: max-content;
  }
  #roominess-container input[type="checkbox"] {
    display: none;
  }
  #roominess-container label {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 400;
    cursor: pointer;
    border: 1px solid #ced4da;
  }
  #roominess-container input[type="checkbox"]:checked+label {
    border: solid #FF8001 1px;
    background-color: rgba(255, 128, 1, 0.1);
  }
  .merged-input-left{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .merged-input-right{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number]{
    -moz-appearance: textfield;
  }
</style>