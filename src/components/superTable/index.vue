<template>
  <div class="ss-super-table"
       v-loading="tableLoading"
       :element-loading-text="loadingText"
  >
    <!-- 处理筛选等工具 -->
    <component :is="toolbarLayoutType"
               ref="toolbar"
               :filter-options="filterOptions"
               :filter-label-width="filterLabelWidth"
               v-if="filterOptions.length"
               @bindClick="bindMultipleColumnsBtn"></component>

    <!-- table头部信息 -->
    <slot name="table-before" />
    <div class="ss-super-table__content">
      <ss-config-table
        ref="table"
        v-bind="selectionOptions"
        :data="tableData"
        :table-header="tableHeader"
        :table-options="finalTableOptions"
        :empty-cell="emptyCell"
        :refresh-table="updateListData"
        v-on="finalTableEvents"
        @sort="sortListData"
      >
        <template slot="empty">
          <slot
            v-if="$slots.empty"
            name="empty"
          />
          <span v-else-if="finalTableOptions.emptyText">{{ finalTableOptions.emptyText }}</span>
          <span v-else>暂无数据</span>
        </template>
      </ss-config-table>

    </div>
    <div class="ss-super-table__footer">
      <div class="ss-super-table__footer-left">
        <slot name="footer-left" />
      </div>
      <ss-pagination
        v-show="totalCount > paginationConfig.pageSize"
        v-bind="paginationConfig"
        :current="paginationConfig.pageIndex"
        @change="handleCurrentChange"
        @sizeChange="handleSizeChange"
      />
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'
import { get, post } from '@/utils/http'
import ConfigTable from './config-table'
import Pagination from '../pagination'
import message from '../message'
import MultipleColumns from './toobar/toolbar-multiple-columns';
import SpaceBetween from './toobar/space-between';

const METHODS = { // axios请求
  get,
  post,
};
const defaultMethod = 'post';

export default {
  name: 'SsSuperTable',
  components: {
    SsPagination: Pagination,
    SsConfigTable: ConfigTable,

    MultipleColumns,
    SpaceBetween
  },
  props: {
    tableHeader: {
      type: Array,
      default: () => []
    },
    tableOptions: {
      type: Object,
      default() {
        return {
          rowStyle: {
            height: '85px'
          },
          headerCellClassName: 'xe-table__header--cell'
        }
      }
    },
    filterOptions: {
      type: Array,
      default: () => []
    },
    filterLabelWidth: {
      type: String,
      default: 'auto',
    },
    fetchOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    isHorizontal: {
      type: Boolean,
      default: true
    },
    emptyCell: {
      type: String,
      default: '--'
    },
    toolbarLayoutType: {
      type: String,
      default: 'multipleColumns',
      validate(value) {
        return ['multipleColumns', 'spaceBetween'].includes(value)
      }
    }
  },

  data() {
    return {
      totalCount: 0,
      filterBoxPaddingRight: '0px',
      tableData: [],
      tableLoading: false,
      defaultTableOptions: {
        rowStyle: {
          height: '85px'
        },
        headerCellClassName: 'xe-table__header--cell'
      },
      finalTableOptions: {},
      finalTableEvents: {},
      selectionOptions: {},
      selectionEvents: {},
      paginationConfig: {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        showSizeChanger: true,
        showQuickJumper: true,
      },
      reHttpRequest: false, // 当前页无数据，但total大于0往前一页再进行请求
      sortValue: {},
    }
  },
  computed: {
    needFormatParams() {
      return this.filterOptions.reduce((result, cur) => {
        if (cur.formatter && typeof cur.formatter === 'function') {
          result[cur.key] = cur.formatter
        }
        return result
      }, {})
    }
  },
  watch: {
    totalCount(val) {
      this.paginationConfig.total = val;
    },

    tableOptions: {
      handler() {
        const fakeDefaultOpt = cloneDeep(this.defaultTableOptions)
        const finalTableOptions = merge(fakeDefaultOpt, this.tableOptions)
        const { selectionOptions, pagination } = finalTableOptions
        this.paginationConfig = {
          ...this.paginationConfig,
          ...pagination
        }

        const finalSelectionOptions = {}
        let selectionEvents = {}

        if (this.isObject(selectionOptions)) {
          finalSelectionOptions.isSelection = !selectionOptions.isSingle
          finalSelectionOptions.uniqueKey = selectionOptions.uniqueKey
          finalSelectionOptions.checkSelectable = selectionOptions.checkSelectable
          selectionEvents = this.isObject(selectionOptions.events) ? selectionOptions.events : {}
          delete finalTableOptions.selectionOptions
        }
        this.selectionOptions = finalSelectionOptions
        this.finalTableEvents = { ...finalTableOptions.events, ...selectionEvents }
        delete finalTableOptions.events
        this.finalTableOptions = finalTableOptions
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.updateListData()
  },
  methods: {
    isObject(data) {
      return (
        typeof data === 'object' &&
        !Array.isArray(data) &&
        data !== null
      )
    },
    getRequestOtherParams() {
      let otherParams = {};
      const { fetchParams } = this.fetchOptions;
      // 兼容需要取组件实例的数据，通过函数拿一次，静态固定参数还是可以用params配置
      if (fetchParams && typeof fetchParams === 'function') {
        otherParams = fetchParams()
      }
      return otherParams;
    },

    fetchFilterValue() {
      if (this.$refs.toolbar) {
        return this.$refs.toolbar.filterData
      }
      return {}
    },
    fetchSortValue() {
      return this.sortValue
    },
    getRequestParams() {
      const otherParams = this.getRequestOtherParams();
      const { pageIndex, pageSize } = this.paginationConfig;
      const filterData = this.fetchFilterValue();
      const sortData = this.fetchSortValue();

      const { page, ...requestParams } = this.fetchOptions.params;

      let pageParams = {
        page_index: pageIndex,
        page_size: pageSize
      };

      if (page && Array.isArray(page) && page.length === 2) {
        pageParams = {
          [page[0]]: pageIndex,
          [page[1]]: pageIndex,
        }
      }

      let params = {
        ...requestParams,
        ...pageParams,
        ...otherParams
      }

      params = { ...params, ...filterData, ...sortData };
      const needFormatParams = Object.entries(this.needFormatParams)

      if (needFormatParams.length > 0) {
        let result = {}

        for (let i = 0; i < needFormatParams.length; i++) {
          const [key, formatter] = needFormatParams[i];

          const value = formatter(filterData[key]);

          if (value !== null && !Array.isArray(value) && typeof value === 'object') {
            result = {
              ...result,
              ...value
            }
            delete params[key]
          } else {
            result[key] = value
          }
        }
        params = {
          ...params,
          ...result
        }
      }
      return cloneDeep(params)
    },
    sortListData({ sortKey, order }) {
      // eslint-disable-next-line
      // TODO: sort_type待优化自定义
      this.sortValue = {
        sort_type: sortKey,
        sort: order && order.includes('desc') ? 'desc' : 'asc',
      }
      this.updateListData();
    },
    updateListData() {
      if (this.tableLoading && !this.reHttpRequest) {
        return
      }

      const {
        url, method = defaultMethod, formatter = data => data, filterErrorCodes = [], showError = true, totalKey
      } = this.fetchOptions;

      const params = this.getRequestParams();
      const methodKey = method.toLowerCase() in METHODS ? method.toLowerCase() : defaultMethod;

      this.tableLoading = true;
      METHODS[methodKey](url, params)
        .then((res) => {
          const { code, data, msg } = res;
          if (code !== 0) {
            const Message = this.$message

            if (typeof Message.error === 'function'
              && filterErrorCodes
              && !filterErrorCodes.includes(code)) {
              msg && Message.error(msg)
            }
            this.tableData = [];
            this.totalCount = 0;
            return
          }

          const list = formatter(data) || [];
          const total = data[totalKey] || data.total || data.count || 0;

          // eslint-disable-next-line
          // TODO：数据为空自动往前一页发请求逻辑待优化
          if (list.length === 0 && total > 0 && this.paginationConfig.pageIndex > 1) {
            this.reHttpRequest = true;
            --this.paginationConfig.pageIndex;
          } else {
            this.reHttpRequest = false;
            this.totalCount = total;
            this.tableData = list;
            this.$emit('on-table-raw-data', res); // 原始数据
            this.getValue = key => data[key]
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('err', err.msg);
          if (showError) {
            message.error(`错误：${err}`);
          }
        })
        .finally(() => {
          if (this.tableLoading && !this.reHttpRequest) {
            this.tableLoading = false;
          }
        });
    },
    handleCurrentChange(page) {
      this.paginationConfig.pageIndex = page;
      this.updateListData();
    },
    handleSizeChange(size) {
      this.paginationConfig.pageSize = size;
      this.updateListData();
    },
    resetSelectedRows() {
      if (this.$refs.table) {
        return this.$refs.table.resetSelectedRows()
      }
      return []
    },
    resetFilterItem() {
      if (this.$refs.toolbar) {
        this.$refs.toolbar.resetFilterItem()
        this.updateListData()
      }
    },
    /**
     * 绑定toolbarBtn事件
     * @params {Object}
     */
    bindMultipleColumnsBtn(item) {
      const callback = item.onClickCallback;
      this.paginationConfig.pageIndex = 1;
      callback && callback(this.updateListData, this.resetFilterItem);
    }
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/packages/super-table.scss';
</style>
