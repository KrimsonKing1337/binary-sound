<template>
  <div class="sound-design-component">
    <div class="title">
      Саунд-дизайн
      <br />
      и музыка
    </div>

    <div class="desc">
      для рекламы, трейлеров,
      <br />
      кино и видеоигр
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SoundDesign',
});
</script>

<style scoped lang="scss">
.sound-design-component {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 98px;
}

.title {
  font-family: Rubik;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(91.04deg, #CD2EDB -2.91%, #2EDBB1 116.13%);
}

.desc {
  font-family: Rubik;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-top: 10px;
}
</style>
