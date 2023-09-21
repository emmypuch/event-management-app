<template>
  <div class="wrapper">
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
      <div class="vertical-line"></div>
      <select v-model="selectedCategory" @change="categoryChanged">
        <option value="">Categories</option>
        <option value="conference">All</option>
        <option value="music">Comedy</option>
        <option value="sports">Religious</option>
        <option value="conference">Tech</option>
        <option value="conference">Health</option>
        <option value="conference">Fitness</option>
        <option value="conference">Sports</option>
        <option value="conference">Education</option>
      </select>
      <button @click="search" class="btn-search">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      selectedCategory: "",
    };
  },
  methods: {
    handleInput() {
      console.log("hi");
    },
    search() {
      console.log("hello");
    },
    categoryChanged() {
      console.log("Category changed to:", this.selectedCategory);
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
  color: #4f4f4f;
  font-size: 16px;
  line-height: 18.75px;
  font-family: "GilroySemiBold";
  width: 100%;
}

select {
  border: none;
  outline: none;
  background: none;
  margin-left: 16px;
  color: #4f4f4f;
  font-size: 16px;
  line-height: 18.75px;
  font-family: "GilroyRegular";
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.vertical-line {
  border-left: 2px solid #e0e0e0;
  height: 30px;
  margin-left: 16px;
}

select option:hover,
select option:checked {
  background-color: #f0f0f0;
}

button.btn-search {
  padding: 12px 24px 12px 24px;
  background-color: #783ead;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
  font-family: "GilroySemiBold";
  margin-left: 7px;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  div.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .search-input-container {
    padding: 10px;
  }

  .search-label img {
    margin-top: 8px;
  }

  .search-label input {
    font-size: 10px;
    width: 100%;
    margin-top: 10px;
  }

  select {
    margin-left: 14px;
    font-size: 10px;
    margin-left: 0;
    margin-top: 10px;
  }

  .vertical-line {
    display: none;
  }

  button.btn-search {
    padding: 10px;
    font-size: 10px;
  }
}
</style>
