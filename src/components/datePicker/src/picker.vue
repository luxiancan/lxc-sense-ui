<template>
  <!-- 单个选择输入框-->
  <ss-input
    class="ss-date-editor"
    :class="'ss-date-editor--' + type"
    :readonly="!editable || readonly || type === 'dates' || type === 'week'"
    :disabled="pickerDisabled"
    :size="pickerSize"
    :name="name"
    v-bind="firstInputId"
    v-if="!ranged"
    v-clickoutside="handleClose"
    :placeholder="placeholder"
    @focus="handleFocus"
    @keydown.native="handleKeydown"
    :value="displayValue"
    @input="value => userInput = value"
    @change="handleChange"
    @mouseenter.native="handleMouseEnter"
    @mouseleave.native="showClose = false"
    @click="handleRangeClick"
    :validateEvent="false"
    ref="reference">
    <i slot="suffix"
      class="ss-input__icon"
      @click="handleClickIcon"
      :class="[showClose ? '' + clearIcon : 'sense-icon-clock']"
      v-if="haveTrigger && type === 'time'">
    </i>
    <i slot="suffix"
      class="ss-input__icon"
      @click="handleClickIcon"
      :class="[showClose ? '' + clearIcon : 'sense-icon-calendar']"
      v-else>
    </i>
  </ss-input>
  <!--范围选择-->
  <div
    class="ss-date-editor ss-range-editor ss-input__inner"
    :class="[
      'ss-date-editor--' + type,
      pickerSize ? `ss-range-editor--${ pickerSize }` : '',
      pickerDisabled ? 'is-disabled' : '',
      pickerVisible ? 'is-active' : '',
      'ss-date-editor--' + userFocusPosition
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="showClose = false"
    @keydown="handleKeydown"
    ref="reference"
    v-clickoutside="handleClose"
    v-else
  >
    <input
      autocomplete="off"
      :placeholder="startPlaceholder"
      :value="displayValue && displayValue[0]"
      :disabled="pickerDisabled"
      v-bind="firstInputId"
      :readonly="!editable || readonly"
      :name="name"
      @input="handleStartInput"
      @change="handleStartChange"
      @click="handleRangeClick"
      @focus="(event) => {handleFocus(event,'start')}"
      class="ss-range-input">
    <slot name="range-separator">
      <span class="ss-range-separator">{{ rangeSeparator }}</span>
    </slot>
    <input
      autocomplete="off"
      :placeholder="endPlaceholder"
      :disabled="pickerDisabled"
      :value="displayValue && displayValue[1]"
      v-bind="secondInputId"
      :readonly="!editable || readonly"
      :name="name && name[1]"
      @input="handleEndInput"
      @change="handleEndChange"
      @focus="(event) => {handleFocus(event,'end')}"
      class="ss-range-input">
    <div class="ss-date-editor__focus-line"></div>
    <i
      @click="handleClickIcon"
      v-if="haveTrigger && type.indexOf('date') > -1"
      :class="[showClose ? '' + clearIcon : 'sense-icon-calendar']"
      class="ss-input__icon">
    </i>
    <i
      @click="handleClickIcon"
      v-else
      :class="[showClose ? '' + clearIcon : 'sense-icon-clock']"
      class="ss-input__icon">
    </i>
  </div>
</template>

<script>
/**
 * @description选择器
 */
import Vue from 'vue';
import Clickoutside from '../../../utils/clickoutside';
import {
  formatDate,
  parseDate,
  isDateObject,
  getWeekNumber
} from '../../../utils/date-util';
import Popper from '../../../utils/vue-popper';
import Emitter from '../../../mixins/emitter';
import SsInput from '../../input';
import merge from '../../../utils/merge';

const NewPopper = {
  props: {
    appendToBody: Popper.props.appendToBody,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding,
    arrowOffset: Popper.props.arrowOffset
  },
  methods: Popper.methods,
  data() {
    return merge({ visibleArrow: true }, Popper.data);
  },
  beforeDestroy: Popper.beforeDestroy
};

// 默认格式
const DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  monthrange: 'yyyy-MM',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
};

// 触发类型
const HAVE_TRIGGER_TYPES = [
  'date',
  'datetime',
  'time',
  'time-select',
  'week',
  'month',
  'year',
  'daterange',
  'monthrange',
  'timerange',
  'datetimerange',
  'dates'
];

// 格式化时间:
const DATE_FORMATTER = function (value, format) {
  if (format === 'timestamp') {
    return (value instanceof Date ? value : new Date(value)).getTime();
  }
  return formatDate(value, format);
};

// 解析时间
const DATE_PARSER = function (text, format) {
  if (format === 'timestamp') {
    return new Date(Number(text));
  }
  return parseDate(text, format);
};

// 格式化范围
const RANGE_FORMATTER = function (value, format) {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0];
    const end = value[1];
    let result = [];
    // 没完成范围的时候也需要显示对应输入框内容
    switch (true) {
    case Boolean(start && !end):
      result = [DATE_FORMATTER(start, format), ''];
      break;
    case Boolean(!start && end):
      result = ['', DATE_FORMATTER(end, format)];
      break;
    case Boolean(start && end):
      result = [DATE_FORMATTER(start, format), DATE_FORMATTER(end, format)];
      break;
    default:
          // no Default
    }

    return result;
  }

  return '';
};

// 范围解析器
const RANGE_PARSER = function (array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }

  if (array.length === 2) {
    let range1 = '';
    let range2 = '';

    if (array[0]) {
      range1 = array[0] instanceof Date ? formatDate(array[0]) : array[0];
    }
    if (array[1]) {
      range2 = array[1] instanceof Date ? formatDate(array[1]) : array[1];
    }

    return [DATE_PARSER(range1, format), DATE_PARSER(range2, format)];
  }
  return [];
};

// 各个类型处理映射
const TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter(value) {
      if (!value) {
        return '';
      }
      return `${value}`;
    },
    parser(text) {
      if (text === undefined || text === '') {
        return null;
      }
      return text;
    }
  },
  week: {
    formatter(value, format) {
      const week = getWeekNumber(value);
      const month = value.getMonth();
      const trueDate = new Date(value);
      if (week === 1 && month === 11) {
        trueDate.setHours(0, 0, 0, 0);
        trueDate.setDate(trueDate.getDate() + 3 - ((trueDate.getDay() + 6) % 7));
      }
      let date = formatDate(trueDate, format);

      date = /WW/.test(date)
        ? date.replace(/WW/, week < 10 ? `0${date} ` : week)
        : date.replace(/W/, week);
      return date;
    },
    parser(text, format) {
      // parse as if a normal date
      return TYPE_VALUE_RESOLVER_MAP.date.parser(text, format);
    }
  },
  date: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  datetime: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  monthrange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  month: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  year: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  number: {
    formatter(value) {
      if (!value) {
        return '';
      }
      return `${value}`;
    },
    parser(text) {
      const result = Number(text);

      if (!isNaN(text)) {
        return result;
      } else {
        return null;
      }
    }
  },
  dates: {
    formatter(value, format) {
      return value.map(date => DATE_FORMATTER(date, format));
    },
    parser(value, format) {
      return (typeof value === 'string' ? value.split(', ') : value)
        .map(date => (date instanceof Date ? date : DATE_PARSER(date, format)));
    }
  }
};
const PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
};

const parseAsFormatAndType = (value, customFormat, type, rangeSeparator = '-') => {
  if (!value) {
    return null;
  }
  const parser = (
    TYPE_VALUE_RESOLVER_MAP[type] ||
    TYPE_VALUE_RESOLVER_MAP.default
  ).parser;
  const format = customFormat || DEFAULT_FORMATS[type];
  return parser(value, format, rangeSeparator);
};

const formatAsFormatAndType = (value, customFormat, type) => {
  if (!value) {
    return null;
  }
  const formatter = (
    TYPE_VALUE_RESOLVER_MAP[type] ||
    TYPE_VALUE_RESOLVER_MAP.default
  ).formatter;
  const format = customFormat || DEFAULT_FORMATS[type];
  return formatter(value, format);
};

/*
 * 比较时间是否相等
 * Considers:
 *   1. Date object
 *   2. date string
 *   3. array of 1 or 2
 */
const valueEquals = function (a, b) {
  // considers Date object and string
  const dateEquals = function (c, d) {
    const aIsDate = c instanceof Date;
    const bIsDate = d instanceof Date;
    if (aIsDate && bIsDate) {
      return c.getTime() === d.getTime();
    }
    if (!aIsDate && !bIsDate) {
      return c === d;
    }
    return false;
  };

  const aIsArray = a instanceof Array;
  const bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => dateEquals(item, b[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};

const isString = function (val) {
  return typeof val === 'string' || val instanceof String;
};

const validator = function (val) {
  // either: String, Array of String, null / undefined
  return (
    val === null ||
    val === undefined ||
    isString(val) ||
    (Array.isArray(val) && val.length === 2 && val.every(isString))
  );
};

export default {
  mixins: [Emitter, NewPopper],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'sense-icon-close_date'
    },
    name: {
      default: '',
      validator
    },
    todayDisabled: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator
    },
    // 下拉框类名
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    // 默认显示时间
    defaultTime: {},
    // 选择范围的分隔符
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    // 在范围选择器里取消两个日期面板之间的联动
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  components: {
    SsInput
  },

  directives: {
    Clickoutside
  },

  data() {
    return {
      pickerVisible: false,
      showClose: false,
      userInput: null,
      valueOnOpen: null, // value when picker opens, used to determine whether to emit change
      unwatchPickerOptions: null,
      userFocusPosition: '',
      isPanel: false, // 只需要单独的日历面板
    };
  },

  watch: {
    pickerVisible(val) {
      if (this.readonly || this.pickerDisabled) {
        return;
      }
      if (val) {
        this.showPicker();
        this.valueOnOpen = Array.isArray(this.value) ? [...this.value] : this.value;
      } else {
        this.hidePicker();
        this.emitChange(this.value);
        this.userInput = null;
        if (this.validateEvent) {
          this.dispatch('SsFormItem', 'ss.form.blur');
        }
        this.$emit('blur', this);
        this.blur();
      }
    },
    todayDisabled: {
      immediate: true,
      handler(val) {
        if (this.picker) {
          this.picker.todayDisabled = val;
        }
      }
    },
    parsedValue: {
      immediate: true,
      handler(val) {
        if (this.picker) {
          this.picker.value = val;
        }
      }
    },
    defaultValue(val) {
      // NOTE: should eventually move to jsx style picker + panel ?
      if (this.picker) {
        this.picker.defaultValue = val;
      }
    },
    value(val, oldVal) {
      if (!valueEquals(val, oldVal) && !this.pickerVisible && this.validateEvent) {
        this.dispatch('SsFormItem', 'ss.form.change', val);
      }
    }
  },

  computed: {
    // 是否是范围选择
    ranged() {
      return this.type.indexOf('range') > -1;
    },

    // 输入框DOM元素
    reference() {
      const reference = this.$refs.reference;
      return reference.$el || reference;
    },

    refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },

    valueIsEmpty() {
      const val = this.value;
      if (Array.isArray(val)) {
        for (let i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else if (val) {
        return false;
      }
      return true;
    },

    triggerClass() {
      return this.prefixIcon || (this.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date');
    },

    // 选中模式
    selectionMode() {
      if (this.type === 'week') {
        return 'week';
      } else if (this.type === 'month') {
        return 'month';
      } else if (this.type === 'year') {
        return 'year';
      } else if (this.type === 'dates') {
        return 'dates';
      }

      return 'day';
    },

    haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },

    // 输入框绑定值
    displayValue() {
      const formattedValue =
      formatAsFormatAndType(
        this.parsedValue,
        this.format,
        this.type,
      );
      if (Array.isArray(this.userInput)) {
        return [
          this.userInput[0] || (formattedValue && formattedValue[0]) || '',
          this.userInput[1] || (formattedValue && formattedValue[1]) || ''
        ];
      } else if (this.userInput !== null) {
        return this.userInput;
      } else if (formattedValue) {
        return this.type === 'dates'
          ? formattedValue.join(', ')
          : formattedValue;
      } else {
        return '';
      }
    },

    parsedValue() {
      if (!this.value) {
        return this.value;
      } // component value is not set
      if (this.type === 'time-select') {
        return this.value;
      } // time-select does not require parsing, this might change in next major version

      const valueIsDateObject =
      isDateObject(this.value) ||
      (Array.isArray(this.value) &&
      this.value.every(isDateObject));
      if (valueIsDateObject) {
        return this.value;
      }

      if (this.valueFormat) {
        return parseAsFormatAndType(
          this.value,
          this.valueFormat,
          this.type,
          this.rangeSeparator
        ) || this.value;
      }
      return Array.isArray(this.value) ? this.value
        .map(val => (val ? new Date(val) : '')) : new Date(this.value);
    },

    elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    pickerSize() {
      return this.size || this.elFormItemSize || (this.$ELEMENT || {}).size;
    },

    pickerDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },

    firstInputId() {
      const obj = {};
      let id;
      if (this.ranged) {
        id = this.id && this.id[0];
      } else {
        id = this.id;
      }
      if (id) {
        obj.id = id;
      }
      return obj;
    },

    secondInputId() {
      const obj = {};
      let id;
      if (this.ranged) {
        id = this.id && this.id[1];
      }
      if (id) {
        obj.id = id;
      }
      return obj;
    }
  },

  created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;

    this.$on('fieldReset', this.handleFieldReset);
  },

  methods: {
    focus() {
      if (!this.ranged) {
        this.$refs.reference.focus();
      } else {
        this.handleFocus();
      }
    },

    blur() {
      this.refInput.forEach(input => input.blur());
    },

    // {parse, formatTo} Value deals maps component value with internal Date
    parseValue(value) {
      const isParsed =
      isDateObject(value) ||
      (Array.isArray(value) &&
      value.every(isDateObject));
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(
          value, this.valueFormat, this.type, this.rangeSeparator
        ) || value;
      } else {
        return value;
      }
    },

    formatToValue(date) {
      const isFormattable = isDateObject(date) || (Array.isArray(date) && date.every(isDateObject));
      if (this.valueFormat && isFormattable) {
        return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
      } else {
        return date;
      }
    },

    // {parse, formatTo} String deals with user input
    parseString(value) {
      const type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return parseAsFormatAndType(value, this.format, type);
    },

    formatToString(value) {
      const type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return formatAsFormatAndType(value, this.format, type);
    },

    handleMouseEnter() {
      if (this.readonly || this.pickerDisabled) {
        return;
      }
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },

    handleChange() {
      if (this.userInput) {
        const value = this.parseString(this.displayValue);
        if (value) {
          this.picker.value = value;
          if (this.isValidValue(value)) {
            this.emitInput(value);
            this.userInput = null;
          }
        }
      }
      if (this.userInput === '') {
        this.emitInput(null);
        this.emitChange(null);
        this.userInput = null;
      }
    },

    handleStartInput(event) {
      if (this.userInput) {
        this.userInput = [event.target.value, this.userInput[1]];
      } else {
        this.userInput = [event.target.value, null];
      }
    },

    handleEndInput(event) {
      if (this.userInput) {
        this.userInput = [this.userInput[0], event.target.value];
      } else {
        this.userInput = [null, event.target.value];
      }
    },

    handleStartChange() {
      const value = this.parseString(this.userInput && this.userInput[0]);
      if (value) {
        this.userInput = [this.formatToString(value), this.displayValue[1]];
        const newValue = [value, this.picker.value && this.picker.value[1]];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },

    handleEndChange() {
      const value = this.parseString(this.userInput && this.userInput[1]);
      if (value) {
        this.userInput = [this.displayValue[0], this.formatToString(value)];
        const newValue = [this.picker.value && this.picker.value[0], value];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },

    handleClickIcon(event) {
      if (this.readonly || this.pickerDisabled) {
        return;
      }
      if (this.showClose) {
        this.valueOnOpen = this.value;
        event.stopPropagation();
        this.emitInput(null);
        this.emitChange(null);
        this.showClose = false;
        if (this.picker && typeof this.picker.handleClear === 'function') {
          this.picker.handleClear();
        }
        if (this.type === 'datetimerange') {
          this.picker = false
        }
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },

    handleClose() {
      if (!this.pickerVisible) {
        return;
      }
      this.pickerVisible = false;

      if (this.type === 'dates') {
        // restore to former value
        const oldValue = parseAsFormatAndType(
          this.valueOnOpen, this.valueFormat, this.type, this.rangeSeparator
        ) || this.valueOnOpen;
        this.emitInput(oldValue);
      }

      if (this.type === 'daterange' && this.displayValue) {
        if (!this.displayValue[0] || !this.displayValue[1]) {
          this.emitInput(null)
        }
      }
    },

    handleFieldReset(initialValue) {
      this.userInput = initialValue === '' ? null : initialValue;
    },

    handleFocus(event, position) {
      const type = this.type;
      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.userFocusPosition = position;

      // 需要异步更新，不然在第一次弹起来的时候拿不到options
      this.$nextTick().then(() => {
        this.updateRangePosition()
      })

      this.$emit('focus', this);
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;

      // ESC
      if (keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      // Tab
      if (keyCode === 9) {
        if (!this.ranged) {
          this.handleChange();
          this.pickerVisible = false;
          this.picker.visible = false;
          this.blur();
          event.stopPropagation();
        } else {
          // user may change focus between two input
          setTimeout(() => {
            if (this.refInput.indexOf(document.activeElement) === -1) {
              this.pickerVisible = false;
              this.blur();
              event.stopPropagation();
            }
          }, 0);
        }
        return;
      }

      // Enter
      if (keyCode === 13) {
        if (this.userInput === '' || this.isValidValue(this.parseString(this.displayValue))) {
          this.handleChange();
          this.pickerVisible = false;
          this.picker.visible = false;
          this.blur();
        }
        event.stopPropagation();
        return;
      }

      // if user is typing, do not let picker handle key input
      if (this.userInput) {
        event.stopPropagation();
        return;
      }

      // delegate other keys to panel
      if (this.picker && this.picker.handleKeydown) {
        this.picker.handleKeydown(event);
      }
    },

    handleRangeClick() {
      const type = this.type;
      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },

    hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = false;
        this.picker.visible = false;
        this.resetRangePosition();
        this.userFocusPosition = '';
        this.destroyPopper();
      }
    },

    resetRangePosition() {
      if (this.ranged) {
        this.picker.initialPosition = '';
      }
    },

    /**
     * 更新输入框聚焦位置
     */
    updateRangePosition() {
      if (!this.picker || !this.ranged) {
        return;
      }

      // 将输入框的位置告诉范围组件
      this.picker.userFocusPosition = this.userFocusPosition;
    },

    setRangePosition() {
      if (!this.picker) {
        return;
      }

      // 如果是范围，则将面板位置改为当前的鼠标点
      if (this.ranged) {
        this.picker.initialPosition = this.userFocusPosition;
      }
    },

    showPicker() {
      if (this.$isServer) {
        return;
      }

      if (!this.picker) {
        // 挂载panel
        this.mountPicker();
      }

      this.pickerVisible = true;
      this.picker.visible = true;

      this.updatePopper();

      this.picker.value = this.parsedValue;

      this.picker.resetView && this.picker.resetView();

      this.$nextTick(() => {
        // 设置谈起面板时鼠标聚焦的位置。
        this.setRangePosition()
        this.picker.adjustSpinners && this.picker.adjustSpinners();
      });
    },

    mountPicker() {
      this.picker = new Vue(this.panel).$mount();
      this.picker.defaultValue = this.defaultValue;
      this.picker.defaultTime = this.defaultTime;
      this.picker.popperClass = this.popperClass;
      this.picker.todayDisabled = this.todayDisabled;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = this.type === 'datetime';
      this.picker.selectionMode = this.selectionMode;
      this.picker.unlinkPanels = this.unlinkPanels;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
      this.picker.options = this.pickerOptions
      this.$watch('format', (format) => {
        this.picker.format = format;
      });

      const updateOptions = () => {
        const options = this.pickerOptions;

        // 对可选时间段做处理
        if (options && options.selectableRange) {
          let ranges = options.selectableRange;
          const parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          const format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          this.picker.selectableRange = ranges
            .map(range => parser(range, format, this.rangeSeparator));
        }

        for (const option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option) &&
              // 忽略 time-picker 的该配置项
              option !== 'selectableRange') {
            this.picker[option] = options[option];
          }
        }

        // main format must prevail over undocumented pickerOptions.format
        if (this.format) {
          this.picker.format = this.format;
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', () => updateOptions(), { deep: true });
      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', (date = '', visible = false, isResetView = true) => {
        this.userInput = null;
        this.pickerVisible = visible;
        this.picker.visible = visible;
        this.emitInput(date);

        if (isResetView) {
          this.picker.resetView && this.picker.resetView();
        } else {
          this.focusInputBox();
        }
      });

      // this.picker.$on('today', () => {
      //   const typeObj = {
      //     start: () => {
      //       this.picker.minDate = new Date();
      //     },
      //     end: () => {
      //       this.picker.maxDate = new Date();
      //     }
      //   }
      //
      //   typeObj[this.userFocusPosition] && typeObj[this.userFocusPosition]()
      // })

      this.picker.$on('select-range', (start, end, pos) => {
        if (this.refInput.length === 0) {
          return;
        }
        if (!pos || pos === 'min') {
          this.refInput[0].setSelectionRange(start, end);
          this.refInput[0].focus();
        } else if (pos === 'max') {
          this.refInput[1].setSelectionRange(start, end);
          this.refInput[1].focus();
        }
      });
    },

    /**
     * 主动聚焦输入框盒子
     */
    focusInputBox() {
      const { reference } = this.$refs;

      if (!this.ranged) {
        return;
      }

      if (!reference) {
        return;
      }
      const inputs = reference.querySelectorAll('input');
      if (this.picker && this.picker.initialPosition === 'start') {
        inputs[1].focus();
      } else {
        inputs[0].focus();
      }
    },

    unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    },

    emitChange(val) {
      // determine user real change only
      if (!valueEquals(val, this.valueOnOpen)) {
        this.$emit('change', val);
        this.valueOnOpen = val;
        if (this.validateEvent) {
          // eslint-disable-next-line
          /* TODO */
          this.dispatch('ElFormItem', 'el.form.change', val);
        }
      }
    },

    emitInput(val) {
      const formatted = this.formatToValue(val);
      if (!valueEquals(this.value, formatted)) {
        this.$emit('input', formatted);
      }
    },

    isValidValue(value) {
      if (!this.picker) {
        this.mountPicker();
      }
      if (this.picker.isValidValue) {
        return value && this.picker.isValidValue(value);
      } else {
        return true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/packages/data-picker.scss';
</style>
