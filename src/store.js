import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backendUrl: "http://127.0.0.1:4000",
    isReplyModalActive: false
  },
  mutations: {
    showReplyModal(state) {
      state.isReplyModalActive = true;
    }
  },
  actions: {}
});
