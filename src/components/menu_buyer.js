export const menuItems = [
  //COMPONENT value == NAME value
  //PATH value == LINK value
  {
    id: 1,
    label: "menuitems.menu.text",
    isTitle: true,
  },
  {
    id: 2,
    label: "menuitems.dashboard.text",
    icon: "ri-dashboard-line",
    link: "/kaufer/dashboard",
  },
  {
    id: 3,
    label: "My Profile",
    icon: "ri-account-circle-line",
    link: "/kaufer/profile",
  },
  {
    id: 4,
    label: "My Documents",
    icon: "ri-file-list-line",
    link: "/kaufer/documents",
  },
  {
    id: 5,
    label: "My Savings",
    icon: "ri-wallet-3-line",
    link: "/kaufer/contribution",
  },
  {
    id: 6,
    label: "Reimbursement",
    icon: "ri-refund-2-line",
    link: "/kaufer/refund/process/reimbursement",
  },
  // {
  //   id: 7,
  //   label: "Mortgage Compliance",
  //   icon: "ri-qr-scan-2-line",
  //   link: "/mortgage-compliance",
  // },
  {
    id: 8,
    label: "View Projects",
    icon: "ri-eye-line",
    link: "/kaufer/projects",
  },
  {
    id: 9,
    label: "Agent's Activities",
    icon: "ri-link",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true,
      },
      // {
      //   id: 2,
      //   label: "menuitems.dashboard.text",
      //   icon: "ri-dashboard-line",
      //   link: "/ajan/dashboard",
      // },
      {
        id: 2,
        label: "View Projects",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      // {
      //   id: 3,
      //   label: "Available Houses",
      //   icon: "ri-building-line",
      //   link: "/ajan/houses",
      // },
      {
        id: 4,
        label: "Popular Designs",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
      // {
      //   id: 5,
      //   label: "Share Designs",
      //   icon: "ri-share-line",
      //   link: "/ajan/share-designs",
      // },
    ]
  },
  // {
  //   id: 10,
  //   label: "Developer's Activities",
  //   icon: "ri-share-circle-line",
  //   subItems: [
  //     //COMPONENT value == NAME value
  //     //PATH value == LINK value
  //     {
  //       id: 1,
  //       label: "menuitems.menu.text",
  //       isTitle: true,
  //     },
  //     {
  //       id: 2,
  //       label: "menuitems.dashboard.text",
  //       icon: "ri-dashboard-line",
  //       link: "/razrabotchik/index",
  //     },
  //     {
  //       id: 2,
  //       label: "View Projects",
  //       icon: "ri-eye-line",
  //       link: "/razrabotchik/projects",
  //     },
  //     {
  //       id: 3,
  //       label: "Available Houses",
  //       icon: "ri-building-line",
  //       link: "/razrabotchik/houses",
  //     },
  //     {
  //       id: 4,
  //       label: "Popular Designs",
  //       icon: "ri-shield-star-line",
  //       link: "/razrabotchik/designs",
  //     },
  //     {
  //       id: 5,
  //       label: "Share Designs",
  //       icon: "ri-share-line",
  //       link: "/razrabotchik/promote",
  //     },
  //   ]
  // },
  {
    id: 11,
    label: "Finance's Activities",
    icon: "ri-bank-line",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true,
      },
      // {
      //   id: 2,
      //   label: "menuitems.dashboard.text",
      //   icon: "ri-dashboard-line",
      //   link: "/pesa/dashboard",
      // },
      // {
      //   id: 2,
      //   label: "Loan Requests",
      //   icon: "ri-git-pull-request-line",
      //   link: "/pesa/loan-requests",
      // },
      {
        id: 3,
        label: "Purchase Requests",
        icon: "ri-secure-payment-line",
        link: "/pesa/purchase/requests",
      },
      {
        id: 4,
        label: "Over Dues",
        icon: "ri-percent-line",
        link: "/pesa/over_dues",
      },
      // {
      //   id: 4,
      //   label: "Mortgage Compliance",
      //   icon: "ri-qr-scan-2-line",
      //   link: "/pesa/compliance",
      // },
      // {
      //   id: 5,
      //   label: "View Projects",
      //   icon: "ri-eye-line",
      //   link: "/pesa/browse/projects",
      // },
      // {
      //   id: 6,
      //   label: "Recommend House",
      //   icon: "ri-share-line",
      //   link: "/pesa/recommend-house",
      // },
    ]
  },
  {
    id: 12,
    label: "Admin's Activities",
    icon: "ri-admin-line",
    subItems: [
      {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true,
      },
      // {
      //   id: 2,
      //   label: "menuitems.dashboard.text",
      //   icon: "ri-dashboard-line",
      //   link: "/Xingzheng/dashboard",
      // },
      {
        id: 3,
        label: "System Users",
        icon: "ri-shield-user-line",
        link: "/Xingzheng/reg_buyers",
      },
      {
        id: 20,
        label: "View Projects",
        icon: "ri-question-line",
        link: "/Xingzheng/support",
      },
      // {
      //   id: 20,
      //   label: "Test View",
      //   icon: "ri-question-line",
      //   link: "/Xingzheng/testView",
      // },
    ]
  },

];
