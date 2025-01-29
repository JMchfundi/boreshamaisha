<style>

</style>
<script>
import PageHeader from "@/components/page-header";
import Layout from "../../layouts/main_buyer";


export default {
  components: {
    PageHeader,
    Layout,
  },
  data() {
    return {
      title: 'Dashboard',
      items: [
        {
          text: 'Africana',
        },
        {
          text: 'Buyer dashboard',
          active: true
        },

      ],

      statData: [
        {
          title: "Completed your",
          icon: "ri-profile-line",
          value: "User Profile?",
          subtitle: "Finish now",
          sub_icon: "ri-edit-2-line",
          // colors: "#43707D",
          link: "/kaufer/edit_profile"
        },
        {
          title: "My savings funds",
          icon: "ri-money-dollar-circle-line",
          value: "0.00",
          subtitle: "Last activity",
          sub_icon: "ri-history-line",
          link: ""
        },
        {
          title: "Monthly contribution",
          icon: "ri-calendar-check-line",
          value: "0.00",
          subtitle: "Last day",
          sub_icon: "ri-calendar-check-line",
          link: ""
        },
        {
          title: "Deposit to account",
          icon: "ri-add-box-line",
          value: "Cash",
          subtitle: "Choose payment option",
          sub_icon: "ri-list-check",
          link: "/kaufer/contribution" //this should be a function that opens the modal for choosing payment options
        }

      ]

    }
  },
}
</script>
<template>
  <Layout>
    <div class="main">
      <PageHeader :title="title" :items="items" />
      <hr class="mt-0">
      <div class="row">
        <div class="col" v-for="(data, index) in statData" :key="index">
          <div class="card">
            <div class="card-body pb-0">
              <div class="media">
                <!-- <div class="mr-2" :color="`${data.colors}`">
                  <i :class="`${data.icon} `"  style="font-size: 4em"></i>
                </div> -->
                <div class="media-body overflow-hidden p-0">
                  <p class="text-truncate font-size-14">{{ data.title }}</p>
                  <h4 class="mb-0">{{ data.value }}</h4>
                </div>
                <div class="mr-2" v-bind:color="`${data.colors}`">
                  <i :class="`${data.icon}`"  style="font-size: 4em"></i>
                </div>
              </div>
            </div>
            <div class="card-body border-top py-2">             
                <div class="text-truncate btn btn-sm w-100 d-flex pl-0" @click="$router.push(data.link)">
                <span class="badge badge-soft-success d-flex align-items-center">
                  <i class="" :class="`${data.sub_icon}`"></i>
                  <!-- {{data.subvalue}} -->
                </span>
                <span class="text-muted ml-1">{{ data.subtitle }}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
  </Layout>
</template>