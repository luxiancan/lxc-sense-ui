<template>
  <div class="ss-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter';

export default {
  name: 'SsCheckboxGroup',

  componentName: 'SsCheckboxGroup',

  mixins: [Emitter],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    ss_elFormItemSize() {
      return (this.elFormItem || {}).ss_elFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this.ss_elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value(value) {
      this.dispatch('SsFormItem', 'el.form.change', [value]);
    }
  }
};
</script>

<style scoped lang="scss">
.ss-checkbox-group{
  display: block;
}
</style>