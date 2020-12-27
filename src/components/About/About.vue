<template>
  <div class="about-component">
    <div class="title">
      Binary sound
    </div>

    <div class="desc">
      Бутик-студия аудио-продакшна полного цикла, основанная двумя талантливыми музыкантами с непохожим бэкграундом и
      сильным набором профессиональных навыков. Именно эта разносторонность
      и богатый музыкальный опыт позволяют нам уверенно и слаженно работать над любыми проектами и задачами: от эпичных
      оркестровых произведений и трогательных мелодий
    </div>

    <div class="contacts">
      <a href="#" class="link">
        <div class="insta" />
      </a>

      <a href="#" class="link">
        <div class="fb" />
      </a>

      <a href="mailto:binarysound.prod@gmail.com" class="link is-text">
        binarysound.prod@gmail.com
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Player',
});
</script>

<style scoped lang="scss">
.about-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #181818;
  padding: 29px 79px 60px 74px;

  @media screen and (max-width: 960px) {
    padding: 30px;
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
}

.desc {
  font-family: Rubik-Light;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-top: 10px;
}

.contacts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.link {
  display: block;
  color: inherit;
  font: inherit;
  font-family: Rubik-Light;
  text-decoration: none;
  margin-left: 40px;

  &:nth-child(1) {
    margin-left: 0;
  }

  &.is-text {
    text-decoration: underline;

    @media screen and (max-width: 700px) {
      width: 100%;
      margin-left: 0;
      margin-top: 33px;
      text-align: center;
    }
  }
}

.insta {
  width: 32px;
  height: 32px;
  background: url("~@assets/icons/insta.svg") no-repeat center;

  &:hover {
    background-image: url("~@assets/icons/insta-hover.svg");
  }
}

.fb {
  width: 30px;
  height: 32px;
  background: url("~@assets/icons/fb.svg") no-repeat center;

  &:hover {
    background-image: url("~@assets/icons/fb-hover.svg");
  }
}
</style>
