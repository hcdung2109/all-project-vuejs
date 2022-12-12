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
            <h3 class="card-title">Cập Nhật - Thông tin người dùng</h3>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form
            action="#"
            method="POST"
            enctype="multipart/form-data"
            @submit.prevent="submitFormUpdate()"
          >
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputPassword1">Tên</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors.name }"
                  id="exampleInputName1"
                  placeholder=""
                  v-model="name"
                />
              </div>
              <p v-if="errors.name" class="text-danger">{{ errors.name[0] }}</p>

              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors.email }"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  v-model="email"
                />
              </div>
              <p v-if="errors.email" class="text-danger">
                {{ errors.email[0] }}
              </p>

              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  v-model="change_password"
                  v-bind:checked="change_password"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Thay đổi mật khẩu</label
                >
              </div>

              <div v-if="change_password == true">
                <div class="form-group">
                  <label for="exampleInputPassword1">Mật khẩu</label>
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errors.password }"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <p v-if="errors.password" class="text-danger">
                  {{ errors.password[0] }}
                </p>

                <div class="form-group" v-if="change_password == true">
                  <label for="exampleInputPassword1">Nhập Lại Mật khẩu</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="password_confirmation"
                  />
                </div>
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
              <!-- select -->
              <div class="form-group">
                <label>Vai trò</label>
                <select class="form-control" name="role_id" id="role_id">
                  <option value="">-- Lựa chọn --</option>
                  <option v-for="(role, index) in roles" value="">
                    {{ role.name }}
                  </option>
                </select>
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
import { computed, reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
//import "../../../../public/adminlte/plugins/bs-custom-file-input/bs-custom-file-input.js";
//import "admin-lte/plugins/bs-custom-file-input/bs-custom-file-input.min.js";
import ContentHeaderVue from "../../../components/ContentHeader.vue";
import ContentVue from "../../../components/Content.vue";
import axios from "axios";
import { API_URL } from "../../../constants/index.js";

export default {
  name: "PageUserCreate",
  components: {
    ContentHeaderVue,
    ContentVue,
  },
  // beforeMount() {
  //   bsCustomFileInput.init();
  // },
  // beforeUpdate() {
  //   bsCustomFileInput.init();
  // },
  // updated() {
  //   bsCustomFileInput.init();
  // },
  setup() {
    const roles = ref([]);
    const errors = ref({});
    const users = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role_id: "",
      status: "inactive",
      change_password: false,
    });

    const route = useRouter();
    const toast = useToast();

    const getRoles = () => {
      axios
        .get(API_URL + "api/role")
        .then(function (response) {
          // xử trí khi thành công
          // console.log(response.data);
          roles.value = response.data;
        })
        .catch(function (error) {
          // xử trí khi bị lỗi
          console.log(error);
        });
    };

    const options = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    const submitFormUpdate = () => {
      axios
        .post(API_URL + "api/user/", users, options)
        .then((response) => {
          console.log(response);

          if (response) {
            toast.success(response.data.msg, {
              timeout: 2000,
            });

            //router.push('/admin/users');
            route.push({ name: "admin-users" });
          }
        })
        .catch(function (error) {
          console.log(error);
          if (error) {
            console.log(error.response.data.errors);
            errors.value = error.response.data.errors;
          }
          // xử trí khi bị lỗi
        });
    };

    getRoles();

    return { roles, submitFormUpdate, ...toRefs(users), errors };
  },
};
</script>

<style scoped></style>
