<script>
/**
 * Sales Analytics component
 */
export default {
  data() {
    return {
      series: [64, 36, ],
      chartOptions: {
        chart: {
          height: 230,
          type: "donut"
        },
        labels: ["Active", "Arrears"],
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
        colors: ["#5664d2", "#C70039", "#eeb902"]
      }
    };
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title mb-4">Loans - Active / Arrears</h4>

      <div id="donut-chart" class="apex-charts"></div>
      <apexchart
        class="apex-charts"
        height="200"
        dir="ltr"
        :series="series"
        :options="chartOptions"
      ></apexchart>
      <div class="row">
        <div class="col-sm-6">
          <div class="text-center mt-4">
            <p class="mb-2 text-truncate">
              <i class="mdi mdi-circle text-primary font-size-10 mr-1"></i> Active
            </p>
            <h5>64 %</h5>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="text-center mt-4">
            <p class="mb-2 text-truncate">
              <i class="mdi mdi-circle text-danger font-size-10 mr-1"></i> Arrears
            </p>
            <h5>36 %</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>