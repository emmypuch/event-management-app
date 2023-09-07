<script setup>
import EventCard from "../../components/EventCard.vue";
import { computed, ref, watch } from "vue";
const currentPage = ref(1);

const events = ref([]);
const { pending, data } = await useFetch(
  `https://rendezvous-events.onrender.com/events?page=${currentPage.value}`,
  {
    lazy: true,
    mode: "no-cors",
  }
);
if (data) {
  events.value = data.value.data.allEvents;
}
// console.log(events.value);

// const itemsPerPage = ref(10);
// const searchValue = ref("");

// const searchResult = computed(() => {
//   if (searchValue.value == "") {
//     return events?._rawValue?.data?.allEvents;
//   } else {
//     return events?._rawValue?.data?.allEvents?.filter((item) => {
//       return item.title?.includes(searchValue.value);
//     });
//   }
// });

const totalPages = computed(() => {
  return data.value.data.noOfPages;
});

// const paginatedEvents = computed(() => {
//   const startIndex = currentPage.value * itemsPerPage.value;
//   const endIndex = startIndex + itemsPerPage.value;
//   //   console.log(searchResult.value);
//   return searchResult.value?.slice(startIndex, endIndex);
// });

const nextPage = () => {
  //   console.log(totalPages);
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

watch(
  currentPage,
  async (newPage, oldPage) => {
    const { pending, data: newData } = await useFetch(
      `https://rendezvous-events.onrender.com/events?page=3`,
      {
        lazy: true,
        mode: "no-cors",
      }
    );
    console.log(newData);
    //   events.value = newData.value.data.allEvents;
  },
  { immediate: true }
);
const eventsToShow = computed(() => events.value);
</script>

<template>
  <div>
    <div class="event-wrapper">
      <div v-for="eventData in eventsToShow" :key="eventData.id">
        <EventCard :eventData="eventData" />
      </div>
    </div>
    <div class="btns">
      <button @click="previousPage()" class="prev">Prev</button>
      <button @click="nextPage()" class="next">Next</button>
    </div>
  </div>
</template>

<style>
div.event-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
  padding: 50px;
  margin-top: 20px;
}

div.btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin: 15px;
}

button.prev {
  background-color: #783ead;
  padding: 12px 24px 12px 24px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 12px;
  cursor: pointer;
  font-family: "GilroyBold";
  text-align: center;
  font-size: 12px;
}

button.next {
  background-color: #5a3c77;
  padding: 12px 24px 12px 24px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 10px;
  font-family: "GilroyBold";
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.next:hover {
  background-color: #432361;
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
