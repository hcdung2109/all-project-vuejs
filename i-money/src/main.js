import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponents } from "./utils/register-component";

const firebaseConfig = {
  apiKey: "AIzaSyB5olCOVPnbRf6JlQl4f72LqbhaWIUcSIQ",
  authDomain: "learn-vue-50f99.firebaseapp.com",
  projectId: "learn-vue-50f99",
  storageBucket: "learn-vue-50f99.appspot.com",
  messagingSenderId: "991006906516",
  appId: "1:991006906516:web:31483f4c7e485dc5b43c81",
  measurementId: "G-V5CR5PEZF0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.mount("#app");
