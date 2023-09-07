<template>
  <div class="social-flex">
    <div><h6>Contact organizers</h6></div>
    <div class="social-media-links">
      <a href="#">
        <img src="~assets/images/email.svg" alt="Email Icon" />
      </a>
      <a href="#">
        <img src="~assets/images/twitter.svg" alt="Twitter Icon" />
      </a>
      <a href="#">
        <img src="~assets/images/Ig.svg" alt="Instagram Icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
/* .social-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
} */

.social-media-links {
  display: flex;
  gap: 16px;
  margin-top: 10px;
}

.social-media-links h6 {
  font-size: 16px;
  margin-top: 10px;
}

.social-media-links a {
  text-decoration: none;
  font-size: 24px;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .social-media-links a {
    margin-top: 5px;
  }
}
</style>
