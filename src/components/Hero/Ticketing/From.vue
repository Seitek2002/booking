<template>
  <div @click="isShow = !isShow" class="wrapper" ref="dropdown">
    <input type="text" placeholder="Откуда" v-model="fromVal" />
    <svg class="pPjQI fYKcE" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill-rule="evenodd"
        d="M7.8 8.8l1.7 1.7a.8.8 0 0 1-1 1l-3-3a.8.8 0 0 1 0-1l3-3a.8.8 0 0 1 1 1L7.8 7.3H16c1.7 0 2.8 1 2.8 2.7a.8.8 0 1 1-1.5 0c0-1-.4-1.3-1.3-1.3H7.8zm8.4 6.4l-1.7-1.7a.8.8 0 0 1 1-1l3 3a.8.8 0 0 1 0 1l-3 3a.8.8 0 0 1-1-1l1.7-1.8H8c-1.7 0-2.8-1-2.8-2.7a.8.8 0 1 1 1.5 0c0 1 .4 1.3 1.3 1.3h8.2z"
      ></path>
    </svg>
    <div v-if="isShow" class="dropdown">
      <div class="dropdown__select">
        <p v-for="item in filteredItems" :key="item" @click="fromVal = item">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            class="PnklW"
          >
            <path
              fill-rule="evenodd"
              d="M12 3c3.314 0 6 2.389 6 6 0 2.407-2 6.074-6 11-4-4.926-6-8.593-6-11 0-3.611 2.686-6 6-6zm0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
            ></path>
          </svg>
          {{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

const dropdown = ref(null)

const isShow = ref(false);
const fromVal = ref("")

const items = [
    "Бишкек",
    "Ош",
    "Иссык-Куль",
    "Баткен",
];
const filteredItems = ref(items);

onClickOutside(dropdown, () => isShow.value = false)

</script>

<style lang="scss"></style>
