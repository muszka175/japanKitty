import Vue from 'vue';

export default {
    login(credentials, success, error) {
        Vue.http.post("login", credentials)
            .then((response) => {
                if (response.status === 200 && 'token' in response.body.success) {
                    localStorage.setItem('token', response.body.success.token)
                    Vue.http.headers.common['Authorization'] = response.body.success.token;
                    success(response.data)
                }
            })
            .catch(response => {
                error(response);
            })
    },
    register(credentials, success, error) {
        Vue.http.post("register", credentials)
            .then((response) => {
                success(response.data)
            })
            .catch(response => {
                error(response);
            })
    },
    logout() {

    },
    getToken() {
        return localStorage.getItem('token');
    }

}