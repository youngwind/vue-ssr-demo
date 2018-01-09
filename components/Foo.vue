<template>
    <div class='foo'>
        <h1>Foo</h1>
        <h2>名字：{{name}}</h2>
        <p>{{msg}} </p>
    </div>
</template>
<style>
    .foo{
        background: yellow;
    }
</style>
<script>
    export default {
        data() {
            return {
                msg: 'foo',
                name: ''
            }
        },
        // prefetchData() {
        //     return {
        //         key: 'name',
        //         fn: new Promise((resolve, reject) => {
        //             resolve("456");
        //         })
        //     };
        // },
        created() {
            console.log('foo created');
            // console.log(this.a)
        }
    }
</script>