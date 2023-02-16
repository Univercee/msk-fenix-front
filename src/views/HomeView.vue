<template>
  <div id="wrapper" class="d-flex flex-column">
    <div class="background">
        <c-header></c-header>
        <c-navbar></c-navbar>
        <c-navbar-dropdown></c-navbar-dropdown>
        <c-filter></c-filter>
    </div>
    <main class="container-md mt-5">
        <c-products></c-products>
        <c-info class="mt-5"></c-info>
    </main>
    <c-footer class="mt-5"></c-footer>
</div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss">
*:focus{
  box-shadow: none !important;
}
*{
  transition-duration: 0.15s;
}
.background{
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
}</style>
