<template>
  <transition name="ss-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="ss-picker-panel ss-date-range-picker ss-popper"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts,
        'has-time': showTime
      }, popperClass]">
      <div class="ss-picker-panel__body-wrapper">
        <slot name="sidebar" class="ss-picker-panel__sidebar"></slot>
        <div class="ss-picker-panel__sidebar" v-if="shortcuts">
          <button
            type="button"
            class="ss-picker-panel__shortcut"
            v-for="(shortcut, key) in shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)">{{shortcut.text}}</button>
        </div>
        <div class="ss-picker-datepanel__body">
          <div class="ss-picker-panel__content ss-date-range-picker__content is-left">
            <div class="ss-date-range-picker__header">
              <button
                type="button"
                @click="leftPrevYear"
                class="ss-picker-panel__icon-btn sense-icon-last_year"></button>
              <button
                type="button"
                @click="leftPrevMonth"
                class="ss-picker-panel__icon-btn sense-icon-last_month"></button>
              <button
                type="button"
                @click="leftNextYear"
                v-if="unlinkPanels"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="ss-picker-panel__icon-btn sense-icon-last_year"></button>
              <button
                type="button"
                @click="leftNextMonth"
                v-if="unlinkPanels"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="ss-picker-panel__icon-btn sense-icon-last_month"></button>
              <div>{{ leftLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="leftDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              :cell-class-name="cellClassName"
              @changerange="handleChangeRange"
              :first-day-of-week="firstDayOfWeek"
              :initial-position="initialPosition"
              @pick="handleRangePick">
            </date-table>
          </div>
          <div class="ss-picker-panel__content ss-date-range-picker__content is-right">
            <div class="ss-date-range-picker__header">
              <button
                type="button"
                @click="rightPrevYear"
                v-if="unlinkPanels"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="ss-picker-panel__icon-btn sense-icon-last_year"></button>
              <button
                type="button"
                @click="rightPrevMonth"
                v-if="unlinkPanels"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="ss-picker-panel__icon-btn sense-icon-last_month"></button>
              <button
                type="button"
                @click="rightNextYear"
                class="ss-picker-panel__icon-btn sense-icon-next_year"></button>
              <button
                type="button"
                @click="rightNextMonth"
                class="ss-picker-panel__icon-btn sense-icon-next_month"></button>
              <div>{{ rightLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="rightDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              :cell-class-name="cellClassName"
              @changerange="handleChangeRange"
              :first-day-of-week="firstDayOfWeek"
              :initial-position="initialPosition"
              @pick="handleRangePick">
            </date-table>
          </div>
        </div>
      </div>
      <div class="ss-picker-panel__footer-current">
        <ss-button type="text"
                   :disabled="disabledToDayBtn"
                   @click="handlePresentDay">
          今天</ss-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
/**
 * @description日期范围选择面板
 */
import {
  formatDate,
  parseDate,
  isDate,
  // modifyDate,
  modifyTime,
  modifyWithTimeString,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  nextDate,
  extractDateFormat,
  extractTimeFormat
} from '../../../../utils/date-util';
import Clickoutside from '../../../../utils/clickoutside';
import DateTable from '../basic/date-table';
import SsButton from '../../../button';

const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), nextDate(new Date(defaultValue), 1)];
  } else {
    return [new Date(), nextDate(new Date(), 1)];
  }
};
export default {
  directives: { Clickoutside },
  computed: {
    btnDisabled() {
      return !(
        this.minDate && this.maxDate &&
        !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
    },
    leftLabel() {
      return `${this.leftDate.getFullYear()}年
      ${this.leftDate.getMonth() + 1}月`;
    },
    rightLabel() {
      return `${this.rightDate.getFullYear()}年
      ${this.rightDate.getMonth() + 1}月`;
    },
    leftYear() {
      return this.leftDate.getFullYear();
    },
    leftMonth() {
      return this.leftDate.getMonth();
    },
    leftMonthDate() {
      return this.leftDate.getDate();
    },
    rightYear() {
      return this.rightDate.getFullYear();
    },
    rightMonth() {
      return this.rightDate.getMonth();
    },
    rightMonthDate() {
      return this.rightDate.getDate();
    },
    minVisibleDate() {
      if (this.dateUserInput.min !== null) {
        return this.dateUserInput.min;
      }
      if (this.minDate) {
        return formatDate(this.minDate, this.dateFormat);
      }
      return '';
    },
    maxVisibleDate() {
      if (this.dateUserInput.max !== null) {
        return this.dateUserInput.max;
      }
      if (this.maxDate || this.minDate) {
        return formatDate(this.maxDate || this.minDate, this.dateFormat);
      }
      return '';
    },
    minVisibleTime() {
      if (this.timeUserInput.min !== null) {
        return this.timeUserInput.min;
      }
      if (this.minDate) {
        return formatDate(this.minDate, this.timeFormat);
      }
      return '';
    },
    // eslint-disable-next-line no-warning-comments
    // TODO 无效代码先注释
    // maxVisibleTime() {
    //   if (this.timeUserInput.max !== null) {
    //     return this.timeUserInput.max;
    //   }
    //   if (this.maxDate || this.minDate) {
    //     return formatDate(this.maxDate || this.minDate, this.timeFormat);
    //   }
    //   return '';
    // },
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
    },
    enableMonthArrow() {
      const nextMonth1 = (this.leftMonth + 1) % 12;
      const yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels &&
      new Date(this.leftYear + yearOffset, nextMonth1) < new Date(this.rightYear, this.rightMonth);
    },
    enableYearArrow() {
      return this.unlinkPanels &&
      this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
    },
    /**
     * 禁用今天button
     */
    disabledToDayBtn() {
      const toDayTemp = new Date().getTime();

      return (this.minDate && (toDayTemp < this.minDate)) ||
        (this.maxDate && (toDayTemp > this.maxDate));
    }
  },
  data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: nextMonth(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      showTime: false,
      shortcuts: '',
      visible: '',
      disabledDate: '',
      cellClassName: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: true,
      maxTimePickerVisible: false,
      format: '',
      arrowControl: false,
      unlinkPanels: false,
      dateUserInput: {
        min: null,
        max: null
      },
      timeUserInput: {
        min: null,
        max: null
      },
      currentView: 'date',
      initialPosition: '', // 用户输入框聚焦位置
      options: {}, // 等于
      userFocusPosition: ''
    };
  },
  watch: {
    minDate(val) {
      this.dateUserInput.min = null;
      this.timeUserInput.min = null;
      this.$nextTick(() => {
        if (this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
          const format = 'HH:mm:ss';
          this.$refs.maxTimePicker.selectableRange = [
            [
              parseDate(formatDate(this.minDate, format), format),
              parseDate('23:59:59', format)
            ]
          ];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },

    maxDate(val) {
      this.dateUserInput.max = null;
      this.timeUserInput.max = null;
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },
    minTimePickerVisible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.minTimePicker.date = this.minDate;
          this.$refs.minTimePicker.value = this.minDate;
          this.$refs.minTimePicker.adjustSpinners();
        });
      }
    },
    maxTimePickerVisible(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.maxTimePicker.date = this.maxDate;
          this.$refs.maxTimePicker.value = this.maxDate;
          this.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },
    value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
        if (this.minDate) {
          this.leftDate = this.minDate;
          if (this.unlinkPanels && this.maxDate) {
            const minDateYear = this.minDate.getFullYear();
            const minDateMonth = this.minDate.getMonth();
            const maxDateYear = this.maxDate.getFullYear();
            const maxDateMonth = this.maxDate.getMonth();
            this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth
              ? nextMonth(this.maxDate)
              : this.maxDate;
          } else {
            this.rightDate = nextMonth(this.leftDate);
          }
        } else {
          this.leftDate = calcDefaultValue(this.defaultValue)[0];
          this.rightDate = nextMonth(this.leftDate);
        }
      }
    },
    defaultValue(val) {
      if (!Array.isArray(this.value)) {
        const [left, right] = calcDefaultValue(val);
        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels
          ? right
          : nextMonth(this.leftDate);
      }
    }
  },
  methods: {
    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },

    disableTimeRange(minDate, maxDate) {
      if (this.options && typeof this.options.disabledDate === 'function') {
        return;
      }

      // 默认处理禁用逻辑
      this.disabledDate = (val) => {
        const initialPositionType = {
          start: () => {
            if (minDate) {
              return val.getTime() < minDate.getTime();
            }
            return false;
          },
          end: () => {
            if (maxDate) {
              return val.getTime() > maxDate.getTime()
            }
            return false;
          }
        }

        return initialPositionType[this.initialPosition] && initialPositionType[this.initialPosition]();
      }
    },

    /**
     * 还原清空
     */
    cleanDisableTimeRange() {
      if (this.options && typeof this.options.disabledDate === 'function') {
        return;
      }

      this.disabledDate = () => false;
    },

    /**
     * 绑定今天按钮事件
     */
    handlePresentDay() {
      const typeObj = {
        start: () => {
          this.minDate = new Date();
          this.disableTimeRange(this.minDate, this.maxDate || null)
        },
        end: () => {
          this.maxDate = new Date();
          this.disableTimeRange(this.minDate || null, this.maxDate)
        }
      }

      typeObj[this.userFocusPosition] && typeObj[this.userFocusPosition]()
      this.emitPick();
      // 修改选择状态
      this.rangeState.selecting = !this.rangeState.selecting;
    },

    handleRangePick(val, close = true) {
      this.rangeState.selecting = true;
      const defaultTime = this.defaultTime || [];
      const minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
      const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);

      // 禁用范围
      this.disableTimeRange(val.minDate, val.maxDate);

      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }

      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;
      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(() => {
        this.maxDate = maxDate;
        this.minDate = minDate;
      }, 10);
      if (!close) {
        return
      }
      this.emitPick();
    },
    handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = modifyTime(
          this.minDate, value.getHours(), value.getMinutes(), value.getSeconds()
        );
      }
      if (!first) {
        this.minTimePickerVisible = visible;
      }

      // eslint-disable-next-line no-mixed-operators
      if (!this.maxDate || this.maxDate &&
        this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },
    handleMinTimeClose() {
      this.minTimePickerVisible = false;
    },

    handleMaxTimeClose() {
      this.maxTimePickerVisible = false;
    },
    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear() {
      this.leftDate = prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = nextMonth(this.leftDate);
      }
    },
    leftPrevMonth() {
      this.leftDate = prevMonth(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = nextMonth(this.leftDate);
      }
    },
    rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = nextYear(this.leftDate);
        this.rightDate = nextMonth(this.leftDate);
      } else {
        this.rightDate = nextYear(this.rightDate);
      }
    },
    rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = nextMonth(this.leftDate);
        this.rightDate = nextMonth(this.leftDate);
      } else {
        this.rightDate = nextMonth(this.rightDate);
      }
    },
    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear() {
      this.leftDate = nextYear(this.leftDate);
    },
    leftNextMonth() {
      this.leftDate = nextMonth(this.leftDate);
    },
    rightPrevYear() {
      this.rightDate = prevYear(this.rightDate);
    },
    rightPrevMonth() {
      this.rightDate = prevMonth(this.rightDate);
    },
    emitPick(visible = false) {
      switch (true) {
      // 只选中一个的时候，不需要关闭面板
      case !(isDate(this.minDate) && isDate(this.maxDate)):
        this.$emit('pick', [this.minDate, this.maxDate], true, false);
        break;
      case this.isValidValue([this.minDate, this.maxDate]):
        this.$emit('pick', [this.minDate, this.maxDate], visible);
        break;
      default:
            // no default
      }
    },
    isValidValue(value) {
      return Array.isArray(value) &&
        value && value[0] && value[1] &&
        isDate(value[0]) && isDate(value[1]) &&
        value[0].getTime() <= value[1].getTime() && (
        typeof this.disabledDate === 'function'
          ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
          : true
      );
    },
    resetView() {
      // eslint-disable-next-line no-eq-null
      if (this.minDate && this.maxDate == null) {
        this.rangeState.selecting = false;
      }
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
      this.cleanDisableTimeRange()
    }
  },
  components: {
    DateTable,
    SsButton
  }
};
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/packages/data-picker.scss';
</style>
