<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
  import Login from "./views/Login.vue"
  import Dashboard from "./views/Dashboard.vue"
  import Register from "./views/Register.vue"
  import NavBar from "./components/NavBar.vue"
  import "@/store/index.js"
  export default {
    name: "App",
    components: {
      Login,
      Dashboard,
      Register,
      NavBar
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #user-creds-container {
    margin: 3rem 15rem 10rem 15rem;
  }

</style>
