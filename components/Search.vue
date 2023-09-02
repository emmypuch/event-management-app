<template>
  <div>
    <div class="search-input-container">
      <label class="search-label">
        <img src="~assets/images/search-icon.svg" alt="Search Icon" />
        <input
          type="text"
          v-model="query"
          @input="handleInput"
          placeholder="Search for an event"
        />
      </label>
      <button @click="search">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    handleInput() {
      console.log("hi");
    },
    search() {
      console.log("hello");
    },
  },
};
</script>

<style scoped>
.search-input-container {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  padding: 0px 24px 0px 24px;
  height: 70px;
  width: 100%;
}

.search-label {
  display: flex;
  align-items: center;
}

.search-label img {
  margin-right: 8px;
}

.search-label input {
  border: none;
  outline: none;
  background: none;
}

button {
  padding: 12px 24px 12px 24px;
  background-color: #783ead;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
