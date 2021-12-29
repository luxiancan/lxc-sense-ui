<template>
  <div class="container">
    <div class="title">radio</div>
    <div class="content">
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-radio v-model="radio1" label="1" @change="handleChange">备选</ss-radio>
          <ss-radio v-model="radio1" label="2" @change="handleChange">未选中</ss-radio>
          <ss-radio v-model="radio2" label="3" disabled>选中不可用</ss-radio>
          <ss-radio v-model="radio1" label="4" disabled>未选中不可用</ss-radio>
        </div>
        <div class="item-title">单选框组</div>
        <div class="item-sense">
          <ss-radio-group v-model="radio3" @change="handleChange">
            <ss-radio :label="5">备选项5</ss-radio>
            <ss-radio :label="6">备选项6</ss-radio>
            <ss-radio :label="7">备选项7</ss-radio>
          </ss-radio-group>
        </div>

        <div class="item-title">纵向排列</div>
        <div class="tip">默认横向，纵向添加属性 direction="vertical" </div>
        <div class="item-sense">
          <ss-radio v-model="radio1" label="8" direction="vertical">备选8</ss-radio>
          <ss-radio v-model="radio1" label="9" direction="vertical">备选9</ss-radio>
          <ss-radio v-model="radio1" label="10" direction="vertical">备选10</ss-radio>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SsRadio from '@/components/radio'
import SsRadioGroup from '@/components/radio/radioGroup'

export default {
  components: {
    SsRadio,
    SsRadioGroup
  },
  data() {
    return {
      radio1: '1',
      radio2: '3',
      radio3:  5,
    }
  },
  methods: {
    handleChange(e){
      console.log('radio change: ', e)
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
      margin-top: 20px;
    }
  }
  .tip{
    margin: 5px 0;
  }
</style>
