<template>
  <section class="date-slider">
    <div class="container">
      <div class="date-slider__content">
        <swiper :slides-per-view="5" :navigation="true" :modules="[Navigation]">
          <swiper-slide v-for="(slide, i) in slides" :key="i">
            <div class="date-slider__item">
              <div class="date-slider__info">
                <div class="date-slider__price">1 172 с</div>
                <div class="date-slider__date">10 июн, сб</div>
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
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
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
