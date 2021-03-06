<template>
  <label
    class="ss-checkbox"
    :class="[
      border && checkboxSize ? 'ss-checkbox--' + checkboxSize : '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked },
      { 'is-vertical': direction && direction === 'vertical' }
    ]"
    :id="id"
  >
    <span class="ss-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
      :tabindex="indeterminate ? 0 : false"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="ss-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="ss-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        class="ss-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="ss-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../mixins/emitter';

export default {
  name: 'SsCheckbox',

  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  componentName: 'SsCheckbox',

  data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },

  computed: {
    model: {
      get() {
        // eslint-disable-next-line
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },

      set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          (this.ss_checkboxGroup.min !== undefined &&
            val.length < this.ss_checkboxGroup.min &&
            (this.isLimitExceeded = true));

          (this.ss_checkboxGroup.max !== undefined &&
            val.length > this.ss_checkboxGroup.max &&
            (this.isLimitExceeded = true));

          this.isLimitExceeded === false &&
          this.dispatch('SsCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },
    // eslint-disable-next-line
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    // eslint-disable-next-line
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'SsCheckboxGroup') {
          parent = parent.$parent;
        } else {
          // eslint-disable-next-line
          this.ss_checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },

    store() {
      return this.ss_checkboxGroup ? this.ss_checkboxGroup.value : this.value;
    },

    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled() {
      const { max, min } = this.ss_checkboxGroup;
      // eslint-disable-next-line
      return !!(max || min) && (this.model.length >= max && !this.isChecked) || (this.model.length <= min && this.isChecked);
    },

    isDisabled() {
      return this.isGroup
        ? this.ss_checkboxGroup.disabled || this.disabled
        || (this.elForm || {}).disabled || this.isLimitDisabled
        : this.disabled || (this.elForm || {}).disabled;
    },

    ss_elFormItemSize() {
      return (this.elFormItem || {}).ss_elFormItemSize;
    },

    checkboxSize() {
      const temCheckboxSize = this.size || this.ss_elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup
        ? this.ss_checkboxGroup.checkboxGroupSize || temCheckboxSize
        : temCheckboxSize;
    }
  },

  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系 */
    border: Boolean,
    size: String,
    direction: String  // 显示方向，默认horizontal，可选vertical
  },

  methods: {
    addToStore() {
      if (
        Array.isArray(this.model) &&
        this.model.indexOf(this.label) === -1
      ) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange(ev) {
      if (this.isLimitExceeded) {
        return;
      }
      let value;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(() => {
        if (this.isGroup) {
          // this.dispatch('SsCheckboxGroup', 'change', this.ss_checkboxGroup.value);
          this.dispatch('SsCheckboxGroup', 'change', [this.ss_checkboxGroup.value]);
        }
      });
    }
  },

  created() {
    this.checked && this.addToStore();
  },
  mounted() { // 为indeterminate元素 添加aria-controls 属性
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  },

  watch: {
    value(value) {
      this.dispatch('SsFormItem', 'el.form.change', [value]);
    }
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/packages/checkbox.scss';
</style>
