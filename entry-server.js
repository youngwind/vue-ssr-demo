import Vue from 'vue';
import App from './App.vue';
import createStore from './store';

export default function (context) {
    const store = createStore();
    let app = new Vue({
        store,
        render: h => h(App)
    });

    // 找到所有 prefetchData 方法
    let components = App.components;
    let prefetchFns = [];
    for (let key in components) {
        if (!components.hasOwnProperty(key)) continue;
        let component = components[key];
        if(component.asyncData) {
            prefetchFns.push(component.asyncData({
                store
            }))
        }
    }

    return Promise.all(prefetchFns).then((res) => {
        context.state = store.state;
        return app;
    });
};
