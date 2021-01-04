<template>
  <div class="player-component">
    <div class="cover">
      <img src="@assets/img/cover-default.jpg" alt />
    </div>

    <div class="control">
      <div class="changer">
        <div class="change-button prev" @click="prevClickHandler" />

        <div class="change-button next" @click="nextClickHandler" />
      </div>

      <div
        v-for="(songCur, index) in songs"
        :key="index"
        class="song"
        :class="{'is-active': activeIndex === index}"
      >
        <audio :src="songCur.src" class="audio" controls />

        <div class="artist-name">
          {{ songCur.artist }}
        </div>

        <div class="song-name">
          {{ songCur.name }}
        </div>

        <div class="song-control">
          <div class="play-pause" @click="playPauseClickHandler">
            <div v-show="isPaused" class="play" />
            <div v-show="!isPaused" class="pause" />
          </div>

          <div class="track-wrapper">
            <div class="track" :style="`width: ${activeSongTrackWidth}%`" />
          </div>

          <div class="time">
            {{ activeSongDuration }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const songs = [
  {
    artist: 'Реклама',
    name: 'Just Do It',
    // eslint-disable-next-line global-require
    src: require('@assets/static/examples/Реклама Just Do It.mp3'),
  },
  {
    artist: 'Реклама',
    name: 'DeLorean Blues.mp3',
    // eslint-disable-next-line global-require
    src: require('@assets/static/examples/Реклама - DeLorean Blues.mp3'),
  },
];

export default defineComponent({
  name: 'Player',
  data() {
    return {
      isPaused: true,
      songs,
      activeIndex: 0,
      activeSongDuration: 0,
      activeSongTrackWidth: 0,
      activeAudioElement: null,
      timeUpdateListener: null,
    };
  },
  methods: {
    getActiveAudioElement() {
      const activeSongElement = document.querySelectorAll('.song')[this.activeIndex];

      return activeSongElement.querySelector('audio');
    },
    getHumanTimeOfActiveSongFromSeconds() {
      const activeAudioElement = this.getActiveAudioElement();
      const secs = activeAudioElement.duration;

      return new Date(secs * 1000).toISOString().substr(14, 5);
    },
    waitForActiveAudioLoaded() {
      return new Promise((resolve) => {
        const activeAudioElement = this.getActiveAudioElement();

        if (activeAudioElement.readyState !== 0) {
          resolve(activeAudioElement);

          return;
        }

        activeAudioElement.addEventListener('canplaythrough', () => {
          resolve(activeAudioElement);
        }, { once: true });
      });
    },
    async resetStateOfPlayer(activeIndex) {
      this.pause();
      this.isPaused = true;
      this.activeAudioElement.currentTime = 0;
      this.activeSongTrackWidth = 0;
      this.activeIndex = activeIndex;
      this.activeAudioElement = await this.waitForActiveAudioLoaded();
    },
    play() {
      this.timeUpdateListener = this.activeAudioElement.addEventListener('timeupdate', () => {
        const { currentTime, duration } = this.activeAudioElement;

        this.activeSongTrackWidth = (duration / 100) * currentTime;
      });

      this.activeAudioElement.play();
    },
    pause() {
      this.activeAudioElement.pause();

      this.activeAudioElement.removeEventListener('timeupdate', this.timeUpdateListener);
    },

    playPauseClickHandler() {
      if (this.isPaused) {
        this.play();
      } else {
        this.pause();
      }

      this.isPaused = !this.isPaused;
    },
    prevClickHandler() {
      if (this.activeIndex === 0) {
        return;
      }

      this.resetStateOfPlayer(this.activeIndex - 1);
    },
    nextClickHandler() {
      if (this.activeIndex === this.songs.length - 1) {
        return;
      }

      this.resetStateOfPlayer(this.activeIndex + 1);
    },
  },
  async mounted() {
    this.activeAudioElement = await this.waitForActiveAudioLoaded();
    this.activeSongDuration = this.getHumanTimeOfActiveSongFromSeconds();
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
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;

  &.is-active {
    display: flex;
  }
}

.artist-name {
  font-family: Rubik;
  font-size: 32px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
}

.song-name {
  font-family: Rubik-Light;
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
  width: 100%;
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

.audio {
  display: none;
}
</style>
