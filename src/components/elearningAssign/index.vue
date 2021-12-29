<!--
 * @Description:
 * @Author: Biytes
 * @Date: 2021-06-21 20:54:17
 * @LastEditors: Biytes
 * @LastEditTime: 2021-07-06 10:39:58
 * @FilePath: \sense\src\components\elearningAssign\index.vue
-->

<template>
  <div>
    <!-- 指派课程弹窗 -->
    <el-dialog
      :title="title"
      :visible.sync="assignVisible"
      :before-close="close"
      :close-on-click-modal="false"
      width="640px"
      custom-class="ss-elearning-assign"
    >
      <!-- container -->
      <div class="ss-elearning-assign-wrapper">
        <!-- 选择区域 -->
        <section class="ss-elearning-assign-choose-area">
          <!-- 自建组织 -->
          <div
            v-if="noBranchUser"
            class="ss-elearning-assign-choose-area__empty"
          >
            <div class="ss-elearning-list-empty">
              <div class="ss-elearning-list-empty-wrapper">
                <img src="./images/empty.png" />
                <div class="ss-elearning-list-empty-title">暂无组织用户</div>
              </div>
            </div>
          </div>

          <div class="ss-elearning-assign-choose-area__tree" v-else>
            <ss-tree
              key="tree"
              class="ss-elearning-assign-tree"
              node-key="id"
              :check-strictly="true"
              :props="defaultProps"
              :highlight-current="true"
              lazy
              :load="loadNode"
              @search="search"
              ref="tree"
              treeEmptyText="暂无"
              :search-content.sync="searchContent"
              :search-data="searchData"
              v-loading="treeLoading"
              :checkedList.sync="checkedList"
              :show-search-title="showSearchTitle"
              :show-tree-title="showTreeTitle"
              :default-checked-keys="defaultOrgCheckedKeys"
              :default-expanded-keys="defaultExpandedKeys"
              :show-empty="showEmpty"
              @clear-search-content="search"
              :delete-same-selected-keys-node="false"
              :isSelectReverse="isSelectReverse"
              :isHideRoot="isHideRootCheckBox"
            >
              <div
                class="ss-tree-node-custom-content"
                slot="leaf-node"
                slot-scope="{ node }"
              >
                <div class="ss-elearning-assign-tree-node">
                  <img :src="node.data.image" alt="" />
                </div>
                <div class="ss-tree-node-custom-label">
                  <!-- 微信通讯录，用第三方组件 -->
                  <!-- 因为这里的插槽只覆盖user类型的 -->
                  <ss-name-replacer
                    :name="node.label"
                    :id="node.label"
                    type="0"
                  />
                </div>
              </div>
            </ss-tree>
          </div>
        </section>

        <!-- 选中列表 -->
        <section class="ss-elearning-assign-checked-list">
          <!-- 已经选择的员工 -->
          <div
            class="ss-elearning-assign-checked-list__header"
            v-loading="selectedListLoading"
          >
            <div class="ss-elearning-assign-checked-list__total">
              <span>已选 ({{ checkedList.length }})</span>

              <span
                @click="clearCheckedList"
                class="clear-button"
                v-if="isShowClear"
              >
                清空
              </span>
              <!-- 占位符 -->
              <span v-else />
            </div>
            <template v-if="checkedList.length">
              <selected-item
                v-if="assignVisible"
                :showDelete="showDelete"
                @delete="deleteSelectedItem"
                ref="selectedItem"
                :list="checkedList"
              />
            </template>
            <div class="ss-elearning-list-empty checked" v-else>
              <div class="ss-elearning-list-empty-content">
                <div class="ss-elearning-list-empty-tips">{{ emptyText }}</div>
              </div>
            </div>
          </div>

          <span slot="footer" class="ss-elearning-assign-checked-list__footer">
            <ss-button type="plain" @click="close" size="medium">取 消</ss-button>

            <ss-button
              :disabled="disabled"
              :loading="sureLoading"
              type="primary"
              @click.prevent="confirm"
              size="medium"
            >
              确 定
            </ss-button>
          </span>
        </section>
      </div>
    </el-dialog>
  </div>
</template>
<script>
/* eslint-disable curly */
/* eslint-disable no-bitwise */
/* eslint-disable no-console */
/* eslint-disable consistent-return */

/**
 * @description 组织导入
 */
import ssButton from '@/components/button';
import ssTree from '@/components/tree';
import selectedItem from './selected-item';
import { getOrgTree, searchOrg } from './apis';

export default {
  name: 'elearningAssign',
  components: {
    ssTree,
    ssButton,
    selectedItem,
  },
  props: {
    // 展示的类型
    selectiveType: {
      type: String,
      default: 'all',
      validator: value => ['all', 'group', 'user'].includes(value)
    },

    // 弹窗显示
    assignVisible: {
      type: Boolean,
      default: false,
    },

    // 确定的loading
    sureLoading: {
      type: Boolean,
      default: false,
    },

    // 是否全部禁用选择
    disabled: {
      type: Boolean,
      default: false,
    },

    // 可将 Tree 的节点设置为禁用状态 true禁用
    checkboxDisabled: {
      type: Boolean,
      default: false,
    },

    // 右侧删除icon的展示 false 不展示
    showDelete: {
      type: Boolean,
      default: true,
    },

    title: {
      type: String,
      default: '指派设置',
    },

    emptyText: {
      type: String,
      default: '暂无数据',
    },

    // 初始化数据回填自建组织
    initCheckedData: {
      type: Array,
      default: () => [],
    },

    // 是否展示清除按钮
    isShowClear: {
      type: Boolean,
      default: true,
    },

    // 是否禁用默认选中的
    isDisabledCheckedList: {
      type: Boolean,
      default: false,
    },

    // 是否选中，在顶部添加
    isSelectReverse: {
      type: Boolean,
      default: false,
    },

    // 是否隐藏根节点的checkbox
    isHideRootCheckBox: {
      type: Boolean,
      default: false
    },

    // 处理组织架构数据
    processTreeData: {
      type: Function,
      default: data => data
    },

    // 处理搜索结果的数据
    processSearchData: {
      type: Function,
      default: data => data
    },

    // 搜索配置
    searchApi: {
      type: String,
      required: true
    },

    // 搜索的额外参数
    searchExtraParams: {
      type: Object,
      default: () => {}
    },

    // 获取组织架构的api
    getApi: {
      type: String,
      required: true
    },

    // 获取组织架构的额外参数
    getExtraParams: {
      type: Object,
      default: () => {}
    },

    // 保留操作过的数据
    retainOperatedData: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      totalList: [],
      selectedTotal: 0,

      defaultProps: {
        label: 'name',
        children: 'children',
        isLeaf(data) {
          return !!data.image;
        },
        leafImage: 'image',
      },

      type: '',

      treeLoading: true,
      checkedList: [], // 自建组织已选列表
      searchContent: '',
      searchData: [],
      treeData: [],
      treeType: 'default',
      selectedListLoading: false,
      showSearchTitle: false,
      showTreeTitle: false,
      defaultExpandedKeys: [],
      showEmpty: false,
      noBranchUser: false, // 如果自建组织没有分部或者用户 展示导入按钮
      defaultOrgCheckedKeys: [],

      isFirstEnter: true // 是否第一次进入组件
    };
  },

  watch: {
    // 监听回填自建组织数据进行一些操作
    initCheckedData(val) {
      this.checkedList = val;
      if (val.length > 0) this.defaultOrgCheckedKeys = val.map(item => item.id);
    },

    // 是否展示弹窗
    assignVisible(val) {
      // 保留原有的数据 而且不是第一次进来，则不重新赋值
      if (this.retainOperatedData && !this.isFirstEnter) return

      if (val) this.checkedList = this.initCheckedData;
      if (this.checkedList > 0) this.defaultOrgCheckedKeys = val.map(item => item.id);

      this.isFirstEnter = false
    }
  },
  mounted() {},
  methods: {
    // 自建搜索
    async search() {
      const { tree } = this.$refs;
      this.treeData = [];
      this.searchData = [];
      const searchData = [];
      const treeData = [];
      this.showEmpty = false;

      // 如果有填，才请求
      if (this.searchContent.trim().length) {
        const params = {
          url: this.searchApi,
          keyword: this.searchContent.trim(),
          type: this.selectiveType,
          ...this.searchExtraParams
        }

        this.treeLoading = true;

        try {
          const resData = await searchOrg(params)

          const { code, data } = resData.data

          if (code === 0) {
            const processedData = this.processSearchData(data)

            if (processedData && Array.isArray(processedData)) {
              // 防止特殊逻辑，预处理数据
              // 拿到data.data

              processedData.forEach((item) => {
                // 禁止选择节点
                if (this.checkboxDisabled) item.disabled = true;

                // 是否禁用选中节点
                if (this.isDisabledCheckedList) item = this.checkDisabledItem(item);

                item.type === 'user' ? searchData.push(item) : treeData.push(item);
              });

              this.treeData = [...treeData]

              this.searchData = [...searchData];
            }
          }
        } catch (error) {
          console.log('search error', error)
        } finally {
          this.treeLoading = false;
        }

        this.showSearchTitle = !!this.searchData.length;
        this.showTreeTitle = this.selectiveType === 'group' || !!this.treeData.length; // 当只展示组别的时候，不考虑树的长度，因为，有可能只有根节点
        this.showEmpty = !this.showSearchTitle && !this.showTreeTitle;
        this.treeType = 'search';
      } else {
        this.treeType = 'default';
      }
      if (tree) tree.refreshTree();
    },

    /**
     * 删除右侧已选元素
     */
    deleteSelectedItem(node) {
      const { tree } = this.$refs;
      if (tree) {
        const { treeMain } = tree.getTreeInstance();
        if (treeMain) treeMain.setChecked(node.id, false);
      }
      // 如果左侧tree没有对应id（未加载出来），则直接删除数组中该条记录。
      this.checkedList = this.checkedList.filter(item => item.id !== node.id);

      this.defaultOrgCheckedKeys = this.defaultOrgCheckedKeys.filter(item => item !== node.id);
      // 搜索后刪除右侧学员取消勾选
      this.searchData.forEach((item) => {
        if (item.id === node.id) {
          item.isChecked = false;
        }
      });
    },

    // 加载节点
    async loadNode(node, resolve) {
      const nodeData = node.data;
      let result = [] // 最终处理完后的结果

      // 如果节点为用户，则返回空数组
      if (nodeData.type === 'user') return resolve(result);

      // 如果是根节点，则重新初始化树
      if (node.level === 0) {
        const objType = {
          default: () => {
            this.initMainNode(node, resolve);
          },
          search: () => {
            this.initSearchTreeNode(node, resolve);
          },
        };

        objType[this.treeType] && objType[this.treeType]();
      } else {
        const params = {
          url: this.getApi,
          fetch_user: this.selectiveType === 'group' ? 0 : 1, // 如果为group，fetch_user则为0, 就不获取user
          root_id: node.key,
          ...this.getExtraParams
        };

        try {
          const resData = await getOrgTree(params);

          const { code, data } = resData.data

          if (code === 0) {
            // 防止特殊逻辑，预处理数据
            // 拿到data.data
            const processedData = this.processTreeData(data)

            // 如果节点的level 是 1，而且没有子节点， 则展示没有用户
            if (node.level === 1) if (processedData.children.length === 0 && this.selectiveType !== 'group') this.noBranchUser = true;

            // 禁止选择节点
            if (this.checkboxDisabled) {
              processedData.children.forEach((item) => {
                item.disabled = true;
              });
            }

            // 判断当前列表是否需要禁用
            if (this.isDisabledCheckedList) data.children.forEach(item => this.checkDisabledItem(item));

            result = data.children
          }
        } catch (error) {
          console.log('after loadNode', error)
        } finally {
          resolve(result)
        }
      }
    },

    // 初始化主节点
    async initMainNode(node, resolve) {
      this.treeLoading = true;
      const params = {
        url: this.getApi,
        fetch_user: this.selectiveType === 'group' ? 0 : 1,
        ...this.getExtraParams
      };

      // 最后返回的结果
      let result = []
      this.showSearchTitle = false;
      this.showTreeTitle = false;

      try {
        const resData = await getOrgTree(params)

        const { code, data } = resData.data

        if (code === 0) {
          // 防止特殊逻辑，预处理数据
          // 拿到data.data
          const processedData = this.processTreeData(data)

          //  初始化函数默认展开根节点
          this.defaultExpandedKeys = [processedData.id];

          // 禁止选择节点
          if (this.checkboxDisabled) processedData.disabled = true;

          result = [processedData]
        }
      } catch (error) {
        console.log('after initMainNode', error)
      } finally {
        this.treeLoading = false;

        console.log('finally result', result)
        resolve(result)
      }
    },

    initSearchTreeNode(node, resolve) {
      resolve(this.treeData);
    },

    //  关闭弹窗
    close() {
      this.$emit('close');
    },

    // 确定
    confirm() {
      this.$emit('confirm', this.checkedList);
    },

    // 清除
    clearCheckedList() {
      for (const item of this.checkedList) {
        this.$nextTick(() => this.deleteSelectedItem(item));
      }
    },

    // 判断当前节点是否禁用
    isSuperManage(node) {
      return Boolean(~node.role_name_list.indexOf('高级管理员'));
    },

    // 禁用列表
    checkDisabledItem(item) {
      if (!this.isDisabledCheckedList) return item;

      if (this.checkedList.some(checkedItem => checkedItem.id === item.id)) item.disabled = true;

      return item;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/packages/elearningAssign.scss';
</style>

