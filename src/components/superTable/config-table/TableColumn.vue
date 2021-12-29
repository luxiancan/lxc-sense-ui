<template>
  <ss-table-column v-bind="columnData.props">
    <template v-if="columnData.children && columnData.children.length > 0">
      <table-column
        v-for="(column, index) of columnData.children"
        :key="index"
        :column-data="column"
        :empty-cell="emptyCell"
      />
    </template>
    <template
      slot="header"
      slot-scope="scope"
    >
      <b-render
        v-if="columnData.renderHeader"
        :render="columnData.renderHeader"
        :row-index="scope.$index"
        :column-data="scope.column"
        :refresh-table="refreshTable"
        type="header"
      />
      <div class="ss-table-column_custom-header" v-else-if="columnData.popover && columnData.popover.content">
        <span>{{scope.column.label}}</span>
        <ss-popover
          :trigger="columnData.popover.target || 'hover'"
          :title="columnData.popover.title"
          :content="columnData.popover.content"
          :width="columnData.popover.width || 250"
          :placement="columnData.popover.placement || 'bottom'">
          <i class="sense-icon-status__warning ss-table-column__des-icon" slot="reference"></i>
        </ss-popover>
      </div>
      <span v-else>{{ scope.column.label }}</span>
    </template>
    <template slot-scope="scope">
      <b-render
        v-if="columnData.renderCell"
        :render="columnData.renderCell"
        :row-data="scope.row"
        :row-index="scope.$index"
        :refresh-table="refreshTable"
      />
      <span v-else>{{ scope.row[columnData.props.prop] || emptyCell }}</span>
    </template>
  </ss-table-column>
</template>

<script>
import TableColumn from '../../table/table-column'
import render from './render'
import Popover from '../../popover';

export default {
  name: 'TableColumn',
  components: {
    SsTableColumn: TableColumn,
    BRender: render,
    SsPopover: Popover
  },
  filters: {

  },
  props: {
    columnData: {
      type: Object,
      default() {
        return {}
      }
    },
    emptyCell: {
      type: String,
      default: '--'
    },
    refreshTable: {
      type: Function || undefined,
      default: undefined
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/common/var.scss';
  .ss-table-column__des-icon{
    color: $--table-toolbar-icon;
    margin-left: 5px;
  }
</style>
