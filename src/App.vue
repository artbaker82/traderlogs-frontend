<template>
  <div v-if="isLoggedIn">
    <Dashboard />
  </div>
  <div v-else>
    <Login />
  </div>
</template>

<script>
  import SessionManager from "./components/SessionManager.vue";
  import Login from "./views/Login.vue"
  import Dashboard from "./views/Dashboard.vue"
  import "@/store/index.js";
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "App",
    components: {
      SessionManager,
      Login,
      Dashboard
    },
    computed: {
      ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
    },
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
