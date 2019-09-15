<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
  import Header from "./components/header/Header"

  export default {
    components: {Header}
  }
</script>