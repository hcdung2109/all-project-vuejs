import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import DisableAutocomplete from 'vue-disable-autocomplete';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
//import './style.css'
import router from "./router/index.js";
//import store from "./store/index.js";
import axios from "axios";
//window.axios = axios;
import App from "./App.vue";

// Import CSS
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/toastr/toastr.min.css";
import "admin-lte/dist/css/adminlte.min.css";
// Import JS
import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/toastr/toastr.min.js";
import "admin-lte/dist/js/adminlte.min.js";

const app = createApp(App);
app.use(DisableAutocomplete);
app.use(createPinia());
app.use(router);
app.use(Toast);
//app.use(store);
app.mount("#app");
