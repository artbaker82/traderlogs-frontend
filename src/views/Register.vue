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

      <div class="field">
        <label class="label">Password Confirmation</label>
        <div class="control">
          <input v-model="loginPassword" class="input" type="password" placeholder="Text input">
        </div>
      </div>

      <div class="control">
        <button class="button is-link" @click="handleLogin">Login</button>
        <router-link to="/Register">Or sign up here</router-link>
      </div>

  </div>
</template>

<script>
export default {
  name: "Register",
}
</script>