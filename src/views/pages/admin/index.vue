<script>
import Layout from "@/views/layouts/main";
import PageHeader from "@/components/page-header";

import Stat from "./widget";
import RevenueAnalytics from "./revenue";
import SalesAnalytics from "./sales-analytics";
import EarningReport from "./earning";
// import Sources from "./sources";
// import RecentActivity from "./recent-activity";
// import RevenueLocation from "./revenue-location";
// import Chat from "./chat";
import Transaction from '@/views/pages/dev-dashboard/sys_users.vue';
// import Buyers_Table from "@/views/pages/dev-dashboard/sys_users.vue"

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Stat,
    RevenueAnalytics,
    SalesAnalytics,
    EarningReport,
    // Sources,
    // RecentActivity,
    // RevenueLocation,
    // Chat,
    Transaction
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Africana"
        },
        {
          text: "Admin dashboard",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <hr class="mt-0">
    <div class="row">
      <div class="col-xl-8">
        <Stat />
        <RevenueAnalytics />
      </div>
      <div class="col-xl-4">
        <SalesAnalytics />
        <EarningReport />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <Sources />
      </div>
      <div class="col-lg-4">
        <RecentActivity />
      </div>
      <div class="col-lg-4">
        <RevenueLocation />
      </div>
    </div>
    <div class="row">
      <!-- <div class="col-lg-4">
        <Chat />
      </div> -->
      <div class="col">
        <Transaction />
      </div>
    </div>
  </Layout>
</template>