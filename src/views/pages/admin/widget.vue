<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Number of Sales",
          icon: "ri-stack-line",
          value: "1452",
          // subvalue: {
          //   icon: "ri-stack-line"
          // }
        },
        {
          title: "Sales Revenue",
          icon: "ri-store-2-line",
          value: "$ 38452",
          // subvalue: {
          //   icon: "ri-stack-line"
          // }
        },
        {
          title: "Average Price",
          icon: "ri-briefcase-4-line",
          value: "$ 15.4",
          // subvalue: {
          //   icon: "ri-stack-line"
          // }
        }
      ]
    };
  }
};
</script>

<template>
  <div class="row">
    <div class="col-md-4" v-for="(data, index) in statData" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{ data.title }}</p>
              <h4 class="mb-0">{{ data.value }}</h4>
            </div>
            <div class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>

        <div class="card-body border-top py-3">
          <div class="text-truncate d-flex">
            <!-- <span class="badge badge-soft-success font-size-11 mr-1">
              <i class="" :class="`${data.icon}`"></i>
               {{data.subvalue}} 
            </span> -->
            <!-- <span class="text-muted ml-2">Per Month</span> -->
            <div class="float-right d-none d-md-inline-block">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-light active">Today</button>
                <button type="button" class="btn btn-sm btn-light">Weekly</button>
                <button type="button" class="btn btn-sm btn-light">Monthly</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>