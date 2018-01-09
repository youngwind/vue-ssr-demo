export default {
    computed: {
        prefetchData () {
            let componentTag = this.$options._componentTag;
            return this.$store.state[componentTag];
        }
    }
}




