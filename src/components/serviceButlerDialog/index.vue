<template>
  <div class="service-butler-dialog" v-if="visible">
    <div class="dialog" :class="{'offline-dialog': !houseKeeperQrcode && type!=='PreSale'}">
      <div class="dialog-header">
        <img  @click="handleClose" src="./images/icon_close_1.png" class="icon-icon-close font_family"></img>
      </div>
      <div class="dialog-content" v-if="houseKeeperQrcode || type==='PreSale'">
        <div class="avatar">
          <img class="avatar-img"  :src="houseKeeperSex==1?'https://wechatapppro-1252524126.file.myqcloud.com/apppcHqlTPT3482/image/b_u_5b73e35149a67_ypMtbWtO/kluah5gj0w0w.png':'https://wechatapppro-1252524126.file.myqcloud.com/apppcHqlTPT3482/image/b_u_5b73e35149a67_ypMtbWtO/kluah5gg0aa4.png'">
          <img v-if="isAfterSale"  class="avatar-frame" src="https://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/b_u_5b2225aa46488_oGKN7IvA/kn73kqgz0kq0.png">
          <img v-else class="avatar-frame" src="https://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/b_u_5b2225aa46488_oGKN7IvA/kn73kqgw039b.png">
        </div>
        <div v-if="isAfterSale" class="introduction">
          您好，我是{{ houseKeeperName }}，您的<span class="after-color" :class="[type==='PreSale' ? 'pre-color' : '']"  >{{ ServiceTypeMap[type] }}</span>
        </div>
        <div v-else class="introduction">
          您好，我是您的<span class="after-color" :class="[type==='PreSale' ? 'pre-color' : '']"  >{{ ServiceTypeMap[type] }}</span>
        </div>
        <div v-if="isAfterSale" class="desc">操作指引丨咨询答疑丨需求跟进丨案例推荐</div>
        <div v-else class="desc">咨询答疑丨案例推荐丨订购政策丨服务支持</div>
        <div class="qr-code">
          <img class="qr-code-frame" src="https://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/b_u_5b2225aa46488_oGKN7IvA/kn73w6pb0x6b.png">
          <img v-if="isAfterSale" class="qr-code-img" :src="houseKeeperQrcode">
          <img v-else class="qr-code-img" src="https://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/b_u_5b2225aa46488_oGKN7IvA/kn763kz60f1o.png">
        </div>
        <div class="tips">打开微信或企微，扫码添加</div>
      </div>
      <div class="dialog-content" v-else>
        <img class="lg-img" src="https://wechatapppro-1252524126.file.myqcloud.com/apprnDA0ZDw4581/image/b_u_5b2225aa46488_oGKN7IvA/kn77159d03me.png">
        <div class="phone_number">
          <i></i>
          400-102-6665
        </div>
        <div class="btn-container">
          <div class="btn-primary" @click="getService">客户经理</div>
          <div class="btn-default" @click="getComplain">售后投诉</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'serviceButlerDialog',
  props: {
    type: {
      type: String,
      default: 'PreSale',
    },
    visible: {
      type: Boolean,
      default: true
    },
    isLogin: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      houseKeeperQrcode: '',
      houseKeeperSex: '',
      houseKeeperName: '',
      ServiceTypeMap: {
        afterSale: '专属服务管家',
        PreSale: '专属顾问'
      },
      shopInfo: '',
      shopLoading: '',
      qiyuParam: '',
      qiyuComplainParam: '',
      qiyuUid: '',
    }
  },
  computed: {
    isAfterSale() {
      return this.type === 'afterSale'
    },
    getAppId() {
      return window.__app_id || 'xiaoe'
    },
    isOfficialWebsite() {
      return window.location.host === 'qiwei.xiaoe-tech.com'
    }
  },
  created() {
    if (!this.isLogin) {
      console.log('官网版qiyu')
      //
    } else {
      this.getHouseKeeperStatus()
      this.initRelationship()
      this.getShopInfo()
    }
  },
  methods: {
    getHouseKeeperStatus() {
      if (window.$baseTopBar && window.$baseTopBar.houseKeeperQrcode) {
        this.houseKeeperQrcode = window.$baseTopBar.houseKeeperQrcode;
        this.houseKeeperSex = window.$baseTopBar.houseKeeperSex;
        this.houseKeeperName = window.$baseTopBar.houseKeeperName;
      } else {
        Axios.post('/get_pop_window_info').then((res) => {
          const data = res.data.data;
          if (res.data.code === 0 && data.qr_code) {
            this.canGetHouseKeeper = true;
            // 二维码 + 服务管家信息
            this.houseKeeperQrcode = data.qr_code;
            this.houseKeeperSex = data.gender;
            this.houseKeeperName = data.deliver_staff_name;
          }
        }).catch((err) => {
          this.$message.warning('网络请求异常，请稍后再试');
        })
      }
    },
    handleClose() {
      this.$emit('update:visible', false)
    },
    getService() {                          // 呼叫客服
      const now_title = document.title;
      // document.title = 'homepage_pc'
      ysf.config(this.isOfficialWebsite ? {
        success() {
          document.title = now_title;
        }
      } : this.qiyuParam);
      ysf.open();
    },
    getComplain() {
      const now_title = document.title;
      ysf.config(this.isOfficialWebsite ? {
        success() {
          document.title = now_title;
        }
      } : this.qiyuComplainParam);
      ysf.open();
    },
    initRelationship() {
      const QIYU_UID = `${window.__app_id}_qiyu_uid`;
      let uid = localStorage.getItem(QIYU_UID);
      if (!uid) {
        uid = this.randomString();
        localStorage.setItem(QIYU_UID, uid);
      }
      this.qiyuUid = uid;
    },
    randomString(l) {
      const len = l || 16;
      const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
      const maxPos = $chars.length;
      let pwd = '';
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random(new Date()) * maxPos));
      }
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      return `admin_${pwd}`;
    },
    getShopInfo() {
      Axios.get('/get_shop_info').then(({ data }) => {
        if (data && data.code === 0) {
          this.shopInfo = data.data
          this.shopLoading = true

          // 七鱼初始化需要用到店铺信息，将信息存浏览器中
          const shopInfo = localStorage.getItem(`${window.__app_id}_shopInfo`);
          if (!shopInfo) {
            localStorage.setItem(`${window.__app_id}_shopInfo`, JSON.stringify(data.data));
          }

          const uid = `${this.qiyuUid}-${window.__app_id}-${this.shopInfo.merchant_phone_name}-${this.shopInfo.admin_type}`;
          // 初始化七鱼需要的数据
          this.qiyuParam = {
            // uid,
            data: JSON.stringify([
              // {"key":"real_name","value": this.shopInfo.shop_name},
              // {"key":"mobile_phone", "value": '13163296076'},
              // {"key":"email", "hidden":true},
              // {"index":0, "key":"app_id", "label":"店铺ID", "value": window.__app_id},
              // {"index":0, "key":"is_admin", "label":"是否管理员", "value": this.shopInfo.is_admin},
              // {"index":0, "key":"shop_name", "label":"店铺名", "value": this.shopInfo.shop_name},
              // {"index":0, "key":"version_name", "label":"版本", "value": this.shopInfo.version_type}
            ]),
            success() {
            }
          }
          this.qiyuComplainParam = {
            // uid,
            groupid: '399337433', // 指定的投诉客服组的id
            // data: JSON.stringify([
            //   {"key":"real_name","value": this.shopInfo.shop_name},
            //   {"key":"mobile_phone", "value": '13163296076'},
            //   {"key":"email", "hidden":true},
            //   {"index":0, "key":"app_id", "label":"店铺ID", "value": window.__app_id},
            //   {"index":0, "key":"is_admin", "label":"是否管理员", "value": this.shopInfo.is_admin},
            //   {"index":0, "key":"shop_name", "label":"店铺名", "value": this.shopInfo.shop_name},
            //   {"index":0, "key":"version_name", "label":"版本", "value": this.shopInfo.version_type}
            // ]),
            success() {
            }
          }
        }
      })
    },
  }
}
</script>

<style scoped lang='scss'>
.service-butler-dialog{
  position: fixed;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  background: rgba(0,0,0,0.5);
  .dialog{
    width: 640px;
    min-height: 240px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px 0px rgba(51, 51, 51, 0.08), 0px -3px 6px -4px rgba(51, 51, 51, 0.12);
    border-radius: 4px;
    padding-bottom: 40px;
    .dialog-header{
      height: 40px;
      display: flex;
      justify-content: flex-end;
      .icon-icon-close{
        margin: 16px 16px 0 0;
        cursor: pointer;
        font-size: 16px;
        color: #999999;
        width: 16px;
        height: 16px;
      }
    }
    .dialog-content{
      display: flex;
      align-items: center;
      flex-direction: column;
      .avatar{
        width: 80px;
        height: 80px;
        position: relative;
        .avatar-frame{
          position: absolute;
          width: 80px;
          height: 80px;
        }
        .avatar-img{
          position: absolute;
          top:10px;
          left: 10px;
          height: 60px;
          width: 60px;
        }
      }
      .introduction{
        margin-top: 8px;
        height: 32px;
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        line-height: 32px;
        .after-color{
          color: #FFA114;
        }
        .pre-color{
          color: #1472FF;
        }
      }
      .desc{
        margin-top: 16px;
        height: 22px;
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        line-height: 22px;
      }
      .qr-code{
        margin-top: 8px;
        position: relative;
        width: 181px;
        height: 178px;
        .qr-code-frame{
          position: absolute;
          width: 181px;
          height: 178px;
        }
        .qr-code-img{
          position: absolute;
          width: 160px;
          height: 160px;
          top:8px;
          left: 10px;
        }
      }
      .tips{
        margin-top: 16px;
        height: 22px;
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        line-height: 22px;
      }
      .phone_number{
        margin-top: 8px;
        height: 32px;
        font-size: 24px;
        font-weight: 500;
        color: #333333;
        line-height: 32px;
      }
      .btn-container{
        margin-top: 40px;
        display: flex;
        .btn-primary{
          cursor: pointer;
          width: 88px;
          height: 32px;
          background: #1472FF;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }
        .btn-default{
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 88px;
          height: 32px;
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #DBDBDB;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          line-height: 22px;
        }

      }
      .lg-img{
        width: 48px;
        height: 48px;
      }
    }
  }
  .offline-dialog{
    width: 480px;
  }
}
</style>
