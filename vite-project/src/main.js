import { createApp } from 'vue'
//import './style.css'
import router from './router/index.js'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app')
