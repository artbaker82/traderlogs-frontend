<template>
  <p>Logged in</p>
  <button @click="logoutUser" class="button is-warning">Sign out</button>
</template>

<script>
  import "@/store/index.js";
  export default {
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn
      },
    },
    created() {
      if (!this.loggedIn) {
        this.$router.push("/login")
      }
    },
  }
</script>