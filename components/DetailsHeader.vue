<template>
  <div>
    <header>
      <div class="nav-container" :class="{ 'custom-height': mobileMenuOpen }">
        <div class="wrapper">
          <div>
            <NuxtLink to="/" class="logo">rendezvous</NuxtLink>
          </div>
          <div
            class="hamburger-menu"
            @click="toggleMobileMenu"
            :class="{ active: mobileMenuOpen }"
          >
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
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
          <div class="buttons">
            <nuxt-link to="/" class="btn-login">Login</nuxt-link>
            <nuxt-link to="/" class="btn-signup">Sign Up</nuxt-link>
          </div>
        </nav>
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
header {
  padding: 20px 60px 10px 60px;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

div.wrapper {
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  flex: 2;
}

.mobile-nav {
  display: none;
}

nav ul {
  display: flex;
  justify-content: center;
  align-self: center;
}

ul li {
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

.mobile-menu-open {
  display: flex;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    padding: 20px;
  }

  .logo {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .nav-container {
    display: flex;
    flex-direction: column;
  }

  .nav-container.custom-height {
    height: 400px;
  }

  nav {
    display: none;
  }

  .hamburger-menu {
    position: relative;
    right: 20px;
  }

  .mobile-menu-open {
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
