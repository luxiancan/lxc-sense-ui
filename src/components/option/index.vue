<template>
  <li class="ss-option"
    :class="[
      isSelected && 'ss-option__selected',
      disabled && 'ss-option__disabled',
      isMultiple && 'ss-option__multiple'
    ]"
    @click.stop="handleClick"
  >
    <slot>{{ label }}</slot>
    <i v-if="isMultiple && isSelected" class="sense-icon-selected ss-option-multiple-icon"></i>
  </li>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 'SsOption',
  componentName: 'SsOption',
  mixins: [Emitter],
  inject: ['select'],
  props: {
    value: {},
    label: String,
    disabled: Boolean
  },
  computed: {
    isMultiple() {
      return this.select.multiple
    },
    isSelected() {
      if (!this.isMultiple) {
        return this.select.value === this.value
      }
      return this.select.selectedValues.includes(this.value)
    }
  },
  created() {
    this.dispatch('SsSelect', 'pushOptions', this)
    if (this.isSelected) {
      this.dispatch('SsSelect', 'defaultValue', this)
    }
  },
  watch: {
    isSelected(val) {
      if (val && !this.isMultiple) {
        this.dispatch('SsSelect', 'defaultValue', this)
      }
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.dispatch('SsSelect', 'selectOption', this)
      }
    }
  }
}
</script>


<style lang="scss">  
  @import '@/assets/scss/packages/option.scss';
</style>