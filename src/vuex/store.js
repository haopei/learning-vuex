import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // string must match this property name
    count: 0,
    todos: [
        { title: 'walk the dog', completed: false },
        { title: 'make dinner', completed: false },
        { title: 'take over world', completed: true }
    ]
  },
  getters: {
    completedTodos: (state) => {
      // getters are useful for returning modified values
      return state.todos.filter(todo => todo.completed === true)
    },
    completedTodosCount: (state, getters) => {
      // getters can use other getters
      // note: the getters parameter
      return getters.completedTodos.length;
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
