<template>
    <div class='bar'>
        <h1>Bar</h1>
        <p>服务端渲染字段：{{prefetchData}} </p>
    </div>
</template>
<style>
    .bar{
        background: blue;
    }
</style>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        beforeUpdate() {
          console.log('重新渲染');
        },
        asyncData({store}) {
            return store.dispatch('fetchItem');
        },
        // computed: {
        //     msg() {
        //         return this.$store.state.msg;
        //     }
        // },
        prefetchData: function (tagName) {
            return new Promise((resolve, reject) => {
                resolve({
                    tagName,
                    data: '123'
                });
            })
        },
        created() {
            console.log('bar created');
        }
    }
</script>