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
    },
    data() {
      return {
        signUpEmail: "",
        signUpPassword: "",
        loginEmail: "",
        loginPassword: "",
      };
    },
    methods: {
      // ...mapActions(["registerUser", "loginUser", "logoutUser"]),
    }
  }
</script>