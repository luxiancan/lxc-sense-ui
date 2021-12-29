<template>
  <div class="ss-default-tips-wrapper">
    <div
      v-for="(item, index) in tipsList"
      class="ss-default-tips"
      :class="[item.tip_type ===1 ?'ss-default-tips-yellow':'ss-default-tips-blue']"
      :key="index"
    >
      {{item.content}}
      <a
        v-if="item.target_url&&item.target_word"
        :href="item.target_url"
        target="_blank"
        @click="reportTipsCount(item.id,1)"
      >{{item.target_word}}</a>
      <img
        v-if="item.is_close === 2"
        src="https://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/5e5f1f422f770c8f527a507990bb8946.png"
        class="ss-default-tips-close"
        @click="closeTips(item,index)"
      />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "SsDefaultTips",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    router: {
      type: String,
      default: () => {
        return "";
      }
    },
    showSuperTips: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      tipsList: [],
      getList: []
    };
  },
  watch: {
    list: {
      handler() {
        this.tipsList = this.concatList();
      },
      immediate: true
    },
    router() {
      if(this.showSuperTips){
        this.getTipsList();
      }
    }
  },
  computed: {
    // 过滤通过props传入的List
    filterPropsList() {
      return this.filterData(this.list);
    },
    // 过滤o端配置的List
    filterGetList() {
      return this.filterData(this.getList);
    }
  },
  created() {
    if(this.showSuperTips){
      this.getTipsList();
    }
  },
  methods: {
    // 合并list
    concatList() {
      return this.filterPropsList.concat(this.filterGetList);
    },
    // 获取平台的类型 平台类型 1-知识店铺 2-企学院 3-智慧校园 4-企微店铺 5-企业直播店铺
    getType() {
      let type;
      if(window.globVersionType === 301) {
        type = 5;
      } else if(window.globVersionType === 201) {
        type = 4;
      } else if (window.__shop_type && window.__shop_type == "6") {
        type = 3;
      } else if (
        window.globVersionType &&
        (window.globVersionType === 170 || window.globVersionType === 171)
      ) {
        type = 2;
      } else {
        type = 1;
      }
      return type;
    },
    // 获取o端配置的小黄条
    getTipsList() {
      let type, router;
      type = this.getType();
      router = window.location.href;
      Axios.get("/btips/get_tips_url", { params: { router, type } })
        .then(res => {
          const result = res.data;
          if (result.code === 0) {
            this.getList = result.data;
            this.tipsList = this.concatList();
            this.reportTipsCount(this.filterGetList, 0);
          } else {
            this.getList = [];
            this.tipsList = this.concatList();
          }
        })
        .catch(err => {
          this.getList = [];
          this.tipsList = this.concatList();
          console.error(err);
        });
    },
    // 过滤数据
    filterData(list) {
      //   在localStorage已存在的tips要删除
      if (list.length === 0) return list;
      let tips = JSON.parse(localStorage.getItem("tips")) || {};
      let appId = window.__app_id;
      if (tips[appId]) {
        return list.filter(item => !tips[appId].some(tip => tip.id == item.id));
      } else {
        return list;
      }
    },
    // 关闭黄条
    closeTips(item, index) {
      this.tipsList.splice(index, 1);
      let tips = JSON.parse(localStorage.getItem("tips")) || {};
      let appId = window.__app_id;
      if (!tips[appId]) {
        tips[appId] = [];
      }
      tips[appId].push({
        id: item.id,
        end_time: item.end_time
      });
      localStorage.setItem("tips", JSON.stringify(tips));
    },
    // 上报曝光次数
    reportTipsCount(data, reportType) {
      // reportType 0：曝光,1：点击
      let tipId;
      if (reportType === 1) {
        // 判断是否属于filterGetList
        let isInFilterGetList = this.filterGetList.some(
          item => item.id === data
        );
        if (isInFilterGetList) {
          tipId = data;
        } else {
          return;
        }
      } else if (reportType === 0 && data.length) {
        tipId = data.map(item => item.id).join(",");
      } else {
        return;
      }
      Axios.get("/report_tips_count", { params: { tipId, reportType } })
        .then(res => {
          const result = res.data;
          if (result.code === 0) {
            console.log("小黄条曝光上报成功");
          } else {
            console.error("小黄条曝光上报失败");
            console.error(res);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/packages/defaultTips.scss';
</style>