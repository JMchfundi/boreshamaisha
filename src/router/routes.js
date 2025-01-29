import store from "@/state/store";
// import HomeLoad from "../state/home/home-page"

export default [

  // Admin Index/Dashboard
  {
    path: "/home-deleted",
    name: "Home",
    meta: {
      // authRequired: true,
    },
    // component: () => import("../views/pages/account/login"),
    // component: () => import('@/views/Home.vue')
    component: () => import("@/EstateAgency/components/index.vue"),
  },
    // EstateAgency Components
    {
      path: "/propertydetails",
      name: "proertydetails",
      meta: {
        // authRequired: true,
      },
      // component: () => import("../views/pages/account/login"),
      component: () => import("@/EstateAgency/components/property-single.vue"),
    },
  {
    path: '/hotel/:id?',
    name: 'Hotel',
    component: () => import('@/views/Hotel.vue')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/views/Reservation.vue'),
    props: true,
  },

  {
    path: '/property-grid',
    name: 'property-grid',
    component: () => import('@/EstateAgency/components/property-grid.vue'),
    props: true,
  },


  {
    path: "/",
    name: "login",
    component: () => import("../views/pages/account/login.vue"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/pages/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot-password",
    component: () => import("../views/pages/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "home" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: "home" } : { ...routeFrom });
      },
    },
  },
  // Admin Index/Dashboard
  {
    path: "/Xingzheng/dashboard",
    name: "home",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () => import("../views/pages/admin/index"),
  },
  // Admin menu
  {
    path: "/Xingzheng/reg_buyers",
    name: "reg_buyers",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/system_users"),
  },
  {
    path: "/Xingzheng/reg_agents",
    name: "reg_agent",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/agents_report"),
  },
  {
    path: "/Xingzheng/reg_financiers",
    name: "reg_financiers",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/financiers_report"),
  },
  {
    path: "/Xingzheng/reg_promoters",
    name: "reg_promoters",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/promoters_report"),
  },
  {
    path: "/Xingzheng/addProject",
    name: "add_project",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/activities/addProject"),
  },
  {
    path: "/Xingzheng/add_project",
    name: "add_project",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/activities/add_project"),
  },
  {
    path: "/Xingzheng/support",
    name: "support",
    // meta: {
    //   authRequired: true, adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/admin/admin-dashboard/view_projects"),
  },

  // Buyer Index/Dashboard
  {
    path: "/kaufer/dashboard",
    name: "kaufer",
    // meta: {
    //   authRequired: true,
    // },
    component: () => import("../views/pages/buyer-dashboard/index_buyer.vue"),
  },
  {
    path: "/kaufer/profile",
    name: "profile",
    // meta: {
    //   authRequired: true,
    // },
    component: () =>
      import("../views/pages/buyer-dashboard/profile/my_profile"),
  },
  {
    path: "/kaufer/edit_profile",
    name: "edit_profile",
    // meta: {
    //   authRequired: true,
    // },
    component: () =>
      import("../views/pages/buyer-dashboard/profile/editProfile/edit_profile"),
  },
  {
    path: "/kaufer/new/doc/upload/document",
    name: "edit_profile",
    // meta: {
    //   authRequired: true,
    // },
    component: () =>
      import("../views/pages/buyer-dashboard/documents/upload-docs"),
  },
  {
    path: "/kaufer/documents",
    name: "documents",
    // meta: {
    //   authRequired: true,
    // },
    component: () =>
      import("../views/pages/buyer-dashboard/documents/my-documents"),
  },
  {
    path: "/kaufer/new/document/upload",
    name: "uploads",
    meta: {
      authRequired: true,
    },
    component: () =>
      import("../views/pages/buyer-dashboard/documents/upload-docs"),
  },
  {
    path: "/kaufer/contribution",
    name: "deposits",
    meta: {
      authRequired: true,
    },
    component: () =>
      import("../views/pages/buyer-dashboard/contribution/my-contribution"),
  },
  {
    path: "/kaufer/contribute",
    name: "contribute",
    meta: {
      authRequired: true,
    },
    component: () =>
      import("../views/pages/buyer-dashboard/contribution/contribute"),
  },
  {
    path: "/kaufer/refund/process/reimbursement",
    name: "reimbursement",
    // meta: {
    //   authRequired: true, 
    //   adminAuthRequired: true
    // },
    component: () =>
      import("../views/pages/buyer-dashboard/refund/reimbursement"),
  },
  {
    path: "/kaufer/apply/refund/request",
    name: "requests",
    meta: {
      authRequired: true,
    },
    component: () =>
      import("../views/pages/buyer-dashboard/refund/request-refund"),
  },
  {
    path: "/kaufer/C000923A/mortgage/compliance/",
    name: "mortgage-compliance",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/buyer-dashboard/compliance/mortgage-compliance"),
  },

  {
    path: "/kaufer/projects",
    name: "view_projects",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/buyer-dashboard/projects/view-projects"),
  },
  {
    path: "/kaufer/view_more_details",
    name: "project_details",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/buyer-dashboard/projects/project_details"),
  },
  {
    path: "/kaufer/house_preference",
    name: "house_plan",
    meta: {
      authRequired: true,
    },
    component: () => import("../views/pages/forms/validation.vue"),
  },

  // Agent Index/Dashboard
  {
    path: "/ajan/dashboard",
    name: "ajan",
    // meta: {
    //   authRequired: true, adminAuthRequired: true, agentAuthRequired: true
    // },
    component: () => import("../views/pages/agent-dashboard/index-agent"),
  },
  {
    path: "/ajan/view-projects",
    name: "house_types",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, agentAuthRequired: true
    // },
    component: () => import("../views/pages/agent-dashboard/view_projects"),
  },
  {
    path: "/ajan/houses",
    name: "houses",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, agentAuthRequired: true
    // },
    component: () => import("../views/pages/agent-dashboard/available-houses"),
  },
  {
    path: "/ajan/popular-designs",
    name: "designs",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, agentAuthRequired: true
    // },
    component: () => import("../views/pages/agent-dashboard/popular_designs.vue"),
  },
  {
    path: "/ajan/share-designs",
    name: "share_designs",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, agentAuthRequired: true
    // },
    component: () => import("../views/pages/agent-dashboard/share-designs"),
  },
  // Finance Index/Dashboard
  {
    path: "/pesa/dashboard",
    name: "pesa",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, finAuthRequired: true
    // },
    component: () => import("../views/pages/finance-dashboard/index-finance"),
  },
  {
    path: "/pesa/loan-requests",
    name: "loans",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, finAuthRequired: true
    // },
    component: () => import("../views/pages/finance-dashboard/loan-requests"),
  },
  {
    path: "/pesa/purchase/requests",
    name: "loans",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, finAuthRequired: true
    // },
    component: () => import("../views/pages/finance-dashboard/purchase-requests"),
  },
  {
    path: "/pesa/over_dues",
    name: "dues",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, finAuthRequired: true
    // },
    component: () => import("../views/pages/finance-dashboard/over_dues"),
  },
  // {
  //   path: "/pesa/compliance",
  //   name: "compliance",
  //   meta: {
  //     authRequired: true,
  //   },
  //   component: () =>
  //     import("../views/pages/finance-dashboard/compliance/mortgage-compliance"),
  // },
  {
    path: "/pesa/browse/projects",
    name: "views",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, finAuthRequired: true
    // },
    component: () => import("../views/pages/finance-dashboard/view-projects"),
  },
  // {
  //   path: "/pesa/recommend-house",
  //   name: "views",
  //   meta: {
  //     authRequired: true,
  //   },
  //   component: () => import("../views/pages/finance-dashboard/recommend-house"),
  // },

  // Developer Index/Dashboard
  {
    path: "/razrabotchik/index",
    name: "razrabotchik",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, devAuthRequired: true
    // },
    component: () => import("../views/pages/dev-dashboard/index-developer"),
  },
  {
    path: "/razrabotchik/projects",
    name: "see-project",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, devAuthRequired: true
    // },
    component: () => import("../views/pages/dev-dashboard/view-projects"),
  },
  {
    path: "/razrabotchik/houses",
    name: "houses",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, devAuthRequired: true
    // },
    component: () => import("../views/pages/dev-dashboard/available-houses"),
  },
  {
    path: "/razrabotchik/designs",
    name: "designs",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, devAuthRequired: true
    // },
    component: () => import("../views/pages/dev-dashboard/popular-designs"),
  },
  {
    path: "/razrabotchik/promote",
    name: "share",
    // meta: {
    //   authRequired: true,
    //   adminAuthRequired: true, devAuthRequired: true
    // },
    component: () => import("../views/pages/dev-dashboard/share-designs"),
  },
  // {
  //   path: "/Xingzheng/testView",
  //   name: "share",
  //   meta: {
  //     authRequired: true,
  //     adminAuthRequired: true, devAuthRequired: true
  //   },
  //   component: () => import("../views/pages/ecommerce/product-detail.vue"),
  //   component: () => import("../views/pages/ecommerce/customers.vue"),
  // },
];
