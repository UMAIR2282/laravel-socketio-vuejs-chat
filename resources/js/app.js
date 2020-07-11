/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
var app_url = '';
var chat_server_url = '';
var base_path = '';

switch (process.env.NODE_ENV) {
    case 'development':
        app_url = 'https://localhost/umair2282/laravel-socketio-vuejs-chat/public';
        chat_server_url = 'https://localhost:3000';
        base_path = '/umair2282/laravel-socketio-vuejs-chat/public';
        break;

    default:
        app_url = 'https://chat.laravel.example.com';
        chat_server_url = 'https://chat.laravel.example.com:3010';
        base_path = '';
        break;

}

window.APP_URL = app_url;
window.API_URL = app_url + "/api/v1";
window.CHAT_SERVER_URL = chat_server_url;
window.CHAT_USERS_ENDPOINT = "/users/chat"

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('home-component', require('./components/Home.vue').default);

import store from './store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

let routes = [
    {
        path: '/home',
        name: 'home',
        component: require('./components/Home.vue').default,
    },
];

const router = new VueRouter({
    base: base_path,
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    router,
    store
}).$mount('#routerView');
