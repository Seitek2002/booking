<template>
  <header class="result-header">
    <div class="container">
      <div class="result-header__content">
        <div class="result-header__left">
          <a href="#" @click.prevent="router.push('/')" class="result-header__logo">
            <img src="https://joldor.gov.kg/uploads/logotok.png" alt="logo" />
          </a>
          <div class="result-header__tabs">
            <div
              v-for="tab in tabs"
              :key="tab"
              @click="currentTab = tab, router.push(`${tab.path}`)"
              class="result-header__tab"
              :class="{ active: currentTab.tab === tab.tab }"
            >
              {{ tab.tab }}
            </div>
          </div>
        </div>

        <nav class="result-header__nav">
          <div class="result-header__nav-item">Бонусы</div>
          <div class="result-header__nav-item">Поддержка</div>
          <div class="result-header__nav-item">Мой заказ</div>
          <div v-if="route.path !== '/own-room'" class="result-header__nav-item">
            <button>Войти</button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const route = useRoute()

const tabs = ref([
  {
    tab: 'Автобусы',
    path: "/result-bus",
    img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  },
  {
    tab: 'Ж/Д Билеты',
    path: "/result",
    img: 'https://images.unsplash.com/photo-1515165562839-978bbcf18277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
])

const currentTab = ref({
  tab: 'Автобусы',
  img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
})
</script>

<style lang="scss">
.result-header {
  background: #212121;
  padding: 15px 0;

  &__content {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }

  &__logo {
    img {
      width: 50px;
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__tabs {
    display: flex;
    align-items: center;
    gap: 16px;
    text-transform: uppercase;
  }

  &__tab {
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    padding: 8px;
    border-radius: 2px;
    cursor: pointer;

    &.active {
      background-color: rgba($color: #fff, $alpha: 0.1);
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 16px;

    &-item {
      font-size: 12px;
      color: #fff;

      button {
        background-color: hsla(0, 0%, 100%, 0.1);
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        padding: 10px 16px;
      }
    }
  }
}
</style>
