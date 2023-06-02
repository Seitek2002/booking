<template>
  <div class="wrapper">
    <input type="text" placeholder="Прилет" id="arrival" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

onMounted(() => {
    new AirDatepicker("#arrival");
})

</script>

<style lang="scss">

</style>
