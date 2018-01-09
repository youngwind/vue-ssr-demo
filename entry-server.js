const Vue = require('vue');
const App = require('./App.vue').default;
const createStore = require('./store');


module.exports = function (context) {
    const store = createStore();
    console.log('开始 new vue');
    let app = new Vue({
        store,
        render: h => h(App)
    });
    console.log('new vue 结束');

    let components = App.components;
    let prefetchFns = [];
    for (let key in components) {
        if (!components.hasOwnProperty(key)) continue;
        let component = components[key];
        if (component.prefetchData) {
            prefetchFns.push(component.prefetchData(key));
        }
    }

    return Promise.all(prefetchFns).then((res) => {
        res.forEach((item, key) => {
            Vue.set(store.state, `${item.tagName}`, item.data);
        });
        context.state = store.state;
        return app;
    });

};
