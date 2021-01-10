<template>
  <div class="contacts-component">
    <a href="#" class="link">
      <div class="insta" />
    </a>

    <a href="#" class="link">
      <div class="fb" />
    </a>

    <a href="mailto:binarysound.prod@gmail.com" class="link is-text">
      binarysound.prod@gmail.com
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contacts',
});
</script>

<style scoped lang="scss">
.contacts-component {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 16px;

  @media screen and (min-width: 2560px) {
    font-size: 20px;
  }

  @media screen and (min-width: 3840px) {
    font-size: 32px;
  }

  @media screen and (min-width: 5120px) {
    font-size: 40px;
  }
}

.link {
  display: block;
  color: inherit;
  font: inherit;
  font-family: Rubik-Light;
  text-decoration: none;
  margin-left: 40px;

  &:nth-child(1) {
    margin-left: 0;
  }

  &.is-text {
    text-decoration: underline;

    @media screen and (max-width: 700px) {
      width: 100%;
      margin-left: 0;
      margin-top: 33px;
      text-align: center;
    }
  }

  @media screen and (min-width: 2560px) {
    margin-left: 60px;
  }

  @media screen and (min-width: 3840px) {
    margin-left: 80px;
  }

  @media screen and (min-width: 5120px) {
    margin-left: 106px;
  }
}

.insta {
  width: 32px;
  height: 32px;
  background: url("~@assets/icons/insta.svg") no-repeat center;
  background-size: cover;

  &:hover {
    background-image: url("~@assets/icons/insta-hover.svg");
  }

  @media screen and (min-width: 2560px) {
    width: 43px;
    height: 43px;
  }

  @media screen and (min-width: 3840px) {
    width: 64px;
    height: 64px;
  }

  @media screen and (min-width: 5120px) {
    width: 86px;
    height: 86px;
  }
}

.fb {
  width: 30px;
  height: 32px;
  background: url("~@assets/icons/fb.svg") no-repeat center;
  background-size: cover;

  &:hover {
    background-image: url("~@assets/icons/fb-hover.svg");
  }

  @media screen and (min-width: 2560px) {
    width: 39px;
    height: 43px;
  }

  @media screen and (min-width: 3840px) {
    width: 60px;
    height: 64px;
  }

  @media screen and (min-width: 5120px) {
    width: 79px;
    height: 86px;
  }
}
</style>
