<script setup lang="ts">
import Chart from './components/Chart.vue'
import CPC from './components/CPC.vue'
</script>

<template>
    <div>
        <div class="row">
            <img src="../public/favicon.png" width="100" />
        </div>
        <Chart />
        <CPC />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
}
.row {
    display: flex;
    width:100%;
    justify-content: center;
}
</style>
