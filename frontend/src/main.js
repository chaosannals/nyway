import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './stores';
import './plugins/element'

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Nyway';
    next();
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
