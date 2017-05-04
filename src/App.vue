<template>
<div id="app">
    <button @click="increaseCount">Increase Count</button>
    <br>
    count: {{count}}
</div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
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
