<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.ss-shareModal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1001;
  .ss-shareModal__content {
    position: absolute;
    box-sizing: border-box;
    width: 800px;
    height: 600px;
    left: 50%;
    top: 50%;
    margin-left:-400px;
    margin-top: -300px;
    border-radius: 2px;
    background: #fff;
    font-size: 14px;
    color: #353535;
    .ss-shareModal__closeBtn {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 20px;
      color: #999;
    }

    .ss-modal__header {
      height: 52px;
      background: #fff;
      border-radius: 2px 2px 0px 0px;
      line-height: 52px;
      font-size: 16px;
      color: #353535;
      padding-left: 20px;
      border-bottom: 1px solid #eeeeee;
    }

    .ss-modal__body {
      padding: 24px;
      .ss-share-types {
        margin-left: 20px;
        border-bottom: 1px solid #eeeeee;
        .ss-tab-item {
          display: inline-block;
          padding: 8px 16px;
          line-height: 20px;
          color: #666666;
          cursor: pointer;
          &.active {
            border-bottom: 2px solid #105cfb;
            color: #105cfb;
          }
        }
      }

      .ss-share-content {
        padding-left: 20px;
        padding-top: 24px;
        position: relative;
        .share-setting-item{
          display: flex;
          justify-content: flex-start;
          margin-bottom:32px;
          &-title{
            min-width: 82px;
            height: 36px;
            line-height: 36px;
            color: #333333;
          }
          &-content{
            line-height: 36px;
            .ss-change-btn{
              position:relative;
              margin-right: 16px;
              color: #105CFB;
              cursor:pointer;
              text-decoration: none;

              .poster-tips{
                position: absolute;
                top: 32px;
                left: 0;
                padding:24px 16px 12px;
                width: 242px;
                height: 104px;
                line-height: 20px;
                background: #FFFFFF;
                color:#333333;
                box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05), 0px -1px 4px 0px rgba(0, 0, 0, 0.05);
                .closebtn{
                  position: absolute;
                  right:16px;
                  bottom:16px;
                  width: 68px;
                  height: 28px;
                  line-height: 28px;
                  color:#fff;
                  text-align: center;
                  background: #105CFB;
                  border-radius: 2px;

                }
                &::after{
                  content: "";
                  position: absolute;
                  width: 0;
                  height: 0;
                  border-color: transparent transparent #fff;
                  border-style: solid;
                  border-width: 0 8px 8px;
                  top: -7px;
                  left: 18px;
                }
                &::before{
                  content: "";
                  position: absolute;
                  width: 0;
                  height: 0;
                  border-color: transparent transparent #eaeaea;
                  border-style: solid;
                  border-width: 0 8px 8px;
                  top: -8px;
                  left: 18px;
                }

              }
            }
          }
          &-desc {
            color: #999999;
            line-height: 20px;
            margin-top: 8px;
            display: flex;
            align-items: center;
            img {
              width: 16px;
              height: 16px;
              margin: 0 8px;
            }
          }
        }
        .ss-img-container {
          display:flex;
          margin-top: 10px;
          width: 250px;
          height: 160px;
          line-height: 0px;
          position: relative;
          img {
            display: block;
            width: 162px;
            height: 160px;
            border:1px solid #F5F6F5;
          }
          .error-img{
            position: relative;
            &::after{
              content:'图片加载失败';
              position: absolute;
              left: 1px;
              top: 1px;
              background-color: #fff;
              width: 158px;
              height: 158px;
              line-height: 160px;
              text-align: center;
              

            }
          }
          canvas{
            border:1px solid #F5F6F5;
          }
          .ss-download-btn{
            margin-left:16px;
            line-height: 24px;
            text-align:center;
            width: 74px;
            height: 32px;
            border-radius: 4px;
            border: 1px solid #EEEEEE;

            a{
              text-decoration:none;
              color:#333333;
              line-height: 32px;
              width: 100%;
              height: 100%;
              display: block;
            }

          }
          .mini-tips{
            margin-left:16px;
            margin-top: 8px;
            width:228px;
            height: auto;
            width: 228px;
            font-size: 14px;
            color: #333333;
            line-height: 20px;
          }
        }
        .ss-copy_link {
          margin: 0;
          height: 32px;
          border-radius: 4px;
          overflow: hidden;
          .ss-show_link {
            box-sizing: border-box;
            width: 465px;
            float: left;
            line-height: 32px;
            height: 32px;
            font-size: 12px;
            text-align: left;
            padding: 0 10px;
            background-color: rgba(245, 247, 250, 0.48);
            color: #888888;
            border: 1px solid #F2F2F2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .ss-copy_button {
            width: 74px;
            float: left;
            line-height: 32px;
            text-align: center;
            background: #105CFB;
            color: #ffffff;
            cursor: pointer;
          }
        }
        .clearfix {
          clear: both;
        }

        .nopromissions {
            position: absolute;
            top: 24px;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: white;
            font-size: 14px;
        }
    }
  }
}
}
</style>
<template>
  <!-- <transition name="fade"> -->
  <div class="ss-shareModal" v-if="isShowMessageBox">
    <div class="ss-shareModal__content">
      <a
        v-show="true"
        class="ss-shareModal__closeBtn ss-modal__close sense-icon-close"
        @click="closeBox"
      ></a>

      <div class="ss-modal__header">{{headTitle}}</div>

      <div class="ss-modal__body">
        <div v-show="!isSetting && !isSettingPoster && !isSettingEditor">
          <div class="ss-share-types"  v-if="Object.keys(shareData).length>1">
            <template v-for="(value, key) in shareData">
              <div
                class="ss-tab-item"
                :class="{'active' : key === activeType}"
                :key="key"
                @click="activeType = key"
              >{{value && value.title || defaultTitleMap[key]}}</div>
            </template>
          </div>

          <div class="ss-share-content">
            <div v-if="activeType === 'littleProgram' && promissionsData.status === 0" class="nopromissions">{{promissionsData.tipsText}}</div>
            <!-- 复制链接 -->
            <Alert v-if="hasUsedForIntegral.state" class="share-setting-item" :title="`该${hasUsedForIntegral.types}已作为积分兑换，直接推广可能给您造成损失，请谨慎进行链接/二维码的推广`"  type='warning'></Alert>
            <div class="share-setting-item" v-show="shareData[this.activeType] && !shareData[this.activeType].hideCopyLink">
              <div class="share-setting-item-title">链接</div>
              <div class="share-setting-item-content">
                <div class="ss-copy_link">
                  <div
                    class="ss-show_link"
                  >{{shareData[this.activeType] && shareData[this.activeType]['link']}}</div>
                  <div
                    class="ss-copy_button ss-copyHref"
                    :data-clipboard-text="shareData[this.activeType] && shareData[this.activeType]['link']"
                    @click="copyLink"
                  >复制</div>
                </div>
                <div class="share-setting-item-desc" v-show="activeType === 'h5' && getType != 2">
                  <span>可分享至</span>
                  <img src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/khd3u3qg0s3km9wuoej.png" />
                  <img style="margin-left: 0;" src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/khd3u3qf0zdn8pazpa6.png" />
                  <span>中使用</span>
                </div>
              </div>
            </div>
            <!-- 二维码 -->
            <div class="share-setting-item">
              <div class="share-setting-item-title">二维码</div>
              <div class="share-setting-item-content">
                <div class="ss-img-container">
                  <canvas width="160" height="160" ref="h5_qr" v-show="activeType === 'h5'"></canvas>
                  <canvas width="160" height="160" ref="wework_qr" v-show="activeType === 'wework'"></canvas>
                  <div v-show="activeType === 'littleProgram' && promissionsData.status === 1">
                    <loading v-if="imgLoading"></loading>
                    <!-- 小程序的二维码可以通过传入一个接口，在组件内部调用，或者 ， 直接传入二维码的链接
                         直接给的链接有可能错误，所以得设置一下错误的时候占位图或者提示 
                    -->
                    <img
                      v-else
                      :src="shareData['littleProgram'] && shareData['littleProgram']['qr_code']"
                      onerror="this.classList.add('error-img')"
                      alt=""
                    />
                  </div>
                  <!-- 下载按钮 -->
                  <div>
                    <div class="ss-download-btn" v-if="shareData[this.activeType] && shareData[this.activeType]['qr_code']">
                      <a
                        :href="shareData[this.activeType] && shareData[this.activeType]['qr_code']"
                        class="ss-download_link EC1"
                        download="二维码.png"
                      >下载</a>
                    </div>
                    <!-- 特殊提示 -->
                    <div class="mini-tips" v-if="shareData[this.activeType] && shareData[this.activeType]['qrCodeTips']">{{shareData[this.activeType]['qrCodeTips']}}</div>
                  </div>
                  
                </div>
              </div>
            </div>
            <!-- 教程（小程序） -->
            <div class="share-setting-item" v-if="activeType==='littleProgram'">
              <template v-if="shareData[this.activeType]['show_help']">
                <div class="share-setting-item-title">教程</div>
                <div class="share-setting-item-content">
                  <a
                    target="_blank"
                    href="/helpCenter/problem?first_id=126&second_id=164&document_id=doc_5b0b7f49b251f_vNpPv"
                    class="ss-change-btn"
                  >查看操作教程</a>
                </div>
              </template>
            </div>
            <!-- 设置(h5) -->
            <div class="share-setting-item" v-else-if="activeType==='h5'">

              <div class="share-setting-item-title" v-if="shareData[this.activeType] && (!shareData[this.activeType].hideMessageSetting || !shareData[this.activeType].hidePosterSetting)">设置</div>
              <div class="share-setting-item-content">
                <span
                  v-if="shareData[this.activeType] && !shareData[this.activeType].hideMessageSetting"
                  class="ss-change-btn"
                  @click="isSetting=true"
                >分享语设置</span>
                <span class="ss-change-btn"  v-if="shareData[this.activeType] && !shareData[this.activeType].hidePosterSetting">
                  <span @click="showPosterSetting">海报设置</span>
                  <div class="poster-tips" v-if="showPosterTips">
                    点击【海报设置】可以上传自定义海报
                    <div class="closebtn" @click="closePosterTips">知道了</div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- 分享设置 -->
        <div v-if="isSetting">
          <Setting :activityType="activityType" :shareType="shareType" :resourceType="resourceType" />
        </div>
        <!-- 根据传进来的参数 是否显示 海报设置 -->
        <template v-if="shareData[this.activeType] && !shareData[this.activeType].hidePosterSetting">
          <!-- 海报设置-列表 -->
          <div v-if="isSettingPoster">
            <poster-setting 
              :resourceType="resourceType" 
              :businessId="businessId" />
          </div>
          <!-- 海报设置-编辑 -->
          <div v-if="isSettingEditor">
            <poster-editor 
              :poster = 'edittingPoster' 
              :limitPosterSize='1'
              :activityType="activityType" 
              :shareType="shareType"
              :resourceType="resourceType" 
              :businessId="businessId"/>

          </div>
        </template>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
import axios from "axios";
import Loading from "../loading";
import QRious from "qrious";
import Clipboard from "clipboard";

import Setting from "./setting";
import posterSetting from "./posterSetting";
import posterEditor from "./posterEditor";
import Alert from '../alert'
import { throttle } from '../../utils/util'

export default {
  name: "SsShareModal",

  props: {
    hasUsedForIntegral:{
      type: Object,
      default: {
        state:false,
        types:''
      }
    },
    shareType: {    // 1微页面,2资源课程，3-营销活动
      type: Number,
      default: 1
    },
    businessId: {     // 商品/活动 的id 
      type: String,
      default: "1"
    },
    resourceType: {     // 商品类型 - 海报设置需要用 
      type: [String , Number],
      default: ""
    },
    /**
     *  对应关系 : 
     *  0	推广员
        1	优惠券
        2	邀请码
        4	拼团
        5	限时折扣
        6	好友助力
        8	兑换码
        9	涨粉神器
        10	裂变海报
        11	秒杀
        13	砍价
        14	优惠码
    */
    activityType: {     // 营销活动类型 - 分享语设置埋点需要用 
      type: [String , Number],
      default: ""
    },
    shareInfo: {
      type: Object
    },
    miniQrCodeText:{      // 小程序二维码下面的文案提示  -- 一些特殊需求
      type:String,
      default:''
    },
    /**
     * 新增promissionsInfo,兼容小程序资质有无资质类目状态的分享二维码隐藏逻辑，
     * status--Number, 1:有资质，默认；0:无资质
     * tipsText -- String, 无资质时候的文案展示
     */
    promissionsInfo: {
        type: Object,
        default: () => {
            return {
                status: 1,
                tipsText: ''
            }
        }
    }
  },
  components: {
    Alert,
    Setting,
    Loading,
    posterSetting,
    posterEditor
  },
  data() {
    return {
      isShowMessageBox: false,
      shareData: {},
      promissionsData: {},
      activeType: "",
      isSetting: false,   // 修改分享设置
      isSettingPoster: false,   // 修改海报设置
      isSettingEditor: false, // 显示 海报编辑
      showPosterTips:false, // 显示 海报设置的提示框
      imgLoading: false,
      resolve: null,
      promise: null,
      edittingPoster:{        // 海报设置 需要的参数
        type: 'new',
        resource_id:'',
        image_url:'',
      }, 
      defaultTitleMap:{h5:'H5店铺',littleProgram:'小程序',wework:'企业微信'},
      copyThrottleFn:null
    };
  },
  mounted() {
    setTimeout(() => {
      this.initData();
      this.genarateQrCode();
      this.getLittleShareInfo();
    }, 0);
  },
  created(){
      // 读取 localStorage 显示 海报设置引导
      const tip = localStorage.getItem("sharebox_show_poster_tip");
      if(tip === null){
        this.showPosterTips = true;
      }else{
        this.showPosterTips = false;
      }
      this.copyThrottleFn = this.copyThrottle()
  },
  computed: {
    // header的标题
    headTitle(){
      if(this.isSetting){
        return '分享>分享语设置';
      }else if(this.isSettingPoster){
        return '分享>海报设置';
      }else if(this.isSettingEditor){
        return '分享>海报设置>编辑海报';
      }else{
        return '分享'
      }
    },
    // 特殊处理h5的title，去除店铺
    copyTitle() {
      let {shareData, activeType} = this;
      if(activeType === 'h5') {
        return 'H5'
      } else {
        return shareData[activeType] && shareData[activeType]['title']
      }
    },
    // 获取平台的类型 平台类型 1-B端管理台 2-企学院 3-智慧校园
    getType() {
      var type;

      if (window.__shop_type && window.__shop_type == "6") {
        type = 3;
      } else if (window.globVersionType && (window.globVersionType === 170 || window.globVersionType === 171)) {
        type = 2;
      } else {
        type = 1;
      }

      return type;
    },
  },
  methods: {
    initData() {
      let shareInfo = this.shareInfo;
      let shareData = JSON.parse(JSON.stringify(shareInfo));
      this.shareData = shareData;
      let promissionsInfo = this.promissionsInfo;
      let promissionsData = JSON.parse(JSON.stringify(promissionsInfo));
      this.promissionsData = promissionsData;
      this.activeType = Object.keys(shareData)[0];
    },
    closePosterTips(){
        this.showPosterTips=false;
        localStorage.setItem("sharebox_show_poster_tip", 1);
      
    },
    showPosterSetting(){
      this.isSettingPoster=true; // 显示海报设置
      // 埋点数据 神策
      try {
        sensors.track('ADM03003_poster_setting', {
          activity_type: "", // 营销活动类型  目前接入分享组件的营销活动不支持海报设置 ， 所以固定传空字符
          resource_type: this.resourceType,  // 资源类型 就是传进来的 resourceType 
        })
      } catch(err) {
        console.log(err);
      }      
    },
    // 获取小程序二维码
    getLittleShareInfo() {
      if (this.shareData.hasOwnProperty("littleProgram") && this.promissionsData.status === 1) {
        // 小程序版本不够需要更新
        let { littleProgram } = this.shareData;
        // 发送请求，获取小程序信息
        if (!littleProgram["update_tip"]) {
          let { req_url, req_data } = littleProgram;
          if (!req_url) return false;
          this.imgLoading = true;
          axios
            .post(req_url, req_data)
            .then(({ data }) => {
              if (data.code == 0) {
                if (this.shareType == 1) {
                  let { micro_program_info } = data.data;
                  littleProgram["link"] = micro_program_info["href_url"];
                  littleProgram["qr_code"] = micro_program_info["qr_url"];
                } else {
                  littleProgram["qr_code"] = data.data;
                }
              } else {
                this.$message.warning("获取小程序二维码失败");
              }
              this.imgLoading = false;
            })
            .catch(error => {
              console.log(error);
              this.$message.warning("获取小程序二维码失败");
              this.imgLoading = false;
            });
        }
      }
    },
    //点击关闭按钮
    closeBox() {
      this.isShowMessageBox = false;
      this.resolve();
    },
    showModal: function() {
      this.isShowMessageBox = true;
      this.promise = new Promise(resolve => {
        this.resolve = resolve;
      });
      // 返回promise对象
      return this.promise;
    },
    remove: function() {
      this.isShowMessageBox = false;
      setTimeout(() => {
        this.destroy();
      }, 0);
    },
    destroy: function() {
      this.$destroy();
      document.body.removeChild(this.$el);
    },
    // 该函数返回一个节流处理的函数给一个变量，在copyLink处调用
    copyThrottle:function(){
      let that = this;
      function copy(){
          const board = new Clipboard(".ss-copyHref");
          board.on("success", e => {
            that.$message.info("复制成功");
            e.clearSelection();
            board.destroy();
          });
          board.on("error", function(e) {
            that.$message.warning("复制失败");
            e.clearSelection();
            board.destroy();
          });
      }
      return throttle(copy,3000)
    },
    copyLink() {
      this.copyThrottleFn()
    },
    genarateQrCode() {
      let that = this;
      let qrcodeArr = [];
      if (this.shareData.hasOwnProperty("h5")) {
        qrcodeArr.push("h5");
      }
      if (this.shareData.hasOwnProperty("wework")) {
        qrcodeArr.push("wework");
      }
      qrcodeArr.forEach(item => {
        this.$nextTick(() => {
          new QRious({
            element: that.$refs[`${item}_qr`],
            size: 160,
            value: that.shareData[item]["link"]
          });
        });
        setTimeout(function() {
          let canvas = that.$refs[`${item}_qr`];
          that.shareData[item]["qr_code"] = canvas.toDataURL("image/png");
        }, 100);
      });
    }
  }
};
</script>

