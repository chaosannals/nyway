<template>
    <el-container class="login-page">
        <el-header>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8">
                    <el-form class="login-form" size="small" label-width="100px">
                        <el-form-item label="用户名">
                            <el-input v-model="sheet.username"/>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="sheet.password" type="password"/>
                        </el-form-item>
                        <el-form-item label="验证码">
                            <el-row>
                                <el-col :span="12">
                                    <captcha/>
                                </el-col>
                                <el-col :span="12">
                                    <el-input v-model="sheet.captcha"/>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item class="button-row">
                            <el-button @click="onSubmit">
                                <span>登录</span>
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Captcha from '@/widgets/Captcha.vue';

export default {
    components: {
        Captcha,
    },
    data() {
        return {
            sheet: {
                username: '',
                password: '',
                captcha: '',
            },
        };
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('user/login', this.sheet);
        },
    },
};
</script>

<style lang="scss" scoped>
.login-page {
    .login-form {
        box-sizing: border-box;
        border: 1px solid #bbb;
        padding: 2em;

        .button-row {
            text-align: right;
        }
    }
}
</style>
