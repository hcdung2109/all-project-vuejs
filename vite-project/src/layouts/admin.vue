<template>
  <!-- Preloader -->
  <Loader></Loader>
  <!-- Navbar -->
  <Header></Header>
  <!-- /.navbar -->

  <div class="content-wrapper">
    <router-view></router-view>
  </div>

  <Footer></Footer>
</template>

<script>
import Loader from "../components/Loader.vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Loader,
    Header,
    Sidebar,
    Footer,
  },
  setup() {},
};
</script>
