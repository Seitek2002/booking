<template>
  <div class="dropdown">
    <div @click="isActive = !isActive" class="dropdown__title" ref="dropdownRef">
        {{ title }}
        <svg :class="{active: isActive}" class="SQGwK" width="10" height="6" viewBox="0 0 24 14.8" fill="#222" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M2.8,0L12,9.2L21.2,0L24,2.8l-12,12L0,2.8L2.8,0z"></path></g></svg>
    </div>
    <div v-if="isActive" class="dropdown__select">
        <div v-for="option in options" :key="option" class="dropdown__option">
            {{ option }}
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from '@vueuse/core'

defineProps(["title", "options"]);
const isActive = ref(false)
const dropdownRef = ref(null)
onClickOutside(dropdownRef, () => isActive.value = false)
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;

    &__title {
        color: #fff;
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;

        svg {
            transition: .3s;
        }

        svg.active {
            transform: rotate(180deg);
        }
    }

    &__select {
        background: #fff;
        padding: 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        top: 30px;
        z-index: 10;
    }

    &__option {
        font-size: 12px;
        cursor: pointer;
    }
}
</style>