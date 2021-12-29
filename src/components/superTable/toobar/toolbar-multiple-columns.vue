<template>
  <div class="ss-table-toolbar">
    <ss-form ref="form" class="ss-table-toolbar__form" :inline="true" :label-width="filterLabelWidth">
        <div class="ss-table-toolbar__content">
          <div class="ss-table-toolbar__item"
               :style="itemStyles"
               v-for="filterItem of filterItemList"
               :key="filterItem.key">
              <ss-form-item :label="filterItem.title">
                <filter-item
                  :filter-data="filterData"
                  :filter-option="filterItem"
                />
              </ss-form-item>
          </div>
        </div>
        <div class="ss-table-toolbar__button-body" :style="{'marginLeft': filterLabelWidth}">
          <ss-button v-for="(item, index) in toolButtonConfig.btnList"
                     :key="index"
                     :type="item.type || 'primary'"
                    @click="handleButtonClick(item)">
            {{item.text}}
          </ss-button>
        </div>
    </ss-form>
  </div>
</template>

<script>
/**
 * @description 多行筛选布局
 */
import cloneDeep from 'lodash/cloneDeep'
import FilterItem from '../filterItem';
import SsFormItem from '../../form/form-item';
import SsForm from '../../form/form';
import SsButton from '../../button/index';

const TOOLBAR_MULTIPLE_COLUMNS_BUTTONS = {
  toolbarType: 'buttonGroup',
  btnList: [{
    type: 'primary',
    text: '筛选',
    onClickCallback(refreshTable) {
      refreshTable()
    }
  }, {
    type: 'text',
    text: '清空筛选项',
    onClickCallback(refreshTable, resetFilterItem) {
      resetFilterItem()
    }
  }]
}
export default {
  components: {
    FilterItem,
    SsFormItem,
    SsForm,
    SsButton
  },
  props: {
    filterOptions: {
      type: Array,
      default() {
        return []
      }
    },
    filterLabelWidth: String,
  },
  data() {
    return {
      filterData: {}
    }
  },
  computed: {
    initialFilterData() {
      return this.filterItemList.reduce((acc, curr) => {
        if (curr) {
          acc[curr.key] = Object.prototype.hasOwnProperty.call(curr, 'defaultValue') ? curr.defaultValue : ''
        }

        return acc
      }, {})
    },
    itemStyles() {
      const normalNum = Number(this.filterLabelWidth)
      if (isNaN(normalNum)) {
        const width = this.filterLabelWidth.replace('px', '');
        // 248 指的输入框的宽度， 10指的右边距
        return {
          minWidth: `${Number(width) + 248 + 10}px`
        }
      }

      return {
        minWidth: `${Number(this.filterLabelWidth) + 248 + 10}px`
      }
    },
    filterItemList() {
      return this.filterOptions.reduce((acc, option) => {
        if (option.toolbarType === 'buttonGroup') {
          return acc;
        }

        if (option.component && option.component.name === 'ss-input') {
          return acc.concat(option)
        }

        if (option.component && option.component.name === 'ss-select') {
          this.setFomItemSelect(option.component);
          return acc.concat(option)
        }

        if (option.component && option.component.name) {
          return acc.concat(option)
        }

        return acc;
      }, []);
    },
    toolButtonConfig() {
      const buttonGroupObj = this.filterOptions.filter(item => item.type === 'buttonGroup');

      return buttonGroupObj[0] || TOOLBAR_MULTIPLE_COLUMNS_BUTTONS;
    }
  },
  watch: {
    initialFilterData: {
      deep: true,
      handler(val) {
        this.filterData = val
      }
    }
  },
  methods: {
    setFomItemSelect(component) {
      if (component.remote) {
        const { props } = component;
        const events = component.events || {}

        const handler = function (event) {
          const str = event.target.value

          const remoteMethod = props.remoteMethod

          if (typeof remoteMethod !== 'function') {
            return
          }
          !str && remoteMethod()
        };

        events.focus = events.focus ? [...events.focus, handler] : [handler]
        component.events = events
      }
    },
    // setFormItemBoxWidth(component) {
    //   if (component.props && !component.props.size) {
    //     component.props.size = 's';
    //   } else {
    //     component.props = {
    //       size: 's'
    //     }
    //   }
    // },
    handleButtonClick(item) {
      this.$emit('bindClick', item)
    },
    resetFilterItem() {
      this.$set(this, 'filterData', cloneDeep(this.initialFilterData))
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/common/var.scss';
  .ss-table-toolbar__form{
    padding: 20px;
    background-color:$--table-toolbar-bg;
    margin-bottom: 20px;
  }
  .ss-table-toolbar__item{
    display: inline-block;
  }
  .ss-table-toolbar__content{
    display: flex;
    max-width: 1140px;
    flex-wrap: wrap;
  }
  .ss-table-toolbar__item{
    width: 33.3%;

  }
  /*@media screen and (max-width: 1435px) {*/
  /*  .ss-table-toolbar__item {*/
  /*    width: 50%;*/
  /*  }*/
  /*}*/
</style>
