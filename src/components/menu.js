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
    label: "Create",
    icon: "ri-wallet-3-line",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 3,
        label: "New Group",
        // icon: "ri-eye-line",
        link: "/create/grp",
      },
      {
        id: 4,
        label: "New Client",
        // icon: "ri-shield-star-line",
        link: "/accounting/je",
      },
      {
        id: 44,
        label: "New Loan",
        // icon: "ri-shield-star-line",
        subItems: [
          //COMPONENT value == NAME value
          //PATH value == LINK value
          {
            id: 344,
            label: "Loan Creation",
            // icon: "ri-eye-line",
            link: "/accounting/coa",
          },
          {
            id: 444,
            label: "Approve",
            // icon: "ri-shield-star-line",
            link: "/accounting/je",
          },
          {
            id: 4444,
            label: "Disburse",
            // icon: "ri-shield-star-line",
            link: "/accounting/je",
          },
        ]    
      },
    ]
  },
  {
    id: 6,
    label: "Clients",
    icon: "ri-group-2-fill",
    link: "/clients",
  },
  {
    id: 5,
    label: "Groups / Centres",
    icon: "ri-building-line",
    link: "/centres",
  },
  {
    id: 7,
    label: "Transactions",
    icon: "ri-bank-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 8,
        label: "All Officer Entries",
        icon: "ri-eye-line",
        link: "/loans/olb",
      },
      {
        id: 9,
        label: "Disbursements",
        icon: "ri-shield-star-line",
        link: "/loans/app",
      }
    ]
  },
  {
    id: 7,
    label: "Reports",
    icon: "ri-file-chart-fill",
    subItems: [
      //COMPONENT value == NAME value
      //PATH value == LINK value
      {
        id: 8,
        label: "Collections / Entries",
        icon: "ri-eye-line",
        link: "/loans/olb",
      },
      {
        id: 9,
        label: "Sales",
        icon: "ri-shield-star-line",
        link: "/loans/app",
      },
      {
        id: 10,
        label: "OLBs - Outstanding Loan Balances",
        icon: "ri-eye-line",
        link: "/loans/rep",
      },
      {
        id: 11,
        label: "Arrears",
        icon: "ri-shield-star-line",
        link: "/loans/prod",
      },
      {
        id: 12,
        label: "Clients Demography",
        icon: "ri-eye-line",
        link: "/loans/cashreg",
      },
      {
        id: 13,
        label: "Disbursements",
        icon: "ri-shield-star-line",
        link: "/loans/prov",
      },
      {
        id: 127,
        label: "Inventory",
        icon: "ri-eye-line",
        link: "/loans/cashreg",
      },
      {
        id: 137,
        label: "Forecasting",
        icon: "ri-shield-star-line",
        link: "/loans/prov",
      },
      {
        id: 13713,
        label: "Bulk action reports",
        icon: "ri-shield-star-line",
        subItems: [
          //COMPONENT value == NAME value
          //PATH value == LINK value
          {
            id: 813713,
            label: "Bulk action reports",
            icon: "ri-eye-line",
            link: "/loans/olb",
          }
        ]
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
  // {
  //   id: 6,
  //   label: "Reimbursement",
  //   icon: "ri-refund-2-line",
  //   link: "/kaufer/refund/process/reimbursement",
  // },
];
