<template>
  <div>
    <div class="header"><Header /></div>
    <div class="hero-img">
      <img src="assets/images/hero-img.png" />
    </div>

    <!-- Map Section -->
    <div class="map-wrapper">
      <div class="map-content">
        <h6>Event description</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="ticket">
          <h6>Tickets Pricing</h6>
          <div class="flex">
            <div class="single">
              <h5>Single</h5>
              <p>NGN 5,000</p>
            </div>

            <div class="pair">
              <h5>Pair</h5>
              <p>NGN 9,000</p>
            </div>
          </div>

          <div class="button">
            <buy-now-button @click="handleBuyNowClick" />
          </div>
        </div>
      </div>

      <div class="map">
        <h6>Directions</h6>
        <GoogleMap />
      </div>
    </div>
    <footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import GoogleMap from "~/components/GoogleMap.vue";
import BuyNowButton from "~/components/BuyNowButton.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { Header, GoogleMap, BuyNowButton, Footer },
  methods: {
    handleBuyNowClick() {
      console.log("hello");
    },
  },
};
</script>

<style scoped>
div.map-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

div.map-content,
div.map,
div.ticket {
  margin-top: 10px;
}

div.map-content h6,
div.map h6,
div.ticket h6 {
  line-height: 18.75px;
  font-size: 16px;
  font-family: "GilroyBold";
}

div.map-content p {
  line-height: 18.75px;
  font-size: 16px;
  font-family: "GilroyRegular";
  margin-top: 15px;
}

div.flex {
  display: flex;
  gap: 30px;
}

div.single h5,
div.single h5 {
  font-family: "GilroyMedium";
  font-size: 20px;
  line-height: 23.44px;
}

div.single p,
div.pair p {
  font-family: "GilroyBold";
  font-size: 16px;
  line-height: 18.75px;
  color: #9b51e0;
}

div.button {
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  div.map-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
