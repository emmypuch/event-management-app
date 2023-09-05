<template>
  <div>
    <div class="container">
      <div>
        <h4>Discover a World of Events Tailored Just for You.</h4>
        <nuxt-link to="/details" class="custom-link">View all events</nuxt-link>
      </div>

      <div class="grid">
        <div class="grid-text">
          <img src="~assets/images/online.png" alt="Image" />
          <div class="overlay">
            <h6>Online Events</h6>
          </div>
        </div>

        <div class="grid-text">
          <img src="~assets/images/physical.png" alt="Image" />
          <div class="overlay">
            <h6>Physical Events</h6>
          </div>
        </div>

        <div class="grid-text">
          <img src="~assets/images/hybrid.png" alt="Image" />
          <div class="overlay">
            <h6>Hybrid Events</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

div.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

h4 {
  font-family: "GilroySemiBold";
  font-size: 30px;
  line-height: 37.5px;
  margin-top: 30px;
  padding-bottom: 40px;
}

.custom-link {
  text-decoration: none;
  background: #783ead;
  padding: 12px 24px 12px 24px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-family: "GilroySemiBold";
}

div.grid-text {
  position: relative;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(57, 57, 57, 0.5);
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

h6 {
  color: #fff;
  font-size: 24px;
  font-family: "GilroySemiBold";
  line-height: 28.13px;
}

img {
  width: 421px;
  height: 240px;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  div.container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }

  h4 {
    font-size: 20px;
  }

  .custom-link {
    margin-top: 20px;
  }

  div.grid {
    margin-top: 40px;
  }

  img {
    width: 100%;
    height: auto;
  }

  .overlay {
    width: 100%;
    height: auto;
  }

  h6 {
    font-size: 20px;
  }
}
</style>
