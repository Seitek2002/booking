<template>
  <div class="wrapper">
    <input type="text" placeholder="Когда" id="departure" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

onMounted(() => {
    new AirDatepicker("#departure");
})

</script>

<style lang="scss">

</style>
