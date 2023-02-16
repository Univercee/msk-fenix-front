<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-orange">
    <div class="container-fluid justify-content-end">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav mx-auto mt-md-0">
          <li v-for="link in links" :key="link" class="nav-item" @mouseleave="disable()" @mouseenter="activate(link.name)">
            <a class="nav-link" :class="[active_link==link.name?'active':'']" :href="link.href">{{link.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarDropdown from './NavbarDropdown.vue';
import nav_links_json from '../../data/navLinks.json'
export default {
  components: {
    'c-dropdown': NavbarDropdown
  },
  data() {
    return {
      links: nav_links_json,
      active_link: "",
      dropdown_body_enter: false,
      hide_delay: 200,
      hide_timeout: null 
    }
  },
  mounted(){
    this.emitter.on("dropdown_body_leave", ()=>{
      this.dropdown_body_enter = false
      this.hide_timeout = setTimeout(()=>{
          this.active_link = ""
          this.emitter.emit("hideDropdown")
      }, this.hide_delay)
    })
    this.emitter.on("dropdown_body_enter", ()=>{
      this.dropdown_body_enter = true
    })
  },
  methods: {
    activate(name) {
      clearTimeout(this.hide_timeout)
      this.active_link = name
      this.emitter.emit("showDropdown", name)
    },
    disable() {
      this.hide_timeout = setTimeout(()=>{
        if(!this.dropdown_body_enter){
          this.active_link = ""
          this.emitter.emit("hideDropdown")
        }
      }, this.hide_delay)
    }
  },
}
</script>

<style scoped>
  @media screen and (min-width:992px) {
    nav {
      height: 8vh;
    }
    li::after{
      content: "";
      border-right: solid whitesmoke 1px;
      height: 50%;
    }
    li:last-child::after{
      content: none;
    }
    li{
      display: flex;
      align-items: center;
    }
  }
  @media screen and (max-width:991.9px) {
    li:first-child {
      border-top: none !important;
    }
    li {
      font-size: 20px;
      text-align: center;
      border-top: solid #444 1px;
      padding: 10px;
    }
    ul{
      margin: 0 !important;
      display: flex;
      justify-content: center;
      width: 100% !important;
    }
  }
  .nav-link{
    color: white !important;
    font-size: 16px;
  }
  ul {
    width: max-content;
  }
  a {
    white-space: nowrap;
    border-bottom: solid 2px transparent;
    padding: 0;
  }
  li .active{
    color: #FF8001 !important;
  }
</style>