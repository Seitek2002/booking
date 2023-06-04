<template>
  <div class="auth-item">
    <div
      class="auth-item__top"
      :class="isActive ? ' active' : ''"
      @click="isActive = !isActive"
    >
      <div>
        <DigitalSignatureIcon/>
        <h3>Вход по отпечаткам пальцев</h3>
      </div>
      <PlusIcon
        v-show="!isActive"
      />
      <MinusIcon
        v-show="isActive"
      />
    </div>
    <div
      v-if="isActive"
      class="auth-item__login"
    >
      <div
        class="scanner-svg"
        :class="scannerAnalysis ? ' active' : ''"
      >
        <FingerprintCircleIcon
          v-show="!end"
          @click="handleClick"
        />
        <FingerprintSuccessIcon
          v-show="end"
        />
      </div>
      <div
        v-show="start"
        class="auth-item__start auth-item__process"
      >
        Подтверждение отпечатка пальцев
      </div>
      <div
        v-show="center"
        class="auth-item__loading auth-item__process"
      >
        <AnimationCircleIcon
          class="loading-svg"
        />
        Проверка отпечатка пальцев
      </div>
      <div
        v-show="end"
        class="auth-item__success auth-item__process"
      >
        Проверка отпечатка пальцев прошла успешно
      </div>
      <Btn
        title="Войти"
        bg="#212121"
        :disabled="!end"
        @click="handleClick, router.push('/order-list-notarius')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Btn from './Buttons/Btn.vue'
import AnimationCircleIcon from './Icons/AnimationCircleIcon.vue'
import FingerprintCircleIcon from './Icons/FingerprintCircleIcon.vue'
import DigitalSignatureIcon from './Icons/DigitalSignatureIcon.vue'
import FingerprintSuccessIcon from './Icons/FingerprintSuccessIcon.vue'
import MinusIcon from './Icons/MinusIcon.vue'
import PlusIcon from './Icons/PlusIcon.vue'
import QuestionIcon from './Icons/QuestionIcon.vue'

const isActive = ref(false)
const scannerAnalysis = ref(false)
const router = useRouter()
const start = ref(true)
const center = ref(false)
const end = ref(false)

const handleClick = () => {
  start.value = false
  center.value = true
  end.value = false
  scannerAnalysis.value = true

  setTimeout(() => {
    center.value = false
    scannerAnalysis.value = false
    end.value = true
  }, 1500)
}
</script>

<style lang="scss">

.auth-item {
  &__alert {
    background: #fff;
    border: 1px solid #fff;
    box-shadow: 0 10px 20px #e9e9e9;
    padding: 16px;
    display: flex;
    gap: 6px;

    p {
      font-size: 14px;
      line-height: 140%;
      color: #24334b;
      max-width: 419px;
    }
  }

  .scanner-svg {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-top: 30px;
  }

  .scanner-svg.active {
    .pulse {
      &-first,
      &-second,
      &-third {
        opacity: 1;
        animation-name: pulse;
      }
    }
  }

  .pulse {
    &-first,
    &-second,
    &-third {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform-origin: 50% 50%;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      opacity: 0;
    }

    &-first {
      animation-delay: 0s;
    }

    &-second {
      animation-delay: 0.5s;
    }

    &-third {
      animation-delay: 1s;
    }
  }

  &__process {
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: #687c9b;
    margin: 30px 0;
  }

  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
      transform-origin: center;
      animation-duration: 1s;
      animation-name: round;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
}

@keyframes round {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    stroke-width: 3px;
    transform: scale(0.85);
  }
  to {
    stroke-width: 0;
    transform: scale(1.2);
  }
}
</style>
