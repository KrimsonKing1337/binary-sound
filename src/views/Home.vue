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
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  background: #000;
}

.home-left {
  max-width: 820px;
  flex-grow: 1;
  padding: 30px 140px 30px 70px;

  @media screen and (max-width: 960px) {
    padding: 30px;
  }
}

.home-right {
  max-width: 820px;
  margin-left: auto;
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
