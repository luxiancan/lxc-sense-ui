<template>
  <div class="ss-tag"
    :class="[
      type && `ss-tag__${type}`,
      closable && `ss-tag__closable`,
      !isShow && 'ss-tag__hide'
    ]"
  >
    <slot></slot>
    <span class="ss-tag-icon-wrap" v-if="closable">
      <i class="ss-tag-icon sense-icon-close" @click.stop="close"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SsTag',
  props: {
    type: String,
    closable: Boolean,
    size: String
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    close() {
      this.isShow = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/tag.scss';
</style>