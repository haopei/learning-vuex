<template>
<div id="app">
    <h2>Todos ( {{completedTodosCount}} )</h2>
    {{completedTodos}}
</div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'app',
    data() {
        return {
            localCount: 10
        }
    },
    computed: {
        completedTodos() {
            // getters are returned using computed functions
            return this.$store.getters.completedTodos;
        },
        completedTodosCount() {
            return this.$store.getters.completedTodosCount;
        },
        ...mapState({
            count: 'count'
        })
    },
    methods: {
        increaseCount() {
            this.$store.state.count++;
        }
    }
}
</script>



<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
