<template>
  <div class="ss-simple-body" :class="[
      `ss-simple__${currentStatus}`,
      currentProcessLast && `ss-simple__last-process`
    ]">
    <div class="ss-simple-content" >
      <span class="ss-simple-title">
        {{ title }}
      </span>
    </div>
  </div>
</template>

<script>
/**
 * @description 简单的步骤条
 */

import Step from './index';

export default {
  name: 'SsSimpleStep',
  extends: Step,
  computed: {
    currentProcessLast() {
      const stepIndex = this.$parent.steps.indexOf(this);

      // 当前操作到最后一步
      return (stepIndex === this.$parent.steps.length - 1) && this.currentStatus === 'process';
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/common/var.scss';;
  .ss-simple-body{
    height: 48px;
    flex: 1;
    align-items: center;
    text-align: center;
    cursor: pointer;
    .ss-simple-content{
      width: 100%;
      height: 100%;
      background-color: $--steps-bg-default;
    }
    .ss-simple-title{
      font-size: 14px;
      line-height: 48px;
      color: $--steps-title-fc;
    }
  }
  .ss-simple__process{
    .ss-simple-content{
      background-color: $--steps-process-bg;
      position: relative;
      &:after{
        content: '';
        display: inline-block;
        position: absolute;
        right: -48px;
        border-top: 24px solid transparent;
        border-right: 24px solid transparent;
        border-bottom: 24px solid transparent;
        border-left: 24px solid $--steps-process-bg;
      }
    }
    .ss-simple-title {
      color: #fff;
    }
  }
  .ss-simple__last-process{
    .ss-simple-content{
      &:before{
        content: '';
        display: inline-block;
        position: absolute;
        left: 0px;
        border-top: 24px solid transparent;
        border-right: 24px solid transparent;
        border-left: 24px solid $--steps-bg-default;
        border-bottom: 24px solid transparent;
      }
      &:after{
        content: '';
        display: none;
      }
    }
  }
</style>
