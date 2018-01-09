const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

module.exports =  function createStore() {
    return new Vuex.Store({
        state: {}
    })
};