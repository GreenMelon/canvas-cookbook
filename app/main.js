/**
 * 主入口文件,引入
 * - vue
 * - vue-router
 * - app.vue 入口组件
 * - routes 路由配置
 *
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import routes from './config/routes';

Vue.use(VueRouter);

// 开启 debug 模式
Vue.config.debug = true;

const router = new VueRouter({
    routes: routes
});

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});

