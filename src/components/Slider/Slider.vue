<template>
  <div class="slider-news">
    <div class="container">
      <swiper :slides-per-view="4" :navigation="true" :modules="[Navigation]">
        <swiper-slide v-for="(slide, i) in slides" :key="i">
          <div class="slider-news__box" :style="slide.bg">
            <div class="slider-news__content" :style="slide.bgBox">
              <div class="slider-news__top">
                <img v-if="slide.icon" :src="slide.icon" alt="" />
              </div>
              <div class="slider-news__info" :style="slide.textColor">
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.description }}</p>
              </div>
              <div class="slider-news__bottom">
                <button :style="slide.btnColor">Подробнее</button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { ref } from 'vue'

const slides = ref([
  {
    title: 'Дарим семейное путешествие',
    description: 'В лучший отель для отдыха с детьми',
    icon: '',
    bg: 'background: url(https://static.onetwotrip.com/images/stories/main/1june2023.jpg) center; background-size: cover;',
    btnColor: 'color: #fff;',
    textColor: 'color: #fff;',
    bgBox: 'background: rgba(0,0,0,0.5);',
  },
  {
    title: 'Бронируйте командировки',
    description: 'Подключитесь к OneTwoTrip for Business бесплатно',
    icon: 'https://static.onetwotrip.com/images/b2b/b2b+black.svg',
    bg: 'background: #fff;',
    btnColor: 'color: #212121; background-color: rgba(33,33,33,.1);',
    textColor: 'color: #212121;',
  },
  {
    title: 'Новости о снятии тревел-ограничений',
    description: 'В нашем Telegram',
    icon: '',
    bg: 'background: url(https://static.onetwotrip.com/images/stories/main/telegram_3_place.jpg); background-size: cover;',
    btnColor: 'color: #fff;',
    textColor: 'color: #fff;',
    bgBox: 'background: rgba(0,0,0,0.5);',
  },
  {
    title: 'OneTwoTrip в ПОМОЩЬ',
    description: 'Тревел-партнёр благотворительного проекта',
    // icon: "https://static.onetwotrip.com/images/b2b/b2b+black.svg",
    bg: 'background: #ffd41e;',
    btnColor: 'color: #212121; background-color: rgba(33,33,33,.1);',
    textColor: 'color: #212121;',
  },
  {
    title: 'В приложении дешевле',
    description: 'Скачайте приложение по ссылке, и мы начислим вам дополнительные 50 трипкоинов.',
    icon: 'https://static.onetwotrip.com/images/loyalty/personal_offers/icons/mobile_black.svg',
    bg: 'background: #fff;',
    btnColor: 'color: #212121; background-color: rgba(33,33,33,.1);',
    textColor: 'color: #212121;',
  },
  {
    title: 'Трипкоины на бесплатные путешествия',
    description: 'Возвращайте до 15% с каждого бронирования',
    icon: 'https://static.onetwotrip.com/images/loyalty/personal_offers/icons/coins_black.svg',
    bg: 'background: #fff;',
    btnColor: 'color: #212121; background-color: rgba(33,33,33,.1);',
    textColor: 'color: #212121;',
  },
])
</script>

<style lang="scss">
.slider-news {
  overflow: hidden;
  margin-top: -100px;

  & .swiper {
    width: 90%;
    margin: 0 auto;
    overflow: visible;

    &-button-prev {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 100%;
      box-shadow: 0 12px 20px 0 rgba(0,0,0,.1);

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
      box-shadow: 0 12px 20px 0 rgba(0,0,0,.1);

      &::after {
        font-size: 20px;
        color: #000;
      }
    }
  }

  &__info {
    h2 {
      font-size: 21px;
    }

    p {
      opacity: 0.85;
      margin-top: 8px;
    }
  }

  &__box {
    height: 340px;
    max-width: 300px;
    border-radius: 10px;
  }

  &__content {
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.2);
  }

  &__bottom {
    button {
      background-color: hsla(0, 0%, 100%, 0.1);
      border: none;
      width: 100%;
      padding: 10px;
    }
  }
}
</style>
