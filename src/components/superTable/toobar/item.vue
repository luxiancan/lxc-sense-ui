<template>
<section class="space-between__item">
  <ss-button @click="handleClick(item)" v-if="item.toolbarType === 'button'" :type="item.type">
    {{item.text}}
  </ss-button>
  <ss-form-item :label="item.title" v-else-if="item.toolbarType === 'search'">
    <ss-input v-model="filterData[item.key]"
              v-bind="item.component ? item.component.props : {}"
              v-on="item.component ? item.component.events : {}"
              :clearable="item.component.clearable">
      <div class="toolbar-space-between-search" slot="suffix" @click="handleClick(item)">
        <i class="sense-icon-search"></i>
      </div>
    </ss-input>
  </ss-form-item>

  <span class="space-between__item-text"
        v-else-if="item.toolbarType === 'text'"
        :style="{color: item.color}">{{item.text}}</span>
  <ss-form-item :label="item.title" v-else>
    <filter-item :filter-option="item"
                 :filter-data="filterData">
    </filter-item>
  </ss-form-item>
</section>
</template>

<script>
/**
 * @description 两端布局内容区域
 */

import FilterItem from '../filterItem'
import FormItem from '../../form/form-item';
import Input from '../../input';
import Button from '../../button';

export default {
  components: {
    FilterItem,
    SsFormItem: FormItem,
    SsInput: Input,
    SsButton: Button
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    filterData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/common/var.scss';
  .space-between__item{
    display: inline-block;
  }
  .toolbar-space-between-search{
    color: $--table-toolbar-icon;
  }
  .space-between__item-text{
    color: $--table-font-color;
  }
</style>
