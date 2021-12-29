<template>
  <transition name="ss-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="ss-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="ss-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="ss-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'SsLoading',
  data() {
    return {
      text: '加载中',
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    };
  },

  methods: {
    handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText(text) {
      this.text = text;
    }
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/packages/loading.scss';
</style>
