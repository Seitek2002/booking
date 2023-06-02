<template>
  <div @click="isShow = true" class="wrapper" ref="dropdown">
    <div class="dropdown__title">
      {{ person }} {{ person > 1 ? "человека" : "человек" }}
    </div>
    <div v-if="isShow" class="dropdown">
      <div class="dropdown__select">
        <div class="dropdown__qnty">
          <div @click="decrement" class="dropdown__minus">
            -
          </div>
          <div class="dropdown__val">
            {{ person }} {{ person > 1 ? "человека" : "человек" }}
          </div>
          <div @click="increment" class="dropdown__plus">
            +
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const dropdown = ref(null)

const isShow = ref(false)
const qntyVal = ref('')

const person = ref(1);

onClickOutside(dropdown, () => (isShow.value = false))

const increment = () => {
  if(person.value === 1 || person.value < 4) {
    person.value++
  }
}

const decrement = () => {
  if(person.value !== 1) {
    person.value--
  }
}
</script>

<style lang="scss"></style>
