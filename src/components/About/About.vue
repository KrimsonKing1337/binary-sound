<template>
  <div class="about-component">
    <div class="wrapper">
      <div class="title">
        Binary sound
      </div>

      <div class="desc">
        Современная студия звукового дизайна, основанная в&nbsp;2017 году.
        Мы создаем фоновую музыку и&nbsp;звуковые эффекты для&nbsp;художественных
        и&nbsp;рекламных проектов любой сложности.
      </div>

      <Contacts class="contacts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Contacts from '@/components/Contacts';

export default defineComponent({
  name: 'Player',
  components: { Contacts },
});
</script>

<style scoped lang="scss">
.about-component {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181818;
  flex-grow: 1;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 79px 0 74px;

  @media screen and (max-width: 1600px) {
    padding: 30px 79px 30px 74px;
    align-items: center;
  }

  @media screen and (max-width: 960px) {
    padding: 30px;
  }

  @media screen and (min-width: 2560px) {
    padding: 0 98px 0 105px;
  }

  @media screen and (min-width: 3840px) {
    padding: 0 158px 0 148px;
  }

  @media screen and (min-width: 5120px) {
    padding: 0 198px 0 210px;
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

  @media screen and (min-width: 2560px) {
    font-size: 40px;
  }

  @media screen and (min-width: 3840px) {
    font-size: 64px;
  }

  @media screen and (min-width: 5120px) {
    font-size: 72px;
  }
}

.desc {
  font-family: Rubik-Light;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-top: 10px;

  @media screen and (max-width: 1600px) {
    max-width: 667px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 18px;
    margin-top: 13px;
  }

  @media screen and (min-width: 3840px) {
    font-size: 32px;
    margin-top: 20px;
  }

  @media screen and (min-width: 5120px) {
    font-size: 40px;
    margin-top: 27px;
  }
}

.contacts {
  margin-top: 42px;
  align-self: flex-start;

  @media screen and (max-width: 1600px) {
    align-self: center;
  }

  @media screen and (min-width: 2560px) {
    margin-top: 56px;
  }

  @media screen and (min-width: 3840px) {
    margin-top: 84px;
  }

  @media screen and (min-width: 5120px) {
    margin-top: 112px;
  }
}
</style>
