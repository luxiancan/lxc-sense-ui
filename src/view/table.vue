<template>
  <div style="margin: 0 20px;">
    <ss-table 
      :data="tableData" 
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <ss-table-column type="selection" width="55"></ss-table-column>
      <ss-table-column prop="name" label="姓名" width="90"></ss-table-column>
      <ss-table-column prop="address" label="地址" width="100" show-overflow-tooltip></ss-table-column>
      <ss-table-column prop="note" label="备注"></ss-table-column>
    </ss-table>

    <div style="margin-top:20px">
      <ss-table 
        :data="tableEmpty" 
      >
      <ss-table-column prop="name" label="姓名"></ss-table-column>
      <ss-table-column prop="address" label="地址"></ss-table-column>
      <ss-table-column prop="note" label="备注"></ss-table-column>
      </ss-table>
    </div>

    <div style="margin-top:20px">
      <ss-table 
        :data="tableData"
        border 
        stripe 
        style="width: 100%"
      >
        <ss-table-column type="index"></ss-table-column>
        <ss-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
        </ss-table-column>
        <ss-table-column prop="name" label="姓名"></ss-table-column>
        <ss-table-column prop="address" label="地址"></ss-table-column>
        <ss-table-column
          align="right">
          <template slot="header">
            <input placeholder="输入关键字搜索"/>
          </template>
          <template>
            <ss-button>Edit</ss-button>
            <ss-button type="danger">Delete</ss-button>
          </template>
        </ss-table-column>
      </ss-table>
    </div>
  </div>
</template>

<script>
import Table from "../components/table/index";
import TableColumn from "../components/table/table-column";

import SsButton from '@/components/button'

export default {
  components: {
    SsTable: Table,
    SsTableColumn: TableColumn,
    SsButton,
  },
  data() {
    return {
      tableEmpty: [],
      tableData: [
        {
          date: "2016-05-01",
          name: "王小虎王小虎王小虎",
          address: "1上海市普陀区金沙江路 1518 弄",
          note: '111'
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "2上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "3上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 0) {
        return "success-row";
      }
      return "";
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
  },
};
</script>