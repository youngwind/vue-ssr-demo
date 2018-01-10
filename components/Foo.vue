<template>
    <div class='foo'>
        <h1>Foo</h1>
        <p>ajax数据：{{prefetchData}} </p>
    </div>
</template>
<style>
    .foo{
        background: yellow;
    }
</style>
<script>
    export default {
        prefetchData: function (tagName) {
            return new Promise((resolve, reject) => {
                resolve({
                    tagName,
                    data: 'Foo ajax 数据'
                });
            })
        },
        created() {
            console.log('foo created');
        }
    }
</script>