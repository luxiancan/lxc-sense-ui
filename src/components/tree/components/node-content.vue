<template>
  <!-- 默认显示的内容 -->
  <div
    class="ss-tree-node-custom"
    @mouseover="customNodeMouseover"
    @mouseout="customNodeMouseout">
    <!-- 节点内容 -->
    <slot>
      <div class="ss-tree-node-custom-content">
        <i v-if="type === 'node'" class="sense-icon_file ss-tree-node-custom-icon"></i>
        <div class="ss-tree-node-custom-label" :title="filterTitle(node.label)">
          <ss-name-replacer :name="node.label" type='1' :id="node.label"></ss-name-replacer>
        </div>
      </div>
    </slot>

    <!-- 操作栏 -->
    <ul
      v-if="tools.length > 0"
      v-show="isShowTools"
      class="ss-tree-node-custom-tools">
      <!-- 添加子节点操作 -->
      <li
        class="ss-tools-item"
        v-for="item in tools"
        :key="item.id"
        v-show="!(type === 'leaf' && !item.requireToLeaf)">

        <!-- 图标 -->
        <!-- <popover
          v-if="item.hoverOption && item.hoverOption.length > 0"
          trigger="hover"
          @show="popoverShow"
          @after-leave="popoverHide"> -->
          <button
            slot="reference"
            class="ss-tools-item-icon"
            :style="{background: `url(${item.icon})`}"
            @mouseover="operationMouseOver($event, item.hoverIcon, item)"
            @mouseout="operationMouseOut($event, item.icon, item)"
            @click.stop="operationClick(item)">
          </button>
          <span class="ss-tools-item-arrowOuter">
          </span>
          <span class="ss-tools-item-arrowInner">
          </span>
          <ul class="ss-tools-item-options">
            <li
              class="ss-tools-item-options-item"
              v-for="option in item.hoverOption"
              v-show="checkIsShowRootOption(option.requireToRoot)"
              :key="option.id"
              @click.stop="optionClick(option, item)">
              {{option.label}}
            </li>
          </ul>
        <!-- </popover> -->
        <!-- <ul class="ss-tools-item-options">
          <li
            class="ss-tools-item-options-item"
            v-for="option in item.hoverOption"
            v-show="checkIsShowRootOption(option.requireToRoot)"
            :key="option.id"
            @click.stop="optionClick(option, item)">
            {{option.label}}
          </li>
        </ul> -->
        <!-- <button
          v-else
          class="ss-tools-item-icon"
          :style="{background: `url(${item.icon})`}"
          @mouseover="operationMouseOver($event, item.hoverIcon, item)"
          @mouseout="operationMouseOut($event, item.icon, item)"
          @click.stop="operationClick(item)">
        </button> -->
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * @description 树节点内容
 */
import Popover from '../../popover/index.vue'
import SsNameReplacer from '../../nameReplacer/index'
export default {
  name: 'tree-node-content',
  components: {
    Popover,
    SsNameReplacer
  },
  props: {
    /**
     * 节点类型
     * 叶子结点
     * 普通节点
     */
    type: {
      type: String,
      default: 'node'
    },
    /**
     * 节点数据
     */
    node: {
      type: Object,
      default () {
        return {}
      }
    },
    /**
     * 控制操作栏的图标显示
     */
    tools: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * 是否展示复选框
     */
    showCheckbox: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      currClient: {
        x: '',
        y: ''
      },
      currentTool: {},
      isShowTools: false,
      hasPopover: false,
      hasHoverItem: false
    }
  },
  mounted () {
    // console.log(this.node)
  },
  methods: {
    /**
     * 操作图标的 mouseover 事件
     */
    operationMouseOver (event, hoverIcon, tool) {
      event.currentTarget.style.background = `url(${hoverIcon})`
    },
    /**
     * 操作图标 mouseout 事件
     */
    operationMouseOut (event, icon) {
      event.currentTarget.style.background = `url(${icon})`
    },
    /**
     * 下拉选项 点击事件
     */
    optionClick (hoverOption, operationItem) {
      this.$emit('option-click', this.node.data, hoverOption, operationItem, this.node)
    },
    /**
     * 操作项点击事件
     */
    operationClick (operationItem) {
      this.$emit('tool-click',this.node.data, operationItem, this.node)
    },
    checkIsShowRootOption (requireToRoot) {
      if (requireToRoot !== false) {
        return true
      } else {
        if (this.node.parent.parent === null) {
          return false
        }
      }
      return true
    },
    customNodeMouseover () {
      this.isShowTools = true
      this.hasHoverItem = true
    },
    customNodeMouseout () {
      if (!this.hasPopover) {
        this.isShowTools = false
      }
      this.hasHoverItem = false
    },
    popoverShow () {
      this.isShowTools = true
      this.hasPopover = true
    },
    popoverHide () {
      if (!this.hasHoverItem) {
        this.isShowTools = false
      }
      this.hasPopover = false
    },
    filterTitle (title) {
      let reg = /##.*?##/g;
      let temp = title.match(reg);
      if (temp) {
        return ""
      } else {
        return title
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/base.scss';
.ss-tree-node-custom {
  display: flex;
  align-items: center;
  // min-width: 200px;
  width: 100%;
  padding: 0 5px;

  &-content {
    display: flex;
    align-items: center;
    flex: 1;
    width: 0;

    .ss-tree-node-custom-label {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &-icon {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    font-size: 16px;
    color: $mc;
  }

  &-tools {
    display: none;
    margin: 0;
  }

  .ss-tree-node-custom-tools {
    display: flex;
    align-items: center;
    z-index: 4;
    border-radius: 4px;

    .ss-tools-item {
      position: relative;
      list-style-type: none;
      width: 16px;
      height: 16px;
      margin-left: 8px;
      cursor: pointer;

      &-icon {
        width: 16px;
        height: 16px;
        border-radius: 0;
        border: 0;
        outline: none;
        background-size: 16px 16px;
        background-repeat:no-repeat;
        // margin-left: 8px;
        background: #ddd;
      }
      &-arrowOuter {
        position: absolute;
        top: 6px;
        left: -1px;
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent #eee transparent;
      }
      &-arrowInner {
        position: absolute;
        top: 7px;
        left: -1px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: #fff;
        z-index: 2;
      }

      .ss-tools-item-container {
        display: none;
        position: fixed;
        z-index: 10;
        border-radius: 4px;
        margin: 5px 0 0 -8px;
        background: transparent;
        box-shadow: 0 0 10px #C8C9CC;

        .triangle {
          position: absolute;
          top: -16px;
          left: 7px;
          z-index: 0;
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-bottom: 10px solid #fff;
        }
      }

      &:hover {
        .ss-tools-item-container {
          display: block;
        }
      }
    }
  }
}

.ss-tools-item-options {
    position: relative;
    background: #fff;
    border-radius: 4px;
    margin: 0;
    // overflow: hidden;
    //新加的样式
    list-style: none;
    border: 1px solid #eee;
    width: 100px;
    position: absolute;
    top: 26px;
    left: -42px;
    box-shadow: 0px 0px 12px #ddd;

    padding-left: 0;

    &-item {
      padding: 6px 16px;
      text-align: center;
      min-width: 100px;
      cursor: pointer;

      &:hover {
        background-color: #EDF3FC;
      }
    }
  }
</style>
