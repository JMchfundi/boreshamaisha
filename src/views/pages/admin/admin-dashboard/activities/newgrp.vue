<style>
.p-icon {
  font-size: 25px;
}
</style>
<script>
import PageHeader from "@/components/page-header";
import Layout from "@/views/layouts/main";
import BasicInfo from "../../admin-dashboard/activities/newgrpdata.vue";

export default {
  components: {
    PageHeader,
    Layout,
    BasicInfo
    // LocationInfo,
    // ImageProject
  },

  data() {
    return {
      title: 'Activities',
      items: [
        {
          text: 'Africana',
        },
        {
          text: 'Project',
          active: true
        },
      ],
      clickedmenu: "",
    };
  },
  mounted() {
    this.getClickedMenu();
  },
  methods: {
    getClickedMenu() {
      this.clickedmenu = localStorage.getItem("clickedmenu")
    },
  }
};
</script>
<template>
  <Layout>
    <div class="main">
      <PageHeader :title="title" :items="items" />
      <BasicInfo v-if="clickedmenu == 'New Group'"></BasicInfo>
    </div>
  </Layout>
</template>