<template>
  <div class="wrapper">
    <div class="logo-wrapper">
      <NuxtLink to="/" class="footer-logo">rendezvous</NuxtLink>
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
            <NuxtLink to="/" target="_blank" class="event"
              >Event discovery</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/" target="_blank" class="ticket">Ticketing</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="company">
        <h4>Company</h4>
        <ul>
          <li>
            <NuxtLink to="/" target="_blank" class="about">About us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" target="_blank" class="faq">FAQs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" target="_blank" class="career">Careers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" target="_blank" class="support">Support</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <NuxtLink mailto:info@events.com class="info"
              >info@events.com</NuxtLink
            >
          </li>
          <li>
            <NuxtLink tel:+234 701 345 6789 class="tel"
              >+234 701 345 6789</NuxtLink
            >
          </li>
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

<script></script>

<style scoped>
div.wrapper {
  background-color: #432361;
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin-top: 50px;
}

div.content {
  display: flex;
  gap: 40px;
}

.footer-logo {
  color: #fff;
  text-decoration: none;
  line-height: 37.5px;
  font-size: 30px;
  font-family: "GilroyBold";
}

.logo-wrapper p {
  font-family: "GilroyRegular";
  font-size: 14px;
  color: #fff;
  line-height: 18.75px;
  margin-top: 10px;
}

div.feature h4,
div.company h4,
div.contact h4 {
  color: #fff;
  font-size: 16px;
  font-family: "GilroyBold";
  line-height: 23.44px;
}

.event,
.ticket,
.about,
.faq,
.career,
.support,
.info,
.tel {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-family: "GilroySemiBold";
  line-height: 18.75px;
}

div.contact p {
  color: #fff;
  font-size: 14px;
  font-family: "GilroySemiBold";
  margin-top: 10px;
  line-height: 18.75px;
}

div.feature ul li,
div.company ul li,
div.contact ul li {
  margin-top: 15px;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

  div.content {
    margin-top: 30px;
    justify-content: space-between;
  }

  .footer-logo {
    font-size: 24px;
  }

  .logo-wrapper p {
    font-size: 12px;
  }

  div.feature h4,
  div.company h4,
  div.contact h4 {
    font-size: 14px;
  }

  .event,
  .ticket,
  .about,
  .faq,
  .career,
  .support,
  .info,
  .tel {
    font-size: 12px;
  }

  div.contact p {
    font-size: 12px;
  }
}
</style>
