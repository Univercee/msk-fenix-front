import { createApp } from "vue";
import router from "./libs/router";
import store from "./libs/store";
import mitt from "mitt";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./libs/axios";

import App from './App.vue'
import Navbar from "./components/Head/Navbar.vue";
import NavbarDropdown from "./components/Head/NavbarDropdown.vue";
import Footer from "./components/Footer/Footer.vue";
import Filter from "./components/Filter/Filter.vue";
import Header from "./components/Head/Header.vue";
import ProductCard from "./components/Products/ProductCard.vue";
import Products from "./components/Products/Products.vue";
import Info from "./components/Sections/Info.vue";
import Socials from "./components/Shared/Socials.vue";
import Widget from "./components/Widgets/Widget.vue";
import WidgetsRow from "./components/Widgets/WidgetsRow.vue";

import socials_json from "./data/socials.json";

const app = createApp(App)
app.component("c-navbar-dropdown", NavbarDropdown);
app.component("c-navbar", Navbar);
app.component("c-footer", Footer);
app.component("c-product-card", ProductCard);
app.component("c-products", Products);
app.component("c-filter", Filter);
app.component("c-header", Header);
app.component("c-info", Info);
app.component("c-socials", Socials);
app.component("c-widget", Widget);
app.component("c-widgets-row", WidgetsRow);

app.use(store).use(router);
app.config.globalProperties.emitter = mitt();
app.config.globalProperties.socials = socials_json;
app.mount("#app");
