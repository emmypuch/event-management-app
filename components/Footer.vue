<template>
  <div class="wrapper">
    <div class="logo-wrapper">
      <NuxtLink to="/">rendezvous</NuxtLink>
      <p>
        Your Personal Event Sherpa: Curating <br />
        Awesome, One Click at a Time.
      </p>
    </div>

    <div class="content">
      <div class="feature">
        <h4>Feature</h4>
        <ul>
          <li>
            <NuxtLink to="/discover" target="_blank">Event discovery</NuxtLink>
          </li>
          <li><NuxtLink to="/discover" target="_blank">Ticketing</NuxtLink></li>
        </ul>
      </div>

      <div class="company">
        <h4>Company</h4>
        <ul>
          <li><NuxtLink to="/about" target="_blank">About us</NuxtLink></li>
          <li><NuxtLink to="/faqs" target="_blank">FAQs</NuxtLink></li>
          <li><NuxtLink to="/career" target="_blank">Careers</NuxtLink></li>
          <li><NuxtLink to="/support" target="_blank">Support</NuxtLink></li>
        </ul>
      </div>

      <div class="contact">
        <h4>Contact</h4>
        <ul>
          <li><NuxtLink mailto:info@events.com>info@events.com</NuxtLink></li>
          <li><NuxtLink tel:+234 701 345 6789>+234 701 345 6789</NuxtLink></li>
          <p>
            Race Course, 8/9 Marina, <br />
            Onikan, Lagos Lagos, 4aa Force <br />
            Rd, Lagos Island 102273, Lagos
          </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/footer.css";
</script>
