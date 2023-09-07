<template>
  <div>
    <div class="background-img">
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

        <div class="text-search_container">
          <div>
            <p class="hero-paragragh">
              Ready to Rock? Discover the <br />
              Hottest Events Here – Your <br />
              Calendar's New Best Friend!
            </p>
          </div>

          <div>
            <Search />
          </div>
        </div>
      </header>
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

div.background-img {
  background-image: url("~/assets/images/hero-img.png");
  background-repeat: no-repeat;
  background-position: cover;
  width: 100%;
  height: 640px;
  bottom: 0;
  filter: contrast(0.9) brightness(0.9);
  padding: 30px;
}

div.nav-container {
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  padding: 12px, 24px, 12px, 24px;
  height: 80px;
  z-index: 1;
  transition: background-color 0.3s;
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

/* Search Input Styling */
div.text-search_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem;
  position: static;
  margin-top: 20rem;
}

p.hero-paragragh {
  color: #fff;
  font-size: 26px;
  font-family: "GilroyBold";
  line-height: 37.5px;
}

.mobile-menu-open {
  display: flex;
}

@media screen and (max-width: 768px) {
  div.background-img {
    height: 540px;
    padding: 0px;
  }

  .btn-login {
    text-align: center;
  }

  .btn-signup {
    margin-top: 10px;
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

  ul li {
    margin: 10px;
  }

  header nav ul,
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  /* Search Input */
  div.text-search_container {
    flex-direction: column;
    margin-top: 5rem;
  }

  p {
    font-size: 20px;
  }

  p.hero-paragragh {
    font-size: 18px;
  }
}
</style>
