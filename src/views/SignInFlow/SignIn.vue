<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <RequestAccount />
    <div class="login">
      <img v-show="isDarkMode" src="@/assets/DCHQ.svg" />
      <img v-show="!isDarkMode" src="@/assets/DCHQ-dark.svg" />
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into Design+Code HQ</h4>
      <input
        :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
      <router-link
        :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}"
        to="/recover"
      >Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "SignIn",
  components: {
    RequestAccount, ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
    this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);
  a {
    color: $white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: $black;
  }
}
</style>