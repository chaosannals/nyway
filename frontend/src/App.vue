<template>
    <div id="app">
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view/>
        </keep-alive>
        <router-view v-else/>
    </div>
</template>

<script>
export default {
    name: 'app',
    methods: {

    },
    created() {
        let url = 'ws://' + location.host + '/instant';
        let socket = new WebSocket(url);
        socket.onopen = () => {
            socket.send('Hello');
        };
    },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
