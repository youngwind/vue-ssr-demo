const Vue = require('vue');
const App = require('./App.vue').default;


function createApp() {
    const app = new Vue({
        render: h => h(App)
    });
    return app;
};

module.exports = createApp;