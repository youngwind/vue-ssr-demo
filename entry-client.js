import createApp from './app'

const {app, store} = createApp();

if(window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

app.$mount('#app');