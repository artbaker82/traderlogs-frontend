<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"> 
        <p>TraderLogs</p>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      
      <div class="navbar-start">
        <!-- <a class="navbar-item">
          Home
        </a> -->
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a> -->

          <!-- <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">

            <div v-if="!loggedIn">
              <router-link to="/register" class="button is-primary">
                <strong>Sign up</strong>
              </router-link>
              <router-link to="/login" class="button is-light">
                <strong>Log in</strong>
              </router-link>
            </div>

            <div v-if="loggedIn">
              <button @click="handleLogout" class="button is-light">
                Log out
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>

  </nav>

</template>

<script>
  import "@/store/index.js"
  export default {
    name: 'NavBar',
    computed: {
      //TODO REFACTOR THIS TO STORE GETTER
      loggedIn() {
        return this.$store.state.auth.status.loggedIn
      },
    },
    methods: {
      handleLogout() {
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push("/login")
        })
      }
    }
}
</script>