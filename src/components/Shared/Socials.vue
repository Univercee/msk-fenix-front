<template>
    <div class="footer-socials d-flex align-items-center justify-content-end fs-1">
        <a :href="socials.Vk.link"><i class="fab fa-vk"></i></a>
        <a :href="'https://wa.me/'+socials.Whatsapp.value"><i class="fab fa-whatsapp"></i></a>
        <a :href="socials.Telegram.link"><i class="fab fa-telegram"></i></a>
        <a :href="socials.Instagram.link"><i class="fab fa-instagram"></i></a>
        <a :href="socials.Odnoklassniki.link"><i class="fa-brands fa-odnoklassniki"></i></a>
        <a :href="socials.Facebook.link"><i class="fab fa-facebook fs-15 "></i></a>
        <a :href="'viber://chat/?number='+socials.Viber.value"><i class="fa-brands fa-viber"></i></a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  @include media-breakpoint-down(lg){
    .footer-socials{
      justify-content: center !important;
      gap: 5px;
    }
  }
  .footer-socials i{
    font-size: 30px;
    padding: 5px;
  }
  .footer-socials a{
    color: inherit;
  }
  .fa-facebook{
    color:#4267B2
  }
  .fa-instagram{
    color: #ac2bac
  }
  .fa-vk{
    color:#4c75a3
  }
  .fa-whatsapp{
    color:#25d366
  }
  .fa-telegram{
    color:#229ED9
  }
  .fa-odnoklassniki{
    color:#ed812b
  }
  .fa-viber{
    color: #7360F2
  }
</style>