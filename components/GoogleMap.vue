<template>
  <div>
    <GoogleMap
      :api-key="apiKey"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="zoom"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    apiKey: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    initialZoom: {
      type: Number,
      default: 15,
    },
  },
  setup(props) {
    const center = ref({ lat: props.latitude, lng: props.longitude });
    const zoom = ref(props.initialZoom);

    // Watch for changes in latitude and longitude props
    watch([() => props.latitude, () => props.longitude], ([newLat, newLng]) => {
      center.value = { lat: newLat, lng: newLng };
    });

    return { center, zoom };
  },
});
</script>
