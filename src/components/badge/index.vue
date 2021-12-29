<template>
  <div class="ss-badge" :class="[type && `ss-badge__${type}`]">
    <slot></slot>
    <div class="ss-badge-point"
      :class="[
        number && 'ss-badge-point__hascontent'
      ]"
    >
      <span class="ss-badge-number" v-if="number">
        {{ formatNumber }}
        <span class="ss-badge-number-over" v-if="isOver">+</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SsBadge',
  props: {
    type: String,
    number: Number,
    maxLength: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {}
  },
  computed: {
    formatNumber() {
      return this.number > this.maxLength ? this.maxLength : this.number
    },
    isOver() {
      return this.number > this.maxLength
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/badge.scss';
</style>