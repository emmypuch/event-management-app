<template>
  <div>
    <div class="trending-heading">
      <div>
        <h4>Trending events</h4>
      </div>
      <div>
        <NuxtLink to="/" class="custom-link"
          >View all trending events
          <img src="~assets/images/arrow-up.svg" alt="Arrow Up"
        /></NuxtLink>
      </div>
    </div>

    <!-- Trending Container Section -->
    <div class="trending-container">
      <div class="image-container_1">
        <img src="~assets/images/whatISaid.png" alt="Image" />
        <div class="paragragh">
          <p>loremnejn</p>
        </div>
      </div>

      <div>
        <img src="~assets/images/nativs.png" alt="Image" />
      </div>

      <div>
        <img src="~assets/images/basket.png" alt="Image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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

div.trending-heading img {
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

div.trending-container img {
  width: 421px;
  height: 240px;
  border-radius: 10px 10px 0px 0px;
}

div.image-container_1 {
  background: #fff;
  border-radius: 10px;
  width: 421px;
  height: 488px;
  border: 1px solid #e0e0e0;
}
</style>
