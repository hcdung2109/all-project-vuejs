const admin = [
  {
    path: "/admin",
    name: "admin",
    component: () => import("../layouts/admin.vue"),
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
      ]
      },
      {
        path: "contacts",
        name: "admin-contacts",
        component: () => import("../pages/admin/contacts/index.vue"),
      },
    ],
  },
];

export default admin;
