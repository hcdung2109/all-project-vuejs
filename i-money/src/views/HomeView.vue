<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useUser } from "@/composables/useUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    console.log(user);
    return { user };
  },
};
</script>
