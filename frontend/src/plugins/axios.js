import qs from 'qs';
import axios from 'axios';

let ajax = axios.create({
    timeout: 600000,
});

export default {
    get(url, query, config) {
        if (query) {
            let sheet = qs.stringify(query);
            url = `${url}?${sheet}`;
        }
        return ajax.get(url, config);
    },
    post(url, data, config) {
        let sheet = new FormData();
        for (let key in data) {
            sheet.append(key, data[key]);
        }
        return ajax.post(url, data, config);
    },
};