<template>
    <div class="captcha" @click="onClick">
        <img alt="captcha" :src="src"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timestamp: new Date().getTime(),
        };
    },
    props: {
        source: {
            default: '/captcha.svg',
        },
    },
    computed: {
        src() {
            return this.source + '?timestamp=' + this.timestamp;
        },
    },
    methods: {
        onClick() {
            this.timestamp = new Date().getTime();
        },
    },
};
</script>

<style lang="scss" scoped>
.captcha {
    height: 32px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
