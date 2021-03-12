<template>
  <div id="bg">
    <h1></h1>
    <img alt="logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {
  //   BeeData,
  // },
};
</script>

<style scoped>
img {
  height: 75vh;
}
#bg {
  width: 100%;
  height: auto;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  img {
    width: 100%;
    height: auto;
  }
}
</style>
