<template>
  <div class="nav-mobile-header-component">
    <div class="logo">
      <img src="@assets/img/logo.svg" alt />
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
}

.logo {
  width: 69px;
  height: 100px;
  margin-right: 70px;
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
