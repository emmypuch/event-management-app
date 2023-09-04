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
      </div>

      <div class="map">
        <h6>Directions</h6>
        <GoogleMap />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import GoogleMap from "~/components/GoogleMap.vue";

export default {
  components: { Header, GoogleMap },
};
</script>

<style scoped>
div.map-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

div.map-content,
div.map {
  margin-top: 10px;
}

div.map-content h6,
div.map h6 {
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

@media screen and (max-width: 768px) {
  div.map-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
