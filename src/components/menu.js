export const menuItems = [
  //COMPONENT value == NAME value
  //PATH value == LINK value

  // {
  //   id: 1,
  //   label: "menuitems.menu.text",
  //   isTitle: true,
  // },
  {
    id: 1,
    label: "menuitems.dashboard.text",
    icon: "ri-dashboard-line",
    link: "/kaufer/dashboard",
  },
  {
    id: 2,
    label: "Accounting",
    icon: "ri-wallet-3-line",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 3,
        label: "Chart of Accounts",
        // icon: "ri-eye-line",
        link: "/accounting/coa",
      },
      {
        id: 4,
        label: "Journal Entries",
        // icon: "ri-shield-star-line",
        link: "/accounting/je",
      },
    ]
  },
  {
    id: 5,
    label: "Centres",
    icon: "ri-building-line",
    link: "/centres",
  },
  {
    id: 6,
    label: "Clients",
    icon: "ri-group-2-fill",
    link: "/clients",
  },
  {
    id: 7,
    label: "Loans",
    icon: "ri-bank-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 8,
        label: "Outstanding - OLBs",
        icon: "ri-eye-line",
        link: "/loans/olb",
      },
      {
        id: 9,
        label: "Applications",
        icon: "ri-shield-star-line",
        link: "/loans/app",
      },
      {
        id: 10,
        label: "Repayments",
        icon: "ri-eye-line",
        link: "/loans/rep",
      },
      {
        id: 11,
        label: "Products",
        icon: "ri-shield-star-line",
        link: "/loans/prod",
      },
      {
        id: 12,
        label: "Cash Register",
        icon: "ri-eye-line",
        link: "/loans/cashreg",
      },
      {
        id: 13,
        label: "Loan Provisioning",
        icon: "ri-shield-star-line",
        link: "/loans/prov",
      },
    ]
  },
  {
    id: 14,
    label: "Expenses",
    icon: "ri-wallet-2-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 15,
        label: "View Expenses",
        icon: "ri-eye-line",
        link: "/expenses/view",
      },
      {
        id: 16,
        label: "Manage Expenses",
        icon: "ri-shield-star-line",
        link: "/expenses/manage",
      },
    ]
  },
  {
    id: 17,
    label: "Income",
    icon: "ri-bank-card-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 18,
        label: "View Income",
        icon: "ri-eye-line",
        link: "/income/view",
      },
      {
        id: 19,
        label: "Manage Income",
        icon: "ri-shield-star-line",
        link: "/income/manage",
      },
    ]
  },
  {
    id: 20,
    label: "Savings",
    icon: "ri-mastercard-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 21,
        label: "View Savings",
        icon: "ri-eye-line",
        link: "/savings/view",
      },
      {
        id: 22,
        label: "Manage Products",
        icon: "ri-shield-star-line",
        link: "/savings/manage",
      },
      {
        id: 23,
        label: "Manage Charges",
        icon: "ri-shield-star-line",
        link: "/savings/charges",
      },
    ]
  },
  {
    id: 24,
    label: "Users",
    icon: "ri-group-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 25,
        label: "View Users",
        icon: "ri-eye-line",
        link: "/users/view",
      },
      {
        id: 26,
        label: "Manage Roles",
        icon: "ri-shield-star-line",
        link: "/users/manage",
      },
    ]
  },
  {
    id: 27,
    label: "My Profile",
    icon: "ri-account-circle-line",
    link: "/kaufer/profile",
  },
  {
    id: 28,
    label: "Activity Logs",
    icon: "ri-history-fill",
    link: "/logs",
  },
  {
    id: 29,
    label: "Reports",
    icon: "ri-file-chart-fill",
    link: "/reports",
  },
  // {
  //   id: 6,
  //   label: "Reimbursement",
  //   icon: "ri-refund-2-line",
  //   link: "/kaufer/refund/process/reimbursement",
  // },
  {
    id: 30,
    label: "Admin's Activities",
    icon: "ri-admin-line",
    subItems: [
      {
        id: 31,
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
        id: 32,
        label: "System Users",
        icon: "ri-shield-user-line",
        link: "/Xingzheng/reg_buyers",
      },
      {
        id: 33,
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
