import { createStore } from 'vuex';

export default createStore({
  state: {
    menuIsOpen: false,
  },
  mutations: {
    toggleMenuIsOpen(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
  },
  actions: {
  },
  modules: {
  },
});
