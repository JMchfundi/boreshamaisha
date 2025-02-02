<script>
/**
 * Widget Component
 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Centres",
          icon: "ri-building-line",
          value: "10",
          // subvalue: {
          //   icon: "ri-stack-line"
          // }
        },
        {
          title: "Clients",
          icon: "ri-group-2-fill",
          value: "9789",
          // subvalue: {
          //   icon: "ri-stack-line"
          // }
        },
        {
          title: "New Clients",
          icon: "ri-file-add-fill",
          value: "542",
          // subvalue: {
          //   icon: "ri-stack-line"
          // }
        },
        {
          title: "Closed Clients",
          icon: "ri-file-reduce-fill",
          value: "54",
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
    <div class="col-md-3" v-for="(data, index) in statData" :key="index">
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
      </div>
    </div>
  </div>
  <!-- end row -->
</template>