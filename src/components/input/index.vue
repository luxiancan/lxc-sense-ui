<template>
  <div class="ss-input"
    :style="{'width': inputWidth + 'px'}"
    :class="[
      size ? 'ss-input--'+size: '',
      {
        'ss-input__disabled' : disabled,
        'ss-input__suffix': suffixIcon || $slots.suffix || clearable,
        'ss-input__prefix': prefixIcon || $slots.prefix,
        'ss-input__error': errorMsg,
        'ss-input-count': !suffixIcon && !$slots.suffix && showCount && maxlength,
        'ss-textarea':type === 'textarea',
        'ss-textarea-count':!suffixIcon && !$slots.suffix && showCount && maxlength && type === 'textarea',
        'ss-input__number': type === 'number' && controls
    }]"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false"
  >
    <textarea
        v-if="type=='textarea'"
        class="ss-input-inner ss-textarea-inner"
        autocomplete="off"
        v-bind="$attrs"
        v-model="currentVal"
        ref="textarea"
        :placeholder="placeholder || '请输入内容'"
        :disabled="disabled"
        :readonly="readonly"
        @focus="handelFocus"
        @blur="handelBlur"
        @keyup="handleKeyup"
        @input="handelInput"
        @change="handelChange"
        :maxlength="maxlength"
        :style="textareaStyle"
    >
    </textarea>
    <input class="ss-input-inner"
      v-else
      ref="input"
      :type="type"
      v-bind="$attrs"
      autocomplete="off"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentVal"
      @focus="handelFocus"
      @blur="handelBlur"
      @keyup="handleKeyup"
      @keydown.up.prevent="numberAdd"
      @keydown.down.prevent="numberMinus"
      @input="handelInput"
      @change="handelChange"
      @keyup.enter="handleEnter"
      :maxlength="maxlength"
      :style="!suffixIcon && !$slots.suffix && showCount && maxlength && type !== 'textarea'?countWidth:''"
    >
    <!--前置元素 -->
    <span v-if="prefixIcon || $slots.prefix"
      class="ss-input-decoration-icon ss-input-prefix-icon"
      @click="handelSearch"
      >
      <template v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <i v-else class="ss-input-icon" :class="[prefixIcon]" :style="{'color': iconColor}"></i>
    </span>
     <!--后置元素 图标 -->
    <span v-if="suffixIcon || $slots.suffix || showClear()"
      class="ss-input-decoration-icon ss-input-suffix-icon"
      @click="handelSearch"
      >
      <template v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </template>

      <!--后置元素 清除 -->
      <i v-else-if=" !showCount && !maxlength && showClear()"
         class="sense-icon-close"
         @mousedown.prevent
         @click="clear"
      ></i>
      <i v-else class="ss-input-icon" :class="[suffixIcon]" :style="{'color': iconColor}"></i>
    </span>

    <!--后置元素 记数器 -->
    <span class="ss-input-count-box" v-if="!suffixIcon && !$slots.suffix && showCount && maxlength">
        {{count}}/{{maxlength}}
    </span>
    <div class="ss-input-handle" v-if="type === 'number' && controls">
        <div class="ss-input-add" :class="{'ss-input-limit': isMax}" @click="numberAdd">
            <i class="sense-icon_add"></i>
        </div>
        <div class="ss-input-minus" :class="{'ss-input-limit': isMin}"  @click="numberMinus">
            <i class="sense-icon_add"></i>
        </div>
    </div>
    <div class="ss-input-error-msg" v-if="errorMsg">
      {{ errorMsg }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
// 有坑再修改
/*TODO：理论上常用的还有输入框组合需要做*/
import calcTextareaHeight from './calcTextareaHeight';
import { merge } from '@/utils/utils'
import emitter from '@/mixins/emitter'

export default {
  name: 'SsInput',
  mixins: [emitter],
  props: {
    value: [String, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
        type: String,
        default: '请输入内容'
    },
    size: String,
    prefixIcon: String,
    suffixIcon: String,
    readonly: Boolean,
    maxlength: Number,
    errorMsg: String,
    showCount: Boolean,
    iconColor: {
      type: String,
      default: '#969799'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    controls:{  // type=number 时是否要显示控制箭头
      type:Boolean,
      default:true
    },
    multiple: { // 数字叠加或减少基数的倍数，默认为1
      type: Number,
      default: 1
    },
    precision: {  // type=number时，数字的精度， 小数点后几位
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    stepStrictly: {  // 严格步数 =true时值只能是multiple的倍数
      type: Boolean,
      default: false
    },
    resize: String,
    max: [String, Number], // 数字输入框输入最大值
    min: [String, Number], // 数字输入框输入最小值
    inputWidth: String,
    validateEvent: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      hasCountExceed: false, // 记数器是否超过
      textareaCalcStyle: {},
      isReverse: false,
      currentVal: this.value === undefined || this.value === null ? '' : this.value,
      isMax: false,
      isMin: false,
      focused: false,
      hovering: false,
    }
  },
  computed: {
    count() {
      return this.currentVal.length
    },
    countWidth() {
      if (!this.showCount) {
        return 0
      }
      if (String(this.maxlength).length > 2) {
        return 'padding-right: 54px';
      } else if (String(this.maxlength).length > 1) {
        return 'padding-right: 40px';
      } else {
        return 'padding-right: 30px';
      }
    },
    textareaStyle() {
      return merge({}, this.textareaCalcStyle, { resize: this.resize });
    }
  },
  watch: {
    value(val) {
      if(!val){
        this.error = false;
      }
      this.currentVal = val;
      if (this.validateEvent) {
        this.dispatch('SsFormItem', 'el.form.change', [val]);
      }
    },
    max(val){
      if(val && parseFloat(val) < this.currentVal){
        this.currentVal = parseFloat(val);
        this.handelChange();
      }
    },
    min(val){
      if(val && parseFloat(val) > this.currentVal){
        this.currentVal = parseFloat(val);
        this.handelChange();
      }
    },
  },
  mounted() {
    this.resizeTextarea();
  },
  methods: {
    resizeTextarea() {
      const { autosize, type } = this;
      if (type !== 'textarea') {
        return;
      }
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },
    /**
     * number 增加
     */
    numberAdd() {
      if (this.disabled || this.type!=='number') {
        return
      }
      const currentVal = Number(this.currentVal) * 1000;
      let newCurrentVal = (currentVal + this.multiple * 1000) / 1000;
      if (((String(this.max) && newCurrentVal <= this.max) || (this.max == void 0)) && !this.disabled) {
        if( this.precision && this.precision>0 ){
          newCurrentVal = parseFloat(newCurrentVal).toFixed(this.precision);
        }
        this.currentVal = newCurrentVal;
        this.handelInput();
        this.handelChange();
        this.isMax = false;
        this.isMin = false;
      } else {
        this.isMax = true;
      }
    },
    /**
     * number 减少
     */
    numberMinus() {
      if (this.disabled || this.type!=='number') {
        return
      }
      const currentVal = Number(this.currentVal) * 1000;
      let newCurrentVal = (currentVal - this.multiple * 1000) / 1000;
      if (((String(this.min) && newCurrentVal >= this.min) || (this.min == void 0)) && !this.disabled) {
        if( this.precision && this.precision>0 ){
          newCurrentVal = parseFloat(newCurrentVal).toFixed(this.precision);
        }
        this.currentVal = newCurrentVal;
        this.handelInput();
        this.handelChange();
        this.isMin = false;
        this.isMax = false;
      } else {
        this.isMin = true;
      }
    },
    // 获取value的精度 例如 0.1精度为1  0.03精度为2 1，20，30 精度为0
    getPrecision(value) {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf('.');
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    focus() {
      this.$refs.input.focus()
    },
    handelFocus(e) {
      this.focused = true;
      this.$emit('focus', e)
    },
    handelBlur(e) {
      this.focused = false;
      // type=number
      if(this.type==='number'){
        if(this.currentVal===''){ // 如果输入为空 ， 则不作任何处理,只需 $emit('input')
          this.handelInput();
          return;
        }
        // 当输入数字超出范围，自动变成范围内的最大值或最小值
        if(this.max!==undefined && Number(this.currentVal)>this.max){
          this.currentVal = this.max;
        }else{
          console.log(this.currentVal, this.max)
          if(this.isMax && this.currentVal<this.max){
            this.isMax = false;
          }
        }
        if(this.min!==undefined && Number(this.currentVal)<this.min){
          this.currentVal = this.min;
        }else{
          if(this.isMin && this.currentVal>this.min){
            this.isMin = false;
          }
        }

        // 处理严格步数
        if (this.stepStrictly) {
          const stepPrecision = this.getPrecision(this.multiple); // 获取到multiple的精度
          const precisionFactor = Math.pow(10, stepPrecision);
          // 对currentVal做round处理
          this.currentVal = Math.round(this.currentVal / this.multiple) * precisionFactor * this.multiple / precisionFactor;
        }

        // 处理数字的精度
        if(typeof this.precision === 'number' && this.precision>=0){
          this.currentVal = parseFloat(this.currentVal).toFixed(this.precision);
        }

        this.handelInput();

      }

      if (this.validateEvent) {
        this.dispatch('SsFormItem', 'el.form.blur', [this.value]);
      }
      this.$emit('blur', e)
    },
    handleKeyup(e) {
      this.$emit('keyup', e)
    },
    handelInput() {
      const current = this.type === 'number' ? Number(this.currentVal) : this.currentVal;
      this.$emit('input', current);
      this.$nextTick(this.resizeTextarea);
    },
    handelChange() {
      this.$emit('change', this.currentVal)
    },
    handelSearch() {
      this.$emit('search', this.currentVal)
    },
    handleEnter() {
      this.$emit('enter', this.currentVal)
      this.$emit('search', this.currentVal)
      this.$nextTick(this.resizeTextarea);
    },
    showClear() {
      if(this.currentVal===''){ // 输入为空
        return;
      }
      return this.clearable &&
        !this.disabled &&
        !this.readonly && (this.focused || this.hovering);

    },
    clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/input.scss';
</style>
