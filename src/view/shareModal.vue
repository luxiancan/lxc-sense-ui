<template>
  <div class="share-component">

    <ss-button class="success" @click="handleClick">提示</ss-button>
    

  </div>
</template>

<script>
import SSButton from '@/components/button'

export default {
  name: "ss-share",
  data() {
    return {
      shareType: 2,
      businessId: "10520"
    };
  },
  components: {
    'ss-button': SSButton
  },
  methods: {
    handleClick() {
      this.$share({
        hasUsedForIntegral:true,
        shareType: 2,
        businessId: "10520",
        resourceType:2,
        activityType:'',
        shareInfo: {
          h5: {
            title: "H5店铺",
            link: "http://wxdd198a901fa24220.h5.inside.xiaoe-tech.com",
            hideCopyLink:false,        // 隐藏复制链接  默认false
            hidePosterSetting:false,   // 隐藏海报设置入口  默认false
            hideMessageSetting:false,  // 隐藏分享语设置入口  默认false
            qr_code: ""
          },
          littleProgram: {
            title: "小程序",
            link: "/page/home/micro_page/micro_page?id=10672",
            qr_code: "http://littleclockproduct-1251748120.file.myqcloud.com/apppcHqlTPT3482/image/Z2V0cXJjb2RlLW1pY3JvcGFnZS1iX3VfNWI3M2UzNTE0OWE2N195cE10Yld0Ty1iY0hRbG5VbA.jpg",
            qrCodeTips:'扫码后转发页面至微信群，群内用户可领取邀请码（每人限领一次）',  // 二维码旁边的文案提示  默认不显示
            req_url: "/micro_page/get_share_info",
            req_data: {
                id: 10672,
                is_homepage: false
            },
            show_help: true,          // 显示教程链接  默认false
            hideCopyLink:false,       // 隐藏复制链接  默认false
          },
          wework: {
            title: "企业微信",
            link: "http://wxdd198a901fa24220.h5.inside.xiaoe-tech.com",
            qr_code: "",
            hideCopyLink:false,       // 隐藏复制链接  默认false
          }
        },
        promissionsInfo : {
            status: 1,
            tipsText: ''
        }
      });
    }
  }
};
</script>

<style lang="scss">
  .share-component {
      padding: 24px;
  }
</style>