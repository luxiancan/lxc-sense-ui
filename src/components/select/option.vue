<template>
  <li
    @mouseenter="hoverItem"
    @mouseleave="handleMouseLeaveTooltip"
    @click.stop="selectOptionClick"
    class="ss-select-dropdown__item"
    v-show="visible"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled || groupDisabled || limitReached,
      'hover': hover,
    }">
    <slot>
      <!--超出一行气泡提示-->
      <div class="ss-tooltip" v-if="!tooltip">
        <span>{{ currentLabel }}</span>
      </div>

      <ss-tooltip v-else :content=currentLabel placement="top-start" ref="tooltip">
        <div>
          <span>{{ currentLabel }}</span>
        </div>
      </ss-tooltip>

      <!--TODO：搜索匹配的字符高亮显示-->
    </slot>
  </li>
</template>

<script type="text/babel">
import Emitter from '@/mixins/emitter';
import { getValueByPath, escapeRegexpString } from '@/utils/util';
import SsTooltip from '../tooltip'

export default {
  mixins: [Emitter],

  name: 'SsOption',

  componentName: 'SsOption',
  components: {
    SsTooltip
  },
  inject: ['select'],

  props: {
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
      tooltip: false,
    };
  },

  computed: {
    isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },

    currentLabel() {
      return this.label || (this.isObject ? '' : this.value);
    },

    currentValue() {
      return this.value || this.label || '';
    },

    itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },

    limitReached() {
      if (this.select.multiple) {
        return !this.itemSelected &&
            (this.select.value || []).length >= this.select.multipleLimit &&
            this.select.multipleLimit > 0;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentLabel() {
      if (!this.created && !this.select.remote) {
        this.dispatch('SsSelect', 'setSelected');
      }
    },
    value(val, oldVal) {
      // eslint-disable-next-line
      const { remote, valueKey } = this.select;
      if (!this.created && !remote) {
        if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        this.dispatch('SsSelect', 'setSelected');
      }
    },
  },

  methods: {
    isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        const valueKey = this.select.valueKey;
        return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
      }
    },

    contains(arr = [], target) {
      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1;
      } else {
        const valueKey = this.select.valueKey;
        return arr
          && arr.some(item => getValueByPath(item, valueKey) === getValueByPath(target, valueKey));
      }
    },

    handleGroupDisabled(val) {
      this.groupDisabled = val;
    },

    hoverItem(e) {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
      this.handleMouseEnterTooltip(e);
    },

    handleMouseEnterTooltip(event) {
      const cellChild = event.target.querySelector('.ss-tooltip');
      const range = document.createRange();
      range.setStart(cellChild, 0);
      range.setEnd(cellChild, cellChild.childNodes.length);
      const rangeWidth = range.getBoundingClientRect().width;
      if (rangeWidth > cellChild.offsetWidth) {
        this.tooltip = true;
      }
    },
    handleMouseLeaveTooltip() {
      const tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
    },

    selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        // this.dispatch('SsSelect', 'handleOptionClick', [this, true]);
        this.dispatch('SsSelect', 'handleOptionClick', [this, true]);
      }
    },

    queryChange(query) {
      this.visible = new RegExp(escapeRegexpString(query), 'i').test(this.currentLabel) || this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },

  created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;

    this.$on('queryChange', this.queryChange);
    this.$on('handleGroupDisabled', this.handleGroupDisabled);
  },
  mounted() {

  },

  beforeDestroy() {
    const { selected, multiple } = this.select;
    const selectedOptions = multiple ? selected : [selected];
    const index = this.select.cachedOptions.indexOf(this);
    const selectedIndex = selectedOptions.indexOf(this);

    // if option is not selected, remove it from cache
    if (index > -1 && selectedIndex < 0) {
      this.select.cachedOptions.splice(index, 1);
    }
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
};
</script>
