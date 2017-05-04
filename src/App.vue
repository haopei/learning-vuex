<template>
<div id="app">
    <button @click="increaseCount">Increase Count</button>
    <br>
    count: {{count}}<br>
    local computed value: {{localComputed}}

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
        // combining mapState() with local computed values
        // notes:
        //   1. mapState returns an object
        //   2. spread operator requires babel-preset-stage-2 as dev dependency
        localComputed() {
            return 6;
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
