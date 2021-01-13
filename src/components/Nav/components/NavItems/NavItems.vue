<template>
  <div class="nav-items-component">
    <a href="https://www.binary-sound.com/about" class="nav-item">
      о&nbsp;нас
    </a>

    <a href="https://www.binary-sound.com/uslugi" class="nav-item">
      услуги
    </a>

    <a href="https://www.binary-sound.com/portfolio" class="nav-item">
      портфолио
    </a>

    <a href="https://www.binary-sound.com/contactus" class="nav-item is-button">
      связаться
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavItems',
});
</script>

<style scoped lang="scss">
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5625em;
  height: 41px;
  font-family: Rubik;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-left: 70px;
  text-decoration: none;
  cursor: pointer;

&:nth-child(1) {
   margin-left: 0;
 }

&.is-button {
   background: linear-gradient(98.21deg, #CD2EDB 0%, #2EDBB1 116.34%);
 }

.mobile-nav-items-wrapper & {
  margin-left: 0;
  margin-top: 50px;

&:nth-child(1) {
   margin-top: 0;
 }
}

@media screen and (min-width: 2560px) {
  font-size: 18px;
  height: 65px;

&:nth-child(1) {
   margin-left: auto;
 }

&:nth-last-child(1) {
   margin-left: auto;
 }
}

@media screen and (min-width: 3840px) {
  font-size: 32px;
  height: 82px;
}

@media screen and (min-width: 5120px) {
  font-size: 40px;
  height: 90px;
}
}
</style>
