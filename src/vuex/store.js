import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // string must match this property name
    count: 0,
    todos: [
        { title: 'walk the dog', completed: false },
        { title: 'make dinner', completed: true },
        { title: 'explore world', completed: false }
    ]
  },
  getters: {
    completedTodos: (state) => {
      return state.todos.filter(todo => todo.completed === true)
    }
  },
  mutations: {
    increment(state) {
      console.log(this);
      state.count++;
    }
  }
});


export default store;
