<template>
  <div class="ss-tree-custom" ref="ssTree">
    <!-- 标题 -->
    <h1 class="ss-tree-custom-title" v-if="title">{{title}}</h1>

    <!-- 搜索栏 -->
      <ss-input
        class="ss-tree__search-input"
        placeholder="请输入搜索内容"
        @enter="search"
        v-model="searchValue">

        <!-- 2021年6月21日调整 取消清除按钮 -->
        <div
          v-if="false && searchValue"
          class="ss-tree__serach-icon"
          slot="suffix"
          @click="searchClear"
        >
          <i class="sense-icon-delete__withborder" />
        </div>

        <div class="ss-tree__serach-icon" slot="suffix" v-else @click="search">
          <i class="sense-icon-search" />
        </div>

      </ss-input>

      <div class="ss-tree-custom-top">
        <!--　搜索状态下显示　-->
        <template>
          <div
            class="ss-tree-custom-search-title"
            v-if="showSearchTitle">
            {{titleGroup.searchTitle}}
          </div>

          <!-- 搜索的 item -->
          <div
            v-for="(item, index) in searchList" :key="item.id"
            :data="item">
            <div
              class="ss-tree__search-item"
              :key="index"
              @click="searchNodeClick(item)">
              <div class="ss-tree__left">
                <div>
                  <img class="ss-tree__image" :src="item[leafImage]" alt=""/>
                  <span class="ss-tree__name">
                    <ss-name-replacer :name="item[label]" type='0' :id="item[label]"></ss-name-replacer>
                  </span>
                </div>
              </div>
              <template v-if="isHideRoot">
                <div class="ss-tree__right" v-if="showCheckbox && item.id !== '1'">
                   <ss-checkbox  v-model="item.isChecked" @change="(...args) => {handleCheckBox(...args, item)}" :disabled="item.disabled"></ss-checkbox>
                </div>
              </template>
              <template v-else>
                <div class="ss-tree__right" v-if="showCheckbox">
                   <ss-checkbox  v-model="item.isChecked" @change="(...args) => {handleCheckBox(...args, item)}" :disabled="item.disabled"></ss-checkbox>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    <div class="ss-tree-custom-bottom" v-if="!showEmpty">
      <div class="ss-tree-custom-search-title" v-if="showTreeTitle">
          {{titleGroup.treeTitle}}
      </div>
      <!-- 树结构 -->
      <tree-lite
        :class="{'ss-tree-custom-lite': !showTreeTitle}"
        v-if="isLoadTree"
        v-bind="{...$attrs, ...$props}"
        ref="treeMain"
        @check-change="handleCheckChange"
        v-on="$listeners"
        :containerWidth="containerWidth"
        :isHideRoot="isHideRoot">
        <slot
          name="tree-node"
          slot="tree-node"
          slot-scope="{node, data}"
          :node="node"
          :data="data">
        </slot>

        <slot
          name="leaf-node"
          slot="leaf-node"
          slot-scope="{node, data}"
          :node="node"
          :data="data">
        </slot>
      </tree-lite>
    </div>

    <div class="ss-tree-empty" v-else>
      {{treeEmptyText}}
    </div>
  </div>
</template>

<script>
/**
 * @description 树组件入口
 */
import ElTree from './components/tree'
import TreeLite from './components/tree-lite'
import SsInput from '../input/index';
import SsCheckbox from '../checkbox/index.vue'
let removeSameItemProcess= false;
export default {
  name: 'SsTree',
  components: {
    SsInput,
    ElTree,
    TreeLite,
    SsCheckbox
  },
  props: {
    // 组件标题
    title: {
      type: String,
      default: ''
    },
    // 搜索内容返回数据
    searchData: Array,
    //　title组
    titleGroup: {
      type: Object,
      default () {
        return {
          searchTitle: '组织用户',
          treeTitle: '组织分组'
        }
      }
    },
    // 显示树搜索内容title
    showSearchTitle: {
      type: Boolean,
      default: false
    },
    // 显示树的标题
    showTreeTitle: {
      type: Boolean,
      default: false
    },
    // 搜索输入的内容，双向绑定
    searchContent: {
      type: String,
      default: ''
    },
    // 空状态文本
    treeEmptyText: {
      type: String,
      default: '暂无数据'
    },


    showEmpty: {
      type: Boolean,
      default: false
    },

    // 选中元素，包含异步没拿到的。
    checkedList: {
      type: Array,
      default () {
        return []
      }
    },
    // 是否树下面相同节点元素
    deleteSameSelectedKeysNode: {
      type: Boolean,
      default: false
    },
    nodeTools: {
      type: Array,
      default () {
        return []
      }
    },
    searchNodeTools: {
      type: Array,
      default () {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    // 是否选中，在顶部添加
    isSelectReverse: {
        type: Boolean,
        default: false
    },
    isHideRoot: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      searchValue: '',
      searchList: [],
      isLoadTree: true,
      isSearching: false,
      containerWidth: '',
      containerHeight: ''
    }
  },
  provide () {
    return {
      containerWidth: this.containerWidth,
      containerHeight: this.containerHeight
    }
  },
  computed: {
    dataKey() {
      return this.nodeKey || 'id'
    },
    leafImage() {
      const defaultKey = 'image';
      if (this.props) {
        return  this.props.leafImage || defaultKey
      }
      return defaultKey
    },
    label() {
      const defaultKey = 'name';

      if (this.props) {
        return this.props.label || defaultKey
      }
      return defaultKey
    }
  },
  watch: {
    searchValue (newVal) {
      this.$emit('update:searchContent', newVal)
    },
    searchData(newVal) {
      this.searchList = newVal
      if (newVal.length && this.checkedList.length) {
        this.searchList = this.searchList.reduce((acc, curr) => {
          const isIncludeId  = this.checkedList.some(item => curr[this.dataKey] === item[this.dataKey]);

          return acc.concat(Object.assign(curr, {
              isChecked: isIncludeId
          }))
        }, [])

      } else {
        this.searchList = this.searchList.map(item => {
          return Object.assign(item, {isChecked: false})
        })
      }
    }
  },
  mounted () {
      this.containerWidth = this.$refs.ssTree.offsetWidth
      this.containerHeight = this.$refs.ssTree.offsetHeight
  },
  methods: {
    optionClick (hoverOption, operationItem) {
      this.$emit('optionClick', hoverOption, operationItem)
    },
    operationClick (operationItem) {
      this.$emit('operationClick', operationItem)
    },
    nodeClick (data) {
      this.$emit('nodeClick', data)
    },
    enterHit (e) {
      this.$emit('searchEnterHit', e)
    },
    nodeCheckedChange (nodeData, node) {
      this.$emit('nodeCheckedChange', nodeData, node)
    },
    getTreeInstance () {
      return {
        treeMain: this.$refs.treeMain && this.$refs.treeMain.getTreeVm()
      }
    },

    /**
     * 暴露给外部调用，在异步加载子节点的时候有用，比如搜索之后需要重新去触发tree里面的load
     */
    refreshTree() {
      this.isLoadTree = false;

      this.$nextTick().then(() => {
        this.isLoadTree = true;
      })
    },

    handleCheckBox(isChecked, event, item) {
      const { treeMain } = this.getTreeInstance()

      this.$emit('changeSearchCheckbox', item, isChecked);
      treeMain.setChecked(item[this.dataKey], isChecked);
      this.updateSelected(isChecked, item)
    },

    updateSelected (isChecked, item) {
      const { treeMain } = this.getTreeInstance();
      if (isChecked) {
        const isSame = this.checkedList.some((node) => {
          return node[this.dataKey] === item[this.dataKey]
        })

        // 存在重复的id不往里添加
        if (isSame) {
          return
        }

        if(this.isSelectReverse){
          this.checkedList.unshift(item)
          this.$emit('update:checkedList', this.checkedList)
        }else{
          this.$emit('update:checkedList', this.checkedList.concat(item))
        }

      } else {

        const checkedList = this.checkedList.reduce((acc, curr) => {
          if (curr[this.dataKey] !== item[this.dataKey]) {
            return acc.concat(curr)
          }
          return acc;
        }, [])

        this.$emit('update:checkedList', checkedList)

        // 如果需要删除所有节点跟这个相同id的节点，做个递归删除
        if (this.deleteSameSelectedKeysNode && !removeSameItemProcess) {
          removeSameItemProcess = true;
          this.updateSearchList(item, false)
          treeMain.$children.forEach(component => {
            this.removeSelectedSameKey(component.node, item)
          })
        }

      }
    },

    /**
     * 移除相同node-key选中的节点
     */
    removeSelectedSameKey (nodeInstance, params) {
      const {treeMain} = this.getTreeInstance();

      nodeInstance.childNodes.forEach(item => {
        if (item.childNodes.length) {

          this.removeSelectedSameKey(item, params)
        }
        if (item.key === params[this.dataKey] && item.checked === true) {
          item.checked = false
        }
      })
      removeSameItemProcess = false;
    },

    /**
     * 删除一项元素
     */
    removeCheckedItem(item) {
      const checkedList = this.checkedList.reduce((acc, curr) => {
          if (curr[this.dataKey] !== item[this.dataKey]) {
            return acc.concat(curr)
          }
          return acc;
        }, [])
        this.$emit('update:checkedList', checkedList)
    },

    search() {
      this.isSearching = !!this.searchValue
      if (!this.searchValue) {
        this.searchList = [];
      }
      this.$emit('search')
    },

    handleCheckChange(node, isChecked, childrenIsChecked) {
      this.$emit('check-change', node, isChecked, childrenIsChecked);

      this.updateSelected(isChecked, node)
      if (this.searchList) {
        this.updateSearchList(node, isChecked)
      }
    },

    updateSearchList(node, isChecked) {
      this.searchList.map((item) => {
        if (node[this.dataKey] === item[this.dataKey]) {
          item.isChecked = isChecked;
        }
      })
    },
    searchNodeClick (data) {
      this.$emit('search-node-click', data)
    },
    searchClear () {
      this.searchValue = ''
      this.$nextTick().then(() => {
        this.$emit('clear-search-content')
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.ss-tree-custom {
  width: 100%;
  color: #333;
  height: 100%;
  display: flex;
  flex-direction: column;

  /deep/.ss-input-decoration-icon{
    pointer-events: auto;
    width: 36px;
  }
  /deep/.ss-input.ss-input__prefix .ss-input-inner{
    padding-left: 37px;
  }

  &-title {
    font-size: 18px;
    color: #333333;
    padding: 16px 8px 16px 8px;
    margin: 0;
  }

  &-search-title {
    font-size: 16px;
    color: #999999;

    font-size: 14px;
    padding: 8px 0 8px 17px;
  }

  .ss-tree__search-input {
    margin: 0 8px 16px 8px;
    width: calc(100% - 8px);
  }

  .ss-tree-custom-lite {
    margin-top: 14px;
  }

  .ss-tree__search-item{
    display: flex;
    height: 32px;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .ss-tree__left{
    padding-left: 17px;
    flex: 1;
  }
  .ss-tree__right{
    flex: 0 0 20px;
  }
  .ss-tree__image{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .ss-tree__name{
    padding-left: 8px;
 }
 .ss-tree__serach-icon{
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   padding-left: 5px;
   padding-right: 4px;
   font-size: 18px;
   cursor: pointer;
   color: #B2B2B2;

   img{
     width: 18px;
     height: 18px;
     cursor: pointer;
   }
 }
 .ss-tree-empty{
   text-align: center;
   font-size: 14px;
   color: #999;
   padding-top: 8px;
 }
}
</style>
