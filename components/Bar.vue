<template>
    <div class='bar'>
        <h1>Bar</h1>
        <p>ajax数据：{{prefetchData}} </p>
    </div>
</template>
<style>
    .bar{
        background: #9e9ecd;
    }
</style>

<script>
    export default {
        prefetchData: function (tagName) {
            return new Promise((resolve, reject) => {
                resolve({
                    tagName,
                    data: 'Bar ajax 数据'
                });
            })
        },
        created() {
            console.log('bar created');
        }
    }
</script>