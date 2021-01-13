<template>
  <div class="header-component">
    <div class="wrapper">
      <NavMobileHeader />

      <Nav />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Nav from '@/components/Nav';
import NavMobileHeader from '@/components/NavMobileHeader';

export default defineComponent({
  name: 'Header',
  components: { NavMobileHeader, Nav },
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  padding: 30px 140px 30px 70px;

  @media screen and (min-width: 2560px) {
    padding: 40px 187px 40px 93px;
  }

  @media screen and (min-width: 3840px) {
    padding: 60px 171px 60px 140px;
  }

  @media screen and (min-width: 5120px) {
    padding: 60px 171px 60px 140px;
  }

  @media screen and (max-width: 960px) {
    padding: 30px;
  }
}
</style>
