<template>
  <div class="xe-table-container">
    <ss-table
      ref="table"
      :data="data"
      v-bind="tableOptions"
      v-on="$listeners"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @sort-change="handleSortChange"
    >
      <b-render
        v-if="$slots.empty"
        :empty-nodes="$slots.empty"
      />
      <!-- 单选/多选 -->
      <ss-table-column
        v-if="hasDefinedSelection && isSelection"
        type="selection"
        :selectable="checkSelectable"
        width="35"
      />
      <ss-table-column
        v-else-if="hasDefinedSelection"
        label=""
        align="center"
        width="35"
      >
        <template slot-scope="scope">
          <span
            class="xe-radio"
            :class="{ 'is-checked': currentSelectRow && currentSelectRow.id === scope.row.id }"
            @click="event => { handleRadioClick(scope.row, event); }"
          >
            <span class="xe-radio__inner" />
            <input
              type="radio"
              aria-hidden="true"
              tabindex="-1"
              class="xe-radio__original"
              value
            >
          </span>
        </template>
      </ss-table-column>

      <ss-table-column
        v-if="isExpand"
        type="expand"
      >
        <template slot-scope="scope">
          <b-render
            :render="expandRender"
            :row-data="scope.row"
            :row-index="scope.$index"
            :column-data="scope.column"
          />
        </template>
      </ss-table-column>

      <table-column
        v-for="(header, headerIndex) of tableHeader"
        :key="headerIndex"
        :column-data="header"
        :empty-cell="emptyCell"
        :refresh-table="refreshTable"
      >
      </table-column>
    </ss-table>
  </div>
</template>

<script>
import Table from '../../table'
import TableColumn from '../../table/table-column'
import BTableColumn from './TableColumn'
import render from './render'

export default {
  components: {
    SsTable: Table,
    SsTableColumn: TableColumn,
    TableColumn: BTableColumn,
    bRender: render
  },

  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    tableOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    tableHeader: {
      type: Array,
      default() {
        return []
      }
    },
    isSelection: {
      type: Boolean,
      default: undefined
    },
    checkSelectable: {
      type: Function,
      default: undefined
    },
    isExpand: {
      type: Boolean,
      default: false
    },
    expandRender: {
      type: Function,
      default: undefined
    },
    //
    uniqueKey: {
      type: String,
      default: 'id'
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
    return {
      currentSelectRow: undefined,
      selectedRows: [] // 开启多选时使用
    }
  },
  computed: {
    hasDefinedSelection() {
      return typeof this.isSelection !== 'undefined'
    },
    table() {
      return this.getTable()
    },
    // 已选中行在数组中的位置
    selectedRowsPos() {
      return this.selectedRows.reduce((result, cur, index) => {
        result[cur[this.uniqueKey]] = index
        return result
      }, {})
    },
    // 已选中的行id
    selectedRowsId() {
      return this.selectedRows.map(item => item[this.uniqueKey])
    },
    // 当前页面选中的行
    currentPageSelectedRows() {
      const ids = this.selectedRowsId

      return this.data.filter(item => ids.indexOf(item[this.uniqueKey]) > -1)
    }
  },
  watch: {
    data: {
      async handler() {
        if (!this.hasDefinedSelection) {
          return
        }
        if (this.isSelection && this.selectedRows.length > 0) {
          await this.$nextTick()
          const elTable = this.getTable()

          this.currentPageSelectedRows.forEach((row) => {
            elTable.toggleRowSelection(row, true)
          })
        }
      },
      deep: true
    }
  },
  methods: {
    handleRadioClick(row) {
      if (this.hasDefinedSelection && this.isSelection === false) {
        this.currentSelectRow = row
        this.table.setCurrentRow(row)
      }
    },
    getTable() {
      return this.$refs.table
    },
    handleSelect(selection, row) {
      if (this.selectedRowsId.indexOf(row[this.uniqueKey]) > -1) {
        const index = this.selectedRowsPos[row[this.uniqueKey]]

        this.selectedRows.splice(index, 1)
      } else {
        this.selectedRows.push(row)
      }
      this.$emit('on-select-change', this.selectedRows)
    },
    handleSortChange({ column: { sortKey }, prop, order }) {
      this.$emit('sort', { sortKey, prop, order })
    },
    handleSelectAll(selection) {
      if (selection.length > 0) {
        // 全选
        // 筛选出当前页面未选中的行加入到selectedRows中
        const rows = selection.filter((item) => {
          this.selectedRowsId.indexOf(item[this.uniqueKey]) === -1
        });

        this.selectedRows = this.selectedRows.concat(rows)
      } else {
        // 取消全选
        const ids = this.currentPageSelectedRows.map(item => item[this.uniqueKey])

        ids.forEach((id) => {
          const pos = this.selectedRowsPos[id]

          this.selectedRows.splice(pos, 1)
        })
      }
      this.$emit('on-select-change', this.selectedRows)
    },
    resetSelectedRows() {
      this.selectedRows = []
      this.currentSelectRow = undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.xe-table-container {

    /deep/ {

        .xe-radio {
            position: relative;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 10px;
            line-height: 1;
            white-space: nowrap;
            vertical-align: middle;
            outline: none;
            cursor: pointer;

            &.is-checked {

                .xe-radio__inner {
                    background: #409eff;
                    border-color: #409eff;

                    &::after {
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            }

            .xe-radio__inner {
                position: relative;
                display: inline-block;
                box-sizing: border-box;
                width: 14px;
                height: 14px;
                background-color: #fff;
                border: 1px solid #dcdfe6;
                border-radius: 100%;
                cursor: pointer;

                &::after {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 4px;
                    height: 4px;
                    background-color: #fff;
                    border-radius: 100%;
                    transform: translate(-50%, -50%) scale(0);
                    transition: transform 0.15s ease-in;
                    content: '';
                }
            }

            .xe-radio__original {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: -1;
                margin: 0;
                outline: none;
                opacity: 0;
            }
        }

        .ss-checkbox {
            margin-bottom: 0;
        }
    }
}
</style>
