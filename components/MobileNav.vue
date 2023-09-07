<template>
  <div>
    <div v-if="mobileMenuOpen" class="mobile-nav">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="custom-link" target="_blank"
              >Discover</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" class="custom-link" target="_blank"
              >About us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" class="custom-link" target="_blank">FAQs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="custom-link" target="_blank"
              >Contact us</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div class="buttons">
        <nuxt-link to="/" class="btn-login">Login</nuxt-link>
        <nuxt-link to="/" class="btn-signup">Sign Up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style scoped>
header .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

nav {
  display: flex;
  justify-content: space-between;
}

.mobile-nav {
  display: none;
}

nav ul {
  display: flex;
}

ul li {
  font-size: 14px;
  margin: 10px;
  font-family: "GilroyBold";
}

@media screen and (max-width: 768px) {
  .mobile-nav {
    display: block;
  }

  .logo {
    font-size: 24px;
    margin-bottom: 20px;
  }

  nav {
    display: none;
  }

  .hamburger-menu {
    margin-top: 20px;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-menu-open .mobile-menu {
    display: block;
  }

  .buttons {
    margin-top: 20px;
  }

  ul li {
    margin: 10px;
  }

  header nav ul,
  .buttons {
    display: flex;
    flex-direction: column;
  }

  .bar {
    width: 30px;
    height: 3px;
    background-color: #432361;
    margin: 4px 0;
    transition: 0.4s;
  }

  .hamburger-menu.active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .hamburger-menu.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger-menu.active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>
