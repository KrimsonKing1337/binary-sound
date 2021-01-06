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

import About from '@/components/About/About.vue';
import Header from '@/components/Header/Header.vue';
import SoundDesign from '@/components/SoundDesign/SoundDesign.vue';
import Player from '@/components/Player/Player.vue';

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
  max-width: 1920px;
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
}

.home-right {
  width: 100%;
  max-width: 820px;
  margin-left: auto;
  z-index: 15;

  @media screen and (max-width: 1600px) {
    max-width: none;
    margin-left: 0;
  }
}

.image {
  height: 600px;
  width: 820px;
}

.about {
  height: 480px;
  width: 820px;
  background: #181818;
}
</style>
