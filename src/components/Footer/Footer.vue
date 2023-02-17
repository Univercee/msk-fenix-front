<template>
  <footer>
    <div class="container-lg">
      <div>
        <div class="d-flex justify-content-center row footer-map m-0 px-5 footer-map">
          <div class="col-3">
            <p>О компании</p>
            <ul>
              <li><a href="#">О компании</a></li>
              <li><a href="#">Специалисты по недвижимости</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Отзывы о специалистах</a></li>
              <li><a href="#">Правовая информация</a></li>
            </ul>
          </div>
          <div class="col-3">
            <p>Услуги</p>
            <ul>
              <li><a href="#">Ипотека</a></li>
              <li><a href="#">Стоимость услуг</a></li>
              <li><a href="#">Гарантия безопасности сделки</a></li>
              <li><a href="#">Покупка квартиры в другом городе</a></li>
              <li><a href="#">Сервис безопасных расчетов</a></li>
            </ul>
          </div>
          <div class="col-3">
            <p>Недвижимость</p>
            <ul>
              <li><a href="#">Квартиры</a></li>
              <li><a href="#">Новостройки</a></li>
              <li><a href="#">Дома и участки</a></li>
              <li><a href="#">Аренда</a></li>
              <li><a href="#">Коммерческая</a></li>
              <li><a href="#">Гаражи</a></li>
            </ul>
          </div>
          <div class="col-3"></div>
        </div>
        <c-socials></c-socials>
      </div>
      <div class="w-100 d-flex justify-content-center align-items-center footer-rights">
        <p>©2023 Агенство недвижимости «Феникс МСК». Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoper>
  @include media-breakpoint-down(lg) {
    .footer-map {
      display: none !important;
    }
    .footer-socials{
      justify-content: center !important;
      gap: 5px;
    }
    .footer-rights{
      justify-content: center !important;
      text-align: center !important;
      margin-top: 10px;
    }
  }
  footer{
    background-color: #333333;
    padding: 30px 0;
    color: #444
  }
  .footer-map{
    font-size: 17px;
    border-bottom: solid #444 2px;
  }
  .footer-map p{
    color: aliceblue;
  }
  a{
    color: darkgray;
    text-decoration: none;
  }
  .footer-map a:hover{
    color: aliceblue;
  }
  .footer-socials i{
    font-size: 30px;
    padding: 5px;
  }
  .footer-socials a{
    color: inherit;
  }
  ul{
    padding: 0;
  }
  li{
    list-style-type: none;
  }

  .mail{
    vertical-align: middle;
    font-size: 18px;
    color: whitesmoke
  }
</style>