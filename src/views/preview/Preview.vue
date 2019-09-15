<template>
    <div id="preview">
        <div id="entry">
            <el-button type="primary" round @click="toHome()">进入主页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Preview",

        methods: {
            toHome() {
                this.$router.push({
                    name: 'home'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
#entry{
    width: 100%;
    height: 10rem;
    margin: 30rem auto;
}
</style>