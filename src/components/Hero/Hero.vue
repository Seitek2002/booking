<template>
  <section class="hero" :style="`background: url('${currentTab.img}') center; background-size: cover;`">
    <div class="hero__wrapper">
      <div class="container">
        <div class="hero__content">
          <div class="hero__tabs">
            <div v-for="tab in tabs" :key="tab.tab" class="hero__tab" :class="{active: currentTab.tab === tab.tab}" @click="currentTab = tab">
              {{ tab.tab }}
            </div>
          </div>
          <Ticketing :currentTab="currentTab.tab" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Ticketing from "./Ticketing/Ticketing.vue";

const tabs = ref([
  {
    tab: "Автобусы",
    img: "https://static.onetwotrip.com/images/index/cover/main_cover_bus.jpg"
  },
  {
    tab: "Ж/Д Билеты",
    img: "https://static.onetwotrip.com/images/index/cover/main_cover_train.jpg"
  },
])

const currentTab = ref({
  tab: "Автобусы",
  img: "https://static.onetwotrip.com/images/index/cover/main_cover_bus.jpg"
});

</script>

<style lang="scss">
.hero {
  &__wrapper {
    background-image: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),linear-gradient(rgba(48,79,109,.5),rgba(48,79,109,.5));
    height: 100%;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding-top: 180px;
    padding-bottom: 180px;
  }

  &__tabs {
    display: flex;
    gap: 16px;
    width: 90%;
    margin: 0 auto;
  }

  &__tab {
    cursor: pointer;
    text-transform: uppercase;
    padding: 0 15px;
    padding-bottom: 11px;
    color: #fff;

    &.active {
      color: #ffd600;
      border-bottom: 5px solid #ffd600;
    }
  }
}
</style>
