<template>
    <el-container class="about-page">
        <el-aside class="side" width="200px">
            <brand>Nyway</brand>
            <el-menu>
                <el-submenu index="role">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>角色</span>
                    </template>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container class="main">
            <el-header class="head">
                <el-menu mode="horizontal">
                    <el-menu-item>
                        <span>{{now.date}}</span>
                    </el-menu-item>
                    <el-menu-item>
                        <span>{{now.time}}</span>
                    </el-menu-item>
                </el-menu>
                <userbar/>
            </el-header>
            <el-main class="body"></el-main>
            <el-footer class="foot"></el-footer>
        </el-container>
    </el-container>
</template>

<script>
import moment from "moment";
import Brand from "@/views/widgets/Brand.vue";
import Userbar from "@/views/widgets/Userbar.vue";

export default {
    components: {
        Brand,
        Userbar
    },
    data() {
        return {
            now: {
                date: null,
                time: null,
                timer: null
            }
        };
    },
    computed: {},
    created() {
        this.now.timer = setInterval(() => {
            let now = moment();
            this.now.date = now.format("YYYY-MM-DD");
            this.now.time = now.format("HH:mm:ss");
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.now.timer);
    }
};
</script>

<style lang="scss" scoped>
.about-page {
    width: 100%;
    height: 100%;

    .side {
        background: #def;
    }

    .head {
        padding: 0;
    }
}
</style>
