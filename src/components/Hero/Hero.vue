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
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    tab: "Ж/Д Билеты",
    img: "https://images.unsplash.com/photo-1527839321757-ad3a2f2be351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
])

const currentTab = ref({
  tab: "Автобусы",
  img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
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
