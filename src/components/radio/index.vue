<template>
  <label
    class="ss-radio"
    :class="[
      border && radioSize ? 'ss-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label },
      { 'is-vertical': direction && direction === 'vertical' }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="ss-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="ss-radio__inner"></span>
      <input
        ref="radio"
        class="ss-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="ss-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default"></template>
    </span>
  </label>
</template>
<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'SsRadio',

  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    },

    elFormItem: {
      default: ''
    }
  },

  componentName: 'SsRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String,
    direction: String  // 显示方向，默认horizontal，可选vertical
  },

  data() {
    return {
      focus: false
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'SsRadioGroup') {
          parent = parent.$parent;
        } else {
          // eslint-disable-next-line
          this.ss_radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this.ss_radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('SsRadioGroup', 'input', val);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
      }
    },
    ss_elFormItemSize() {
      return (this.elFormItem || {}).ss_elFormItemSize;
    },
    radioSize() {
      const temRadioSize = this.size || this.ss_elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup
        ? this.ss_radioGroup.radioGroupSize || temRadioSize
        : temRadioSize;
    },
    isDisabled() {
      // eslint-disable-next-line
      return this.isGroup
        ? this.ss_radioGroup.disabled || this.disabled || (this.elForm || {}).disabled
        : this.disabled || (this.elForm || {}).disabled;
    },
    tabIndex() {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0;
    }
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup && this.dispatch('SsRadioGroup', 'handleChange', this.model);
      });
    }
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/packages/radio.scss';
</style>
