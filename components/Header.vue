<template>
  <div>
    <div class="background-img">
      <header>
        <div class="nav-container">
          <NuxtLink to="/" class="logo">rendezvous</NuxtLink>
          <div class="hamburger-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 768px) {
  div.background-img {
    height: 540px;
    padding: 0px;
  }

  /* div.nav-container {
    top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 20px;
    padding: 12px, 24px, 12px, 24px;
    height: 80px;
  } */

  .nav-container {
    top: 30px;
    margin: 0 30px;
    padding: 20px;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hamburger-menu {
    display: flex;
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

  div.text-search_container {
    flex-direction: column;
    margin-top: 10rem;
  }

  p {
    font-size: 20px;
    margin-bottom: 15px;
  }

  p.hero-paragragh {
    font-size: 20px;
  }
}
</style>
