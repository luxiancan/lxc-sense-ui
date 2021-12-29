<template>
  <component
    :is="ss_elTag"
    class="ss-radio-group"
    role="radiogroup"
  >
    <slot></slot>
  </component>
</template>
<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'SsRadioGroup',

  componentName: 'SsRadioGroup',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  mixins: [Emitter],

  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },

  computed: {
    ss_elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    ss_elTag() {
      return (this.$vnode.data || {}).tag || 'div';
    },
    radioGroupSize() {
      return this.size || this.ss_elFormItemSize || (this.$ELEMENT || {}).size;
    },
    ss_radioGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'SsRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
  },

  created() {
    this.$on('handleChange', (value) => {
      this.$emit('change', value);
    });
  },
  mounted() {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll('[type=radio]');
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  },
  methods: {

  },
  watch: {
    value() {
      this.dispatch('SsFormItem', 'el.form.change', this.value);
    }
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/packages/radio-group.scss';
</style>
