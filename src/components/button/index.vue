<template>
  <button class="ss-button"
    @click="handelClick"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      type && `ss-button__${type}`,
      size && `ss-button__${size}`,
      disabled && `ss-button__disabled`,
      loading && `ss-button__${loading}`,
      plain && `ss-button__${plain}`,
      round && `ss-button__${round}`,
      circle && `ss-button__${circle}`,
      buttonClass && buttonClass
    ]"
  >
    <i class="ss-button-loading sense-icon-loading" v-show="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'SsButton',
  props: {
    type: {
      type: String,
      default: 'default' // primary 主要按钮  text 文本按钮  warning 警告按钮 success 成功按钮 plain 朴素按钮
    },
    size: {
      type: String,
      default: 'medium', // big /medium / small / 大中小
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    buttonClass: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  data() {
    return {}
  },
  methods: {
    handelClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/button.scss';
</style>