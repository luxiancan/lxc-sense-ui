<template>
<ss-form class="toolbar-space-between" :inline="true" :label-width="filterLabelWidth">
  <div class="toolbar-space-between_left">
    <div class="toolbar-space-between_item" v-for="(item, index) in toolbarLeft" :key="index">
      <space-between-item :item="item" @click="handleButtonClick(item)" :filter-data="filterData"></space-between-item>
    </div>
  </div>
  <div class="toolbar-space-between_right">
    <div class="toolbar-space-between_item" :class="{'toolbar-space-between_right-last': index === toolbarRight.length - 1}"
         v-for="(item, index) in toolbarRight" :key="index">
      <space-between-item :item="item" @click="handleButtonClick(item)" :filter-data="filterData"></space-between-item>
    </div>
  </div>
</ss-form>
</template>

<script>
/**
 * @description 单行两端布局
 */

import ToolbarMultipleColumns from './toolbar-multiple-columns';
import SpaceBetweenItem from './item';

export default {
  components: {
    SpaceBetweenItem
  },
  extends: ToolbarMultipleColumns,
  data() {
    return {
      filterType: ['ss-select', 'ss-input', 'ss-date-picker']
    }
  },
  computed: {
    filterItemList() {
      return this.filterOptions.reduce((acc, option) => {
        if (option.component && option.component.name === 'ss-input') {
          return acc.concat(option)
        }

        if (option.component && option.component.name === 'ss-select') {
          this.setFomItemSelect(option.component);
          return acc.concat(option)
        }

        return acc.concat(option);
      }, []);
    },

    toolbarLeft() {
      return this.filterItemList.filter(item => item.align === 'left')
    },

    toolbarRight() {
      return this.filterItemList.filter(item => item.align === 'right')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/common/var.scss';
  .toolbar-space-between{
    display: flex;
    justify-content: space-between;
  }

  .toolbar-space-between_item{
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    /deep/.ss-form-item{
      margin-bottom: 0;
    }
  }

  .toolbar-space-between_right-last{
    margin-right: 0;
    /deep/.ss-form-item{
      margin-right: 0;
    }
  }

  .toolbar-space-between_left,
  .toolbar-space-between_right{
    margin-bottom: 20px;
  }

</style>
