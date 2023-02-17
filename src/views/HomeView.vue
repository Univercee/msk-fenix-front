<template>
  <div id="wrapper" class="d-flex flex-column">
    <div class="background">
      <c-header></c-header>
      <c-navbar></c-navbar>
      <c-navbar-dropdown></c-navbar-dropdown>
      <c-filter></c-filter>
    </div>
    <main class="container-md mt-5">
      <!-- <h2 class="mb-5 text-center" style="font-weight: bold;">Лучшие предложения</h2> -->
      <c-products class="mt-5"></c-products>
      <c-widgets-row class="mt-5"></c-widgets-row>
      <c-info class="mt-5"></c-info>
    </main>
    <c-footer class="mt-5"></c-footer>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
*:focus{
  box-shadow: none !important;
}
.background{
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
}</style>
