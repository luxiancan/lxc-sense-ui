<!--
推送方式选择弹窗 Sam 9.22.2020
-->
<template>
  <transition name="dialog">
    <div class="ss-pushSetting">
        <div class="setting-pop">
          <div class="title">
            <span>选择通知推送方式</span>
            <i class="close-btn sense-icon-close" @click="cancelClick"></i>
          </div>
          <div class="loading" v-if="loading">加载中...</div>
          <template v-else-if="showEmptyTips">
            <div class="empty-warning">
              暂无可用推送渠道，请前往
              <span class="link-text" @click="goPushSetting">推送设置</span>
              开启
            </div>
          </template>
          <template v-else>
            <div class="content" >
              <!--服务号消息-->
              <div class="item" v-if="wxAvailable && showChannels.wx">
                <!--未授权自有服务号-->
                <template v-if="isAuth === 1">
                  <!--未授权自有服务号，且未开启知识助手服务号推送-->
                  <!--什么都不显示-->

                  <!--未授权自有服务号，但开启了知识助手服务号推送-->
                  <template v-if="isPersonalPush === 1">
                    <!--且当前场景支持-->
                    <template v-if="wxAvailable">
                      <div class="item-title">微信模板消息</div>
                      <div class="item-content">
                        <div class="content-state">
                          <ss-radio v-model="wxCurState" :label="true">开启</ss-radio>
                          <ss-radio v-model="wxCurState" :label="false">关闭</ss-radio>
                        </div>
                        <div class="go-auth" v-if="isAuth === 1">
                          用户关注“小鹅通知识助手”公众号后，每天可以收到每个店铺发送的前三条消息。如需使用自有服务号，请前往
                          <span class="link-text" @click="goAuth">授权服务号</span>
                        </div>
                      </div>
                    </template>
                    <!--不支持，啥都不显示-->
                    <template v-else>
                    <!--什么都显示-->
                    </template>
                  </template>
                </template>

                <!--已授权自有服务号-->
                <template v-else>
                  <template v-if="wxAvailable">
                    <!--且当前场景支持-->
                    <!-- <template v-if="wxAvailable"> -->
                      <div class="item-title">微信模板消息</div>
                      <div class="item-content">
                        <div class="content-state">
                          <ss-radio v-model="wxCurState" :label="true">开启</ss-radio>
                          <ss-radio v-model="wxCurState" :label="false">关闭</ss-radio>
                        </div>
                         <!-- 总开关未开启-显示提示 -->
                       <close-warning v-if="!wxMainState"></close-warning>
                      </div>
                    <!-- </template> -->
                  </template>
                 
                </template>
              </div>

              <!--app消息-->
              <div class="item" v-if="appAvailable && showChannels.app">
                <div class="item-title">小鹅通助手App</div>
                <div class="item-content">
                  <div class="content-state">
                    <ss-radio v-model="appCurState" :label="true">开启</ss-radio>
                    <ss-radio v-model="appCurState" :label="false">关闭</ss-radio>
                  </div>
                  <transition name="fade">
                    <div class="warning-color" v-if="appMainState && appCurState && isShowApp">
                      用户每天可收到店铺推送的前3条通知
                    </div>
                  </transition>
                  <close-warning v-if="(!appMainState && appCurState) || !isShowApp"></close-warning>
                </div>
              </div>
              <!--短信消息-->
              <div class="item" v-if="smsAvailable && showChannels.sms">
                <div class="item-title">短信</div>
                <div class="item-content">
                  <div class="content-state">
                    <ss-radio v-model="smsCurState" :label="true">开启</ss-radio>
                    <ss-radio v-model="smsCurState" :label="false">关闭</ss-radio>
                  </div>
                  <transition name="fade">
                    <div v-if="smsMainState && smsCurState">
                      <span class="remaining-msg">剩余：{{remainingMsg}}条</span>
                      <span class="operate-btn"
                            :class="{'disabled': !canRefresh}"
                            @click="getRemainingMsg">刷新</span>
                      <span class="operate-btn" @click="goRecharge">去充值
                        <i class="sense-icon-pagination-right"></i>
                      </span>
                    </div>
                  </transition>
                  <close-warning v-if="!smsMainState && smsCurState"></close-warning>
                </div>
              </div>
              <div class="item">
                <div class="item-title">提示</div>
                <div class="item-content warning-color">如果过度频繁推送通知，服务号可能因用户投诉而遭到微信处罚。</div>
              </div>
            </div>
          </template>

          <div class="footer">
            <ss-button class="cancel-btn" @click="cancelClick">取消</ss-button>
            <ss-button class="save-btn" @click="confirmClick">保存</ss-button>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
import Axios from 'axios';
import SsButton from '@/components/button/index'
import SsRadio from '@/components/radio/index'
import CloseWarning from './closeWarning'

export default {
  name: 'SsPushSettingDialog',
  components: {
    SsButton,
    SsRadio,
    CloseWarning,
  },
  data() {
    return {
      // 剩余短信数量
      remainingMsg: '',
      // 店铺是否有授权 1 未授权  0 已授权
      isAuth: '',
      // 当前场景是否支持服务号
      wxAvailable: '',
      // 当前场景是否支持app
      appAvailable: '',
      // 当前场景是否支持短信
      smsAvailable: '',

      // 当前场景服务号总开关状态
      wxMainState: '',
      // 当前场景app总开关状态
      appMainState: '',
      // 当前场景短信总开关状态
      smsMainState: '',

      // 当前场景服务号当前开关状态
      wxCurState: '',
      // 当前场景app当前开关状态
      appCurState: '',
      // 当前场景短信当前开关状态
      smsCurState: '',

      // 短信flag
      canRefresh: true,
      // 总开关配置表
      settingList: [],
      // loading状态
      loading: false,
      // 知识助手服务号开启状态 1是开启，0是关闭
      isPersonalPush: '',
      isShowApp: 0,//小鹅通助手总开关
    }
  },
  props: {
    // 服务号模板消息
    wxState: {
      default: false,
      type: Boolean,
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    // 小鹅通助手App
    appState: {
      default: false,
      type: Boolean,
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    // 短信
    smsState: {
      default: false,
      type: Boolean,
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    // 场景Id
    businessId: {
      type: String,
      required: true
    },
    // 要展示的渠道
    channels: {
      type: Array,
      required: true,
      default() {
        return []
      },
      validator(val) {
        let flag = true
        for (let i = 0; i < val.length; i++) {
          if (['wx', 'app', 'sms'].indexOf(val[i]) === -1) {
            flag = false
            break
          }
        }
        return flag
      }
    }
  },
  computed: {
    // 根据组件使用方传入的channels来控制显示哪些渠道
    showChannels() {
      const wx = this.channels.indexOf('wx') !== -1
      const app = this.channels.indexOf('app') !== -1
      const sms = this.channels.indexOf('sms') !== -1
      return { wx, app, sms }
    },
    // 无渠道显示时的提醒
    showEmptyTips() {
      //展示短信
      const smsShow = this.smsAvailable && this.showChannels.sms
      // 未授权自有服务号，且未开启知识助手推送
      const wxShow = this.isAuth === 1 && this.isPersonalPush === 0
      // 未授权自有服务号，开启了知识助手推送，但当前场景不支持
      const wxShow2 = this.isAuth === 1 && this.isPersonalPush === 1 && !this.wxAvailable
      // 已授权自有服务号，但总开关闭了
      const wxShow3 = this.isAuth === 0 && !this.wxMainState
      // 已授权自有服务号，总开关开启，但当前场景不支持
      const wxShow4 = this.isAuth === 0 && this.wxMainState && !this.wxAvailable
      //展示app
      const appShow = this.appAvailable && this.showChannels.app&& this.isShowApp
      if (this.showChannels.wx && this.showChannels.sms&&this.showChannels.app) {
        // 当前业务需要展示的渠道（服务号，短信，app）
        if (wxShow && !smsShow&&!appShow) {
          return true
        } else {
          return false
        }
      }else if (this.showChannels.wx && this.showChannels.sms) {
        // 当前业务需要展示的渠道（服务号，短信）
        if (wxShow && !smsShow) {
          return true
        } else {
          return false
        }
      } else if (this.showChannels.wx && this.showChannels.app) {
       // 当前业务需要展示的渠道（服务号，app）
        if (wxShow && !appShow) {
          return true
        } else {
          return false
        }
      }else if (this.showChannels.sms && this.showChannels.app) {
        // 当前业务需要展示的渠道（短信,app）
        if (!smsShow && !appShow) {
          return true
        } else {
          return false
        }
      } else if (this.showChannels.app) {
        // 当前业务需要展示的渠道（app）
       return !appShow
      }
       else if (this.showChannels.wx) {
        // 当前业务需要展示的渠道（服务号）
        return wxShow || wxShow2 || wxShow3 || wxShow4
      } else if (this.showChannels.sms) {
        // 当前业务需要展示的渠道（短信）
        return !smsShow
      } else {
        // 啥渠道都不传，就展示空白提醒
        return true
      }
    }
  },
  watch: {
    wxState: {
      handler() {
        this.wxCurState = this.wxState
      },
      immediate: true
    },
    appState: {
      handler() {
        this.appCurState = this.appState
      },
      immediate: true
    },
    smsState: {
      handler() {
        this.smsCurState = this.smsState
      },
      immediate: true
    },
  },
  methods: {
    // 去推送设置页
    goPushSetting() {
      window.open('/messageManage#/messageManage')
    },
    // confirm callback
    confirmClick() {
      this.$emit('confirmEvent', {
        wxState: this.wxCurState,
        appState: this.appCurState,
        smsState: this.smsCurState,
      })
      this.cancelClick()
    },
    // cancel callback
    cancelClick() {
      this.$emit('cancelEvent')
    },
    // 跳转到授权页
    goAuth() {
      window.open('/setService#/set_service_midd')
    },
    getAPPStatus() {
        Axios.get('/xiaoe_app/get_app_status').then((res) => {
            let result = res.data;  
            if(result.code === 0) {
                this.isShowApp = result.data.is_show_app
            } else {
                this.$message.warning('app状态获取失败')
            }   
        }).catch((err)=> {
            this.$message.warning('网络连接失败，请重试！')
        })
    },
    // 获取店铺服务号授权情况
    getShopConfig() {
      return Axios.get('/get_shop_info').then((res) => {
        // 1 未授权  0 已授权
        this.isAuth = res.data.data.use_collection
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取剩余短信数量
    getRemainingMsg() {
      if (this.canRefresh) {
        Axios.get('/get_sms_account')
          .then((res) => {
            if (res.data.code === 0) {
              this.canRefresh = true
              this.remainingMsg = res.data.data.balance
              this.loading = false
            }
          })
          .catch(err => console.log(err))
      }
      this.canRefresh = false
    },
    // 跳转到短信包充值页
    goRecharge() {
      // 产品要求新页面打开
      window.open('/sms_account#/sms_pay')
    },
    // 获取总开关配置表
    // 以获取当前传入businessId的场景支持情况
    getAllPushSetting() {
      Axios.get('/msg_center/switch_list')
        .then((res) => {
          const data = res.data.data.list
          if (!(data instanceof Array)) {
            console.error('获取总开关配置列表出错')
          }
          data.forEach((e) => {
            e.sub_business.forEach((d) => {
              if (d.business_id === this.businessId) {
                this.wxMainState = d.channels.wx_template_msg.switch_state !== 2
                this.wxAvailable = d.channels.wx_template_msg.is_available !== 2
                this.smsMainState = d.channels.template_sms.switch_state !== 2
                this.smsAvailable = d.channels.template_sms.is_available !== 2
                // app端
                this.appMainState = d.channels.xiaoe_app_msg.switch_state !== 2
                this.appAvailable = d.channels.xiaoe_app_msg.is_available !== 2
              }
            })
          })
        }).catch(err => console.log(err))
    },
    // 个人模式下，获取店铺设置中服务号通知开启情况
    getPersonalPush() {
      return Axios.get('/shop_config/shop_info', { params: { modules: ['switch'] } }).then((res) => {
        if (res.data.code === 0) {
          // 1是开启，0是关闭
          this.isPersonalPush = res.data.data.switch.is_person_message_push
        }
      }).catch(err => console.log(err))
    }
  },
  mounted() {
    this.loading = true
    Promise.all([this.getShopConfig(), this.getPersonalPush(),this.getAPPStatus()]).then(() => {
      this.getAllPushSetting()
      this.getRemainingMsg()

    })
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/pushSetting.scss';
</style>

