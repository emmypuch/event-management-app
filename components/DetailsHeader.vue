<template>
  <div>
    <header>
      <div class="nav-container">
        <NuxtLink to="/" class="logo">rendezvous</NuxtLink>
        <div
          class="hamburger-menu"
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <nav :class="{ 'mobile-menu-open': mobileMenuOpen }">
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
              <NuxtLink to="/" class="custom-link" target="_blank"
                >FAQs</NuxtLink
              >
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
    </header>
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
  padding: 20px 60px 0px 60px;
}

nav {
  display: flex;
  justify-content: space-between;
}

header nav ul {
  display: flex;
}

header ul li {
  font-size: 14px;
  margin: 10px;
  font-family: "GilroyBold";
}

.custom-link {
  text-decoration: none;
  font-size: 16px;
  color: #432361;
}

.buttons {
  margin: 10px;
}

.logo {
  margin: 20px;
  color: #432361;
  font-size: 30px;
  text-decoration: none;
  line-height: 37.5px;
  font-family: "GilroyBold";
}

.btn-login,
.btn-signup {
  text-decoration: none;
}

.btn-login {
  margin-right: 30px;
  color: #432361;
  font-size: 16px;
  line-height: 18.75px;
  font-family: "GilroyBold";
}

.btn-signup {
  background-color: #783ead;
  padding: 12px 24px 12px 24px;
  font-size: 16px;
  border-radius: 10px;
  color: #fff;
  line-height: 18.75px;
  font-family: "GilroyBold";
  margin-right: 10px;
}

@media screen and (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .hamburger-menu {
    margin-top: 20px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-menu-open .mobile-menu {
    display: block;
  }

  .buttons {
    margin-top: 20px;
    text-align: center;
  }

  .btn-login,
  .btn-signup {
    margin: 0;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 10px;
    line-height: 18.75px;
    font-family: "GilroyBold";
    transition: background-color 0.3s;
  }

  .btn-login {
    margin-right: 0;
  }

  .btn-signup {
    margin-right: 10px;
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
