const createApp = require('./app.js');

const {app, store} = createApp();

window.__app = app;

if(window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

app.$mount('#app');