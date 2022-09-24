<template>
    <div>
      <form id="costform" @submit.prevent="fetchCost">
        <h3>Enter an ID to see its cost per click</h3>
        <div class="inputContainer">
          <input type="text" name="campaignId" v-model="campaignId" placeholder="Enter ID Here">
        </div>
        <div class="inputContainer">
          <input type="submit" value="Get Cost">
        </div>
      </form>
      <div v-if="submitted"><h3>{{costDisplay}}</h3></div>
    </div>
  </template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from "vue";

export default defineComponent({
  name: "CPC",
  data() {
    return {
      campaignId: "",
      submitted: false,
      costDisplay: "",
    };
  },
  methods: {
    async fetchCost() {
      const { campaignId } = this;
      this.submitted = true;
      this.costDisplay = "Fetching data..."
      axios.get(`http://localhost:3000/campaigns/get-cost-per-click/${campaignId}`)
        .then((response) => {
          this.costDisplay = (response.data.cost === null) ? "Data not found for this ID." : response.data.cost.toString()
        })
        .catch((e: any) => {
          console.log(e);
          this.costDisplay = "Data not found for this ID."
        })
    }
  }
});
</script>

<style scoped>
  #costform{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
  }
  .inputContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    align-content: center;
  }
  input[type=text] {
    padding: 10px;
  }
  input[type=submit] {
    width: 400px;
    background-color: green;
    color: white;
    padding: 10px;
    border: 0;
  }
</style>