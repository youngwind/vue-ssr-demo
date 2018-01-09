const Vue = require('vue');
const App = require('./App.vue').default;
const createStore = require('./store');


module.exports = function (createApp) {
    const store = createStore();
    const app = new Vue({
        store,
        render: h => h(App)
    })
    return {app, store}
};