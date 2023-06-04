<template>
  <header class="header">
    <div class="container">
        <div class="header__content">
            <a class="header__logo" href="#">
                <img src="https://joldor.gov.kg/uploads/logotok.png" alt="logo">
            </a>
            <nav>
                <div class="header__nav">
                    Сервисы
                </div>
                <div class="header__nav">
                    Путешествуйте чаще
                </div>
                <div class="header__nav">
                    Поддержка 24/7
                </div>
                <div class="header__nav">
                    <button @click="isShow = true" class="header__btn">
                        Личный кабинет
                    </button>
                </div>
            </nav>
        </div>
    </div>
  </header>
  <div v-if="isShow" class="modal">
    <AuthModal />
    <div @click="isShow = false" class="close">x</div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import AuthModal from "../AuthModal/AuthModal.vue"

const isShow = ref(false);
</script>

<style lang="scss">
.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
}

.close {
    position: absolute;
    right: 30px;
    top: 30px;
    color: #ccc;
    font-size: 40px;
    cursor: pointer;
}

.header {
    position: absolute;
    width: 100%;
    top: 30px;

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        img {
            width: 50px;
        }
    }

    nav {
        display: flex;
        align-items: center;
        gap: 25px;
        color: #fff;
    }

    &__btn {
        background-color: hsla(0,0%,100%,.1);
        border: none;
        border-radius: 4px;
        padding: 16px;
        color: #fff;
        transition: .3s;

        &:hover {
            background-color: hsla(0,0%,100%,.3);
        }
    }
}
</style>