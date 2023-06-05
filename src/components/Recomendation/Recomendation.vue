<template>
  <section class="recomendation">
    <div class="container">
      <div class="recomendation__content">
        <div class="recomendation__info">
          <h2>Скачайте приложение</h2>
          <p>Отсканируйте QR-код и получайте двойные бонусы за покупку билетов и бронирование отелей</p>
          <div class="recomendation__icons">
            <img src="https://static.onetwotrip.com/images/index/mobileApp/app_store_desktop.svg" alt="" />
            <img src="https://static.onetwotrip.com/images/index/mobileApp/google_play_desktop.svg" alt="" />
          </div>
        </div>
        <div class="recomendation__img">
          <img class="qr" src="https://static.onetwotrip.com/images/index/mobileApp/qr_code.svg" alt="" />
          <img class="phone" src="https://static.onetwotrip.com/images/index/mobileApp/phone@2x.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.recomendation {
  width: 80%;
  margin: 150px auto;
  height: 350px;
  overflow: hidden;
  background: #fff;
  border-radius: 24px;
  padding: 40px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }

  p {
    color: #212121;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 38px;
    margin-top: 20px;
  }

  &__content {
    position: relative;
    display: flex;

    .qr {
      position: absolute;
      top: 10px;
      right: 200px;
    }

    .phone {
      width: 300px;
    }
  }

  &__info {
    width: 50%;
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }

  &__img {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
