<template>
  <form v-on:submit.stop.prevent="submit()" method="POST" class="row">
    <div>
      <label for="">Login</label>
      <input type="text" name="login" class="form-control" v-model="login">
    </div>
    <div>
      <label for="">Password</label>
      <input type="password" name="password" class="form-control" v-model="password">
    </div>
    <div>
      <input type="submit" value="Войти" class="form-control btn btn-primary">
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      login: "",
      password: ""
    }
  },
  methods:{
    submit(e){
      console.log(this.login);
      axios.post(
        'api/admin/login',
        {
          login: this.login,
          password: this.password
        }
      ).then((response)=>{
        sessionStorage.setItem('token', response.data)
        axios.defaults.headers.common.Authorization = 'Bearer '+response.data
        window.location.replace("/admin-panel");
      })
      .catch((err)=>{
        // alert("login error")
        // sessionStorage.removeItem('token')
        // this.axios.config.headers['Autorization'] = ''
      })
    }
  }
}
</script>

<style>

</style>