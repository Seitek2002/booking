<script setup>
import Header from "@/components/Header/Header.vue"
import Hero from "@/components/Hero/Hero.vue"
import Slider from "@/components/Slider/Slider.vue"
import Cause from "@/components/Cause/Cause.vue"
import Reviews from "@/components/Reviews/Reviews.vue"
import Recomendation from "@/components/Recomendation/Recomendation.vue"
import Routes from "@/components/Routes/Routes.vue"
import Footer from "@/components/Footer/Footer.vue"
</script>

<template>
  <Header />
  <Hero />
  <Slider />
  <Cause />
  <Reviews />
  <Recomendation />
  <Routes />
  <Footer />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-family: "Roboto";
  background-color: #f7f7f7;
}

h1,h2,h3,h4,h5,h6,p,body {
  margin: 0;
}

input {
  font-family: "Roboto";
  font-size: 16px;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

.container {
  width: calc(100% - 80px);
  margin: 0 auto;
}
</style>
