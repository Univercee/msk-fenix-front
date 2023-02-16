<template>
    <header class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="d-flex container-xl">
            <div class="row d-flex  align-items-center justify-content-center">
                <div class="col">
                    <img src="logo.svg" alt="Logo" class="logo">
                </div>
                <div class="my-auto fs-4 col">Феникс МСК</div>
                <div class="my-auto col">
                    <div>{{socials.Phone.formatted_value}}</div>
                    <div>{{socials.Whatsapp.formatted_value}}</div>
                </div>
            </div>
            <div>
                <button class="btn btn-outline-primary">Добавить объявление</button>
                <a href="" class="text-primary mx-2">Войти</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header{
        white-space: nowrap;
    }
    .logo{
        height: 55px;
        border-radius: 50%;
    }

</style>