<template>
  <section class="date-slider">
    <div class="container">
      <div class="date-slider__content">
        <swiper :slides-per-view="5" :navigation="true" :modules="[Navigation]">
          <swiper-slide v-for="(slide, i) in slides" :key="i">
            <div class="date-slider__item">
              <div class="date-slider__info">
                <div class="date-slider__price">{{ slide.price }}</div>
                <div class="date-slider__date">{{ slide.date }}</div>
              </div>
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

const slides = ref([
    {
      date: "10 июн, сб",
      price: "1 172 с"
    },
    {
      date: "11 июн, вс",
      price: "2 172 с"
    },
    {
      date: "12 июн, пн",
      price: "3 172 с"
    },
    {
      date: "13 июн, вт",
      price: "4 172 с"
    },
    {
      date: "14 июн, ср",
      price: "5 172 с"
    },
    {
      date: "15 июн, чт",
      price: "6 172 с"
    },
    {
      date: "16 июн, пт",
      price: "7 172 с"
    },
    {
      date: "17 июн, сб",
      price: "8 172 с"
    },
    {
      date: "18 июн, вс",
      price: "9 172 с"
    },
    {
      date: "19 июн, пн",
      price: "10 172 с"
    },
])
</script>

<style lang="scss">
.date-slider {
  &__content {
    display: flex;
    width: 56%;
    margin: 0 auto;
  }

  &__item {
    width: 160px;
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__info {
    text-align: center;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }

  &__price {
    font-size: 16px;
  }

  &__date {
    color: #888;
    font-size: 11px;
    line-height: 12px;
    text-transform: uppercase;
    margin-top: 4px;
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    width: auto !important;
  }

  .swiper-button-next:after, .swiper-button-prev:after {
    color: #212121;
    font-size: 16px;
  }
}
</style>
