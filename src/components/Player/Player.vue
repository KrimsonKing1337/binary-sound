<template>
  <div class="player-component">
    <div class="cover">
      <img src="@assets/img/cover-default.jpg" alt />
    </div>

    <div class="control">
      <div class="changer">
        <div class="change-button prev" />

        <div class="change-button next" />
      </div>

      <div class="song">
        <div class="artist-name">
          SOUND DESIGN
        </div>

        <div class="song-name">
          Atmos & Drones (OST Posi+ive)
        </div>

        <div class="song-control">
          <div class="play-pause" @click="playPauseClickHandler">
            <div v-show="isPaused" class="play" />
            <div v-show="!isPaused" class="pause" />
          </div>

          <div class="track-wrapper">
            <div class="track" />
          </div>

          <div class="time">
            1:33
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Player',
  data() {
    return {
      isPaused: true,
    };
  },
  methods: {
    playPauseClickHandler() {
      this.isPaused = !this.isPaused;
    },
  },
});
</script>

<style scoped lang="scss">
.player-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #181818;
}

.cover {
  width: 100%;
  max-width: 820px;
  max-height: 600px;

  img {
    width: 100%;
  }
}

.control {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px #888888 solid;
  border-bottom: 2px #888888 solid;
  width: 100%;
  min-height: 150px;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    border-top: 0;
    padding-top: 20px;
    padding-bottom: 43px;
  }
}

.changer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px #888888 solid;
  width: 329px;
  height: 100%;

  @media screen and (max-width: 700px) {
    border-right: 0;
    margin-top: 31px;
  }
}

.change-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 61px;
  background: url("~@assets/icons/arrow.svg") no-repeat center;
  cursor: pointer;

  &:hover {
    background-image: url("~@assets/icons/arrow-hover.svg");
  }

  &:nth-child(1) {
    margin-left: 0;
  }

  &.prev {
    transform: rotate(-180deg);
  }
}

.song {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;
}

.artist-name {
  font-family: Rubik;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
}

.song-name {
  font-family: Rubik;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #FFFFFF;
}

.song-control {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  width: 270px;
}

.track-wrapper {
  margin-left: 12px;
  width: 100%;
  height: 2px;
}

.track {
  background: linear-gradient(98.21deg, #CD2EDB 0%, #2EDBB1 116.34%);
  width: 50%;
  height: 100%;
}

.time {
  font-family: Rubik;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-left: 12px;
  transform: translateY(13px);
}

.play {
  width: 12px;
  height: 9px;
  background: url("~@assets/icons/play.svg") no-repeat center;
  cursor: pointer;

  &:hover {
    background-image: url("~@assets/icons/play-hover.svg");
  }
}

.pause {
  width: 12px;
  height: 9px;
  background: url("~@assets/icons/pause.svg") no-repeat center;
  cursor: pointer;

  &:hover {
    background-image: url("~@assets/icons/pause-hover.svg");
  }
}
</style>
