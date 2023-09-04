<template>
  <div>
    <gmap-map :center="center" :zoom="zoom" style="width: 100%; height: 400px">
      <gmap-marker
        :position="center"
        :clickable="true"
        @click="showInfoWindow"
      />

      <gmap-info-window
        :position="center"
        :opened="infoWindowOpen"
        @closeclick="infoWindowOpen = false"
      >
        <div>
          <h3>My Location</h3>
          <p>Latitude: {{ center.lat }}</p>
          <p>Longitude: {{ center.lng }}</p>
        </div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
      infoWindowOpen: false,
    };
  },
  methods: {
    showInfoWindow() {
      this.infoWindowOpen = !this.infoWindowOpen;
    },
  },
};
</script>
