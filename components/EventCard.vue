<template>
  <div class="wrapper">
    <div class="eventCard">
      <img :src="eventData.imageUrl" class="image" alt="Image" />
      <div class="paragragh">
        <h5>{{ eventData.title }}</h5>
        <h6>
          {{ eventData.date }}
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
            @click="toggleDescription"
            v-if="showEllipsis"
            class="ellipsis"
          />
          {{ eventData.time }}
        </h6>
        <p class="text">
          {{ truncatedDescription }}
        </p>
        <nuxt-link :to="`/events/${eventData.id}`" class="details-link">
          View details
          <img src="~assets/images/arrow-up.svg" alt="Arrow Up" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        title: "",
        date: "",
        time: "",
        imageUrl: "",
        description: "",
      }),
    },
  },

  //   Limit the character
  computed: {
    truncatedDescription() {
      const maxCharacters = 50;
      if (this.eventData.description.length <= maxCharacters) {
        return this.eventData.description;
      } else {
        return this.eventData.description.substring(0, maxCharacters) + "...";
      }
    },
  },
};
</script>

<style scoped>
.overflow-hidden {
  max-height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Trending Container */

div.trending-heading img,
.details-link img {
  position: relative;
  top: 5px;
}

div.wrapper {
  display: flex;
  justify-content: space-between;
}
div.trending-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

img.image {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  aspect-ratio: 1/0.7;
}

div.eventCard {
  background: #fff;
  border-radius: 10px;
  width: 421px;
  height: 460px;
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
  text-align: justify;
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

  div.eventCard {
    width: 100%;
    max-width: 350px;
    height: 360px;
  }

  img.image {
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
