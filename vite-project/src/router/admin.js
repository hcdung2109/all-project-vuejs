import BlankLayout from "../layouts/BlankLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import PageLogin from "../pages/admin/login.vue";
import PageUser from "../pages/admin/users/index.vue";
import PageUserCreate from "../pages/admin/users/create.vue";
import PageContact from "../pages/admin/contacts/index.vue";
import PageRoles from "../pages/admin/roles/index.vue";
import PageSetting from "../pages/admin/setting/index.vue";

const admin = [
  {
    path: "",
    component: BlankLayout,
    children: [
      {
        path: "/login",
        name: "admin-login",
        component: () => PageLogin,
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminLayout,
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => PageUser,
        children: [],
      },
      {
        path: "users/create",
        name: "admin-users-create",
        component: () => PageUserCreate,
      },
      {
        path: "contacts",
        name: "admin-contacts",
        component: () => PageContact,
      },
      {
        path: "roles",
        name: "admin-roles",
        component: () => PageRoles,
      },
      {
        path: "setting",
        name: "admin-setting",
        component: () => PageSetting,
      },
    ],
  },
];

export default admin;
