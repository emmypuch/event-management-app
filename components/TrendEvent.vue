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
        <img src="~assets/images/whatISaid.png" class="image1" alt="Image" />
        <div class="paragragh">
          <h5>ISWIS Live show</h5>
          <h6>
            Sun, Oct 3rd
            <img
              src="~assets/images/Ellipse.svg"
              style="
                background: #000;
                height: 4px;
                width: 4px;
                border-radius: 50px;
                margin-left: 3px;
                margin-right: 3px;
              "
              alt="Ellipse"
            />
            6pm
          </h6>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <NuxtLink to="/" class="details-link"
            >View details <img src="~assets/images/arrow-up.svg" alt="Arrow Up"
          /></NuxtLink>
        </div>
      </div>

      <div class="image-container_1">
        <img src="~assets/images/nativs.png" class="image1" alt="Image" />
        <div class="paragragh">
          <h5>ISWIS Live show</h5>
          <h6>
            Sun, Oct 3rd
            <img
              src="~assets/images/Ellipse.svg"
              style="
                background: #000;
                height: 4px;
                width: 4px;
                border-radius: 50px;
                margin-left: 3px;
                margin-right: 3px;
              "
              alt="Ellipse"
            />
            6pm
          </h6>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <NuxtLink to="/" class="details-link"
            >View details <img src="~assets/images/arrow-up.svg" alt="Arrow Up"
          /></NuxtLink>
        </div>
      </div>

      <div class="image-container_1">
        <img src="~assets/images/basket.png" class="image1" alt="Image" />
        <div class="paragragh">
          <h5>ISWIS Live show</h5>
          <h6>
            Sun, Oct 3rd
            <img
              src="~assets/images/Ellipse.svg"
              style="
                background: #000;
                height: 4px;
                width: 4px;
                border-radius: 50px;
                margin-left: 3px;
                margin-right: 3px;
              "
              alt="Ellipse"
            />
            6pm
          </h6>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <NuxtLink to="/" class="details-link"
            >View details <img src="~assets/images/arrow-up.svg" alt="Arrow Up"
          /></NuxtLink>
        </div>
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
  }

  div.trending-heading {
    padding: 20px;
  }

  div.trending-heading h4 {
    font-size: 20px;
  }

  .custom-link {
    font-size: 14px;
  }

  div.image-container_1 {
    width: 350px;
    height: 410px;
  }

  img.image1 {
    width: 350px;
    height: 190px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 12px;
  }

  p {
    font-size: 12px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
  }

  .details-link {
    font-size: 12px;
  }
}
</style>
