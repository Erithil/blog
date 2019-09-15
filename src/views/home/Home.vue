<template>
    <div id="home">
        <Navigation/>
        <router-view />
    </div>
</template>

<script>
import Navigation from "../../components/nav/Navigation"
    export default {
        name: "Home",
        components: {
            Navigation,
        },
        mounted() {
            let home = document.getElementById('home');
            home.style.height = "document.body.offsetHeight"

        }
    }
</script>

<style lang="scss" scoped>
#home {
    display: flex;
}
</style>