<template>
  <div>
    <header>
      <div class="nav-container">
        <NuxtLink to="/" class="logo">rendezvous</NuxtLink>
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
          <nuxt-link to="/login" class="btn-login">Login</nuxt-link>
          <nuxt-link to="/" class="btn-signup">Sign Up</nuxt-link>
        </div>
      </div>
    </header>
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
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
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
</style>
