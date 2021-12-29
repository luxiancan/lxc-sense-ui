<template>
  <div class="container">
    <div class="title">loading</div>
    <div class="load old">
      <loading v-show="oldLoading" />
    </div>
    <div class="load" v-loading="isLoading">
      loading test
    </div>

    <div class="load"
         v-loading="isLoading"
         element-loading-text="拼命加载中">
      自定义
    </div>

    <ss-button
      class="service"
      type="primary"
      @click="openFullScreen">
      服务方式
    </ss-button>
  </div>
</template>

<script>
import SsButton from '@/components/button'
import loading from '@/components/loading'
export default {
  components: {
    SsButton,
    loading
  },
  data() {
    return {
      isLoading: false,
      oldLoading: true,
    }
  },
  methods:{
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: 'loading。。',
        /*spinner: 'sense-icon-loading',*/
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 4000);
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    margin: 20px;
    .title{
      font-weight: bold;
      margin-bottom: 20px;
    }
    .old{
      position: relative;
    }
    .load{
      width: 40vh;
      height: 30vh;
      margin-bottom: 10px;
      border: solid 1px #FF9800;
    }
    .service{
      margin-top: 10px;
    }
  }
</style>
