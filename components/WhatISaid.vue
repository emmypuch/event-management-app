<template>
  <div>
    <div class="flex">
      <div>
        <h6>I said what I said Live Show</h6>
        <div>
          <time-address />
        </div>
      </div>

      <!-- Organizer Section -->
      <div>
        <h6>Contact organizers</h6>
        <social-media-links />
      </div>
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
