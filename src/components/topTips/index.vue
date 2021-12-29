<template>
  <div v-if="isShow === 1" class="ss-container-orderRemainderBar">
    <div class="ss-right-item" v-html="tipContent"></div>
    <div class="ss-left-item"
         @click="jumpPage">
      立即订购
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'SsTopTips',
  props: {
    url: {
      type: String,
      default: '/show_expire_warning_tips'
    },
    module_id: {
      required: true,
      type: String
    },
    app_id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      eventTrackingName: '', // 一级事件名称
      packageName: '', // 功能名称
      isShow: 2,
      tipContent: '',
      jump_url_type: ''
    }
  },
  created() {
    Axios.post(this.url, { module_id: this.module_id, app_id: this.app_id }).then(
      (res) => {
        const result = res.data;
        if (result.code === 0) {
          this.isShow = result.data.is_show;
          this.tipContent = result.data.tips_content;
          this.jump_url_type = result.data.jump_url_type;
          this.packageName = result.data.package_name;
          // use_type 1-正常开通 2-正常开通过期 3-试用开通 4-试用开通过期 5-试用后正常开通 6-试用后正常开通过期
          if (result.data.use_type === 3) {
            this.eventTrackingName = '功能试用提示栏_';
          } else if ([2, 4, 6].includes(result.data.use_type)) {
            this.eventTrackingName = '功能过期提示栏_';
          }
        } else {
          console.error(res);
        }
      }
    ).catch(
      (err) => {
        console.error(err);
      }
    );
  },
  methods: {
    jumpPage() {
      const arr = [{
        et: 1,
        actn: this.eventTrackingName + '立即订购',  // 一级事件名
        actsn: this.eventTrackingName + this.packageName + '_立即订购', // 二级事件名
        actp: JSON.stringify({app_id: this.app_id}) // 事件属性
      }];
      try {
        window['_YS_report'].push(arr);
      } catch (error) {
        console.log(error);
      }
      if (this.jump_url_type === 1) {
        window.location.href = '/personal_service/service_buy';
      } else if (this.jump_url_type === 2) {
        window.location.href = `/entry/${this.module_id}?buy=1`;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/packages/topTips.scss';
</style>

