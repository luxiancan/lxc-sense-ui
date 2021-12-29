<template>
  <label
    class="ss-checkbox-button"
      :class="[
        size ? 'ss-checkbox-button--' + size : '',
        { 'is-disabled': isDisabled },
        { 'is-checked': isChecked },
        { 'is-focus': focus },
      ]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    >
    <input
      v-if="trueLabel || falseLabel"
      class="ss-checkbox-button__original"
      type="checkbox"
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
      class="ss-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :value="label"
      v-model="model"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false">

    <span class="ss-checkbox-button__inner"
      v-if="$slots.default || label"
      :style="isChecked ? activeStyle : null">
      <slot>{{label}}</slot>
    </span>

  </label>
</template>
<script>
import Emitter from '../../mixins/emitter';

export default {
  name: 'SsCheckboxButton',

  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  computed: {
    model: {
      get() {
        // eslint-disable-next-line
        return this.ss_checkboxGroup
          ? this.store : this.value !== undefined
            ? this.value : this.selfModel;
      },
      set(val) {
        if (this.ss_checkboxGroup) {
          this.isLimitExceeded = false;
          (this.ss_checkboxGroup.min !== undefined &&
            val.length < this.ss_checkboxGroup.min &&
            (this.isLimitExceeded = true));

          (this.ss_checkboxGroup.max !== undefined &&
            val.length > this.ss_checkboxGroup.max &&
            (this.isLimitExceeded = true));

          this.isLimitExceeded === false &&
          this.dispatch('SsCheckboxGroup', 'input', [val]);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
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

    ss_checkboxGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'SsCheckboxGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },

    store() {
      return this.ss_checkboxGroup ? this.ss_checkboxGroup.value : this.value;
    },

    activeStyle() {
      return {
        backgroundColor: this.ss_checkboxGroup.fill || '',
        borderColor: this.ss_checkboxGroup.fill || '',
        color: this.ss_checkboxGroup.textColor || '',
        'box-shadow': `-1px 0 0 0 ${this.ss_checkboxGroup.fill}`

      };
    },

    ss_elFormItemSize() {
      return (this.elFormItem || {}).ss_elFormItemSize;
    },

    size() {
      return this.ss_checkboxGroup.checkboxGroupSize
        || this.ss_elFormItemSize
        || (this.$ELEMENT || {}).size;
    },

    /* used to make the isDisabled judgment under max/min props */
    isLimitDisabled() {
      const { max, min } = this.ss_checkboxGroup;
      // eslint-disable-next-line
      return !!(max || min) && (this.model.length >= max && !this.isChecked) ||
        (this.model.length <= min && this.isChecked);
    },

    isDisabled() {
      return this.ss_checkboxGroup
        ? this.ss_checkboxGroup.disabled || this.disabled
        || (this.elForm || {}).disabled || this.isLimitDisabled
        : this.disabled || (this.elForm || {}).disabled;
    }
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
        if (this.ss_checkboxGroup) {
          this.dispatch('SsCheckboxGroup', 'change', [this.ss_checkboxGroup.value]);
        }
      });
    }
  },

  created() {
    this.checked && this.addToStore();
  }
};
</script>
