<template>
  <div class="buy-button">
    <button class="buy-now-button" @click="buyNow">Buy Now</button>
  </div>
</template>

<script>
export default {
  methods: {
    buyNow() {},
  },
};
</script>

<style scoped>
div.buy-button {
  margin-top: 30px;
}

.buy-now-button {
  background-color: #783ead;
  color: #fff;
  border: none;
  padding: 12px 24px 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "GilroySemiBold";
  font-size: 16px;
  line-height: 18.75px;
}

@media screen and (max-width: 768px) {
  div.buy-button {
    text-align: center;
  }

  .buy-now-button {
    margin-top: 10px;
  }
}
</style>
