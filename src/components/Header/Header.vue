<template>
  <div class="header-component">
    <div class="logo">
      <img src="@assets/img/logo.svg" alt />
    </div>

    <Nav class="nav" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav/Nav.vue';

export default defineComponent({
  name: 'Header',
  components: { Nav },
});
</script>

<style scoped lang="scss">
.header-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 69px;
  height: 100px;
}
</style>
