<template>
  <div class="dropdown-my container-lg mx-auto" id="dropdown_my" ref="dropdown_my" @mouseenter="activate" @mouseleave="disable" :class="[hide_dropdown ? 'hidden' : '']">
    <div class="mx-5" v-for="col in active_list" :key="col">
      <p>{{ col.label }}</p>
      <ul>
        <a v-for="link in col.links" :key="link" :href="link.href">
          <li>{{ link.name }}</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import lists_json from '../../data/navbarDropdown.json'
export default {
  data() {
    return {
      lists: lists_json,
      active_list_name: "",
      mouseenter_nav: false,
      mouseenter_body: false,
      hide_timeout: null,
      hide_delay: 200
    }
  },
  computed: {
    hide_dropdown() {
      return (!this.mouseenter_body && !this.mouseenter_nav) || !Object.keys(this.active_list).length
    },
    active_list(){
      for (let i = 0; i < this.lists.length; i++) {
        const list = this.lists[i];
        if(list.name == this.active_list_name){
          return list.values
        }
      }
      return {}
    }
  },
  mounted() {
    this.emitter.on("showDropdown", (name) => {
      this.active_list_name = name
      this.mouseenter_nav = true
    })
    this.emitter.on("hideDropdown", () => {
      this.mouseenter_nav = false
    })
  },
  methods:{
    activate(){
      clearTimeout(this.timeout_body)
      this.emitter.emit("dropdown_body_enter")
      this.mouseenter_body = true
    },
    disable(){
        this.mouseenter_body = false
        this.emitter.emit("dropdown_body_leave")
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .dropdown-my{
    display: none !important;
  }

}

.dropdown-my {
  display: flex;
  justify-content: flex-start;
  opacity: 1;
  transition-duration: 0.1s;
  box-shadow: 1px 1px 5px #222;
  border-radius: 15px;
  background-color: white;
  position: absolute;
  top: 18vh;
  left: 0;
  right: 0;
  margin: auto 0;
  z-index: 9999;
  padding: 20px;
}

.hidden {
  display: none !important;
}
</style>
