import { createApp } from "vue";
import { createPinia } from "pinia";
//import './style.css'
import router from "./router/index.js";
//import store from "./store/index.js";
import axios from "axios";
//window.axios = axios;
import App from "./App.vue";

// Import CSS
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
// Import JS
import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/dist/js/adminlte.min.js";

const app = createApp(App);
app.use(createPinia());
app.use(router);
//app.use(store);
app.mount("#app");
