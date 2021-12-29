<template>
  <div class="ss-form-item" :class="[{
      'ss-form-item--feedback': ssForm && ssForm.statusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required,
      'is-no-asterisk': ssForm && ssForm.hideRequiredAsterisk
    },
    sizeClass ? 'ss-form-item--' + sizeClass : ''
  ]">
    <label-wrap
      :is-auto-width="labelStyle && labelStyle.width === 'auto'"
      :update-all="form.labelWidth === 'auto'">
      <label
        :for="labelFor"
        class="ss-form-item__label"
        :style="labelStyle"
        v-if="label || $slots.label"
      >
        <slot name="label">{{label + form.labelSuffix}}</slot>
      </label>
    </label-wrap>
    <div class="ss-form-item__content" :style="contentStyle">
      <slot></slot>

      <transition name="ss-zoom-in-top">
        <slot
          name="error"
          :error="validateMessage">
          <div v-if="validateState === 'error' && showMessage && form.showMessage"
            class="ss-form-item__error"
            :class="{
              'ss-form-item__error--inline': typeof inlineMessage === 'boolean'
                ? inlineMessage
                : (ssForm && ssForm.inlineMessage || false)
            }"
          >
            {{validateMessage}}
          </div>
        </slot>
      </transition>
      <slot name="tips"></slot>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator';
import emitter from '@/mixins/emitter';
import objectAssign from '@/utils/merge';
import { noop, getPropByPath } from '@/utils/util';
import LabelWrap from './label-wrap';

export default {
  name: 'SsFormItem',

  componentName: 'SsFormItem',

  mixins: [emitter],

  provide() {
    return {
      ssFormItem: this
    };
  },

  inject: ['ssForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  components: {
    LabelWrap
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value;
        this.validateState = value ? 'error' : '';
      }
    },
    validateStatus(value) {
      // eslint-disable-next-line
      console.log('-watch validateStatus------', value)
      this.validateState = value;
    },
  },
  computed: {
    labelFor() {
      return this.for || this.prop;
    },
    labelStyle() {
      const ret = {};
      if (this.form.labelPosition === 'top') {
        return ret;
      }
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle() {
      const ret = {};
      const label = this.label;
      if (this.form.labelPosition === 'top' || this.form.inline) {
        return ret;
      }
      if (!label && !this.labelWidth && this.isNested) {
        return ret;
      }
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth;
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.ssForm.autoLabelWidth;
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;

      while (parentName !== 'SsForm') {
        if (parentName === 'SsFormItem') {
          // eslint-disable-next-line
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) {
        return;
      }

      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }
      // eslint-disable-next-line
      return getPropByPath(model, path, true).v;
    },
    isRequired() {
      const rules = this.getRules();
      let isRequired = false;

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    ss_formSize() {
      return this.ssForm.size;
    },
    ssFormItemSize() {
      return this.size || this.ss_formSize;
    },
    sizeClass() {
      return this.ssFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  data() {
    return {
      dateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: ''
    };
  },
  methods: {
    // eslint-disable-next-line
    validate(trigger, callback = noop) {
      this.validateDisabled = false;
      const rules = this.getFilteredRule(trigger);

      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }

      this.validateState = 'validating';

      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      const model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        // eslint-disable-next-line
        console.log('--1234---',this.validateState, this.validateMessage)
        callback(this.validateMessage, invalidFields);
        this.ssForm && this.ssForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
      });
    },
    clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
      this.validateDisabled = false;
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';

      const model = this.form.model;
      const value = this.fieldValue;
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      const prop = getPropByPath(model, path, true);

      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      this.$nextTick(() => {
        this.validateDisabled = false;
      });

      this.broadcast('SsTimeSelect', 'fieldReset', this.initialValue);
    },
    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      const requiredRule = this.required !== undefined ? { required: !!this.required } : [];

      const prop = getPropByPath(formRules, this.prop || '');
      formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();

      return rules.filter((rule) => {
        if (!rule.trigger || trigger === '') {
          return true;
        }
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(rule => objectAssign({}, rule));
    },
    onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }

      this.validate('change');
    },
    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px` : '';
    },
    addValidateEvents() {
      const rules = this.getRules();
      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur);
        this.$on('el.form.change', this.onFieldChange);
      }
    },
    removeValidateEvents() {
      this.$off();
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('SsForm', 'el.form.addField', [this]);
      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });
      this.addValidateEvents();
    }
  },
  beforeDestroy() {
    this.dispatch('SsForm', 'el.form.removeField', [this]);
  }
};
</script>
<style lang="scss">
  @import '@/assets/scss/packages/form-item.scss';
</style>
