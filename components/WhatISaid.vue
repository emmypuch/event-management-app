<template>
  <div>
    <h5 class="said">I said what I said Live Show</h5>
    <div class="flex-said">
      <div>
        <time-address />
      </div>

      <!-- Organizer Section -->
      <!-- <div class="ticketing">
        <social-media-links />
      </div> -->
    </div>
  </div>
</template>

<script>
import SocialMediaLinks from "~/components/SocialMediaLinks.vue";
import TimeAddress from "~/components/TimeAddress.vue";

export default {
  components: { SocialMediaLinks, TimeAddress },
};
</script>

<style scoped>
div.ticketing {
  position: relative;
  left: 0;
}

div.ticketing h6 {
  color: red;
}

h5.said {
  padding-left: 65px;
  margin-top: 30px;
  color: #000;
  font-size: 24px;
  font-family: "GilroyBold";
  line-height: 28.13px;
}

@media screen and (max-width: 768px) {
  h5.said {
    padding-left: 30px;
  }
}
</style>
