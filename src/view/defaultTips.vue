<template>
  <div>
    <div class="title">defaultTips</div>
    <div class="content">
      <ss-default-tips :list="list"></ss-default-tips>
    </div>
  </div>
</template>

<script>
import SsDefaultTips from "@/components/defaultTips";

export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    SsDefaultTips
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        {
          id: 10, //黄条ID
          title: "黄条修改一", //黄条名称
          content: "这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条这是外部传如的蓝条", //黄条内容
          is_close: 2, //是否可关闭 1-不可 2-可
          tip_type: 2, //黄条类型    1-黄条 2-蓝条
          target_word: "", //跳转文案
          target_url: "", //跳转链接
          start_time: "2020-04-05 09:30:30", //展示开始时间
          end_time: "2020-06-06 09:30:30", //展示结束时间
          weight: 2 //权重
        }
      ];
    }, 3000);
    setTimeout(() => {
      this.list.push({is:93,content:'后面加的list'})
    }, 5000);
  },
  methods: {}
};
</script>

<style scoped>
</style>
