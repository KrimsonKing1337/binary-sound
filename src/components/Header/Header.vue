<template>
  <div class="header-component">
    <NavMobileHeader />

    <Nav class="nav" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav/Nav.vue';
import NavMobileHeader from '@/components/NavMobileHeader/NavMobileHeader.vue';

export default defineComponent({
  name: 'Header',
  components: { NavMobileHeader, Nav },
});
</script>

<style scoped lang="scss">
.header-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  padding: 30px 140px 30px 70px;

  @media screen and (max-width: 960px) {
    padding: 30px;
  }
}

.logo {
  width: 69px;
  height: 100px;
  margin-right: 70px;
}
</style>
