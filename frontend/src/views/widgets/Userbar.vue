<template>
    <div class="userbar">
        <img class="avatar" alt="avatar" :src="avatarSource">
    </div>
</template>

<script>
export default {
    props: {
        avatar: {
            default: null
        }
    },
    computed: {
        avatarSource() {
            return this.avatar || require("@/assets/avatar.png");
        }
    }
};
</script>

<style lang="scss" scoped>
.userbar {
    height: 100%;

    .avatar {
        height: 100%;
        border-radius: 50%;
    }
}
</style>
