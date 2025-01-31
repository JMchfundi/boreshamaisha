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
    id: 4,
    label: "Centres",
    icon: "ri-building-line",
    link: "/centres",
  },
  {
    id: 4,
    label: "Clients",
    icon: "ri-group-2-fill",
    link: "/clients",
  },
  {
    id: 9,
    label: "Loans",
    icon: "ri-bank-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "Outstanding - OLBs",
        icon: "ri-eye-line",
        link: "/loans/olb",
      },
      {
        id: 4,
        label: "Applications",
        icon: "ri-shield-star-line",
        link: "/loans/app",
      },
      {
        id: 2,
        label: "Repayments",
        icon: "ri-eye-line",
        link: "/loans/rep",
      },
      {
        id: 4,
        label: "Products",
        icon: "ri-shield-star-line",
        link: "/loans/prod",
      },
      {
        id: 2,
        label: "Cash Register",
        icon: "ri-eye-line",
        link: "/loans/cashreg",
      },
      {
        id: 4,
        label: "Loan Provisioning",
        icon: "ri-shield-star-line",
        link: "/loans/prov",
      },
    ]
  },
  {
    id: 9,
    label: "Expenses",
    icon: "ri-wallet-2-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Expenses",
        icon: "ri-eye-line",
        link: "/expenses/view",
      },
      {
        id: 4,
        label: "Manage Expenses",
        icon: "ri-shield-star-line",
        link: "/expenses/manage",
      },
    ]
  },
  {
    id: 9,
    label: "Income",
    icon: "ri-bank-card-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Income",
        icon: "ri-eye-line",
        link: "/income/view",
      },
      {
        id: 4,
        label: "Manage Income",
        icon: "ri-shield-star-line",
        link: "/income/manage",
      },
    ]
  },
  {
    id: 9,
    label: "Savings",
    icon: "ri-mastercard-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Savings",
        icon: "ri-eye-line",
        link: "/savings/view",
      },
      {
        id: 4,
        label: "Manage Products",
        icon: "ri-shield-star-line",
        link: "/savings/manage",
      },
      {
        id: 4,
        label: "Manage Charges",
        icon: "ri-shield-star-line",
        link: "/savings/charges",
      },
    ]
  },
  {
    id: 9,
    label: "Users",
    icon: "ri-group-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 2,
        label: "View Users",
        icon: "ri-eye-line",
        link: "/users/view",
      },
      {
        id: 4,
        label: "Manage Roles",
        icon: "ri-shield-star-line",
        link: "/users/manage",
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
    icon: "ri-history-fill",
    link: "/logs",
  },
  {
    id: 5,
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
