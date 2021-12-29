<template>
  <div style="margin: 0 20px;">
    <ss-super-table
      ref="xe-table"
      :table-header="tableHeader"
      :table-options="tableOptions"
      :fetch-options="fetchOptions"
      :filter-options="filterOptions"
      is-selection
      is-horizontal
      @on-table-raw-data="tableRawData"
      @on-select-change="handleSelectChange"
    >
    <div slot="empty">
        无数据勾子
    </div>
    <ss-button
      slot="horizontal-filter-left"
    >
      左边的
    </ss-button>
    <ss-button
      slot="horizontal-filter-right"
      @click="handleSearch"
    >
      搜索
    </ss-button>
    </ss-super-table>
  </div>
</template>

<script>
import SuperTable from "@/components/superTable"
import SsButton from '@/components/button'
import {tableHeader, tableOptions, filterOptionsSpaceBetween, filterOptions, fetchOptions} from './options/super-table-option'
export default {
  components: {
    SsSuperTable: SuperTable,
    SsButton,
  },
  data() {
    return {
      tableHeader: tableHeader(this),
      tableOptions: tableOptions(this),
      fetchOptions: fetchOptions(this),
      filterOptions: filterOptions(this),  //筛选
    };
  },
  methods: {
    tableRawData(data){
      console.log('原始数据' ,data)
    },
    handleSelectChange(data){
      console.log('select数据' ,data)
    },
    handleSearch() {
      // this.$refs['xe-table'].handleSearch()
    },

  },
};
</script>
<style lang="scss" scoped>
.slot-wrap{
  padding: 10px 0;
}
</style>
