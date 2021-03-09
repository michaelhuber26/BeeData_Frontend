<template>
  <head>
    <component
      :is="script"
      src="https://unpkg.com/@mongodb-js/charts-embed-dom"
    ></component>
    <component
      :is="script"
      src="https://s3.amazonaws.com/stitch-sdks/js/bundles/4.6.0/stitch.js"
    ></component>
  </head>
  <body>
    <div id="chart_field">
      <div class="chart">
        <iframe
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-beedata-pozxf/embed/charts?id=2fc8817f-caf2-4c5a-ae4c-d31b4922142b&theme=light"
        ></iframe>
      </div>
      <div class="chart">
        <iframe
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-beedata-pozxf/embed/charts?id=31646fae-4ac5-4f66-92a3-e526e6fd2e76&theme=light"
        ></iframe>
      </div>
      <div class="chart">
        <iframe
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-beedata-pozxf/embed/charts?id=e15e6afb-a886-44c7-9fc5-6cb6b54a9834&theme=light"
        ></iframe>
      </div>
      <div class="chart">
        <iframe
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-beedata-pozxf/embed/charts?id=f4783a52-efdd-4457-9dd3-cc00b8ed14bb&theme=light"
        ></iframe>
      </div>
      <div class="chart">
        <iframe
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-beedata-pozxf/embed/charts?id=cadebe08-7617-4b14-9cfa-30f0a2e04c7e&theme=light"
        ></iframe>
      </div>
      <div class="chart">
        <iframe
          width="100%"
          height="480"
          src="https://charts.mongodb.com/charts-beedata-pozxf/embed/charts?id=2745a644-3008-40e8-82a3-d814b9d0efa7&theme=light"
        ></iframe>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "DataCharts",
};
</script>

<style scoped>
#chart_field {
  position: absolute;
  left: 2%;
  right: 2%;
  padding-bottom: 20px;
  background: #eee;
}
.chart {
  position: static;
  left: 0px;
  width: 29vw;
  height: 25vw;
  /* float: left; */
  display: inline-block;
  padding: 20px;
}
.chart iframe {
  background: #ffffff;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 10px 0 rgba(70, 76, 79, 0.2);
}
</style>
