<template>
  <div id="user-creds-container">

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input v-model="loginEmail" class="input" type="text" placeholder="email@email.com">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input v-model="loginPassword" class="input" type="password" placeholder="Text input">
      </div>
    </div>

    <div class="control">
      <button class="button is-link" @click="onLogin">Login</button>
      <router-link to="/Register">Or sign up here</router-link>
    </div>

  </div>
</template>

<script>
import "@/store/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  computed: {
    // ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    }
  },
  methods: {
    ...mapActions(["registerUser", "loginUser", "logoutUser",]),
    // onLogin(event) {
    //   event.preventDefault();
    //   let data = {
    //     user: {
    //         email: this.loginEmail,
    //         password: this.loginPassword,
    //     },
    //   }
    //   this.loginUser(data)
    //   this.resetData()
    // },
    handleLogin(user) {
      this.loading = true
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      )
    },
    resetData() {
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.loginEmail = "";
      this.loginPassword = "";
    },
  },
}
</script>
