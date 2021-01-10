<template>
  <div class="player-component">
    <div class="cover" :style="`background-image: url('${getActiveCover()}')`" />

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

/* eslint-disable */
const activeSongCoverDefault = require('@assets/img/cover-default.jpg');

const songs = [
  {
    artist: 'Реклама',
    name: 'Just Do It',
    src: require('@assets/static/examples/Just_Do_It.mp3'),
    img: require('@assets/static/examples/IMG_1646.jpg'),
  },
  {
    artist: 'Реклама',
    name: 'DeLorean Blues.mp3',
    src: require('@assets/static/examples/DeLorean_Blues.mp3'),
    img: require('@assets/static/examples/IMG_1647.jpg'),
  },
];
/* eslint-enable */

export default defineComponent({
  name: 'Player',
  data() {
    return {
      isPaused: true,
      songs,
      activeIndex: 0,
      activeSongCover: '',
      activeSongCoverDefault,
      activeSongDuration: '0',
      activeSongTrackWidth: 0,
      activeAudioElement: document.querySelector('audio') as HTMLAudioElement,
      timeUpdateListener: null as any,
    };
  },
  methods: {
    getActiveCover() {
      const activeSong = this.songs[this.activeIndex];

      const { img } = activeSong;

      return img || this.activeSongCoverDefault;
    },
    getActiveAudioElement(): HTMLAudioElement {
      const activeSongElement = document.querySelectorAll('.song')[this.activeIndex];

      return activeSongElement.querySelector('audio') as HTMLAudioElement;
    },
    getHumanTimeOfActiveSongFromSeconds(): string {
      const activeAudioElement = this.getActiveAudioElement();
      const secs = activeAudioElement.duration;

      return new Date(secs * 1000).toISOString().substr(14, 5);
    },
    waitForActiveAudioLoaded(): Promise<HTMLAudioElement> {
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
    async resetStateOfPlayer(activeIndex: number) {
      this.pause();
      this.isPaused = true;
      this.activeAudioElement.currentTime = 0;
      this.activeSongTrackWidth = 0;
      this.activeIndex = activeIndex;
      this.activeAudioElement = await this.waitForActiveAudioLoaded();
      this.activeSongDuration = this.getHumanTimeOfActiveSongFromSeconds();
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
  height: 600px;
  overflow: hidden;
  background: no-repeat center;
  background-size: cover;

  @media screen and (max-width: 1600px) {
    height: 878px;
  }

  @media screen and (min-width: 3840px) {
    height: 1200px;
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

  @media screen and (max-width: 1600px) {
    flex-direction: column-reverse;
    border-top: 0;
    padding-top: 20px;
    padding-bottom: 43px;
  }

  @media screen and (min-width: 3840px) {
    min-height: 300px;
  }
}

.changer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 2px #888888 solid;
  width: 329px;
  height: 100%;

  @media screen and (max-width: 1600px) {
    border-right: 0;
    margin-top: 31px;
  }

  @media screen and (min-width: 3840px) {
    width: 658px;
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
  background-size: cover;
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

  @media screen and (min-width: 3840px) {
    width: 120px;
    height: 120px;
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

  @media screen and (min-width: 3840px) {
    font-size: 64px;
  }
}

.song-name {
  font-family: Rubik-Light;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #FFFFFF;

  @media screen and (min-width: 3840px) {
    font-size: 32px;
  }
}

.song-control {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  width: 270px;

  @media screen and (min-width: 3840px) {
    width: 540px;
  }
}

.track-wrapper {
  margin-left: 12px;
  width: 100%;
  height: 2px;
  background: #D9D9D9;

  @media screen and (min-width: 3840px) {
    margin-left: 24px;
    height: 4px;
  }
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

  @media screen and (min-width: 3840px) {
    font-size: 24px;
  }
}

.play {
  width: 12px;
  height: 9px;
  background: url("~@assets/icons/play.svg") no-repeat center;
  background-size: contain;
  cursor: pointer;

  &:hover {
    background-image: url("~@assets/icons/play-hover.svg");
  }

  @media screen and (min-width: 3840px) {
    width: 18px;
    height: 24px;
  }
}

.pause {
  width: 12px;
  height: 9px;
  background: url("~@assets/icons/pause.svg") no-repeat center;
  background-size: contain;
  cursor: pointer;

  &:hover {
    background-image: url("~@assets/icons/pause-hover.svg");
  }

  @media screen and (min-width: 3840px) {
    width: 18px;
    height: 24px;
  }
}

.audio {
  display: none;
}
</style>
