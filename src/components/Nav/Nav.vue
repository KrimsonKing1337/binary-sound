<template>
  <div class="nav-component">
    <div class="nav-item">
      о нас
    </div>

    <div class="nav-item">
      услуги
    </div>

    <div class="nav-item">
      портфолио
    </div>

    <div class="nav-item is-button">
      связаться
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',

});
</script>

<style scoped lang="scss">
.nav-component {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
  height: 41px;
  font-family: Rubik;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-left: 70px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }

  &.is-button {
    background: linear-gradient(98.21deg, #CD2EDB 0%, #2EDBB1 116.34%);
  }
}
</style>
