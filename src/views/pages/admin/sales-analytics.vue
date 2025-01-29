<script>
/**
 * Sales Analytics component
 */
export default {
  data() {
    return {
      series: [45, 36, 19],
      chartOptions: {
        chart: {
          height: 230,
          type: "donut"
        },
        labels: ["One bedroom", "Two bedroom", "Three bedroom"],
        plotOptions: {
          pie: {
            donut: {
              size: "75%"
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        colors: ["#5664d2", "#1cbb8c", "#eeb902"]
      }
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="float-right">
        <select class="custom-select custom-select-sm">
          <option selected>Apr</option>
          <option value="1">Mar</option>
          <option value="2">Feb</option>
          <option value="3">Jan</option>
        </select>
      </div>
      <h4 class="card-title mb-4">Sales Analytics</h4>

      <div id="donut-chart" class="apex-charts"></div>
      <apexchart
        class="apex-charts"
        height="230"
        dir="ltr"
        :series="series"
        :options="chartOptions"
      ></apexchart>
      <div class="row">
        <div class="col-sm-4">
          <div class="text-center mt-4">
            <p class="mb-2 text-truncate">
              <i class="mdi mdi-circle text-primary font-size-10 mr-1"></i> One bedroom
            </p>
            <h5>45 %</h5>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="text-center mt-4">
            <p class="mb-2 text-truncate">
              <i class="mdi mdi-circle text-success font-size-10 mr-1"></i> Two bedroom
            </p>
            <h5>36 %</h5>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="text-center mt-4">
            <p class="mb-2 text-truncate">
              <i class="mdi mdi-circle text-warning font-size-10 mr-1"></i> Three bedroom
            </p>
            <h5>19 %</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>