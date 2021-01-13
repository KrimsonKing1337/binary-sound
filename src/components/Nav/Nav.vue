<template>
  <div class="nav-component">
    <NavItems class="nav-items-wrapper" />

    <div class="nav-mobile" :class="{'is-open': menuIsOpen}">
      <NavMobileHeader />

      <NavItems class="mobile-nav-items-wrapper" />

      <Contacts class="contacts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

import Contacts from '@/components/Contacts';
import NavMobileHeader from '@/components/NavMobileHeader';
import NavItems from './components/NavItems';

export default defineComponent({
  name: 'Nav',
  components: {
    NavMobileHeader,
    Contacts,
    NavItems,
  },
  computed: {
    ...mapState(['menuIsOpen']),
  },
});
</script>

<style scoped lang="scss">
.nav-component {
  flex-grow: 1;
}

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

.contacts {
  margin-top: 95px;
}
</style>
