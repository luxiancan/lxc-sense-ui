<template>
  <div class="warning-line">
    <span class="state">未正常启用，</span><span>该渠道未开启推送，请前往</span>
    <span class="link-text" @click="goPushSetting">推送设置</span><span>开启</span>
  </div>
</template>

<script>
export default {
  name: 'closeWarning',
  methods: {
    goPushSetting() {
      window.open('/messageManage#/messageManage')
    }
  }
}
</script>

<style scoped lang="scss">
  .warning-line {
    color: #999999;
    .state {
      color: #E65C5C;
    }
  }
</style>
