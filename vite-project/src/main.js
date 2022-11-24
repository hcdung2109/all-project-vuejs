import { createApp } from 'vue'
//import './style.css'
import router from './router/index.js'
import { Button, message, Drawer } from 'ant-design-vue';
import App from './App.vue'

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.use(Button);
app.use(Drawer);
app.mount('#app')
