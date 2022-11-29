const admin = [
  {
    path: "",
    component: () => import("../layouts/BlankLayout.vue"),
    children: [
      {
        path: "/login",
        name: "admin-login",
        component: () => import("../pages/admin/login.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../pages/admin/users/index.vue"),
        children: [
          {
            path: "create",
            name: "admin-users-create",
            component: () => import("../pages/admin/users/create.vue"),
          },
          {
            path: "edit",
            name: "admin-users-edit",
            component: () => import("../pages/admin/users/edit.vue"),
          },
        ],
      },
      {
        path: "contacts",
        name: "admin-contacts",
        component: () => import("../pages/admin/contacts/index.vue"),
      },
      {
        path: "roles",
        name: "admin-roles",
        component: () => import("../pages/admin/roles/index.vue"),
      },
      {
        path: "setting",
        name: "admin-setting",
        component: () => import("../pages/admin/setting/index.vue"),
      },
    ],
  },
];

export default admin;
