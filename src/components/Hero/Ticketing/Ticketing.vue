<template>
  <div class="ticketing">
    <div v-if="isLoading" class="loader">
      <LoaderTrain v-if="currentTab === 'Ж/Д Билеты'" />
      <LoaderBus v-if="currentTab === 'Автобусы'" />
      <p>
        Загрузка...
      </p>
    </div>
    <form @submit.prevent class="ticketing__form">
      <From />
      <To />
      <WhenFrom />
      <Qnty />
    </form>
    <button @click="handleSubmit" class="ticketing__btn">Найти</button>
  </div>
</template>

<script setup>
import From from './From.vue'
import To from './To.vue'
import WhenFrom from './WhenFrom.vue'
import WhenTo from './WhenTo.vue'
import Qnty from './Qnty.vue'
import LoaderTrain from '../LoaderTrain.vue'
import LoaderBus from '../LoaderBus.vue'
import { ref } from 'vue'

defineProps(["currentTab"])

const isLoading = ref(false);

const handleSubmit = () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<style lang="scss">
.ticketing {
  display: flex;
  gap: 10px;
  border-radius: 8px;
  width: 90%;
  margin: 0 auto;

  &__form {
    display: flex;
    flex: 1;

    input {
      width: 100%;
    }
  }

  &__btn {
    background: #01abfb;
    font-size: 24px;
    color: #fff;
    border: 3px solid #01abfb;
    padding: 0 16px;
  }

  .wrapper {
    display: flex;
    background: #fff;
    align-items: center;
    position: relative;
    width: 100%;

    input {
      background: transparent;
      border: none;
      padding: 20px;
      outline: none;
    }

    .dropdown {
      position: absolute;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      top: 100%;
      width: 100%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      z-index: 11;

      &__select {
        display: flex;
        flex-direction: column;
        gap: 10px;

        p {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;

          svg {
            opacity: 0.5;
          }
        }
      }

      &__qnty {
        display: flex;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      &__val {
        flex: 1;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__plus,
      &__minus {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
