export const menuItems = [
  //COMPONENT value == NAME value
  //PATH value == LINK value

  // {
  //   id: 1,
  //   label: "menuitems.menu.text",
  //   isTitle: true,
  // },
  {
    id: 2,
    label: "menuitems.dashboard.text",
    icon: "ri-dashboard-line",
    link: "/kaufer/dashboard",
  },
  {
    id: 9,
    label: "Accounting",
    icon: "ri-wallet-3-line",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "Chart of Accounts",
        // icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Journal Entries",
        // icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
    ]
  },
  {
    id: 4,
    label: "Centres",
    icon: "ri-file-list-line",
    link: "/kaufer/documents",
  },
  {
    id: 4,
    label: "Clients",
    icon: "ri-account-circle-line",
    link: "/kaufer/documents",
  },
  {
    id: 9,
    label: "Loans",
    icon: "ri-link",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "Outstanding - OLBs",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Applications",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
      {
        id: 2,
        label: "Repayments",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Products",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
      {
        id: 2,
        label: "Cash Register",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Loan Provisioning",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
    ]
  },
  {
    id: 9,
    label: "Expenses",
    icon: "ri-link",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Expenses",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Manage Expenses",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
    ]
  },
  {
    id: 9,
    label: "Income",
    icon: "ri-link",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Income",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Manage Income",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
    ]
  },
  {
    id: 9,
    label: "Savings",
    icon: "ri-link",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Savings",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Manage Products",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
      {
        id: 4,
        label: "Manage Charges",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
    ]
  },
  {
    id: 9,
    label: "Users",
    icon: "ri-link",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Users",
        icon: "ri-eye-line",
        link: "/ajan/view-projects",
      },
      {
        id: 4,
        label: "Manage Roles",
        icon: "ri-shield-star-line",
        link: "/ajan/popular-designs",
      },
    ]
  },
  {
    id: 3,
    label: "My Profile",
    icon: "ri-account-circle-line",
    link: "/kaufer/profile",
  },
  {
    id: 4,
    label: "Activity Logs",
    icon: "ri-file-list-line",
    link: "/kaufer/documents",
  },
  {
    id: 5,
    label: "Reports",
    icon: "ri-wallet-3-line",
    link: "/kaufer/contribution",
  },
  // {
  //   id: 6,
  //   label: "Reimbursement",
  //   icon: "ri-refund-2-line",
  //   link: "/kaufer/refund/process/reimbursement",
  // },
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
