<template>
  <div class="sound-design-component">
    <video class="video-bg" src="@assets/static/video-bg.mp4" autoplay muted loop />

    <div class="wrapper">
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
  height: 880px;

  @media screen and (max-width: 960px) {
    height: 545px;
  }
}

.wrapper {
  position: absolute;
  top: 248px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0 140px 0 70px;

  @media screen and (max-width: 960px) {
    top: auto;
    bottom: 0;
    align-items: center;
    padding: 0 30px;
  }
}

.video-bg {
  position: absolute;
  z-index: 1;
  top: 150px;
  left: 0;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    top: 115px;
    width: 100%;
    height: 100%;
  }
}

.title {
  font-family: Rubik-Medium;
  font-size: 32px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(91.04deg, #CD2EDB -2.91%, #2EDBB1 116.13%);
  text-align: right;
}

.desc {
  font-family: Rubik-Light;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-top: 10px;
  text-align: right;
}
</style>
