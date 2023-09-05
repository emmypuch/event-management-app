<template>
  <div>
    <div class="hero-img">
      <img src="~assets/images/hero2.png" />
    </div>

    <!-- what I said section -->
    <div>
      <what-i-said />
    </div>

    <!-- Map Section -->
    <div class="ticketing">
      <social-media-links />
    </div>
    <div class="map-wrapper">
      <div class="map-content">
        <h6>Event description</h6>
        <p class="map-text">
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
          <div class="flex-ticket">
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
        <div>
          <!-- <GoogleMap /> -->
          <!-- <img src="~assets/images/basket.png" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyNowButton from "~/components/BuyNowButton.vue";
import WhatISaid from "~/components/WhatISaid.vue";

definePageMeta({ layout: "details" });
export default {
  components: { BuyNowButton, WhatISaid },
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
  gap: 70px;
  padding: 50px;
}

div.hero-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

div.hero-img img {
  max-width: 100%;
  height: auto;
}

div.map-content,
div.map,
div.ticket {
  margin-top: 30px;
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
  text-align: justify;
}

div.flex-ticket {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

div.single h5,
div.pair h5 {
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

div.ticketing {
  position: absolute;
  left: 970px;
}

@media screen and (max-width: 768px) {
  div.map-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  div.map-content h6,
  div.map h6,
  div.ticket h6 {
    font-size: 18px;
  }

  div.map-content p {
    font-size: 14px;
  }

  div.flex-ticket {
    flex-direction: column;
    gap: 10px;
  }

  div.single h5,
  div.pair h5 {
    font-size: 18px;
  }

  div.single p,
  div.pair p {
    font-size: 14px;
  }

  div.button {
    margin-top: 10px;
  }

  div.ticketing {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 0px;
    margin-top: 30px;
  }
}

@media screen and (max-width: 480px) {
  div.map-wrapper {
    gap: 30px;
    padding: 20px;
  }

  div.map-content h6,
  div.map h6,
  div.ticket h6 {
    font-size: 16px;
  }

  div.map-content p {
    font-size: 14px;
  }

  div.flex-ticket {
    flex-direction: column;
    gap: 10px;
  }

  div.single h5,
  div.pair h5 {
    font-size: 16px;
  }

  div.single p,
  div.pair p {
    font-size: 14px;
  }

  div.button {
    margin-top: 10px;
  }

  div.ticketing {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 0px;
    margin-top: 30px;
  }
}
</style>
