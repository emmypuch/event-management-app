<template>
  <div>
    <div class="logo-wrapper">
      <NuxtLink to="/">rendezvous</NuxtLink>
      <p>Your Personal Event Sherpa: Curating Awesome, One Click at a Time.</p>
    </div>

    <div class="content">
      <div class="feature">
        <ul>
          <li>
            <NuxtLink to="/discover" target="_blank">Event discovery</NuxtLink>
          </li>
          <li><NuxtLink to="/discover" target="_blank">Ticketing</NuxtLink></li>
        </ul>
      </div>

      <div class="company">
        <ul>
          <li><NuxtLink to="/discover" target="_blank">Discover</NuxtLink></li>
          <li><NuxtLink to="/about" target="_blank">About us</NuxtLink></li>
          <li><NuxtLink to="/faqs" target="_blank">FAQs</NuxtLink></li>
          <li><NuxtLink to="/contact" target="_blank">Contact us</NuxtLink></li>
        </ul>
      </div>

      <div class="contact">
        <ul>
          <li><NuxtLink mailto:info@events.com>info@events.com</NuxtLink></li>
          <li><NuxtLink tel:+234 701 345 6789>About us</NuxtLink></li>
          <p>
            Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos
            Island 102273, Lagos
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>
