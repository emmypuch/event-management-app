<template>
  <div>
    <h1>Login</h1>
    <login-card></login-card>
  </div>
</template>

<script>
import LoginCard from "~/components/widgets/Onboarding/LoginCard.vue";

export default {
  components: {
    "login-card": LoginCard,
  },
};
</script>
