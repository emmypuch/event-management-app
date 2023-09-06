<script setup>
import EventCard from "../../components/EventCard.vue";

const { pending, data: events } = await useFetch(
  "https://rendezvous-events.onrender.com/events",
  {
    lazy: true,
  }
);
</script>

<template>
  <div class="event-wrapper">
    <div v-for="eventData in events.data.allEvents" :key="eventData.id">
      <EventCard :eventData="eventData" />
    </div>
  </div>
</template>

<style>
div.event-wrapper {
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  padding: 50px;
}

@media screen and (max-width: 768px) {
  div.event-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    padding: 20px;
  }
}
</style>
