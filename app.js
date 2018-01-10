import Vue from 'vue';
import App from './App.vue';
import createStore from './store';

export default function () {
    const store = createStore();
    const app = new Vue({
        store,
        render: h => h(App)
    });
    return {app, store}
}