
<template>
  <!-- eslint-disable -->
  <div class="ss-filter-item">
    <component
      :is="filterOption.component.name"
      v-model="filterData[filterOption.key]"
      v-bind="filterOption.component.props"
      v-on="filterOption.component.events"
      :clearable="filterOption.component.clearable"
    >
      <template v-if="filterOption.component.name === 'ss-select'">
        <ss-option
          v-for="option of filterOption.component.options"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        />
      </template>
    </component>
  </div>

  <!-- eslint-disable -->
</template>

<script>
import SsSelect from '../select/index'
import SsOption from '../select/option'
import SsDatePicker from '../datePicker/index'
import SsInput from '../input/index'

export default {
  components: {
    SsSelect,
    SsOption,
    SsDatePicker,
    SsInput
  },
  props: {
    filterData: {
      type: Object,
      default: () => ({})
    },
    filterOption: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      temp: this.filterData[this.filterOption.key]
    }
  },
}
</script>

<style lang="scss" scoped>
.ss-filter-item{
  // 宽度与时间选择器保持一致
  /deep/ .ss-input, .ss-select{
      width: 248px;
  }
}
</style>
