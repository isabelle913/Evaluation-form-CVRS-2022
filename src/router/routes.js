const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PageInfo.vue") },
      { path: "/attitude", component: () => import("pages/PageAttitude.vue") },
      {
        path: "/technique",
        component: () => import("pages/PageTechnique.vue"),
      },
      {
        path: "/chirurgie",
        component: () => import("pages/PageChirurgie.vue"),
      },
      {
        path: "/pharmacie",
        component: () => import("pages/PagePharmacie.vue"),
      },
      {
        path: "/soumettre",
        component: () => import("pages/PageSoumettre.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
