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
    computed: mapState([
        // maps this.count to `this.$store.state.count`
        // notes:
        //  1. String must match the name of the property to be retrieved from store
        //  2. This is an array; not an object
        'count'
    ]),
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
