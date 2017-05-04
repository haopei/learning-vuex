<template>
<div id="app">
    <button @click="increaseCount">Increase Count</button>
    <br>
    count: {{count}}<br>

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
    computed: mapState({
        // Retrieving store state using alias:
        // the 'count' string refers to the `count` property inside this.$store.state
        // this is same:
        //   count: state => state.count
        count: 'count'
    }),
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
