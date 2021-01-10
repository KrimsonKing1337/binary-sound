<template>
  <div class="nav-component">
    <div class="nav-items-wrapper">
      <div class="nav-item">
        о&nbsp;нас
      </div>

      <div class="nav-item">
        услуги
      </div>

      <div class="nav-item">
        портфолио
      </div>

      <div class="nav-item is-button">
        связаться
      </div>
    </div>

    <div class="nav-mobile" :class="{'is-open': menuIsOpen}">
      <NavMobileHeader />

      <div class="mobile-nav-items-wrapper">
        <div class="nav-item">
          о&nbsp;нас
        </div>

        <div class="nav-item">
          услуги
        </div>

        <div class="nav-item">
          портфолио
        </div>

        <div class="nav-item is-button">
          связаться
        </div>
      </div>

      <Contacts class="contacts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import Contacts from '@/components/Contacts/Contacts.vue';
import NavMobileHeader from '@/components/NavMobileHeader/NavMobileHeader.vue';

export default defineComponent({
  name: 'Nav',
  components: { NavMobileHeader, Contacts },
  computed: {
    ...mapState(['menuIsOpen']),
  },
});
</script>

<style scoped lang="scss">
.nav-items-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    display: none;
  }
}

.nav-mobile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  background: #000;

  &.is-open {
    display: flex;
  }
}

.mobile-nav-items-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 9px;
  height: 41px;
  font-family: Rubik;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  margin-left: 70px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }

  &.is-button {
    background: linear-gradient(98.21deg, #CD2EDB 0%, #2EDBB1 116.34%);
  }

  .mobile-nav-items-wrapper & {
    margin-left: 0;
    margin-top: 50px;

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  @media screen and (min-width: 3840px) {
    font-size: 32px;
    height: 82px;
  }
}

.contacts {
  margin-top: 95px;
}
</style>
