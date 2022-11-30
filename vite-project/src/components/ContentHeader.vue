<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 v-if="title">
              <i :class="icon" v-if="icon"></i>
              {{ title}}
          </h1>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  beforeMount() {
    //this.title = this.$store.state.app.name;
    //const title = this.title ? `${this.title} | ${title}` : title;
    //$('title').html(title);
  }
}
</script>
