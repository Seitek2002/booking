<template>
  <div @click="isShow = !isShow" class="wrapper" ref="dropdown">
    <input type="text" placeholder="Откуда" v-model="fromVal" />
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
