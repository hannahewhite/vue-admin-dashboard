<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img v-show="isDarkMode" src="@/assets/DCHQ.svg" />
      <img v-show="!isDarkMode" src="@/assets/DCHQ-dark.svg" />
      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign into Design+Code HQ</h4>
      <form @submit.prevent="onSubmit">
      <input
        :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
        type="email"
        placeholder="Email"
        v-model="email"
        required
      />
      <input
        :class="{'light-field' : isDarkMode, 'dark-field' : !isDarkMode}"
        type="password"
        placeholder="Password"
        v-model="password"
        required
      />
      <button>Sign In</button>
      </form>
      <router-link
        :class="{'light-link' : isDarkMode, 'dark-link' : !isDarkMode}"
        to="/recover"
      >Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import { auth } from "@/main";
import Notification from "@/components/Notification";
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "SignIn",
  components: {
    RequestAccount, ThemeSwitch, Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
    this.$store.commit("toggleDarkMode");
    },
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth.login(email, password, true).then(response => {
        this.$router.replace("/")
      }).catch(error => {
        alert("Error:" + error);
      });
    }
  },
  
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
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
  text-align: center;
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