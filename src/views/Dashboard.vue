<template>
  <p>Logged in</p>
  <button @click="logoutUser" class="button is-warning">Sign out</button>
</template>

<script>
  import "@/store/index.js";
  import { mapActions, mapGetters } from "vuex";
  export default {
    computed: {
        // ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
      loggedIn() {
        return this.$store.state.auth.status.loggedIn
      },
    },
    methods: {
      // ...mapActions(["registerUser", "loginUser", "logoutUser"]),
    },
    created() {
      console.log('checking login')
      if (!this.loggedIn) {
        console.log('not logged in')
        this.$router.push("/login")
      }
    },
  }
</script>