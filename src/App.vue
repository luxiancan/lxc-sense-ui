<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import '@/assets/scss/index.scss';

  .navbar {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 14px;
    color: #2A75ED;
    text-align: right;
    a {
      text-decoration: none;
    }
  }
</style>
