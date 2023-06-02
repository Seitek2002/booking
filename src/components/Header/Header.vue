<template>
  <header class="header">
    <div class="container">
        <div class="header__content">
            <a class="header__logo" href="#">
                <img src="https://joldor.gov.kg/uploads/logotok.png" alt="logo">
            </a>
            <nav>
                <div class="header__nav">
                    <Dropdown title="Сервисы" :options="[
                        'Подарочные сертификаты',
                        'Хочу на море',
                        'Горнолыжные курорты',
                        'Где ты был',
                    ]" />
                </div>
                <div class="header__nav">
                    <Dropdown title="Путешествуйте чаще" :options="[
                        'Персональные предложения',
                        'Награды',
                        'Кудаблин',
                        'Блог',
                        'Ребусы',
                        'Спецпроекты',
                    ]" />
                </div>
                <div class="header__nav">
                    <Dropdown title="Поддержка 24/7" :options="[
                        'Вопрос-Ответ',
                        'Контакты',
                    ]" />
                </div>
                <div class="header__nav">
                    <button class="header__btn">
                        Личный кабинет
                    </button>
                </div>
                <div class="header__nav"></div>
            </nav>
        </div>
    </div>
  </header>
</template>

<script setup>
import Dropdown from "./Dropdown/Dropdown.vue"


</script>

<style lang="scss">
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