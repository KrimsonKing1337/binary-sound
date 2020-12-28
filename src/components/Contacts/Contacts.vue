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
}

.insta {
  width: 32px;
  height: 32px;
  background: url("~@assets/icons/insta.svg") no-repeat center;

  &:hover {
    background-image: url("~@assets/icons/insta-hover.svg");
  }
}

.fb {
  width: 30px;
  height: 32px;
  background: url("~@assets/icons/fb.svg") no-repeat center;

  &:hover {
    background-image: url("~@assets/icons/fb-hover.svg");
  }
}
</style>
