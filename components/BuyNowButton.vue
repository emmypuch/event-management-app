<template>
  <button class="buy-now-button" @click="buyNow">Buy Now</button>
</template>

<script>
export default {
  methods: {
    buyNow() {},
  },
};
</script>

<style scoped>
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
</style>
