<template>
 <div class="ss-pagination-warpper">
    <ul class="ss-pagination" :class="{'ss-pagination-small':small}">
        <li class="ss-pagination-options" v-if="showSizeChanger">
            <!-- TODO 这儿会存在撑开底部的场景，待优化-->
            <span>共{{total}}条，每页</span>
              <div class="ss-pagination-options-size">
                <ss-select size="xs" class="ss-pagination-select" v-model="currentPageSize" @change="pageSizeChange">
                  <ss-option v-for="item in pageSizeList"
                      :key="item"
                      :value="item"
                      :label="`${item} 条`">
                  </ss-option>
                </ss-select>
            </div>
        </li>
        <li class="ss-pagination-item ss-pagination-left"
        :class="[currentPage === 1 && 'ss-pagination-item__disabled']"
        @click="left">
        <i class="sense-icon-pagination-left"></i>
        </li>
        <li class="ss-pagination-item"
        :class="[currentPage === 1 && 'ss-pagination-item__active']"
        @click="handleItemClick(1)">
        1
        </li>
        <li class="ss-pagination-item ss-pagination-ellipsis" v-if="isLeftEllipsisShow">
        ...
        </li>
        <li class="ss-pagination-item"
        :class="[currentPage === item && 'ss-pagination-item__active']"
        v-for="item in list"
        :key="item"
        @click="handleItemClick(item)">
        {{ item }}
        </li>
        <li class="ss-pagination-item ss-pagination-ellipsis" v-if="isRightEllipsisShow">
        ...
        </li>
        <li class="ss-pagination-item"
        :class="[currentPage === totalLength && 'ss-pagination-item__active']"
        @click="handleItemClick(totalLength)"
        v-if="totalLength > 9"
        >
        {{ totalLength }}
        </li>
        <li class="ss-pagination-item ss-pagination-right"
        :class="[currentPage === totalLength && 'ss-pagination-item__disabled']"
        @click="right">
        <i class="sense-icon-pagination-right"></i>
        </li>
        <li class="ss-pagination-options">
        <div class="ss-pagination-options-jump" v-if="showQuickJumper">
            跳至<ss-input class="ss-pagination-options-jump-input"
            type="text"
            v-model="jumpPage"
            placeholder=" "
            @keypress.native="validateInput"
            @blur="jump"
            @keyup.enter.native="jump" />页
        </div>
        </li>
    </ul>
  </div>
  <!--TODO：支持简约分页器类型，现网暂无使用-->
</template>

<script>
import SsSelect from '../select'
import SsOption from '../select/option'
import SsInput from '../input'

export default {
  name: 'SsPagination',
  components: {
    SsSelect,
    SsOption,
    SsInput
  },
  props: {
    total: Number,
    current: Number,
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: Array,
    showSizeChanger: Boolean,
    showQuickJumper: Boolean,
    small: Boolean
  },
  data() {
    return {
      currentPage: this.current || 1,
      currentPageSize: Array.isArray(this.pageSizeOptions) && this.pageSizeOptions[0]
        ? this.pageSizeOptions[0] : this.pageSize,
      jumpPage: ''
    }
  },
  watch: {
    current(val) {
      this.currentPage = val || 1
    },
    pageSize(val) {
      this.currentPageSize = val
    },
    currentPage(page) {
      this.$emit('input', page)
      this.$emit('change', page)
    }
  },
  computed: {
    totalLength() {
      return Math.ceil(this.total / this.currentPageSize)
    },
    list() {
      const arr = []
      let length = 5
      let start = 2
      if (this.totalLength > 9) {
        length = 6
        if (this.totalLength - this.currentPage < 3) {
          start = this.totalLength - 6
        } else if (this.currentPage >= 6) {
          length = 5
          start = this.currentPage - 2
        }
      } else {
        length = this.totalLength - 1
      }
      for (let i = 0; i < length; i++, start++) {
        arr.push(start)
      }
      return arr
    },
    isLeftEllipsisShow() {
      return this.currentPage > 5 && this.totalLength > 9
    },
    isRightEllipsisShow() {
      return this.totalLength - this.currentPage >= 4 && this.totalLength > 9
    },
    pageSizeList() {
      return this.pageSizeOptions || [10, 20, 50, 100]
    }
  },
  methods: {
    handleItemClick(page) {
      if (this.currentPage !== page) {
        this.currentPage = page
      }
    },
    pageSizeChange(size) {
      this.currentPageSize = size
      if (this.currentPage > this.totalLength) {
        this.currentPage = this.totalLength
      }
      this.$emit('sizeChange', size)
    },
    left() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    right() {
      if (this.currentPage < this.totalLength) {
        this.currentPage++
      }
    },
    jump() {
      let page = +this.jumpPage
      if (page && page !== this.currentPage) {
        if (page > this.totalLength) {
          page = this.totalLength
        }
        if (page < 1) {
          page = 1
        }
        this.currentPage = page
      }
      this.jumpPage = ''
    },
    validateInput(evt) { // 输入限制正整数
      const e = evt || window.event;
      if (!/\d/.test(Number(e.key)) && !e.ctrlKey) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/pagination.scss';
</style>
