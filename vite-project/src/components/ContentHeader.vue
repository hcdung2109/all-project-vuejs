<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>
            <i :class="icon" v-if="icon"></i>
            {{ title }} {{ app_title }}
          </h1>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import { useStoreApp } from "../storePinia/index.js";

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      app_title: null,
    };
  },
  beforeMount() {
    let storeApp = useStoreApp();
    const { app } = storeApp;

    console.log(storeApp.app.name);
    //console.log(app);
    console.log(app.name);
    //let title = this.$store.state.app.name;
    //this.app_title = this.title ? '' : title;
  },
};
</script>
