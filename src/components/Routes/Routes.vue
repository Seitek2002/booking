<template>
  <section class="routes">
    <div class="container">
      <h2>Билеты на поезд по популярным направлениям</h2>
      <div class="routes__content">
        <swiper :slides-per-view="2" :space-between="16" :navigation="true" :modules="[Navigation]">
          <swiper-slide v-for="item in items" :key="item.title">
            <div class="routes__col">
              <h3>{{ item.title }}</h3>
              <div v-for="route in item.routes" :key="route" class="routes__item">
                <span>{{ route }}</span>
                <img
                  class="_0b0Z-"
                  src="https://static.onetwotrip.com/images/index/arrow_right_icon.svg"
                  alt="arrow-icon"
                />
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

const items = ref([
  {
    title: 'Ж/Д Направления',
    routes: ['Кара-Балта – Беловодское', 'Беловодское – Сокулук', 'Сокулук – Бишкек', 'Бишкек – Кант', 'Бишкек – Токмок', 'Бишкек – Чон – Кемин', 'Бишкек – Балыкчы'],
  },
  {
    title: 'Автобусные Направления',
    routes: ['Бишкек – Талас', 'Бишкек – Балыкчы', 'Бишкек – Чолпон – Ата', 'Бишкек – Бостери', 'Бишкек – Нарын', 'Бишкек – Каракол'],
  },
  {
    title: 'Международные автобусные направления',
    routes: ['Бишкек – Алматы', 'Бишкек – Ташкент', 'Бишкек – Астана', 'Бишкек – Казань', 'Бишкек – Екатеринбург', 'Бишкек – Москва', 'Бишкек - Омск'],
  },
])
</script>

<style lang="scss">
.routes {
  width: 80%;
  margin: 150px auto;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }

  h3 {
    color: #888;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 24px;
    min-height: 20px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 8px;
    color: #212121;
    padding: 14px 22px;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .swiper {
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
}
</style>
