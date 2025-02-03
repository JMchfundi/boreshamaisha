<style>
.p-icon {
  font-size: 25px;
}
</style>
<script>
import PageHeader from "@/components/page-header";
import Layout from "@/views/layouts/main";
import Newgrpform from "./newgrpform.vue";
import Newclientform from "./newclientform.vue";

export default {
  components: {
    PageHeader,
    Layout,
    Newgrpform,
    Newclientform
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
      <Newgrpform v-if="this.clickedmenu == 'New Group'"></Newgrpform>
      <Newclientform v-if="this.clickedmenu == 'New Client'"></Newclientform>
    </div>
  </Layout>
</template>