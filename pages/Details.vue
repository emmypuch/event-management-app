<template>
  <div>
    <div class="hero-img">
      <img :src="eventDetail.imageUrl" alt="" class="responsive-image" />
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
          {{ eventDetail.description }}
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
        <div class="map-container">
          <iframe
            width="100%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            :src="getGoogleMapUrl"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventDetail: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        title: "",
        date: "",
        time: "",
        imageUrl: "",
        description: "",
        // Add latitude and longitude properties for the map location
        latitude: 10.179,
        longitude: 7.3661,
      }),
    },
  },

  computed: {
    getGoogleMapUrl() {
      return `https://maps.google.com/maps?q=${this.eventDetail.latitude},${this.eventDetail.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    },
  },
};
</script>

<style scoped>
.map-container {
  width: 400px;
  height: 515px;
  padding-bottom: 75%;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}

.map-container iframe {
  width: 400px;
  height: 515px;
}

.responsive-image {
  width: 100%;
  max-height: 100%;
  height: 480px;
  border-radius: 10px;
}

div.map-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 70px;
  padding: 50px;
  margin-top: 20px;
}

div.hero-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 50px;
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
  .responsive-image {
    height: 380px;
  }

  div.hero-img {
    padding: 20px;
  }

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

  .map-container {
    width: 400px;
    height: 515px;
  }

  .map-container iframe {
    width: 400px;
    height: 515px;
  }
}

@media screen and (max-width: 480px) {
  .responsive-image {
    height: 300px;
  }

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

  .map-container {
    width: 300px;
    height: 515px;
  }

  .map-container iframe {
    width: 300px;
    height: 515px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
}
</style>
