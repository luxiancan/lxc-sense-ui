<template>
  <div class="container">
    <div class="title">pagination</div>
    <div class="content">
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-pagination :total="88" :current="current1" @change="change"></ss-pagination>
        </div>
        <div class="item-sense">
          <ss-pagination :total="99" :current="current1" @change="change"></ss-pagination>
        </div>
      </div>
      <div class="item">
        <div class="item-title">pageSize为10</div>
        <div class="item-sense">
          <ss-pagination :total="500" :pageSize="10"></ss-pagination>
        </div>
      </div>
      <div class="item">
        <div class="item-title">可以更改pageSize</div>
        <div class="item-sense">
          <ss-pagination
            :total="500"
            showSizeChanger
            @sizeChange="sizeChange"
            @change="handleCurrentChange"
          ></ss-pagination>
        </div>
      </div>
      <div class="item">
        <div class="item-title">可以跳到某页</div>
        <div class="item-sense">
          <ss-pagination :total="500" showQuickJumper @change="change"></ss-pagination>
        </div>
      </div>
    </div>
    <h3 style="margin-top: 30px">small分页器</h3>
     <div class="content">
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-pagination :total="14" :current="current1" @change="change" small></ss-pagination>
        </div>
      </div>
      <div class="item">
        <div class="item-title">pageSize为10</div>
        <div class="item-sense">
          <ss-pagination :total="500" :pageSize="10" small></ss-pagination>
        </div>
      </div>
      <div class="item">
        <div class="item-title">可以更改pageSize</div>
        <div class="item-sense">
          <ss-pagination
            :total="50000"
            :pageSizeOptions="pageSizeO"
            showSizeChanger
            @sizeChange="sizeChange"
            small
          ></ss-pagination>
        </div>
      </div>
      <div class="item">
        <div class="item-title">可以跳到某页</div>
        <div class="item-sense">
          <ss-pagination :total="500" showQuickJumper @change="change" small></ss-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsPagination from '@/components/pagination'

export default {
  components: {
    SsPagination
  },
  data() {
    return {
      current1: 1,
      pageSizeO: [5, 11, 15, 20]
    }
  },
  methods: {
    sizeChange(val) {
      // eslint-disable-next-line
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // eslint-disable-next-line
      console.log(`当前页: ${val}`);
    },
    change() {
    },
    demo() {}
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
    .item-sense {
      margin: 5px 0 0;
    }
  }
</style>
