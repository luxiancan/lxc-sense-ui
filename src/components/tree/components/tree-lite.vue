<!--
 * @Author: your name
 * @Date: 2020-09-08 20:31:49
 * @LastEditTime: 2021-06-22 16:42:36
 * @LastEditors: Biytes
 * @Description: In User Settings Edit
 * @FilePath: \sense\src\components\tree\components\tree-lite.vue
-->
<template>
  <div class="ss-tree-main">
    <ss-tree
      v-bind="{...$attrs, ...$props}"
      ref="tree"
      :empty-text="''"
      v-on="$listeners"
      :isHideRoot="isHideRoot">

      <!-- 默认普通节点 -->
      <tree-node-content
        v-if="!!node.data.children"
        type="node"
        slot-scope="{node, data}"
        @option-click="optionClick"
        @tool-click="operationClick"
        :node.sync="node"
        :tools="nodeTools"
        :show-checkbox="showCheckbox">
        <!-- 如果业务测还需要需要自定义样式，就用插槽 -->
        <slot
          name="tree-node"
          :node="node"
          :data="data">
        </slot>
      </tree-node-content>

      <!-- 默认叶子节点 -->
      <tree-node-content
        v-else
        slot-scope="{node, data}"
        type="leaf"
        @option-click="optionClick"
        @tool-click="operationClick"
        :node="node"
        :tools="nodeTools"
        :show-checkbox="showCheckbox">
        <!-- 默认叶子节点，不显示文件夹图标 -->
        <slot
          name="leaf-node"
          :node="node"
          :data="data">
        </slot>
      </tree-node-content>
    </ss-tree>
  </div>
</template>

<script>
import SsTree from './tree'
import treeNodeContent from './node-content.vue';
export default {
  name: 'TreeLite',
  components: {
    SsTree,
    treeNodeContent
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    propsOption: {
      type: Object,
      default () {
        return {
          children: 'children',
          label: 'name'
        }
      }
    },
    isNodeOperational: {
      type: Boolean,
      default: true
    },
    treeConfig: {
      type: Object,
      default () {
        return {
          emptyImg: '',
          emptyText: '暂无数据'
        }
      }
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    nodeTools: {
      type: Array,
      default () {
        return []
      }
    },
    defaultCheckedKeys: {
      type: Array,
      default () {
        return []
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    containerWidth: {
      type: [Number, String],
      default: ''
    },
    isHideRoot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computEmptyImg () {
      if (typeof this.treeConfig.emptyImg === 'undefined') {
        return require('../../../view/assets/images/tree/img_list_empty.png')
      } else {
        return this.treeConfig.emptyImg
      }
    }
  },
  mounted () {
  },
  methods: {
    /**
     * 树节点点击
     */
    handleNodeClick(data) {
      this.$emit('nodeClick', data)
    },
    /**
     * 节点中操作栏的下拉项点击
     */
    optionClick () {
      this.$parent.$emit('option-click', ...arguments)
    },
    /**
     * 点击操作的图标
     */
    operationClick () {
      this.$parent.$emit('tool-click', ...arguments)
    },
    /**
     * 节点选择点击
     */
    nodeCheckedChange (nodeData, node) {
      this.$emit('nodeCheckedChange', nodeData, node)
    },
    getTreeVm () {
      return this.$refs.tree
    }
  },
}
</script>

<style lang="scss" scoped>
.ss-tree-main {

  &-empty {
    text-align: center;
    margin-top: 18px;

    img {
      width: 110px;
      height: 110px;
    }

    .empty-text {
      margin-top: 20px;
      font-size: 14px;
      color: #B2B2B2;
    }
  }
}
</style>
