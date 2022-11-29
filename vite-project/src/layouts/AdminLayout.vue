<template>
  <div class="wrapper">
    <!-- Navbar -->
    <Navbar></Navbar>
    <!-- Main Sidebar Container -->
    <Sidebar></Sidebar>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <AppBreadcrumb></AppBreadcrumb>
      <!-- Main content -->
      <section class="content">
        <router-view></router-view>
      </section>
      <!-- /.content -->
    </div>
    <!-- Footer -->
    <AppFooter></AppFooter>
    <!-- Control Sidebar -->
    <ControlSidebar></ControlSidebar>
  </div>
  <!-- ./wrapper -->
</template>

<script>
import Loader from "../components/partials/Loader.vue";
import Navbar from "../components/partials/Navbar.vue";
import Sidebar from "../components/partials/Sidebar.vue";
import AppFooter from "../components/partials/AppFooter.vue";
import ControlSidebar from "../components/partials/ControlSidebar.vue";
import AppBreadcrumb from "../components/partials/AppBreadcrumb.vue";

export default {
  components: {
    Loader,
    Navbar,
    Sidebar,
    AppFooter,
    ControlSidebar,
    AppBreadcrumb,
  },
  setup() {},
};
</script>

<style scoped></style>
