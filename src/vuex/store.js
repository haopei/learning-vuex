import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // string must match this property name
    count: 0
  },
  mutations: {
    increment(state) {
      console.log(this);
      state.count++;
    }
  }
});


export default store;
