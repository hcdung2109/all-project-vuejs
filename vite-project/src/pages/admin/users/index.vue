<template>
  <!-- Content Header (Page header) -->
  <ContentHeaderVue title="QT Người Dùng" icon="fas fa-info-circle" ></ContentHeaderVue>
  <!-- Main content -->
  <ContentVue>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Bordered Table</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th style="width: 10px">ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th style="">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user,index) in users" v-key="id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>
                    <span v-if="user.status == 'active'" class="badge bg-success">active</span>
                    <span v-else-if="user.status == 'inactive'" class="badge bg-danger">inactive</span>
                  </td>
                  <td>
                    <button type="button" class="btn btn-outline-primary mr-2"><i class="fas fa-pencil-alt"></i></button>
                    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
          <div class="card-footer clearfix">
            <ul class="pagination pagination-sm m-0 float-right">
              <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
            </ul>
          </div>
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
  </ContentVue>
</template>

<script>
import { ref } from "vue"
import ContentHeaderVue from "../../../components/ContentHeader.vue";
import ContentVue from "../../../components/Content.vue";
import axios from "axios";

export default {
  components: {
    ContentHeaderVue,
    ContentVue
  },
  setup() {
    const users = ref([]);
    const getUsers = () => {
      axios.get('/api/user.json')
          .then(function (response) {
            // xử trí khi thành công
            console.log(response.data);
            users.value = response.data;
          })
          .catch(function (error) {
            // xử trí khi bị lỗi
            console.log(error);
          });
    };

    getUsers();

    return { users }

  },
};
</script>

<style scoped></style>