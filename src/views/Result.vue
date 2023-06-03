<template>
  <section class="result">
    <div class="container">
      <div class="result__content">
        <div class="result__item">
          <div class="result__left">
            <h2>020У</h2>
            <div class="result__route">Бишкек-Москва</div>
            <div class="result__data">
              <span>4 июн</span>
              <span>4 июн</span>
            </div>
            <div class="result__time">
              <span class="result__clock">00:20</span>
              <div class="line"></div>
              <span class="result__timer">8 ч 33 мин</span>
              <div class="line"></div>
              <span class="result__clock">08:53</span>
            </div>
            <div class="result__city">
              <span>Бишкек</span>
              <span>Москва</span>
            </div>
          </div>
          <div class="result__right">
            <div class="result__rate">
              <span class="result__num">4.5</span>
              <span class="result__text">Пассажирам нравится дружелюбие персонала</span>
            </div>
            <div class="result__choose">
              <div class="result__option">
                <span class="ask">Купе</span>
                <span class="place">80 мест</span>
                <span class="price">от 5 267 с</span>
              </div>
              <div class="result__option">
                <span class="ask">СВ</span>
                <span class="place">16 мест</span>
                <span class="price">от 8 463 с</span>
              </div>
            </div>
          </div>
          <div class="result__end">
            <div class="result__price">от 5 267 с</div>
            <div class="result__bonus">
              за 1 пассажира
              <br />
              +105 трипкоинов
            </div>
            <button class="result__btn">Выбрать</button>
          </div>
        </div>
        <div class="result__item">
          <div class="result__left">
            <h2>020У</h2>
            <div class="result__route">Бишкек-Москва</div>
            <div class="result__data">
              <span>4 июн</span>
              <span>4 июн</span>
            </div>
            <div class="result__time">
              <span class="result__clock">00:20</span>
              <div class="line"></div>
              <span class="result__timer">8 ч 33 мин</span>
              <div class="line"></div>
              <span class="result__clock">08:53</span>
            </div>
            <div class="result__city">
              <span>Бишкек</span>
              <span>Москва</span>
            </div>
          </div>
          <div class="result__right">
            <div class="result__rate">
              <span class="result__num">4.5</span>
              <span class="result__text">Пассажирам нравится дружелюбие персонала</span>
            </div>
            <div class="result__choose">
              <div class="result__option">
                <span class="ask">Купе</span>
                <span class="place">80 мест</span>
                <span class="price">от 5 267 с</span>
              </div>
              <div class="result__option">
                <span class="ask">СВ</span>
                <span class="place">16 мест</span>
                <span class="price">от 8 463 с</span>
              </div>
            </div>
          </div>
          <div class="result__end">
            <div class="result__price">от 5 267 с</div>
            <div class="result__bonus">
              за 1 пассажира
              <br />
              +105 трипкоинов
            </div>
            <button class="result__btn">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.result {
  width: 70%;
  margin: 0 auto;
  padding: 150px 0;

  &__item {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 1px 0 rgba(0, 0, 0, 0.2);
    margin: 20px;
  }

  &__data {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #888;
    font-size: 12px;
    line-height: 16px;
  }

  &__left {
    width: 40%;

    h2 {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }

  &__right {
    width: 34%;
  }

  &__route {
    color: #888;
    font-size: 12px;
    font-weight: 400;
    margin: 10px 0;
  }

  &__time {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px 0;
  }

  &__clock {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  .line {
    flex: 1;
    background: #ccc;
    height: 1px;
    margin: 0 15px;
  }

  &__timer {
    color: #000;
    font-size: 12px;
    text-align: center;
  }

  &__city {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #888;
    font-size: 12px;
    line-height: 16px;
  }

  &__rate {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    margin-bottom: 40px;
  }

  &__num {
    background-color: #ffd41e;
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 4px;
  }

  &__option {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 4px 8px;

    .place {
      color: #888;
    }

    .price {
      color: #01abfb;
    }
  }

  &__end {
    text-align: right;
    width: 16%;
  }

  &__price {
    font-size: 21px;
    font-weight: 500;
    color: #212121;
  }

  &__bonus {
    color: #888;
    font-size: 12px;
    line-height: 16px;
    margin: 10px 0;
  }

  &__btn {
    height: 36px;
    margin-top: 8px;
    padding: 0 16px;
    color: #fff;
    background-color: #01abfb;
    border: 1px solid #01abfb;
    border-radius: 4px;
  }
}
</style>
