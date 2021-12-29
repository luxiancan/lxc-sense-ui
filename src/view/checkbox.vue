<!--
 * @Author: your name
 * @Date: 2020-09-03 10:15:07
 * @LastEditTime: 2020-09-10 21:43:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /sense/src/view/checkbox.vue
-->
<template>
  <div class="container">
    <div class="title">checkbox</div>
    <div class="content">
      <div class="item">
        <div class="item-title">普通状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="check1" @change="handleCheckedChange">未选中</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <ss-checkbox v-model="checked">选中</ss-checkbox>
      </div>
      <div class="item">
        <ss-checkbox v-model="noCheck" disabled>未选中不可点</ss-checkbox>
      </div>
      <div class="item">
        <ss-checkbox v-model="checked" disabled>选中不可点</ss-checkbox>
      </div>
      <div class="item">
        <div class="item-title">全选{{isIndeterminate}}</div>
        <div class="item-sense">
          <div class="item">
            <ss-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</ss-checkbox>
            <ss-checkbox-group v-model="checkedValue" @change="handleCheckedCitiesChange">
              <ss-checkbox v-for="item in checkOption" :label="item" :key="item">
                {{item}}
              </ss-checkbox>
            </ss-checkbox-group>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="item-title">纵向排序</div>
        <div>默认横向，纵向添加属性 direction="vertical" </div>
        <div class="item-sense">
          <div class="item">
            <ss-checkbox-group v-model="checkedValue" @change="handleCheckedCitiesChange">
              <ss-checkbox v-for="item in checkOption" :label="item" :key="item" direction="vertical">
                {{item}}
              </ss-checkbox>
            </ss-checkbox-group>
          </div>
        </div>
      </div>


      <div class="item">
        <div class="item-title">Slot</div>
        <div class="item-sense">
          <ss-checkbox v-model="checked" >
            选中
            <slot><span class="check-disc">默认默认默认默认默认默认</span></slot>
          </ss-checkbox>
        </div>
      </div>

      <div class="item">
        <div class="item-title">Size</div>
        <div class="item-sense">
          <ss-checkbox v-model="checked" border>默认</ss-checkbox>
          <ss-checkbox v-model="checked" size="medium" border>medium</ss-checkbox>
          <ss-checkbox v-model="checked" size="small" border>small</ss-checkbox>
          <ss-checkbox v-model="checked" size="small" border>mini</ss-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsCheckbox from '@/components/checkbox'
import SsCheckboxGroup from '@/components/checkbox/checkbox-group'
export default {
  components: {
    SsCheckbox,
    SsCheckboxGroup
  },
  data() {
    return {
      check1: false,
      checked: true,
      noCheck: false,
      checkAll: false,
      isIndeterminate: true,
      checkedValue: ['选项1'],
      checkOption: ['选项1','选项2','选项3'],
    }
  },
  methods: {
    handleCheckedChange(val){
      console.log('选中状态：',val);
    },
    handleCheckAllChange(val) {
      console.log('全选：',val)
      this.checkedValue = val ? this.checkOption : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log('全选--当前选中：', value)
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkOption.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkOption.length;
    }
  }
}
</script>


<style lang="scss" scoped>
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .item + .item {
      margin: 10px 0 0;
    }
    .item-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
  .check-disc{
    margin-left: 12px;
    color: #999;
  }
</style>
