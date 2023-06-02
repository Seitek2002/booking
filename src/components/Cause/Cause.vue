<template>
  <section class="cause">
    <div class="container">
      <h2 class="cause__title">Причины купить ж/д билеты у нас</h2>
      <div class="cause__content">
        <div class="cause__box">
          <div class="cause__icon">
            <img src="https://s3.eu-central-1.amazonaws.com/ott-static/images/index/bulletedList_world-1.svg" alt="" />
          </div>
          <div class="cause__details">
            <h3>Ж/д билеты по СНГ</h3>
            <p>Покупайте железнодорожные билеты на поезда на OneTwoTrip. Больше не надо ходить в кассу.</p>
          </div>
        </div>
        <div class="cause__box">
          <div class="cause__icon">
            <img src="https://s3.eu-central-1.amazonaws.com/ott-static/images/index/bulletedList_route.svg" alt="" />
          </div>
          <div class="cause__details">
            <h3>Скидки на ж/д билеты</h3>
            <p>Отслеживайте все скидки и акции ЖД. Помогаем купить билет дешевле.</p>
          </div>
        </div>
        <div class="cause__box">
          <div class="cause__icon">
            <img src="https://s3.eu-central-1.amazonaws.com/ott-static/images/index/bulletedList_mobileApp.svg" alt="" />
          </div>
          <div class="cause__details">
            <h3>Ж/д билеты по России и СНГ</h3>
            <p>Смотрите расписание поездов, наличие мест и цены на сайте или в мобильном приложении.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.cause {
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;

  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  &__icon {
    img {
      width: 68px;
      height: 68px;
    }
  }

  &__content {
    display: flex;
    gap: 24px;
  }

  &__box {
    display: flex;
    align-items: center;
    width: 33%;

    h3 {
      color: #212121;
      font-size: 16px;
      font-weight: 400;
    }

    p {
      color: #888;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
