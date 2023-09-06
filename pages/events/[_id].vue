<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Details from "../details.vue";

const route = useRoute();
const id = computed(() => route.params._id);
console.log("id=", id.value);
const { pending, data } = await useFetch(
  `https://rendezvous-events.onrender.com/events/${id.value}`,
  {
    lazy: true,
    mode: "no-cors",
    initialCache: false,
  }
);

definePageMeta({
  layout: false,
});

const event = computed(() => data?.value?.data?.event);

console.log(data.value.data.event);
</script>

<template>
  <div>
    <NuxtLayout name="details">
      <Details :eventDetail="event" />
    </NuxtLayout>
  </div>
</template>
