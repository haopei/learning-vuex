<template>
<div id="app">
    <button @click="increaseCount">Increase Count</button>
    <br>
    count: {{count}}<br>
    state.count + this.localCount: {{countPlusLocalState}}

    {{something}}


</div>
</template>

<script>

import { mapState } from 'vuex';

console.log(mapState);

export default {
    name: 'app',
    data() {
        return {
            localCount: 10
        }
    },
    // For comparison: Retrieving state values without `mapState`:
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     }
    // },
    computed: mapState({
        count: (state) => state.count,
        countPlusLocalState(state) {
            // to combine a local state with store state,
            // we must put this inside a function
            // where 'this' is proxied here to represent this Vue Component instance
            return this.localCount + state.count;
        }
    }),
    methods: {
        increaseCount() {
            console.log(this.$store.state.count++);
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
