<template>
    <div id="chart">
      <apexchart
        type="line"
        width="1000"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import axios from 'axios';
  import VueApexCharts from "vue3-apexcharts";
  
  export default defineComponent({
    name: 'Chart',
    components: {
      apexchart: VueApexCharts,
    },
  
    setup() {
      const baseUrl = 'http://localhost:3000'
      const endpoint = '/campaigns/chart-data'
      let chartOptions = ref({
          xaxis: {
              categories: []
          }
      });
      let series = ref(
          [{
            name: 'clicks',
            data: []
          }]
      );

      const getChartData = () => {
        axios.get(`${baseUrl}${endpoint}`)
          .then((response: { data: any; }) => {
            chartOptions.value = { xaxis: {categories: response.data.chartLabels}}
            series.value[0].data = response.data.chartClicks
          })
          .catch((e: any) => {
            console.log(e);
          })
      }
  
      onMounted(() => {
        getChartData()
      });
  
      return {
        series,
        chartOptions,
      };
    },
  });
  </script>
  <style scoped>
    #chart{
      display:flex;
      width: 100%;
      justify-content: center;
    }
  </style>
  