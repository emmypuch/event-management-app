<template>
  <div>
    <div class="hero-img">
      <img :src="eventDetail.imageUrl" alt="" class="responsive-image" />
    </div>

    <!-- what I said section -->
    <div>
      <what-i-said :eventDetails="eventDetail" />
    </div>

    <!-- Map Section -->
    <div class="ticketing">
      <social-media-links :eventDetails="eventDetail" />
    </div>

    <div class="category-heading">
      <h6>Event Category</h6>
      <p>{{ eventDetail.category }}</p>
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
              <p>{{ !eventDetail.price ? "FREE" : eventDetail.price }}</p>
            </div>

            <div class="pair">
              <h5>Pair</h5>
              <p>{{ !eventDetail.price ? "FREE" : eventDetail.price }}</p>
            </div>
          </div>

          <div class="button">
            <ButtonBuyButton />
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
        address: "",
        city: "",
        country: "",
        price: "",
        category: "",
        imageUrl: "",
        description: "",
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
div.ticket h6,
div.category-heading h6 {
  line-height: 18.75px;
  font-size: 16px;
  font-family: "GilroyBold";
}

div.map-content p,
div.category-heading p {
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

div.category-heading {
  padding: 20px 0px 0px 60px;
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
    padding: 0px 30px 0px 20px;
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

  div.category-heading {
    padding: 20px 0px 5px 20px;
  }

  div.category-heading h6,
  div.category-heading p {
    /* text-align: center; */
    margin-top: 10px;
  }
}

@media screen and (max-width: 480px) {
  .responsive-image {
    height: 300px;
  }

  div.map-wrapper {
    gap: 30px;
    padding: 0px 0px 0px 20px;
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
  }
}
</style>
