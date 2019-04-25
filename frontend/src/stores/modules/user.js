import ajax from '@/plugins/axios';

export default {
    namespaced: true,
    state: {
        info: null,
    },
    mutations: {
        signin(state, info) {
            state.info = info;
        },
    },
    actions: {
        login(context, data) {
            let url = '/api/user/login.json';
            ajax.post(url, data).then(response => {
                if (0 == response.data.code) {
                    context.commit('signin', response.data.user);
                }
            });
        }
    }
};