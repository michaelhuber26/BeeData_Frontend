<template>
  <div>
    <h1>Data from MongoDB:</h1>
    <p class="error" v-if="error">{{ error }}</p>
    <button @click="allCol = !allCol">Show/Hide all Columns</button>
    <table class="styled-table">
      <thead>
        <tr>
          <th v-show="allCol">ID (in DB)</th>
          <th v-show="allCol">Node</th>
          <th>Temp [°C]</th>
          <th>Luftfeuchte [%]</th>
          <th>Luftdruck [hPa]</th>
          <th>Messzeitpunkt</th>
          <th>Messdatum</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in data.slice().reverse()"
          v-bind:item="data"
          v-bind:key="data._id"
        >
          <td v-show="allCol">{{ data._id }}</td>
          <td v-show="allCol">{{ data.device_id }}</td>
          <td>{{ data.temp }}</td>
          <td>{{ data.hum }}</td>
          <td>{{ data.press / 1000 }}</td>
          <td>
            <!-- Damit zb 16:05 richtig dargestellt wird (sonst 16:5) -->
            {{
              ("0" + new Date(data.time).getHours()).slice(-2) +
                ":" +
                ("0" + new Date(data.time).getMinutes()).slice(-2)
            }}
          </td>

          <td>
            <!-- Damit zb 01.01.2020 so dargestellt (sonst 1.1.2020) -->
            {{
              ("0" + new Date(data.time).getDate()).slice(-2) +
                "." +
                ("0" + new Date(data.time).getMonth()).slice(-2) +
                "." +
                new Date(data.time).getFullYear()
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from "../DataService.js";

export default {
  name: "DataTable",
  data() {
    return {
      data: [],
      error: "",
      text: "",
      allCol: false,
    };
  },
  async created() {
    try {
      this.data = await DataService.getData();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  font-family: sans-serif;
  /* min-width: 45%; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #dbcb35;
  color: #ffffff;
  text-align: center;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: thin solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #f3e34c;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #f3e34c;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.63em;
    font-family: sans-serif;
    /* min-width: 45%; */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table th,
  .styled-table td {
    padding: 7px 10px;
  }
  h1 {
    font-size: 50px;
  }
}
</style>
