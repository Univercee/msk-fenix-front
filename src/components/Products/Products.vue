<template>
    <div>
        <h2 class="mb-5 text-center" style="font-weight: bold;">Объекты недвижимости</h2>
        <div class="row d-flex justify-content-start">
            <c-product-card v-for="estate in estates" :key="estate" :product_data="estate" class="col-lg-4"></c-product-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            estates: []
        }
    },
    mounted(){
        this.fetch()
    },
    methods:{
        fetch(){
            axios.get('estates').then(response=>{
                this.estates = response.data.estates
                console.log(response.data.estates);
            })
        }
    }
}
</script>

<style>

</style>