<template>
  <div class="social-flex">
    <div><h6>Contact organizers</h6></div>
    <div class="social-media-links">
      <a href="#" target="_blank">
        <img src="~assets/images/email.svg" alt="Email Icon" />
      </a>
      <a href="#" target="_blank">
        <img src="~assets/images/twitter.svg" alt="Twitter Icon" />
      </a>
      <a href="#" target="_blank">
        <img src="~assets/images/Ig.svg" alt="Instagram Icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.social-media-links {
  display: flex;
  gap: 16px;
}

.social-media-links h6 {
  margin-top: 10px;
}

.social-media-links a {
  text-decoration: none;
  font-size: 24px;
  margin-top: 15px;
}
</style>
