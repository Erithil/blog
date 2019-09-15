<template>
    <div id="photo">
        <Slide />
    </div>
</template>

<script>
import Slide from "../../../components/photo/Slide"

    export default {
        name: "Photo",
        components: {
            Slide
        }
    }
</script>

<style scoped>
#photo {
width: 100%;
}
</style>