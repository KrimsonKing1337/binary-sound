<template>
  <div class="home-view">
    <div class="home-left">
      <Header />

      <SoundDesign />
    </div>

    <div class="home-right">
      <Player />

      <About />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import About from '@/components/About';
import Header from '@/components/Header';
import SoundDesign from '@/components/SoundDesign';
import Player from '@/components/Player';

export default defineComponent({
  name: 'Home',
  components: {
    About,
    Player,
    SoundDesign,
    Header,
  },
});
</script>

<style scoped lang="scss">
.home-view {
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background: #000;

  @media screen and (max-width: 1600px) {
    flex-wrap: wrap;
  }
}

.home-left {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  max-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 1600px) {
    min-height: 1024px;
  }

  @media screen and (max-width: 960px) {
    min-height: auto;
    flex-grow: 0;
    max-height: none;
  }
}

.home-right {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 820px;
  margin-left: auto;
  z-index: 15;

  @media screen and (max-width: 1600px) {
    max-width: none;
    margin-left: 0;
  }

  @media screen and (min-width: 2560px) {
    max-width: 1093px;
  }

  @media screen and (min-width: 3840px) {
    max-width: 1640px;
  }

  @media screen and (min-width: 5120px) {
    max-width: 2187px;
  }
}
</style>
