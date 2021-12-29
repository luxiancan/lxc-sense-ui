<template>
  <transition name="ss-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
    <div
      v-show="visible"
      class="ss-picker-panel ss-date-picker ss-popper"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts,
        'has-time': showTime,
        'only-panel': type,
      }, popperClass]">
      <div class="ss-picker-panel__body-wrapper">
        <slot name="sidebar" class="ss-picker-panel__sidebar"></slot>
        <div class="ss-picker-panel__sidebar" v-if="shortcuts">
          <button
            type="button"
            class="ss-picker-panel__shortcut"
            v-for="(shortcut, key) in shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</button>
        </div>
        <div class="ss-picker-panel__body">
          <div class="ss-picker-panel__content">
            <div class="ss-picker-panel-date">
              <div
                class="ss-date-picker__header"
                :class="{
                  'ss-date-picker__header--bordered':
                  currentView === 'year' || currentView === 'month'
                }"
                v-show="currentView !== 'time'">
                <div>
                  <button
                    type="button"
                    @click="prevYear"
                    aria-label="前一年"
                    class="ss-picker-panel__icon-btn
                    ss-date-picker__prev-btn
                    sense-icon-last_year">
                  </button>
                  <button
                    type="button"
                    @click="prevMonth"
                    v-show="currentView === 'date'"
                    aria-label="上个月"
                    class="ss-picker-panel__icon-btn
                    ss-date-picker__prev-btn
                    sense-icon-last_month">
                  </button>
                </div>
                <div>
                  <span
                    @click="showYearPicker"
                    role="button"
                    class="ss-date-picker__header-label">{{ yearLabel }}</span>
                  <span
                    @click="showMonthPicker"
                    v-show="currentView === 'date'"
                    role="button"
                    class="ss-date-picker__header-label"
                    :class="{ active: currentView === 'month' }"
                  >{{`${ month + 1 }月` }}
                  </span>
                </div>
                <div>
                  <button
                    type="button"
                    @click="nextMonth"
                    v-show="currentView === 'date'"
                    aria-label="下个月"
                    class="ss-picker-panel__icon-btn
                    ss-date-picker__next-btn
                    sense-icon-next_month"
                  >
                  </button>
                  <button
                    type="button"
                    @click="nextYear"
                    aria-label="后一年"
                    class="ss-picker-panel__icon-btn
                    ss-date-picker__next-btn
                    sense-icon-next_year"
                  >
                  </button>
                </div>
              </div>
              <date-table
                v-show="currentView === 'date'"
                @pick="handleDatePick"
                :selection-mode="selectionMode"
                :first-day-of-week="firstDayOfWeek"
                :value="value"
                :default-value="defaultValue ? new Date(defaultValue) : null"
                :date="date"
                :cell-class-name="cellClassName"
                :disabled-date="disabledDate">
              </date-table>
              <year-table
              v-show="currentView === 'year'"
              @pick="handleYearPick"
              :value="value"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate">
              </year-table>
              <month-table
              v-show="currentView === 'month'"
              @pick="handleMonthPick"
              :value="value"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate">
              </month-table>
            </div>
            <div class="ss-picker-panel-time" v-if="showTime">
              <div class="ss-date-picker__header ss-date-picker__header-time">{{ time }}</div>
              <time-picker
                ref="timepicker"
                :time-arrow-control="arrowControl"
                @pick="handleTimePick"
                :visible="timePickerVisible"
                @mounted="proxyTimePickerDataProperties"
              >
              </time-picker>
            </div>
          </div>
        </div>
      </div>
      <!--TODO：有空重新数量footer显示-->
      <div class="ss-picker-panel__footer">
        <ss-button
          type="text"
          class="ss-picker-panel__current-btn"
          @click="changeToNow"
          v-show="footerVisible && selectionMode === 'day' && currentView === 'date'">
          当前时间
        </ss-button>
        <ss-button
          type="text"
          class="ss-picker-panel__today-btn"
          :disabled="todayDisabled"
          v-show="(!footerVisible && selectionMode === 'day') || selectionMode === 'dates'"
          @click="handlePresentDay"
        >
          今天
        </ss-button>
        <ss-button
          type="text"
          class="ss-picker-panel__today-btn"
          v-show="selectionMode === 'year'"
        >
          今年
        </ss-button>
        <!--TODO： 今年-->
        <ss-button
          plain
          class="el-picker-panel__link-btn"
          v-show="selectionMode === 'datetime' || (footerVisible && selectionMode === 'day')"
          @click="confirm">
          确定
        </ss-button>
      </div>
    </div>
  </transition>
</template>

<script>
import {
  getWeekNumber,
  isDate,
  modifyDate,
  modifyTime,
  modifyWithTimeString,
  clearMilliseconds,
  clearTime,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  changeYearMonthAndClampDate,
  extractDateFormat,
  extractTimeFormat,
  timeWithinRange,
  formatTime,
  formatDate
} from '../../../../utils/date-util';
import Clickoutside from '../../../../utils/clickoutside';
import SsInput from '../../../input/index';
import SsButton from '../../../button/index';
import TimePicker from './time';
import YearTable from '../basic/year-table';
import MonthTable from '../basic/month-table';
import DateTable from '../basic/date-table';

export default {
  directives: { Clickoutside },
  name: 'SsDatePanel',
  componentName: 'SsDatePanel',
  props: {
    type: {
      type: String,
      default: ''
    },
    defaultDates: {
      type: Array,
      default: () => ([])
    },
    pickerOptions: {
      type: Object,
      default: () => ({})
    },
    todayDisabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth();
    },
    week() {
      return getWeekNumber(this.date);
    },
    monthDate() {
      return this.date.getDate();
    },
    footerVisible() {
      return this.showTime || this.selectionMode === 'dates';
    },
    time() {
      if (this.value) {
        return formatTime(this.value)
      }
      return ''
    },
    // eslint-disable-next-line no-warning-comments
    // TODO 暂时无用，先注释掉
    // visibleTime() {
    //   if (this.userInputTime !== null) {
    //     return this.userInputTime;
    //   } else {
    //     return formatDate(this.value || this.defaultValue, this.timeFormat);
    //   }
    // },
    // eslint-disable-next-line no-warning-comments
    // TODO 暂时无用，先注释掉
    // visibleDate() {
    //   if (this.userInputDate !== null) {
    //     return this.userInputDate;
    //   } else {
    //     return formatDate(this.value || this.defaultValue, this.dateFormat);
    //   }
    // },
    yearLabel() {
      const yearTranslation = '年';
      if (this.currentView === 'year') {
        const startYear = Math.floor(this.year / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 11} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 11}`;
      }
      return `${this.year} ${yearTranslation}`;
    },
    timeFormat() {
      if (this.format) {
        return extractTimeFormat(this.format);
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat() {
      if (this.format) {
        return extractDateFormat(this.format);
      } else {
        return 'yyyy-MM-dd';
      }
    }
  },
  watch: {
    // eslint-disable-next-line no-warning-comments
    // TODO 无用代码
    // showTime(val) {
    //   /* istanbul ignore if */
    //   // if (!val) {
    //   //   return;
    //   // }
    //   // this.$nextTick(() => {
    //   //   const footerElm = this.$refs.timepicker.$el.lastElementChild
    //   //   if (footerElm) {
    //   //     footerElm.style.display = 'none'
    //   //   }
    //   //   const inputElm = this.$refs.input.$el;
    //   //   if (inputElm) {
    //   //     this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
    //   //   }
    //   // });
    // },
    type: {
      handler(val) {
        if (!val) {
          return
        }
        this.selectionMode = val;
      },
      immediate: true
    },
    'pickerOptions.disabledDate': {
      handler(val) {
        this.disabledDate = val;
      },
      immediate: true
    },
    defaultDates: {
      handler(val) {
        if (val) {
          const value = val.map(v => (v instanceof Date ? v : new Date(v)));
          this.emit(value, true);
        }
      },
      immediate: true
    },
    value: {
      handler(val) {
        if (isDate(val)) {
          this.date = new Date(val);
        } else {
          this.date = this.getDefaultValue();
        }
      },
      immediate: true
    },
    defaultValue(val) {
      if (!isDate(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },
    timePickerVisible() {
      this.$nextTick(() => this.$refs.timepicker.adjustSpinners());
    },
    selectionMode(newVal) {
      if (newVal === 'month') {
        /* istanbul ignore next */
        if (this.currentView !== 'year' || this.currentView !== 'month') {
          this.currentView = 'month';
        }
      } else if (newVal === 'dates') {
        this.currentView = 'date';
      }
    }
  },
  methods: {
    handlePresentDay() {
      const value = new Date();
      let tempValue = [];
      if (this.value && Array.isArray(this.value)) {
        const base = [...this.value, value];
        tempValue = base.reduce((pre, cur) => {
          if (pre && !pre.length) {
            pre.push(cur)
          }
          if (cur && !pre.filter(p => formatDate(cur) === formatDate(p)).length) {
            pre.push(cur)
          }

          return pre;
        }, this.value || [])
      } else {
        tempValue = [value]
      }

      if (this.selectionMode === 'dates') {
        this.emit(tempValue, true);
        if (this.type) {  // 纯日期面板
          this.$emit('click', tempValue)
        }
      } else {
        this.emit(value);
      }
    },
    adjustSpinners() {
      if (this.$refs.timepicker) {
        this.$refs.timepicker.adjustSpinners()
      }
    },
    proxyTimePickerDataProperties() {
      const format = (timeFormat) => {
        this.$refs.timepicker.format = timeFormat;
      };
      const value = (value1) => {
        this.$refs.timepicker.value = value1;
      };
      const date = (date1) => {
        this.$refs.timepicker.date = date1;
      };
      const selectableRange = (selectableRange1) => {
        this.$refs.timepicker.selectableRange = selectableRange1;
      };
      this.$watch('value', value);
      this.$watch('date', date);
      this.$watch('selectableRange', selectableRange);
      format(this.timeFormat);
      value(this.value);
      date(this.date);
      selectableRange(this.selectableRange);
    },
    handleClear() {
      this.date = this.getDefaultValue();
      this.$emit('pick', null);
    },
    emit(value, ...args) {
      if (!value) {
        this.$emit('pick', value, ...args);
      } else if (Array.isArray(value)) {
        const dates = value.map(date => (
          this.showTime ? clearMilliseconds(date) : clearTime(date)
        ));
        this.$emit('pick', dates, ...args);

        if (this.type) {
          this.value = dates;
        }
      } else {
        this.$emit('pick', this.showTime ? clearMilliseconds(value) : clearTime(value), ...args);
      }
      this.userInputDate = null;
      this.userInputTime = null;
    },
    // resetDate() {
    //   this.date = new Date(this.date);
    // },
    showMonthPicker() {
      this.currentView = 'month';
    },
    showYearPicker() {
      this.currentView = 'year';
    },
    // XXX: 没用到
    // handleLabelClick() {
    //   if (this.currentView === 'date') {
    //     this.showMonthPicker();
    //   } else if (this.currentView === 'month') {
    //     this.showYearPicker();
    //   }
    // },
    prevMonth() {
      this.date = prevMonth(this.date);
    },
    nextMonth() {
      this.date = nextMonth(this.date);
    },
    prevYear() {
      if (this.currentView === 'year') {
        this.date = prevYear(this.date, 10);
      } else {
        this.date = prevYear(this.date);
      }
    },
    nextYear() {
      if (this.currentView === 'year') {
        this.date = nextYear(this.date, 10);
      } else {
        this.date = nextYear(this.date);
      }
    },
    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleTimePick(value, visible, first) {
      if (isDate(value)) {
        const newDate = this.value
          ? modifyTime(this.value, value.getHours(), value.getMinutes(), value.getSeconds())
          : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
        this.date = newDate;
        this.emit(this.date, true);
      } else {
        this.emit(value, true);
      }
      if (!first) {
        this.timePickerVisible = visible;
      }
    },
    // eslint-disable-next-line no-warning-comments
    // TODO 先注释无效代码
    // handleTimePickClose() {
    //   this.timePickerVisible = false;
    // },
    handleMonthPick(month) {
      if (this.selectionMode === 'month') {
        this.date = modifyDate(this.date, this.year, month, 1);
        this.emit(this.date);
      } else {
        this.date = changeYearMonthAndClampDate(this.date, this.year, month);
        // this.emit(this.date);
        this.currentView = 'date';
      }
    },
    handleDatePick(value) {
      if (this.selectionMode === 'day') {
        // eslint-disable-next-line
        // TODO：format格式化引起，待优化时间戳和Date转化 instanceof
        const currentValue = value instanceof Date ? value : new Date(value);
        const thisValue = this.value && this.value instanceof Date ? this.value : new Date(this.value);
        let newDate = this.value
          ? modifyDate(
            thisValue,
            currentValue.getFullYear(),
            currentValue.getMonth(),
            currentValue.getDate()
          ) : modifyWithTimeString(currentValue, this.defaultTime);
        // change default time while out of selectableRange
        if (!this.checkDateWithinRange(newDate)) {
          newDate = modifyDate(
            this.selectableRange[0][0], currentValue.getFullYear(), currentValue.getMonth(), currentValue.getDate()
          );
        }
        this.date = newDate;
        this.emit(this.date, this.showTime);
      } else if (this.selectionMode === 'week') {
        this.emit(value.date);
      } else if (this.selectionMode === 'dates') {
        this.emit(value, true); // set false to keep panel open
        if (this.type) {  // 纯日期面板
          this.$emit('click', value)
        }
      }
    },
    handleYearPick(year) {
      if (this.selectionMode === 'year') {
        this.date = modifyDate(this.date, year, 0, 1);
        this.emit(this.date);
      } else {
        this.date = changeYearMonthAndClampDate(this.date, year, this.month);
        // this.emit(this.date, true);
        this.currentView = 'month';
      }
    },
    changeToNow() {
      // NOTE: not a permanent solution
      //       consider disable "now" button in the future
      if ((!this.disabledDate ||
      !this.disabledDate(new Date())) &&
      this.checkDateWithinRange(new Date())) {
        this.date = new Date();
        this.emit(this.date);
      }
    },
    confirm() {
      if (this.selectionMode === 'dates') {
        this.emit(this.value);
        if (this.type) {  // 纯日期面板
          this.$emit('change', this.value || [])
          this.$emit('click', this.value || [])
        }
      } else {
        // value were emitted in handle{Date,Time}Pick, nothing to update here
        // deal with the scenario where: user opens the picker, then confirm without doing anything
        const value = this.value
          ? this.value
          : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
        this.date = new Date(value); // refresh date
        this.emit(value);
      }
    },
    resetView() {
      if (this.selectionMode === 'month') {
        this.currentView = 'month';
      } else if (this.selectionMode === 'year') {
        this.currentView = 'year';
      } else {
        this.currentView = 'date';
      }
    },
    handleEnter() {
      document.body.addEventListener('keydown', this.handleKeydown);
    },
    handleLeave() {
      this.$emit('dodestroy');
      document.body.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(event) {
      const keyCode = event.keyCode;
      const list = [38, 40, 37, 39];
      if (this.visible && !this.timePickerVisible) {
        if (list.indexOf(keyCode) !== -1) {
          this.handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (keyCode === 13 && this.userInputDate === null && this.userInputTime === null) { // Enter
          this.emit(this.date, false);
        }
      }
    },
    handleKeyControl(keyCode) {
      /*eslint-disable*/
      const mapping = {
        year: {
          38: -4, 40: 4, 37: -1, 39: 1, offset: (date, step) => date.setFullYear(date.getFullYear() + step)
        },
        month: {
          38: -4, 40: 4, 37: -1, 39: 1, offset: (date, step) => date.setMonth(date.getMonth() + step)
        },
        week: {
          38: -1, 40: 1, 37: -1, 39: 1, offset: (date, step) => date.setDate(date.getDate() + step * 7)
        },
        day: {
          38: -7, 40: 7, 37: -1, 39: 1, offset: (date, step) => date.setDate(date.getDate() + step)
        }
      };
      /*eslint-disable*/
      const mode = this.selectionMode;
      const year = 3.1536e10;
      const now = this.date.getTime();
      const newDate = new Date(this.date.getTime());
      while (Math.abs(now - newDate.getTime()) <= year) {
        const map = mapping[mode];
        map.offset(newDate, map[keyCode]);
        if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
          continue;
        }
        this.date = newDate;
        this.$emit('pick', newDate, true);
        break;
      }
    },
    // TODO 先删除无效代码
    // handleVisibleTimeChange(value) {
    //   const time = parseDate(value, this.timeFormat);
    //   if (time && this.checkDateWithinRange(time)) {
    //     this.date = modifyDate(time, this.year, this.month, this.monthDate);
    //     this.userInputTime = null;
    //     this.$refs.timepicker.value = this.date;
    //     this.timePickerVisible = false;
    //     this.emit(this.date, true);
    //   }
    // },
    // handleVisibleDateChange(value) {
    //   const date = parseDate(value, this.dateFormat);
    //   if (date) {
    //     if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
    //       return;
    //     }
    //     this.date = modifyTime(date, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
    //     this.userInputDate = null;
    //     this.resetView();
    //     this.emit(this.date, true);
    //   }
    // },
    isValidValue(value) {
      return value && !isNaN(value) && (
        typeof this.disabledDate === 'function'
          ? !this.disabledDate(value)
          : true
      ) && this.checkDateWithinRange(value);
    },
    getDefaultValue() {
      // if default-value is set, return it
      // otherwise, return now (the moment this method gets called)
      return this.defaultValue ? new Date(this.defaultValue) : new Date();
    },
    checkDateWithinRange(date) {
      return this.selectableRange.length > 0
        ? timeWithinRange(date, this.selectableRange, this.format || 'HH:mm:ss')
        : true;
    }
  },
  components: {
    TimePicker, YearTable, MonthTable, DateTable, SsInput, SsButton
  },
  data() {
    return {
      popperClass: '',
      date: new Date(),
      value: '',
      defaultValue: null, // use getDefaultValue() for time computation
      defaultTime: null,
      showTime: false,
      selectionMode: 'day',
      shortcuts: '',
      visible: true,
      currentView: 'date',
      disabledDate: '',
      cellClassName: '',
      selectableRange: [],
      firstDayOfWeek: 7,
      showWeekNumber: false,
      timePickerVisible: true,
      format: '',
      arrowControl: false,
      userInputDate: null,
      userInputTime: null
    };
  }
};
</script>
<style lang="scss" scoped>
    // @import '@/assets/scss/packages/data-picker.scss';
</style>
