<template>
  <div>
    <div class="background-img">
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
import "~/assets/css/header.css";
</script>
