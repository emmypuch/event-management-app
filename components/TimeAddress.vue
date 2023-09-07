<template>
  <div id="address-container">
    <div class="flex-time">
      <div class="weekly" style="display: flex">
        <div>
          <h6>
            <img src="~assets/images/Calendar.svg" alt="Calender" />
            {{ eventDetails.date }}
          </h6>
        </div>
        <div>
          <h6>
            <img src="~assets/images/Time.svg" alt="Time" />
            {{ eventDetails.time }}
          </h6>
        </div>
      </div>
    </div>
    <div class="flex-time">
      <h6>
        <img src="~assets/images/Location.svg" alt="Location" />
        {{ eventDetails.address }}
      </h6>
    </div>

    <div class="flex-time">
      <h6><img src="~assets/images/User.svg" alt="User" /> FK, Jollz</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventDetails"],
};
</script>

<style scoped>
div.flex-time {
  padding-left: 50px;
  margin-top: 10px;
}

div.flex-time img {
  position: relative;
  top: 5px;
}

div.flex-time h6 {
  font-size: 16px;
  font-family: "GIlroyRegular";
  line-height: 18.75px;
  margin-left: 7px;
}

@media screen and (max-width: 768px) {
  div.flex-time {
    padding-left: 20px;
    margin-top: 5px;
  }

  div.flex-time h6 {
    font-size: 14px;
  }
}
</style>
