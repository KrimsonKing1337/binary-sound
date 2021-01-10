<template>
  <div class="about-component">
    <div class="wrapper">
      <div class="title">
        Binary sound
      </div>

      <div class="desc">
        Бутик-студия аудио-продакшна полного цикла, основанная двумя талантливыми музыкантами с непохожим бэкграундом и
        сильным набором профессиональных навыков. Именно эта разносторонность
        и богатый музыкальный опыт позволяют нам уверенно и слаженно работать над любыми проектами и задачами: от
        эпичных оркестровых произведений и трогательных мелодий
      </div>

      <Contacts class="contacts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Contacts from '@/components/Contacts/Contacts.vue';

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
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 79px 0 74px;

  @media screen and (max-width: 960px) {
    padding: 30px;
  }

  @media screen and (min-width: 3840px) {
    padding: 0 158px 0 148px;
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

  @media screen and (min-width: 3840px) {
    font-size: 64px;
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

  @media screen and (min-width: 3840px) {
    font-size: 32px;
    margin-top: 20px;
  }
}

.contacts {
  align-self: flex-start;

  @media screen and (min-width: 3840px) {
    margin-top: 84px;
  }
}
</style>
