import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function fetchBar() {
    return new Promise(function (resolve, reject) {
        resolve('bar ajax 返回数据');
    });
}

function fetchFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo ajax 返回数据');
    });
}
export default function createStore() {
    return new Vuex.Store({
        state: {
            bar: '',
            foo: ''
        },
        actions: {
            fetchBar({commit}) {
                return fetchBar().then(msg => {
                    commit('setBar', {msg})
                })
            },
            fetchFoo({commit}) {
                return fetchFoo().then(msg => {
                    commit('setFoo', {msg})
                })
            }
        },
        mutations:{
            setBar(state, {msg}) {
                Vue.set(state, 'bar', msg);
            },
            setFoo(state, {msg}) {
                Vue.set(state, 'foo', msg);
            }
        }
    })
}