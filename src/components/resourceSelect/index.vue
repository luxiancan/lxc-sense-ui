<style lang="scss" scoped>
button {
  width: 86px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #E5E7EB;
  outline: none;
}
.__ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.dialog-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-popup {
  width: 800px;
  height: 600px;
  margin: 30px 0;
  border-radius: 2px;
  background-color: #fff;
  position: relative;
  text-align: left;
}
.dialog-header {
  width: 100%;
  height: 56px;
	line-height: 56px;
  background: #FAFBFC;
  border-radius: 2px 2px 0px 0px;
  padding-left: 24px;
  font-size: 16px;
}
.close-btn {
	width: 24px;
	height: 24px;
	float: right;
	cursor: pointer;
	margin: 16px 16px 0 0;
  &:hover {
    background: #E5E7EB;
  }
	img {
		width: 100%;
		height: 100%;
		float: left;
	}
}

.dialog-content {
  padding: 15px 24px 0;
}
.tabs-list {
  position: relative;
  height: 40px;
  margin-bottom: 16px;
  padding: 0;
  border-bottom: 1px solid #EEEEEE;
  overflow: hidden;
  white-space:nowrap;
  .tab-content {
    position: absolute;
    top: 0;
    transition: all 0.3s ease-in-out;
  }
  .tab-item {
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    position: relative;
    bottom: -1px;
    color: #666666;
    text-align: center;
    cursor: pointer;
    .bottom-mark {
      position: absolute;
      left: 0;
      bottom: 1px;
      display: none;
      width:80px;
      height:2px;
      background:#2A75ED;
    }
  }
  .active-item {
    color: #2A75ED;
    .bottom-mark {
      display: inline-block;
    }
  }
  .handle-choose {
    position: absolute;
    top: 1px;
    width: 45px;
    height: 40px;
    background: #fff;
    line-height: 40px;
    z-index: 10;
    cursor: pointer;
  }
  .pre-choose {
    left: -10px;
    color: #969BA5;
    box-shadow: 0px 6px 7px #969BA5;
    text-align: right;
    i {
      margin-right: 5px;
      font-size: 10px;
      transform: scale(0.8);
    }
  }
  .next-choose {
    right: 0;
    color: #969BA5;
    box-shadow: 1px 6px 6px #969BA5;
    i {
      margin-left: 5px;
      font-size: 10px;
      transform: scale(0.8);
    }
  }
}
.mian-content {
  position: relative;
}
.operate-line {
  margin-bottom: 12px;
  line-height: 36px;
  display: flex;
  justify-content: space-between;
  .skip-btn {
    width: auto;
    padding: 0 14px;
    background: #FAFBFC;
		color: #666666;
    float: left;
  }
  .refresh-btn {
    margin-left: 16px;
    float: left;
    color: #2a75ed;
    text-decoration: none;
    outline: none;
  }
}
.type-select {
  width: 104px;
  margin-right: 16px;
  float: left;
}
.input-wrapper {
  width: 240px;
  height: 36px;
  float: left;
  position: relative;
}
.input-entity {
  width: 240px;
  height: 36px;
  padding: 8px 20px 8px 36px;
  border: 1px solid #EEEEEE;
  border-radius: 2px;
  background: #ffffff;
  cursor: text;
  &::placeholder {
    color: #B2B2B2;
  }
  &:hover {
    border-color: #c0c4cc;
  }
  &:focus {
    border-color: #2a75ed;
  }
}
.search-icon {
  position: absolute;
  top: 10px;
  left: 12px;
  width: 16px;
  height: 16px;
  img {
    width: 100%;
    height: 100%;
    float: left;
  }
}
.table-header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  background: #FAFAFA;
  padding: 0 32px 0 12px;
  display: flex;
  justify-content: space-between;
}
.table-body {
  width: 100%;
  height: 316px;
  overflow-y: scroll;
  /*侧边滑动*/
  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    /* Firefox 4 */
    -webkit-transition: all 0.4s ease;
    /* Safari 和 Chrome */
    -o-transition: all 0.4s ease;
    /* Opera */
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    /* Firefox 4 */
    -webkit-transition: all 0.4s ease;
    /* Safari 和 Chrome */
    -o-transition: all 0.4s ease;
    /* Opera */
  }
}

.table-pagination {
  width: 100%;
  padding: 15px 0;
  text-align: center;
}

.dialog-footer {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 66px;
	background: #FAFBFC;
  border-radius: 0px 0px 2px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11000;
	.cancel-btn {
		margin-right: 10px;
		background: #FAFBFC;
		color: #666666;
	}
	.confirm-btn {
    margin-left: 10px;
		background: #2A75ED;
		color: #FFFFFF;
		border: none;
	}
  .unavailable {
    opacity: 0.3;
    cursor: not-allowed;
  }
}

.dialog-enter, .dialog-leave-to {
    opacity: 0;
}
.dialog-enter-active, .dialog-leave-active {
    transition: all 0.3s;
}
.dialog-enter-to, .dialog-leave {
    opacity: 1;
}
</style>

<template>
  <transition name="dialog">
    <section class="dialog-bg">
      <div class="select-popup">
        <loading v-show="dialogLoading"></loading>
        <div class="dialog-header">
          选择{{topicName}}
          <i class="close-btn" @click="$emit('cancel')">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhYPntKAv5Z+656GA5Zu+5qCHL2ljb25fY2xvc2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWFg+e0oC/ln7rnoYDlm77moIcvaWNvbl9jbG9zZSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwxMSBMMTIsMy41IEMxMiwzLjIyMzg1NzYzIDEyLjIyMzg1NzYsMyAxMi41LDMgQzEyLjc3NjE0MjQsMyAxMywzLjIyMzg1NzYzIDEzLDMuNSBMMTMsMTEgTDIwLjUsMTEgQzIwLjc3NjE0MjQsMTEgMjEsMTEuMjIzODU3NiAyMSwxMS41IEMyMSwxMS43NzYxNDI0IDIwLjc3NjE0MjQsMTIgMjAuNSwxMiBMMTMsMTIgTDEzLDE5LjUgQzEzLDE5Ljc3NjE0MjQgMTIuNzc2MTQyNCwyMCAxMi41LDIwIEMxMi4yMjM4NTc2LDIwIDEyLDE5Ljc3NjE0MjQgMTIsMTkuNSBMMTIsMTIgTDQuNSwxMiBDNC4yMjM4NTc2MywxMiA0LDExLjc3NjE0MjQgNCwxMS41IEM0LDExLjIyMzg1NzYgNC4yMjM4NTc2MywxMSA0LjUsMTEgTDEyLDExIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0IyQjJCMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNTAwMDAwLCAxMS41MDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuNTAwMDAwLCAtMTEuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="">
          </i>
        </div>
        <div class="dialog-content">
          <div class="tabs-list" ref="tabContent">
            <div class="tab-content" :style="{'left':moveLeft + 'px'}" ref="tabColumn">
              <template v-for="item in dynamicTabsList">
                <div
                  class="tab-item"
                  :class="{'active-item': item.id === activeTabId}"
                  :key="item.id"
                  @click="switchTab(item)">
                  {{ item.label }}
                  <span class="bottom-mark"></span>
                </div>
              </template>
            </div>

            <div class="pre-choose handle-choose" @click="preChoose" v-if="showLeft">
              <i class="font_family sense-icon-pagination-left"></i>
            </div>
            <div class="next-choose handle-choose" @click="nextChoose" v-if="showRight">
              <i class="font_family sense-icon-pagination-right"></i>
            </div>
          </div>
          <div class="mian-content">
            <loading v-show="mainLoading"></loading>
            <div class="operate-line">
              <div>
                <button class="skip-btn" @click="skip">{{skipBtnText}}</button>
                <a href="javascript:void(0)" class="refresh-btn" @click="refreshPopup">刷新</a>
              </div>
              <div>
                <ss-select
                  class="type-select"
                  v-if="showSelect && selectOptions.length > 0"
                  placeholder="筛选类型"
                  v-model="filterType"
                  @change="onfilterTypeChange">
                  <ss-option
                    :value="item.value"
                    :label="item.label"
                    v-for="item in selectOptions"
                    :key="item.value">
                  </ss-option>
                </ss-select>
                <div class="input-wrapper" v-if="showSearch">
                  <input
                    type="text"
                    class="input-entity"
                    placeholder="输入名称"
                    v-model.trim="filterText"
                    @keyup.enter="onInputEnter" />
                  <i class="search-icon">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAXZJREFUKBWVkjFLA0EQhb29FDGi5AekCWqVQoxoIxYqKEnuDi1ExCqdP0BLazuxEBsLUSstTQiHRSIWiRKSSsTSwjKFiBxiuMRvghuOaAQPhjc7773ZHeaMgcBXKpWinuct+b6fNAzjg6jH43E3kUh8BmSd1NCFXC632m63DxFXiCp5mJgljymlsplM5l5rBTvGfD7vtFqtA87rjuNUg4Jv7hjzomVZD5pThUJhhM5Hpmlu9JpEhPgK2EZzqk2CinkWwFrvU4IiGp5zjjLOuK4rZpikW00X+iEamXFa84rEIyK68AcOw71qXm6sE3O68BuWy+VBNFOhUOhR8yqdThc5hHn/pi72YqPR2KFWTKVSz5qTG306ZZlhH/OWJgQ5R1jHLhqJyyDX/QFc1x1rNpsnkKPEHTFEswkM18QNe94DV2zbrkiDrlEO8rHXGKIZ0jeW/sQoL1Ln5mXqZ+x7jdXd/jCKqN+HeZ5XXNDQ/pdRGjJ3EuP7F7DXlWT5Lg6cAAAAAElFTkSuQmCC" alt="">
                  </i>
                </div>
              </div>
            </div>
            <div class="table-header">
              <span>{{ leftHeader }}</span> <span>{{ rightHeader }}</span>
            </div>
            <div class="table-body">
              <res-list
                :active-tab-id="activeTabId"
                :select-type="selectType"
                :project-id="projectId"
                :sort-order="sortOrder"
                :sort-by="sortBy"
                :extra-params="extraParams"
                :res-list="resourceList"
                @select="onResListSelect">
              </res-list>
              <div class="table-pagination" v-if="totalCount > pageSize">
                <ss-pagination
                  :total="totalCount"
                  :current="pageIndex"
                  :pageSize="pageSize"
                  :showQuickJumper="true"
                  @change="onPaginationChange">
                </ss-pagination>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-footer">
          <button class="cancel-btn" @click="$emit('cancel')">取消</button>
          <button class="confirm-btn" :class="{'unavailable': !hasSelect}" @click="onConfirm">确定</button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>

import Axios from 'axios';
import SsSelect from '../select';
import SsOption from '../select/option';
import Pagination from '../pagination';
import Loading from '../loading';

import resList from './resList.vue';

export default {
  name: 'SsResourceSelect',
  components: {
    SsSelect,
    SsOption,
    Pagination,
    Loading,
    resList,
  },
  props: {
    /**
     * 0: 知识商品, 1: 店铺首页, 2: 助学工具, 3: 微页面, 5: 营销活动页,
     */
    'tab-type': {
      type: Number,
      default: 1,
    },
    /**
     * 1：表示单选，2：表示多选；
     */
    'select-type': {
      type: Number,
      default: 1,
    },
    /**
     * 项目id 1:页面统计， 2:训练营
     */
    'project-id': {
      type: Number,
      default: 1,
    },
    /**
     * 额外参数
     */
    'extra-params': {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      topicName: '',
      dialogLoading: false,
      mainLoading: false,

      dynamicTabsList: [], // 请求获取 tab 列表
      activeTabId: 1,

      filterType: '',
      filterText: '',

      totalCount: 0,
      pageIndex: 1,
      pageSize: 10,

      sortOrder: 0,
      sortBy: 0,

      resourceList: [], // 请求获取资源列表

      selectedArr: [], // 选择的资源数组

      moveLeft: 0, // tab位置
      showLeft: false,
      showRight: false,
      isOnce: true,
      isLoadTab: false
    };
  },
  computed: {
    skipBtnText() {
      const tab = this.dynamicTabsList.find(item => item.id === this.activeTabId);
      if (tab) {
        return tab.skip_btn_text;
      }
      return '新建';
    },
    showSelect() {
      const tab = this.dynamicTabsList.find(item => item.id === this.activeTabId);
      if (tab) {
        return tab.show_select === 1;
      }
      return false;
    },
    selectOptions() {
      const tab = this.dynamicTabsList.find(item => item.id === this.activeTabId);
      /**
       * 有选项数组，且数量大于0
       */
      if (tab && tab.select_options.length > 0) {
        this.filterType = tab.select_options[0].value;
        return tab.select_options;
      }
      return [];
    },
    showSearch() {
      const tab = this.dynamicTabsList.find(item => item.id === this.activeTabId);
      if (tab) {
        return tab.show_search === 1;
      }
      return false;
    },
    leftHeader() {
      const type = {
        1: '图文名称',
        2: '音频名称',
        3: '视频名称',
        4: '直播名称',
        5: '会员名称',
        6: '专栏名称',
        7: '社群名称',
        8: '大专栏名称',
        9: '活动名称',
        10: '答主名称',
        11: '作业本名称',
        12: '考试名称',
        13: '表单名称',
        14: '测试名称',
        15: '作业本下的作业列表名称',
        16: '打卡名称',
        17: '首页名称',
        18: '微页面名称',
        19: '商品分组名称',
        20: '电子书名称',
        21: '优惠券名称',
        22: '分销商品名称',
        23: '限时折扣名称',
        24: '秒杀名称',
        25: '训练营营期名称',
        28: '实物商品名称',
        45: 'AI互动课名称'
      };
      return type[this.activeTabId];
    },
    rightHeader() {
      if ([1, 2, 3, 4, 5, 6, 8, 20, 25, 28,45].indexOf(this.activeTabId) > -1) {
        return '状态';
      }
      else if (this.activeTabId === 16) {
        return '打卡类型';
      }
      else if (this.activeTabId === 18 ||this.activeTabId === 19 || this.activeTabId === 17) {
        return '创建时间';
      }
      else if (this.activeTabId === 21 || this.activeTabId === 23 || this.activeTabId === 24) {
        return '有效时间';
      }
      else {
        return '';
      }
    },
    /**
     * 是否已经选择资源
     */
    hasSelect() {
      return this.selectedArr.length > 0;
    },
  },
  watch: {
      isLoadTab (val) {
        if(this.isOnce) {
          this.isOnce = false;
          // 判断是否栏目溢出
          setTimeout(()=>{
            this.$nextTick(()=> {
            let domwidth= this.$refs.tabColumn.getBoundingClientRect().width;
            console.log(domwidth)
            if(domwidth > 770) {
              this.showRight = true;
            }
            })
          },150)
        }
      }
  },
  created() {
    this.getResTabs();
  },
  methods: {
    /**
     * 获取资源类型列表
     */
    getResTabs() {
      const params = {
        id: this.tabType,
        project_id: this.projectId
      };
      this.dialogLoading = true;
      Axios.post('/king_select/get_popup_tabs', params).then(
        res => {
          this.dialogLoading = false;
          if (res.data.code === 0) {
            this.topicName = res.data.data.topic_name || '资源';
            this.dynamicTabsList = res.data.data.list;
            this.activeTabId = this.dynamicTabsList.length > 0 ? this.dynamicTabsList[0].id : null;
            this.isLoadTab = true;
            if (this.activeTabId) {
              this.getResourceList();
            }
          }
          else {
            console.error(res);
          }
        }
      ).catch(
        err => {
          this.dialogLoading = false;
          console.error(err);
        }
      );
    },
    /**
     * 切换tab
     */
    switchTab(item) {
      // if (this.mainLoading) {
      //   this.$message.warning('正在加载数据，请稍后再试');
      //   return false;
      // }
      this.pageIndex = 1;
      this.sortOrder = 'sort_order' in item ? item.sort_order : 0;
      this.sortBy = 'sort_by' in item ? item.sort_by : 0;
      if (this.activeTabId === item.id) {
        this.refreshPopup();
      }
      else {
        this.activeTabId = item.id;
        this.filterType = '';
        this.filterText = '';
        this.getResourceList();
      }
    },
    /**
     * 跳转新页面
     */
    skip() {
      if (this.projectId === 2 && _YS_report) { // 训练营，埋点，判断来源
        _YS_report.push([{et:1,actn:'任务选择_步骤3'}])
      }
      const tab = this.dynamicTabsList.find(item => item.id === this.activeTabId);
      if (tab.skip_url) {
        const newWin = window.open();
        newWin.location = tab.skip_url;
      }
      else {
        console.error('找不到跳转链接');
      }
    },
    /**
     * 监听input输入事件
     */
    onInputEnter(e) {
      this.pageIndex = 1;
      this.getResourceList();
    },
    /**
     * 刷新当前tab对应的数据
     */
    refreshPopup() {
      this.pageIndex = 1;
      this.filterType = '';
      this.filterText = '';
      this.getResourceList();
    },
    /**
     * 选择器筛选
     */
    onfilterTypeChange(value) {
      this.pageIndex = 1;
      this.filterType = value;
      this.getResourceList();
    },
    /**
     * 获取资源列表
     */
    getResourceList() {
      const appId = document.getElementById('xet_app_id') ? document.getElementById('xet_app_id').value : 'apppcHqlTPT3482';
      let params = {
        app_id: appId,
        res_type: this.activeTabId,
        sub_res_id: '',
        filter_type: this.filterType,
        filter_text: this.filterText,
        page_index: this.pageIndex,
        page_size: this.pageSize,
        sences_id: this.projectId,
        sort_order: this.sortOrder,
        sort_by: this.sortBy,
      };
      const extra = this.activeTabId in this.extraParams ? this.extraParams[this.activeTabId] : '';
      if (extra) {
        Object.assign(params, extra);
      }

      // 获取资源列表额外参数
      if (this.extraParams.hasOwnProperty('is_public')) {
        Object.assign(params, {is_public: Number(this.extraParams['is_public'])})
      }

      //总分校逻辑,电子书、直播添加是否分发标识
      if (this.extraParams.hasOwnProperty('is_distribute')) {
        Object.assign(params, {is_distribute: Number(this.extraParams['is_distribute'])})
      }


      this.mainLoading = true;
      this.resourceList = [];
      Axios.post('/king_select/popup_resource_list', params).then(
        res => {
          this.mainLoading = false;
          if (res.data.code === 0) {
            this.totalCount = res.data.data.total;
            this.resourceList = this.handleTableList(res.data.data.list);
          }
          else {
            console.error(res);
            this.$message.warning('请求列表失败，请稍后再试');
          }
        }
      ).catch(
        err => {
          this.mainLoading = false;
          console.error(err);
        }
      );
    },
    /**
     * 返回处理过的资源列表数据
     */
    handleTableList(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return [];
      }
      let currentArr = [];
      data.forEach(item => {
        // 在后台的字段基础上再添加两个自定义字段
        let target = {
          res_type: this.activeTabId,
          is_selected: false,
        };
        Object.assign(target, item);
        currentArr.push(target);
      });
      return currentArr;
    },
    /**
     * 单选列表选中某个选项
     */
    onResListSelect(arr) {
      this.selectedArr = arr;
    },
    /**
     * 改变分页器
     */
    onPaginationChange(index) {
      this.pageIndex = index;
      this.getResourceList();
    },
    /**
     * 点击确定 确定所选的资源
     */
    onConfirm() {
      if (this.hasSelect) {
        this.$emit('select', this.selectedArr);
      }
    },
    /**
     * preChoose 选择上一页
     */
    preChoose () {
      let dom = this.$refs.tabColumn;
      let superior = this.$refs.tabContent;
      let superiorLeft = superior.getBoundingClientRect().left;
      let domLeft = dom.getBoundingClientRect().left;
      let domWidth = dom.getBoundingClientRect().width;
      console.log(superiorLeft,domLeft);
      if(domLeft < superiorLeft && (superiorLeft - domLeft < domWidth/2)) {
        this.moveLeft =  0
        this.showRight = true;
        this.showLeft = false;
      } else if (domLeft < superiorLeft && (superiorLeft - domLeft > domWidth/2)) {
        this.moveLeft = this.moveLeft + (superiorLeft - domLeft)/2;
        this.showRight = true;
      }
    },
    /**
     * nextChoose 选择下一页
     */
    nextChoose () {
      let dom = this.$refs.tabColumn;
      let superior = this.$refs.tabContent;
      let superiorRight = superior.getBoundingClientRect().right;
      let domRight = dom.getBoundingClientRect().right + 45;
      let domWidth = dom.getBoundingClientRect().width;
      if(domRight > superiorRight && (domRight - superiorRight < domWidth/2)) {
        this.moveLeft = this.moveLeft - (domRight - superiorRight);
        this.showLeft = true;
        this.showRight = false;
      } else if (domRight > superiorRight && (domRight - superiorRight > domWidth/2)) {
        this.moveLeft = this.moveLeft - (domRight - superiorRight)/2;
        this.showLeft = true;
      }
    }
  }
}
</script>


