<template>
  <div class="ticketing">
    <form @submit.prevent class="ticketing__form">
      <From />
      <To />
      <WhenFrom />
      <WhenTo />
      <Qnty />
    </form>
    <button class="ticketing__btn">Найти</button>
  </div>
</template>

<script setup>
import From from './From.vue'
import To from './To.vue'
import WhenFrom from './WhenFrom.vue'
import WhenTo from './WhenTo.vue'
import Qnty from './Qnty.vue'
</script>

<style lang="scss">
.ticketing {
  display: flex;
  gap: 10px;
  border-radius: 8px;
  margin: 0 auto;

  &__form {
    display: flex;
  }

  &__btn {
    background: #01abfb;
    font-size: 16px;
    color: #fff;
    border: 3px solid #01abfb;
    padding: 0 16px;
  }

  .wrapper {
    display: flex;
    background: #fff;
    align-items: center;
    position: relative;

    input {
      background: transparent;
      border: none;
      padding: 11px;
      outline: none;
    }

    .dropdown {
        position: absolute;
        padding: 15px;
        background: #fff;
        top: 100%;
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

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
    }
  }
}
</style>
