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
    </div>

  </div>

</template>

<script>
import "@/store/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
  },
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    }
  },
  methods: {
    ...mapActions(["registerUser", "loginUser", "logoutUser"]),

    // onSignUp(event) {
    //     event.preventDefault();
    //     let data = {
    //     user: {
    //     email: this.signUpEmail,
    //     password: this.signUpPassword,
    //   },
    // };
    // this.registerUser(data);
    // this.resetData();
    // },
    onLogin(event) {
        event.preventDefault();
        let data = {
          user: {
              email: this.loginEmail,
              password: this.loginPassword,
          },
        };
        this.loginUser(data);
        this.resetData();
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
