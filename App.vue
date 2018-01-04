<template>
    <div>
        <h1>App.vue</h1>
        <p>vue with vue </p>
        <hr>
        <foo></foo>
        <bar></bar>
    </div>
</template>
<style>
    h1 {
        color: red
    }
</style>
<script>
    import Foo from './components/Foo.vue';
    import Bar from './components/Bar.vue';

    export default {
        beforeCreate() {
            console.log('App beforeCreate');
        },
        beforeMount() {
            console.log('App beforeMount');
        },
        mounted() {
            console.log('App mounted');
        },
        components: {
            Foo,
            Bar
        }
    }
</script>