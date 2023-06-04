<template>
  <ResultHeader />
  <DateSlider />
  <section class="result-bus">
    <div class="container">
      <div class="result-bus__content">
        <div class="result-bus__item">
          <div class="result-bus__item-header">
            <div class="result-bus__item-schedule">
              <div class="result-bus__item-time">
                <span class="result-bus__item-clock">00:20</span>
                <div class="line"></div>
                <span class="result-bus__item-timer">8 ч 33 мин</span>
                <div class="line"></div>
                <span class="result-bus__item-clock">08:53</span>
              </div>
              <div class="result-bus__item-city">
                <span>Бишкек</span>
                <span>Москва</span>
              </div>
            </div>
            <div class="result-bus__item-owner">
              <div>Перевозчик: ИП Горбунов А.А.</div>
              <div>Автобус: Большой</div>
            </div>
            <div class="result-bus__item-info">
              <div>
                <div class="result-bus__item-price">1 212 с</div>
                <div class="result-bus__item-places">Осталось 7 мест</div>
              </div>
              <button>Выбрать</button>
            </div>
          </div>
          <div class="result-bus__item-route">
            <div class="result-bus__item-decor"></div>
            <div class="result-bus__item-cities">
                <p>Аэропорт Шереметьево, Городской округ Химки, Аэропорт Шереметьево</p>
                <p>ул. П. Савельевой, 41/2, улица Паши Савельевой, дом 41/2</p>
            </div>
          </div>
          <div class="result-bus__item-race">
            Рейс:  Москва — Тверь
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ResultHeader from '@/components/Header/ResultHeader.vue'
import DateSlider from '@/components/DateSlider/DateSlider.vue'
</script>

<style lang="scss">
.result-bus {
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;

  &__item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    width: 80%;
    margin: 0 auto;

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #e8e8e8;
    }

    &-time {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 5px 0;
    }

    &-clock {
      color: #000;
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    }

    .line {
      flex: 1;
      background: #ccc;
      height: 1px;
      min-width: 32px;
      margin: 0 15px;
    }

    &-timer {
      color: #888;
      font-size: 12px;
      text-align: center;
    }

    &-city {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #888;
      font-size: 12px;
      line-height: 16px;
    }

    &-owner {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    button {
      height: 36px;
      margin-top: 8px;
      padding: 0 16px;
      color: #fff;
      background-color: #01abfb;
      border: 1px solid #01abfb;
      border-radius: 4px;
    }

    &-info {
      text-align: right;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &-price {
      font-size: 21px;
      font-weight: 700;
    }

    &-places {
      color: #e74c3c;
      font-size: 12px;
    }

    &-decor {
        background: #000;
        width: 1px;
        height: 20px;
    }

    &-cities {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
    }

    &-route {
        display: flex;
        align-items: center;

        p {
            font-size: 12px;
            padding-left: 14px;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                width: 5px;
                height: 5px;
                background: #212121;
                left: -3px;
                top: 25%;
                border-radius: 100%;
            }
        }
    }

    &-race {
        color: #888;
        font-size: 12px;
        margin-top: 8px;
    }
  }
}
</style>
