import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [{
        path: '/about.html',
        name: 'about',
        component: () => import('./pages/About.vue')
    }, {
        path: '/login.html',
        name: 'login',
        component: () => import('./pages/Login.vue'),
        meta: {
            title: '登录',
        },
    }, {
        path: '/world.html',
        name: 'world',
        component: () => import('./pages/World.vue')
    }],
});
