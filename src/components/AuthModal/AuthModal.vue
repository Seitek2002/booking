<template>
  <section class="auth">
    <h2>Вход в личный кабинет</h2>
    <div class="auth__content">
      <LoginAndPassword />
      <ESI />
      <Scaner />
    </div>
  </section>
</template>

<script setup>
import ESI from './Auth/ESI.vue'
import LoginAndPassword from './Auth/LoginAndPassword.vue'
import Scaner from './Auth/Scaner.vue'
</script>

<style lang="scss">

.auth {
  max-width: 520px;
  box-sizing: border-box;
  margin: 80px auto;
  background: #fff;
  padding: 30px;
  border-radius: 15px;

  @media screen and (max-width: 991px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 520px) {
    width: 90%;
  }
  h2 {
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    color: #24334b;
    @media screen and (max-width: 456px) {
      font-size: 24px;
    }
  }

  &__content {
    margin-top: 50px;
  }

  button.btn {
    width: 100%;
  }
}
</style>
