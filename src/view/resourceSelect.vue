<style lang="scss" scoped>
.ss-select {
  width: 336px;
}
.select-btn {
  height: 36px;
  line-height: 36px;
  margin: 16px 0 0 0;
  padding: 0 10px;
  text-align: center;
  border-radius: 2px;
  border: 1px dashed #2A75ED;
  color: #2A75ED;
  background: #ffffff;
  cursor: pointer;
}
</style>

<template>
  <div class="container">

    <ss-select
      class="ss-select"
      placeholder="选择类型"
      v-model="selectType">
      <ss-option 
        :value="item.value" 
        :label="item.label" 
        v-for="item in selectTypeArr" 
        :key="item.value">
      </ss-option>
    </ss-select>

    <ss-select
      class="ss-select"
      placeholder="选择页面"
      v-model="pageType"
      @change="onPageTypeChange">
      <ss-option 
        :value="item.value" 
        :label="item.label" 
        v-for="item in pageTypeArr" 
        :key="item.value">
      </ss-option>
    </ss-select>

    <ss-select
      class="ss-select"
      placeholder="选择项目"
      v-model="projectType">
      <ss-option 
        :value="item.value" 
        :label="item.label" 
        v-for="item in projectTypeArr" 
        :key="item.value">
      </ss-option>
    </ss-select>

    <!-- 显示选择按钮 -->
    <div v-if="selectBtnText !== ''">
      <button class="select-btn" @click="isShowPopup=true">{{selectBtnText}}</button>
    </div>

    <!-- 选择统计页面弹窗 -->
    <ss-resource-select
      v-if="isShowPopup"
      :tab-type="pageType"
      :select-type="selectType"
      :project-id="projectType"
      :extra-params="extraParams"
      @cancel="isShowPopup = false"
      @select="onSelectResource">
    </ss-resource-select>
  </div>
</template>

<script>

import SsSelect from '@/components/select/index.vue';
import SsOption from '@/components/option';
import SsResourceSelect from '@/components/resourceSelect/index.vue';

export default {
  name: 'resourceSelect',
  components: {
    SsSelect, SsOption, SsResourceSelect
  },
  data() {
    return {
      isShowPopup: false,

      selectType: 2,
      selectTypeArr: [
        {value: 1, label: '单选'},
        {value: 2, label: '多选'}
      ],

      pageType: 2, // 大类资源类型
      pageTypeArr: [
        {value: -1, label: "选择页面"},
        {value: 0, label: "知识商品"},
        {value: 2, label: "助学工具"},
        {value: 3, label: "微页面"},
        {value: 1, label: "店铺首页"},
        {value: 4, label: "我的已购页"},
        {value: 5, label: "营销活动页"},
        {value: 8, label: "专栏、会员、训练营"},
        {value: 9, label: "大专栏、会员"},
      ],

      projectType: 2, 
      projectTypeArr: [
        {value: 1, label: "页面统计"},
        {value: 2, label: "训练营"},
      ],

      /**
       * 额外的参数，直接透传给后台接口使用
       */
      extraParams: {
        // 16：打卡
        16: {
          filter_ids: [],
          filter_condition_first: '',
          filter_condition_second: '',
          filter_condition_third: '',
          limitation_factor: '',
          exclude_ids: [],
        }
      }
    }
  },
  computed: {
    selectBtnText() {
      switch (this.pageType) {
        case 0:
          return '+ 选择知识商品';
          break;
        case 1:
          return '+ 选择店铺首页';
          break;
        case 2:
          return '+ 选择助学工具';
          break;
        case 3:
          return '+ 选择微页面';
          break;
        case 5:
          return '+ 选择营销活动页';
          break;
        case 8:
          return '+ 专栏、会员、训练营';
          break;
        case 9:
          return '+ 大专栏、会员';
          break;
        default:
          return '';
          break;
      }
    },
  },
  methods: {
    onPageTypeChange(value) {
      console.log('value = ' + value);
    },
    onSelectResource(item) {
      this.isShowPopup = false;
      console.log('onSelectResource', item);
    },
  }
}
</script>


