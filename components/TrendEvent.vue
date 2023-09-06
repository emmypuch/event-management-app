<script setup>
import { computed, ref } from "vue";

const { pending, data: events } = await useFetch(
  "https://rendezvous-events.onrender.com/events",
  {
    lazy: true,
    mode: "no-cors",
  }
);

const currentPage = ref(0);
const itemsPerPage = ref(3);

const paginatedEvents = computed(() => {
  const startIndex = currentPage.value * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return events?._rawValue?.data?.allEvents?.slice(startIndex, endIndex);
});
</script>

<template>
  <div>
    <div class="trending-heading">
      <div>
        <h4>Trending events</h4>
      </div>
      <div>
        <NuxtLink to="/events" class="custom-link"
          >View all trending events
          <img src="~assets/images/arrow-up.svg" alt="Arrow Up"
        /></NuxtLink>
      </div>
    </div>

    <!-- Trending Container Section -->
    <div class="trending-container">
      <div v-for="eventData in paginatedEvents" :key="eventData.id">
        <event-card :eventData="eventData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
div.trending-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

div.trending-heading {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

div.trending-heading h4 {
  color: #000;
  font-size: 30px;
  font-family: "GilroySemiBold";
  line-height: 18.75px;
}

.custom-link {
  text-decoration: none;
  font-family: "GilroySemiBold";
  font-size: 16px;
  color: #432361;
}

div.trending-heading img,
.details-link img {
  position: relative;
  top: 5px;
}

/* Trending Container */
div.trending-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

img.image1 {
  width: 421px;
  height: 240px;
  border-radius: 10px 10px 0px 0px;
}

div.image-container_1 {
  background: #fff;
  border-radius: 10px;
  width: 421px;
  height: 470px;
  border: 1px solid #e0e0e0;
}

h5 {
  font-family: "GilroySemiBold";
  font-size: 16px;
  padding-top: 20px;
  padding-left: 20px;
  line-height: 18.75px;
}

h6 {
  line-height: 16.41px;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 20px;
  font-family: "GilroyMedium";
}

p {
  line-height: 16.41px;
  font-size: 14px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: "GilroyRegular";
}

.details-link {
  color: #432361;
  font-family: "GilroySemiBold";
  font-size: 14px;
  line-height: 16.41px;
  text-decoration: none;
  padding-left: 20px;
}

@media screen and (max-width: 768px) {
  div.trending-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 30px;
    align-items: center;
  }

  div.trending-heading {
    padding: 20px;
  }

  div.trending-heading h4 {
    font-size: 20px;
    align-items: center;
  }

  .custom-link {
    font-size: 14px;
    align-items: center;
  }

  div.image-container_1 {
    width: 100%;
    max-width: 350px;
  }

  img.image1 {
    width: 100%;
    height: auto;
  }

  h5 {
    font-size: 14px;
    align-items: center;
  }

  h6 {
    font-size: 12px;
    align-items: center;
  }

  p {
    font-size: 12px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
    align-items: center;
  }

  .details-link {
    font-size: 12px;
    align-items: center;
  }
}
</style>
