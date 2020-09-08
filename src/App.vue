<template>
  <div class="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="less">
@media screen and (min-width:750px) {
  html {
    font-size: 75px!important;
  }
}
@media screen and (max-width:319px) {
  html {
    font-size: 32px!important;
  }
}
*{
  margin: 0;
  padding: 0;
}
body {
  // min-width: 750px;
  // max-width: 320px;
  margin: 0 auto;
  background-color: rgb(225, 225, 225);
}
a {
  text-decoration: none;
}

</style>
