<template>
  <div>
    <div>基本布局</div>
    <ss-row>
      <ss-col :span="8"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :span="8"><div class="grid-content bg-purple-light"></div></ss-col>
      <ss-col :span="8"><div class="grid-content bg-purple"></div></ss-col>
    </ss-row>
    <div>分栏间隔</div>
    <ss-row :gutter="20">
      <ss-col :span="6"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :span="6"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :span="6"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :span="6"><div class="grid-content bg-purple"></div></ss-col>
    </ss-row>

    <div>混合布局</div>
    <ss-row :gutter="20">
        <ss-col :span="18"><div class="grid-content bg-purple"></div></ss-col>
        <ss-col :span="6"><div class="grid-content bg-purple"></div></ss-col>
    </ss-row>

    <div>分栏偏移</div>
    <ss-row :gutter="20">
      <ss-col :span="6"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></ss-col>
    </ss-row>

    <div>响应式布局</div>
    <ss-row :gutter="10">
      <ss-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></ss-col>
      <ss-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></ss-col>
      <ss-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></ss-col>
    </ss-row>
  </div>
</template>

<script>
import SsCol from '@/components/col/index'
import SsRow from '@/components/row/index'
export default {
    components: {
        SsCol,
        SsRow
    }
}
</script>

<style lang="scss" scoped>
  .ss-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ss-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>