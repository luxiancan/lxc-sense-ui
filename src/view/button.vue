<template>
  <div class="container">
    <div class="title">button</div>
    <div class="content">
      <h3 class="type-title">按钮大小</h3>
      <div class="content-item">
          <div class="item">
              <ss-button :loading="true" icon="loading">按钮</ss-button>
              <p class="button-text">默认按钮</p>
          </div>
          <div class="item">
              <ss-button size="big">按钮</ss-button>
              <p class="button-text">大按钮</p>
          </div>
          <div class="item">
              <ss-button size="small">按钮</ss-button>
              <p class="button-text">小按钮</p>
          </div>
      </div>
      <h3 class="type-title">按钮类型</h3>
      <div class="content-item">
          <div class="item">
              <ss-button type="warning">警告按钮</ss-button>
              <p class="button-text">警告按钮</p>
          </div>
          <div class="item" size="medium">
              <ss-button type="plain">朴素按钮</ss-button>
              <p class="button-text">朴素按钮</p>
          </div>
          <div class="item" size="medium">
              <ss-button type="text">文字按钮</ss-button>
              <p class="button-text">文字按钮</p>
          </div>
      </div>
      <h3 class="type-title">禁用状态</h3>
      <div class="content-item">
          <div class="item">
              <ss-button type="warning" disabled>警告按钮</ss-button>
              <p class="button-text">警告按钮</p>
          </div>
          <div class="item" size="medium">
              <ss-button type="plain" disabled>朴素按钮</ss-button>
              <p class="button-text">朴素按钮</p>
          </div>
          <div class="item" size="medium">
              <ss-button type="text" disabled>文字按钮</ss-button>
              <p class="button-text">文字按钮</p>
          </div>
      </div>
      <!-- <ss-button disabled>按钮</ss-button>
      <ss-button type="success" size="small" >按钮</ss-button>
      <ss-button type="error" size="big">按钮</ss-button>
      <ss-button type="warning" size="big">按钮</ss-button>
      <ss-button type="text" size="big" disabled>文字按钮</ss-button>
      <ss-button type="plain">按钮</ss-button>  -->
    </div>
  </div>
</template>

<script>
import SSButton from '@/components/button'

export default {
  components: {
    'ss-button': SSButton
  },
  data() {
    return {}
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
    padding: 0 20px;
  }
  .type-title {
     margin: 30px 0;
     font-size: 30px;
  }
  .content-item {
      display: flex;
      .item {
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 80px;
          text-align: center;
      }
  }
</style>
