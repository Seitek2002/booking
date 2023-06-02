<template>
  <section class="review">
    <div class="container">
      <div class="review__content">
        <h2>Отзывы о сервисе</h2>
        <swiper :slides-per-view="3" :navigation="true" :modules="[Navigation]">
          <swiper-slide v-for="item in items" :key="item">
            <div class="slider__box">
              <div class="slider__rate">
                <div class="slider__num">{{ item.rateNum }}</div>
                <div class="slider__rate-word">{{ item.rateWord }}</div>
              </div>
              <p class="slider__content">
                {{ item.text }}
              </p>
              <div class="slider__author">{{ item.author }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'

const items = ref([
  {
    rateNum: 10,
    rateWord: 'Отлично',
    text: 'Понятный сайт, не требует регистрации, есть эл.регистрация и моментальная реакция ( на почту приходит квитанция). Очень приятно',
    author: 'Jacob191006',
  },
  {
    rateNum: 10,
    rateWord: 'Отлично',
    text: 'Мне понравилось,что всё быстро и без очередей! Спасибо!',
    author: 'velm-pavel',
  },
  {
    rateNum: 10,
    rateWord: 'Отлично',
    text: 'Добрый день ! Ну что могу сказать друзя очень удобно и все понятно легко покупать и безопасно советую всем',
    author: 'ibragimpank',
  },
  {
    rateNum: 8,
    rateWord: 'Хорошо',
    text: 'Скорее да, потому что сервис удобен,почему 8 а не 10 это по причине что ещё не всё услуги сервиса знакомы,езжу мало пока.',
    author: 'alexeitolkachev',
  },
  {
    rateNum: 10,
    rateWord: 'Отлично',
    text: 'Сервис очень удобный, все просто и понятно. Много раз уже пользовалась, все работает исправно.',
    author: 'elen.zarubina2012',
  },
  {
    rateNum: 10,
    rateWord: 'Отлично',
    text: 'Меня, как пенсионера, устроила цена на билеты. Спасибо, что есть такой сайт. Буду советовать своим друзьям и знакомым.',
    author: 'skorobogatko25',
  },
])
</script>

<style lang="scss">
.review {
  overflow: hidden;
  margin-top: 150px;

  &__content {
    width: 80%;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 40px;
  }

  & .swiper {
    width: 90%;
    margin: 0 auto;
    overflow: visible;

    &-button-prev {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 100%;

      &::after {
        font-size: 20px;
        color: #000;
      }
    }

    &-button-next {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 100%;
      &::after {
        font-size: 20px;
        color: #000;
      }
    }
  }

  .slider {
    &__rate {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__box {
      min-height: 150px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 411px;
    }

    &__rate-word {
      font-size: 12px;
      font-weight: 500;
    }

    &__num {
      background-color: #ffd41e;
      border-radius: 2px;
      font-size: 13px;
      padding: 2px 5px;
    }

    &__content {
      margin: 15px 0;
      font-size: 14px;
      line-height: 1.43;
    }

    &__author {
      font-size: 12px;
      font-weight: 400;
      color: #9e9e9e;
    }
  }
}
</style>
