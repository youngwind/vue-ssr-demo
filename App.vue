<template>
    <div @click="trigger">
        <h1>App.vue</h1>
        <p>vue with vue </p>
        <hr>
        <foo1 ref="foo_ref"></foo1>
        <bar1 ref="bar_ref"></bar1>
        <bar2 ref="bar_ref2"></bar2>
    </div>
</template>
<style>
    h1 {
        color: red
    }
</style>
<script>
    // import './registerGlobals'
    import Foo from './components/Foo.vue';
    import Bar from './components/Bar.vue';

    export default {
        data(){
            return {
                a:1,
                b:2
            }
        },

        beforeCreate() {
            console.log('App beforeCreate');
        },
        created() {
            console.log('App created');
        },
        beforeMount() {
            console.log('App beforeMount');
        },
        mounted() {
            console.log('App mounted');
        },
        methods: {
            trigger() {
              console.log('触发点击事件');
            }
        },
        components: {
            foo1: Foo,
            bar1: Bar,
            bar2: Bar
        }
    }
</script>