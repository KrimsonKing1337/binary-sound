<template>
  <div class="nav-mobile-header-component">
    <div class="logo">
      <img src="@assets/img/logo.svg" alt />
    </div>

    <div class="logo-mobile">
      <img src="@assets/img/logo-mobile.svg" alt />
    </div>

    <div class="nav-burger" @click="navBurgerClickHandler" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavMobileHeader',
  methods: {
    navBurgerClickHandler() {
      this.$store.commit('toggleMenuIsOpen');
    },
  },
});
</script>

<style scoped lang="scss">
.nav-mobile-header-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 2560px) {
    width: auto;
  }
}

.logo {
  width: 69px;
  height: 100px;

  @media screen and (max-width: 960px) {
    display: none;
  }

  @media screen and (min-width: 2560px) {
    width: 92px;
    height: 134px;
  }

  @media screen and (min-width: 3840px) {
    width: 138px;
    height: 201px;
  }

  img {
    width: 100%;
  }
}

.logo-mobile {
  display: none;
  width: 113px;
  height: 55px;

  @media screen and (max-width: 960px) {
    display: block;
  }
}

.nav-burger {
  display: none;
  width: 30px;
  height: 24px;
  margin-left: auto;
  background: url("~@assets/icons/menu.svg") no-repeat center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
  }
}
</style>
