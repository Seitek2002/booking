<template>
  <section class="hero">
    <div class="hero__wrapper">
      <div class="container">
        <div class="hero__content">
          <Ticketing />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Ticketing from "./Ticketing/Ticketing.vue";

</script>

<style lang="scss">
.hero {
  background: url('https://images.unsplash.com/photo-1527839321757-ad3a2f2be351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')
    center;
  background-size: cover;

  &__wrapper {
    background-image: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),linear-gradient(rgba(48,79,109,.5),rgba(48,79,109,.5));
    height: 100%;
    width: 100%;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 180px;
    padding-bottom: 180px;
  }
}
</style>
