<template>
  <!-- 从原先的goodsPoster组件里面 抽离出编辑的部分，那个组件在这无法复用 -->
    <div class="ss-goods-poster__main_edit" >
      <loading v-show="loading"></loading>
      <div class="poster-setting" ref="posterSetting">
        <!-- 编辑区域 中 -->
            <div class="poster-main">
                <div
                    class="poster-pre"
                    ref="poster"
                    :style="{backgroundImage: 'url('+ defaultItem.posterUrl +')'}"
                >
                    <!-- 头像 -->
                    <div
                    class="bigAvatar poster-pre__avatar poster-pre__item"
                    ref="bigAvatar"
                    :style="{top: `${bigAvatar.top}px`, left: `${bigAvatar.left}px`}"
                    @mousedown="startMove"
                    @mouseenter="hoverShow"
                    @mouseout="leaveShow"
                    v-if="defaultItem.isShowAvatarAndName == 1"
                    >
                    <div class="avatar-box">
                        <img src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/84b7cbf2215669abf105275b59df16f1.png" alt="">
                    </div>
                    <span class="move-icon"></span>
                    </div>
                    <!-- 昵称 -->
                    <div
                    class="bigNickname poster-pre__nickname poster-pre__item"
                    :class="{'poster-pre__nickname__black':defaultItem.nicknameColor ==1}"
                    ref="bigNickname"
                    :style="{top: `${bigNickname.top}px`, left: `${bigNickname.left}px`}"
                    @mousedown="startMove"
                    @mouseenter="hoverShow"
                    @mouseout="leaveShow"
                    v-if="defaultItem.isShowAvatarAndName == 1"
                    >
                    <!-- <i class="font_family icon-avatar avatar-box"></i> -->
                    <div class="nickname-text">
                        <i class="font_family icon-img_name_zhanwei1 nickname-title"></i>
                    </div>
                    <span class="move-icon"></span>
                    </div>
                    <!-- 二维码 -->
                    <div
                    class="bigCodeQr poster-pre__code poster-pre__item"
                    :class="{'code-with-finger':defaultItem.isShowQrcode == 1}"
                    ref="bigCodeQr"
                    :style="{top: `${bigCodeQr.top}px`, left: `${bigCodeQr.left}px`}"
                    @mousedown="startMove"
                    @mouseenter="hoverShow"
                    @mouseout="leaveShow"
                    v-if="defaultItem.isShowQrcode !== 2"
                    >
                    <i class="font_family icon-img_qrcode_zhanwei1 code-box"></i>
                    <img class="fingerprint" v-show="defaultItem.isShowQrcode == 1" src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/859093d21aee5d46f4a58d3842f81d0d.png" alt="" >
                    <span class="move-icon"></span>
                    </div>
                    <!-- 商品详情 -->
                    <div class="goods-info" v-if="defaultItem.isShowGoodsInfo===1">
                        <div class="goods-info-img">
                            <img class="goods-info-img-img" src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/9ed6644ff822ebb17625b89250a96679.png" alt="">
                        </div>
                        <div class="goods-info-title">
                            <div class="goods-info-price" v-if="defaultItem.isShowGoodsPrice===1">
                                ￥<span class="price-number">商品价格</span>
                            </div>
                            <div class="goods-info-title-text" :class="{'no-price':defaultItem.isShowGoodsPrice!==1}">商品标题</div>
                        </div>
                    </div>
                </div>

                <div class="handle-list">
                    <!-- 背景图片 -->
                    <div class="poster-handle-item">
                        <div class="poster-handle-item-title">背景图片</div>
                        <div class="poster-handle-item-value" >
                            <div class="upload-img-area"  @click="chooseImg">
                              <template v-if="defaultItem.posterUrl">
                                <img class="img" :src="defaultItem.posterUrl" alt="">
                                <div class="reupload-btn">更换</div>
                              </template>
                              <template v-else>
                                <div class="no-img">
                                  <img src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/5686bd2b0ab1e33f27522bdc986461d0.png" alt="">
                                  <div>点击上传</div>
                                </div>
                              </template>
                            </div>
                            <div class="img-tip">建议尺寸750x1334px或9：16， JPG、PNG格式，图片小于{{limitPosterSize}}M</div>
                        </div>
                    </div>
                    <!-- 头像昵称 -->
                    <div class="poster-handle-item">
                        <div class="poster-handle-item-title">头像昵称</div>
                        <div class="poster-handle-item-value" >
                            <ss-radio v-model="defaultItem.isShowAvatarAndName" :label="1">展示</ss-radio>
                            <ss-radio v-model="defaultItem.isShowAvatarAndName" :label="0">不展示</ss-radio>
                        </div>
                    </div>
                    <!-- 昵称颜色 -->
                    <div class="poster-handle-item" v-show="defaultItem.isShowAvatarAndName===1">
                        <div class="poster-handle-item-title">昵称颜色</div>
                        <div class="poster-handle-item-value" >
                            <ss-radio v-model="defaultItem.nicknameColor" :label="1">黑色</ss-radio>
                            <ss-radio v-model="defaultItem.nicknameColor" :label="2">白色</ss-radio>
                        </div>
                    </div>
                    <!-- 商品内容 -->
                    <div class="poster-handle-item">
                        <div class="poster-handle-item-title">商品内容</div>
                        <div class="poster-handle-item-value" >
                            <ss-radio v-model="defaultItem.isShowGoodsInfo" :label="1">展示</ss-radio>
                            <ss-radio v-model="defaultItem.isShowGoodsInfo" :label="0">不展示</ss-radio>
                        </div>
                    </div>
                    <!-- 商品价格 -->
                    <div class="poster-handle-item" v-show="defaultItem.isShowGoodsInfo===1">
                        <div class="poster-handle-item-title">商品价格</div>
                        <div class="poster-handle-item-value" >
                            <ss-radio v-model="defaultItem.isShowGoodsPrice" :label="1">展示</ss-radio>
                            <ss-radio v-model="defaultItem.isShowGoodsPrice" :label="0">不展示</ss-radio>
                        </div>
                    </div>
                    <!-- 二维码样式 -->
                    <div class="poster-handle-item qrcode-style">
                        <div class="poster-handle-item-title">二维码样式</div>
                        <div class="poster-handle-item-value" >
                            <ss-radio v-model="defaultItem.isShowQrcode" @change="handleStyle" :label="1">样式一</ss-radio>
                            <ss-radio v-model="defaultItem.isShowQrcode" @change="handleStyle" :label="0">样式二</ss-radio>
                            <ss-radio v-model="defaultItem.isShowQrcode" @change="handleStyle" :label="2">不展示</ss-radio>
                        </div>
                    </div>
                    <!-- 位置调整 -->
                    <div class="poster-handle-item">
                        <div class="poster-handle-item-title no-red">位置调整</div>
                        <div class="poster-handle-item-value" >
                             <div class="restore-btn" @click="centerPosition">恢复默认位置</div>
                             <div class="img-tip" style="width:100%;">头像、昵称、二维码的展示位置可自由拖拽调整</div>
                        </div>
                    </div>

                </div>
                <!-- 底部按钮 -->
                <div class="handle-btns">
                    <div class="restoration-btn cancel-btn" @click='checkAndCancel'>返回</div>
                    <div class="restoration-btn save-btn" @click='savePoster'>保存</div>
                </div>
            </div>
        </div>
        <!-- 返回前的提示 -->
        <ss-modal
            iconType="primary"
            title="保存提示"
            content="是否保存当前海报"
            :visible.sync="showAlert"
            :models="false"
            :btnText="{confirm:'保存',cancel:'取消'}"
            @confirms="savePoster"
            @cancel="cancel"
          >
          </ss-modal>
    </div>
</template>
<script>
import axios from "axios";
import Loading from "../loading";

export default {
  components:{
    Loading
  },
  props: {
    poster: {         // 一个海报对象 存着 id 海报图片 坐标设置......
      type: Object,
    },
    limitPosterSize:{
      type: Number,
      default:1
    },
    resourceType:{                // 商品类型
      type:[String , Number],
    },
    businessId:{                  // 商品id
      type:String,
    },
    activityType: {     // 营销活动类型 - 分享与设置埋点需要用 
      type: [String , Number],
      default: ""
    },
    shareType: {    // 1微页面,2资源课程，3-拼团活动
      type: Number,
    },
  },
  data() {
    return {
      loading:false,
      showAlert:false,
      // hasChangeBg:false,
      defaultItem:{},   // 传进来的poster不能编辑 ， 用这个来复制一遍
      bigAvatar: {
        top: 25,
        left: 93
      },
      bigNickname: {
        top: 58,
        left: 80
      },
      bigCodeQr: {
        top: 326,
        left: 82
      },
      // 拖拽的一些初始化参数
      drag_option: {
        group: {
          pull: false,
          put: false
        },
        animation: 300,
        scroll: true,
        bubbleScroll: true,
        scrollSensitivity: 200
      },
      parentElement: {},
      currentBox: "avatar", //当前移动对象
    };
  },
  created() {
    this.defaultItem = JSON.parse(JSON.stringify(this.poster));
  },
  computed: {
    // 是新建 还是 编辑 根据poster对象的 id 是否存在来判断
    editType(){
      if(this.poster.id){
        return 'edit';
      }else{
        return 'new';
      }
    },
  },
  watch: {
    defaultItem(val) {
        // 每次修改坐标值 都同步修改到  bigAvatar bigNickname bigCodeQr
        this.bigAvatar.left = this.defaultItem.avatarPosition.x;
        this.bigAvatar.top = this.defaultItem.avatarPosition.y;
        this.bigNickname.left = this.defaultItem.nicknamePosition.x;
        this.bigNickname.top = this.defaultItem.nicknamePosition.y;
        this.bigCodeQr.left = this.defaultItem.qrcodePosition.x;
        this.bigCodeQr.top = this.defaultItem.qrcodePosition.y;
    }
  },
  methods: {
    // 点击返回按钮 前置校验
    checkAndCancel(){
      // 修改过 背景图片 alert提示是否要保存
      if(this.defaultItem.posterUrl){
        this.showAlert = true;
      }else{
        this.cancel();
      }
    },
    upSensor(){
      // 埋点数据 神策
      try {
        sensors.track('ADM03003_creat_poster', {
          activity_type: this.shareType === 3 ? this.activityType : '', // 营销活动类型  不是营销活动则传 ''
          resource_type: this.shareType === 2 ? this.resourceType : '',  // 资源类型 营销活动传 '' 
        })
      } catch(err) {
        console.log(err);
      }      
    },
    // 返回 
    cancel(){
      this.$parent.isSettingEditor = false;
      this.$parent.isSettingPoster = true;
    },
    /**
     * savePoster 保存海报
     */
    savePoster() {
      if(!this.defaultItem.posterUrl){
        this.$message.warning("请先选择背景图片");
      }else{
        // 调用 保存接口， 保存成功后，回到海报列表页并重新请求列表接口
        //兼容老数据  坐标 需要加上间距 获取列表的时候-6/12 保存的时候对应的要 +6/12 
        let params = {
          resource_id:this.businessId,
          resource_type:this.resourceType,
          avatar_position:JSON.stringify({
            x:this.defaultItem.avatarPosition.x+4,
            y:this.defaultItem.avatarPosition.y+4
          }),
          is_show_avatar:this.defaultItem.isShowAvatarAndName,
          is_show_fingerprints:this.defaultItem.isShowQrcode,
          is_show_nickname:this.defaultItem.isShowAvatarAndName,
          nickname_color:this.defaultItem.nicknameColor,
          nickname_position: JSON.stringify({
            x:this.defaultItem.nicknamePosition.x+6,
            y:this.defaultItem.nicknamePosition.y+12
          }),
          poster_url:this.defaultItem.posterUrl,
          qrcode_position:JSON.stringify({
            x:this.defaultItem.qrcodePosition.x+5,
            y:this.defaultItem.qrcodePosition.y+5
          }),
          is_show_goods:this.defaultItem.isShowGoodsInfo,
          is_show_price:this.defaultItem.isShowGoodsPrice,
        };
        if(this.defaultItem.id){
          params.poster_id = this.defaultItem.id;
        }
        this.loading = true;
        axios
        .post("/poster_share/add_or_edit_poster", params)
        .then(({ data }) => {
          this.loading = false;
          if (data.code === 0) {
            this.$message.info("保存成功");
            if(this.editType === 'new'){   // 新建海报需要埋点
              this.upSensor();
            }
            this.cancel();
          } else {
            this.$message.warning("保存海报失败");
          }
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
          this.$message.warning("保存海报失败");
        });
      }
    },
    // 从素材库选择图片
    chooseImg(){
      this.$material({
            zIndex:20000,
            multiple:false
          })
          .then(res => {
            console.log(res);
              let imgObj = res.data[0]
              if(!imgObj) return
              let materialSize = parseInt(imgObj.material_size)
              if (materialSize<=1024*this.limitPosterSize) {
                  this.defaultItem.posterUrl = imgObj.url
                  this.hasChangeBg = true;
              }else{
                this.$message.warning(`不能选择超过1M的图片`)
              }
          })
          .catch(action => {
          console.log(action);
          });
    },
    /**
     * hoverShow 选中移动对象的时候处理
     */
    hoverShow(e) {
      let classArray = e.target.className.split(" ");
      this.currentBox = classArray[0] + "";
      this.$refs[this.currentBox].classList.add("move-border");
      
      let disX = e.target.offsetLeft;
      let disY = e.target.offsetTop;
    },
    /**
     * startMove 开始移动
     */
    startMove(e) {
      let that = this;
      let oDiv = e.target;
      let classArray = e.target.className.split(" ");
      this.currentBox = classArray[0] + "";
      let targetDom = this.currentBox;
      that.parentElement.height = this.$refs.poster.clientHeight;
      that.parentElement.width = this.$refs.poster.clientWidth;
      that.parentElement.limitLeft = 0;
      that.parentElement.limitTop = 0;
      that.parentElement.limitBottom =
        that.parentElement.height - e.target.clientHeight;
      that.parentElement.limitRight =
        that.parentElement.width - e.target.clientWidth;
      let disX = e.clientX - oDiv.offsetLeft;
      let disY = e.clientY - oDiv.offsetTop;
      document.onmousemove = function(e) {
        let l = e.clientX - disX;
        let t = e.clientY - disY; //移动当前元素
        // 不能超过父级边界
        if (l < that.parentElement.limitLeft) {
          l = 0;
        } else if (l >= that.parentElement.limitRight) {
          l = that.parentElement.limitRight - 1;
        }
        if (t >= that.parentElement.limitBottom) {
          t = that.parentElement.limitBottom - 1;
        } else if (t < that.parentElement.limitTop) {
          t = 0;
        }
        that[targetDom].left = l;
        that[targetDom].top = t;
        that[targetDom].right = l + e.target.clientWidth;
        that[targetDom].bottom = t + e.target.clientHeight;
      };
      document.onmouseup = function(e) {
        // that.noOver(e);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    /**
     * leaveShow 离开移动对象的时候处理
     */
    leaveShow() {
      // this.removeKeydown();
        this.$refs[this.currentBox].classList.remove("move-border");
        this.defaultItem.avatarPosition.x = this.bigAvatar.left;
        this.defaultItem.avatarPosition.y = this.bigAvatar.top;
        this.defaultItem.nicknamePosition.x = this.bigNickname.left;
        this.defaultItem.nicknamePosition.y = this.bigNickname.top;
        this.defaultItem.qrcodePosition.x = this.bigCodeQr.left;
        this.defaultItem.qrcodePosition.y = this.bigCodeQr.top;
    },
    /**
     * handleStyle 切换样式
     */
    handleStyle(type) {
      if(type===1 || type===0){
        this.$nextTick(()=>{
          let parentWidth = this.$refs.poster.clientWidth;
          const codeWidth = this.$refs.bigCodeQr.clientWidth;
          const codeHeight = this.$refs.bigCodeQr.clientHeight;
          this.bigCodeQr.left = parentWidth / 2 - codeWidth / 2;
          this.defaultItem.qrcodePosition.x = this.bigCodeQr.left;
        })
      }
    },
    /**
     * 恢复默认位置
     */
    centerPosition() {
      // 默认位置  高度位置固定  宽度居中
      const code = this.$refs.bigCodeQr;
      let parentWidth, parentHeight;
      if (this.$refs.poster) {
        parentWidth = this.$refs.poster.clientWidth;
        parentHeight = this.$refs.poster.clientHeight;
      }
      if (code) {
        const codeWidth = this.$refs.bigCodeQr.clientWidth;
        const codeHeight = this.$refs.bigCodeQr.clientHeight;
        this.bigCodeQr.left = parentWidth / 2 - codeWidth / 2;
        this.bigCodeQr.top = 326;
      }
      if (this.$refs.bigAvatar) {
        const avatarWidth = this.$refs.bigAvatar.clientWidth;
        const avatarHeight = this.$refs.bigAvatar.clientHeight;
        this.bigAvatar.left = parentWidth / 2 - avatarWidth / 2;
        this.bigAvatar.top = 25;
      }
      if (this.$refs.bigNickname) {
        const nicknameWidth = this.$refs.bigNickname.clientWidth;
        const nicknameHeight = this.$refs.bigNickname.clientHeight;
        this.bigNickname.left = parentWidth / 2 - nicknameWidth / 2;
        this.bigNickname.top = 58;
      }
      this.defaultItem.avatarPosition.x = this.bigAvatar.left;
      this.defaultItem.avatarPosition.y = this.bigAvatar.top;
      this.defaultItem.nicknamePosition.x = this.bigNickname.left;
      this.defaultItem.nicknamePosition.y = this.bigNickname.top;
      this.defaultItem.qrcodePosition.x = this.bigCodeQr.left;
      this.defaultItem.qrcodePosition.y = this.bigCodeQr.top;
    },
    httpLoadFail(error, msg = "网络连接失败，请稍候再试！") {
      this.$message.warning(msg);
    }
  }
};
</script>
<style lang="scss">
.ss-goods-poster__main_edit {
  // 海报设置的样式
  .poster-setting {
    background-color: #fff;

    .poster-main{
      display: flex;
      padding: 16px 20px 0 40px;

    }
    .poster-pre {
      margin-right: 40px;
      margin-left:14px;
      position: relative;
      flex-shrink: 0;
      width: 220px;
      height: 390px;
      background-size: 100% 100%;
      background-color: #F1F1F1;
    }
    .img-tip{
        width:250px;
        margin-top:8px;
        color: #888888;
        line-height: 20px;
    }
    .poster-handle-item {
        margin-bottom: 24px;
        display: flex;

      &-title{
          flex-shrink: 0;
          width:108px;
          text-align: left;
          color:#333333;
          font-size:14px;
          line-height: 20px;
          &::after{
              content:'*';
              margin-right: -10px;
              color:#E64340;
          }
          &.no-red::after{
            display: none;
          }
      }
      &-value{
          .ss-radio{
              float:left;
              margin-right: 38px;
          }
          .ss-radio.ss-radio__checked{
              color:#333333;
          }
          .restore-btn{
              width: 100px;
                height: 36px;
                line-height: 36px;
                background: #FAFBFC;
                border-radius: 4px;
                text-align: center;
                border: 1px solid #E5E7EB;
                color: #243042;
                cursor: pointer;
          }
          .upload-img-area{
                position: relative;
                width: 80px;
                height: 80px;
                border-radius: 4px;
                background-color: #eee;
                cursor:pointer;
                overflow: hidden;
            .img{
                width:100%;
                height:100%;
            }
            .no-img{
              padding:21px 0;
              text-align: center;
              width:100%;
              height:100%;
              color: #999;
              font-size: 12px;
              img{
                width:16px;
                height:16px;
              }
            }
            .reupload-btn{
                position: absolute;
                bottom:0;
                left:0;
                width: 80px;
                height: 28px;
                background: #000000;
                border-radius: 0px 0px 2px 2px;
                opacity: 0.5;
                color: #fff;
                text-align: center;
                line-height: 28px;

            }
          }
        }
        &.qrcode-style{
            .ss-radio{
                margin-right:16px;
            }
        }
    }
    .restoration-btn {
      width: 100px;
      color: #fff;
      height: 36px;
      line-height: 36px;
      background-color: #105CFB;
      text-align: center;
      border-radius:4px;
      cursor: pointer;
      &:active {
        background-color: #4881f7;
      }
    }

    .handle-btns{
      position: absolute;
      left:0;
      bottom:0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 60px;
      background-color: #F5F7FA;
      border-top: 1px solid #EEEEEE;
      .save-btn{
          margin-left: 10px;
      }
      .cancel-btn{
          margin-right: 10px;
          color:#243042;
          background-color: #fff;
          border: 1px solid #E5E7EB;
          &:active {
            background-color: #E5E7EB;
          }
      }
    }

    //对单选组件样式处理
    .ss-radio,
    .ss-radio-text {
      display: flex;
      align-items: center;
      margin-bottom:0;
      line-height: 20px;
    }
    .ss-radio{
      &:first-of-type{
        margin-right: 30px;
      }
    }
    .color-box {
      margin-right: 5px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: #353535;
      &.color-box__white {
        background-color: #fff;
      }
    }
    // 商品详情
    .goods-info{
        position: absolute;
        top:97px;
        left:20px;
        border-radius:3px;
        &-img{
            width:180px;
            height:135px;
            background-color: #F5F7FA;
            border-radius: 4px 4px 0px 0px;
            &-img{
                position: absolute;
                left: 67px;
                top: 70px;
                width:30px;
                height:24px;
            }
        }
        &-title{
            padding:0 10px;
            width: 180px;
            background: #FFFFFF;
            border-radius: 0px 0px 4px 4px;
            &-text{
                padding-bottom:7px;
                line-height: 20px;
                font-size:12px;
                &.no-price{
                    padding-bottom:0;
                    line-height: 36px;
                }
            }
        }
        &-price{
            color:#FF8533;
            font-size:12px;
            line-height: 24px;
            .price-number{
                font-size:14px;
            }
        }
    }
    //海报拖拽样式
    .poster-pre__item {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      z-index:2;
    }
    .poster-pre__avatar {
      padding: 4px;
      width: 32px;
      height: 32px;
      text-align: center;
      font-size: 12px;
      box-sizing: border-box;
      .avatar-box {
        width: 100%;
        height: 100%;
        color: #fff;
        background: #f1f1f1;
        pointer-events: none;
        img{
          width:24px;
          height:24px;
        }
      }
    }
    .poster-pre__nickname {
      padding: 5px;
      width: 58px;
      // height: 24px;
      color: #e5e5e5;
      line-height: 1.2;
      text-align: center;
      .nickname-text {
        width: 48px;
        line-height: 12px;
        pointer-events: none;
      }
      // .nickname-title {
      //   font-size: 12px;
      // }
    }
    .poster-pre__code {
      height: 54px;
      width: 54px;
      padding: 5px;
      &.code-with-finger{
        width:114px;
      }
    }
    .poster-pre__nickname__black {
      color: #333333;
    }
    .nickname-title {
      pointer-events: none;
    }
    .code-box,
    .fingerprint {
      font-size: 42px;
      line-height: 42px;
      color: #D0D0D0;
      pointer-events: none;
    }
    .fingerprint {
      margin-left: 10px;
      width:42px;height: 42px;
    }
    .move-border {
      outline: 1px dotted rgba(42, 117, 237, 1);
      cursor: move;
      .move-icon {
        display: block;
      }
    }
    .move-icon {
      display: none;
      position: absolute;
      right: -6px;
      top: -6px;
      width:12px;
      height:12px;
      background: url("http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/a618013c9bb7cf99f86d815e63419371.png") no-repeat;
      background-size: cover;
    }
  }
}
</style>

