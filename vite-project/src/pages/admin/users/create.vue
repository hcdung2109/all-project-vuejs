<template>
  <!-- Content Header (Page header) -->
  <ContentHeaderVue
    title="QT Người Dùng - Thêm"
    icon="fas fa-info-circle"
  ></ContentHeaderVue>
  <!-- Main content -->
  <ContentVue>
    <div class="row mb-2">
      <div class="col-md-12">
        <router-link :to="{ name: 'admin-users' }" class="btn btn-primary"
          >Danh Sách</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <!-- general form elements -->
        <div class="card card-info">
          <div class="card-header">
            <h3 class="card-title">Thông tin người dùng</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form action="" method="POST" enctype="multipart/form-data">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Mật khẩu</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputFile">Avatar</label>
                <div class="input-group">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="exampleInputFile"
                    />
                    <label class="custom-file-label" for="exampleInputFile"
                      >Chọn file</label
                    >
                  </div>
                  <div class="input-group-append">
                    <span class="input-group-text">Upload</span>
                  </div>
                </div>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Kích hoạt</label
                >
              </div>
            </div>
            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-success mr-2">Submit</button>
              <button type="reset" class="btn btn-default">Reset</button>
            </div>
          </form>
        </div>
        <!-- /.card -->
      </div>
    </div>
  </ContentVue>
</template>

<script>
import { computed, ref } from "vue";
import "../../../../public/adminlte/plugins/bs-custom-file-input/bs-custom-file-input.js";
import "admin-lte/plugins/bs-custom-file-input/bs-custom-file-input.min.js";
import ContentHeaderVue from "../../../components/ContentHeader.vue";
import ContentVue from "../../../components/Content.vue";
//import axios from "axios";
//import { API_URL } from "../../../constants/index.js";

export default {
  name: "PageUserCreate",
  components: {
    ContentHeaderVue,
    ContentVue,
  },
  beforeMount() {
    bsCustomFileInput.init();
  },
  beforeUpdate() {
    bsCustomFileInput.init();
  },
  updated() {
    bsCustomFileInput.init();
  },
  setup() {
    const avatar = ref(null);

    computed(() => count.value * 2);
    // const users = ref([]);
    // const getUsers = () => {
    //   axios
    //     .get(API_URL + "api/users")
    //     .then(function (response) {
    //       // xử trí khi thành công
    //       console.log(response.data.data);
    //       users.value = response.data.data;
    //     })
    //     .catch(function (error) {
    //       // xử trí khi bị lỗi
    //       console.log(error);
    //     });
    // };
    // getUsers();
    // return { users };
  },
};
</script>

<style scoped></style>
