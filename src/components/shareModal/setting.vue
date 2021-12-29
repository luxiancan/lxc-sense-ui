<template>
  <div class="ss-share-setting">
    <loading v-show="loading"></loading>
    <div class="ss-use-tip" v-show="$parent.shareType == 1">
      如需对所有微页面设置分享语，请前往
      <a
        target="_blank"
        href="/shopSetting#/shopSetting"
        class="ss-set-doc"
      >【{{isCompany ? '学院' : '店铺'}}设置-品牌形象-分享自定义】</a>
      进行设置
    </div>
    <div class="ss-top-content">
      <div class="ss-left-previewer">
        <div class="ss-title">样式预览</div>
        <div class="ss-preview-content">
          <img
            class="ss-preview-pic"
            src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/cmVzb3VyY2UtY291cnNlQXJ0aWNsZS02MTA5MDUwNQ.png"
            alt="pic"
          />
          <div class="ss-share-card">
            <div class="ss-card-title">{{share_title || '分享标题'}}</div>
            <div class="ss-card-desc">{{share_desc || '分享描述'}}</div>
            <div class="ss-card-img">
              <img :src="share_img_url" v-show="share_img_url" alt="share_img_url" />
            </div>
          </div>
        </div>
      </div>
      <div class="ss-editor">
        <div class="ss-content">
          <div class="ss-item-setting">
            <span class="ss-item-label">分享标题</span>
            <input class="ss-item-input" v-model="share_title" maxlength="24"
             placeholder="请输入分享标题" />
            <p class="ss-error-tip" v-show="is_checked && !share_title.trim()">分享标题不能为空</p>
          </div>
          <div class="ss-item-setting">
            <span class="ss-item-label">分享描述</span>
            <textarea
              class="ss-item-textarea"
              v-model="share_desc"
              :placeholder="isCompany ? '请收藏此培训链接': '请输入分享描述'"
              name="desc"
              cols="30"
              rows="10"
              maxlength="36"
            ></textarea>
            <p class="ss-error-tip" v-show="is_checked && !share_desc.trim()">分享描述不能为空</p>
          </div>
          <div class="ss-item-setting img-setting">
            <span class="ss-item-label">分享图片</span>
            <div class="ss-upload-pic"  @click="uploadImgMaterial">
              <template  v-if="share_img_url">
                <img class="ss-img-pic" :src="share_img_url" alt="ss-img-pic" />
                <div class="rechoose" >重新上传</div>
              </template>
              <template  v-else>
                <div class="ss-empty-pic">
                <div class="ss-upload-btn">
                  <span style="font-size:24px;font-weight: 300;"> + </span>
                  <span>点击上传</span>
                </div>
              </div>
              </template>
              
            </div>
            <p class="ss-error-tip"  style="padding-left: 175px;" v-show="is_checked && !share_img_url">分享图片不能为空</p>
          </div>
          <div class="ss-tip">图片格式为：bmp，png，jpeg，jpg，gif，尺寸1:1，不可大于1M。</div>
        </div>
      </div>
    </div>

    <div class="ss-confirm-btns">
      <div class="ss-cancel" @click="$parent.isSetting=false">取消</div>
      <div class="ss-confirm" @click="setShareInfo">保存</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../loading";


export default {
  name: "Sssetting",
  data() {
    return {
      share_id: "",
      share_title: "",
      share_desc: "",
      share_img_url: "",
      share_img_url_compressed: "",
      hasSetting: false, // 是否查询到设置
      loading: true,
      is_checked: false
    };
  },
  props:{
    resourceType: {     // 商品类型 - 海报设置需要用 
      type: [String , Number],
      default: 1
    },
    activityType: {     // 营销活动类型 - 分享与设置埋点需要用 
      type: [String , Number],
      default: ""
    },
    shareType: {    // 1微页面,2资源课程，3-拼团活动
      type: Number,
    },
  },
  components: {
    Loading
  },
  created() {
    this.getShareInfo();
  },
  computed: {
    isCompany() {
      let version = window.globVersionType;
      if ([170, 171].indexOf(version) > -1) {
        return true;
      }
      return false;
    }
  },
  methods: {
    getShareInfo() {
      let data = {
        share_type: this.$parent.shareType,
        business_id: this.$parent.businessId
      };
      this.loading = true;
      axios
        .post("/page_share/get_custom_share_conf", data)
        .then(({ data }) => {
          if (data.code === 0) {
            let { share_title, share_desc, share_img_url, id } = data.data;
            this.share_title = share_title || '';
            this.share_desc = share_desc || '';
            this.share_img_url = share_img_url || '';
            if(id) {
              this.share_id = id;
              this.hasSetting = true;
            } else {
              this.hasSetting = false;
            }
          } else if (data.code === 1) {
            this.hasSetting = false;
          } else {
            this.$message.warning("获取失败");
          }
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
          this.$message.warning("获取失败");
        });
    },
    setShareInfo() {
      this.is_checked = true;
      if (!this.share_title.trim() || !this.share_desc.trim() || this.share_img_url === '') {
        return false;
      }
      let url = this.hasSetting
        ? "/page_share/edit_custom_share_conf"
        : "/page_share/create_custom_share_conf";

      this.loading = true;

      let data = {
        share_title: this.share_title.trim(),
        share_desc: this.share_desc.trim(),
        share_img_url: this.share_img_url,
        share_img_url_compressed: this.share_img_url
      };

      if (this.hasSetting) {
        data["id"] = this.share_id;
      } else {
        data["share_type"] = this.$parent.shareType;
        data["business_id"] = this.$parent.businessId;
      }

      axios
        .post(url, data)
        .then(({ data }) => {
          this.loading = false;

          if (data.code === 0) {
            this.$message.info("设置成功");
            this.upSensor();
            this.hasSetting = true;
            this.$parent.isSetting = false;
            this.share_id = data.id;
          } else {
            this.$message.warning("设置失败");
          }
        })
        .catch(error => {
          this.loading = false;
          this.$message.warning("设置失败");
        });
    },
    upSensor(){
      // 埋点数据 神策
      try {
        sensors.track('ADM03003_share_setting', {
          activity_type: this.shareType === 3 ? this.activityType : '', // 营销活动类型  不是营销活动则传 ''
          resource_type: this.shareType === 2 ? this.resourceType : '',  // 资源类型 营销活动传 '' 
        })
      } catch(err) {
        console.log(err);
      }      
    },
    uploadImgMaterial() {
      this.$material({
        type: "picture",
        showClose: true,
        multiple: false
      })
        .then(res => {
          let { material_size, url } = res.data[0];
          if (!url) return false;
          let size = Number(material_size) / 1024;
          if (size > 1) {
            //判断图片上传大小 1M
            this.loading = false;
            this.$message.warning("图片不能大于1M，请重新选择上传");
            return false;
          }
          this.share_img_url = url;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.ss-share-setting {
  margin-top: -24px;
  .ss-top-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px 0 0;
  }

  .ss-confirm-btns {
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

    &.mb11 {
      margin-bottom: 11px;
    }

    .ss-confirm,
    .ss-cancel {
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
    .ss-confirm {
      margin-left: 10px;
    }
    .ss-cancel {
      margin-right: 10px;
      color:#243042;
      background-color: #fff;
      border: 1px solid #E5E7EB;
      &:active {
        background-color: #E5E7EB;
      }
    }
  }

  .ss-left-previewer {
    width: 197px;
    margin: 0 40px 0 78px;

    .ss-title {
      height: 36px;
      font-size: 14px;
      font-weight: 400;
      color: #353535;
      line-height: 36px;

    }

    .ss-preview-content {
      position: relative;
      width: 197px;
      height: 350px;

      .ss-preview-pic {
        width: 100%;
        height: 100%;
      }

      .ss-share-card {
        position: absolute;
        width: 252px;
        min-height: 102px;
        left: 40px;
        top: 59px;
        padding: 14px;
        background: transparent;
        transform: scale(0.5);
        transform-origin: 0 0;
        background: #ffffff;
      }

      .ss-card-title {
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        margin-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break:break-all; 
        word-wrap:break-word;
      }

      .ss-card-desc {
        max-width: 168px;
        font-size: 12px;
        color: #888888;
        line-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break:break-all; 
        word-wrap:break-word;
      }

      .ss-card-img {
        width: 52px;
        height: 52px;
        position: absolute;
        right: 12px;
        bottom: 8px;
        background: #f5f6f5;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .ss-editor {
    .ss-content {
      padding-top:36px;
      .ss-item-setting {
        padding-bottom: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;
        &.img-setting{
          padding-bottom: 0;
        }
        .ss-error-tip {
          position: absolute;
          padding-left: 93px;
          left: 0;
          bottom: 4px;
          font-size: 12px;
          color: #fb6161;
          margin: 0;
        }
      }
      .ss-item-label {
        display: inline-block;
        position: relative;
        margin-right: 33px;
        height: 20px;
        color: #333333;
        line-height: 20px;

        &::before {
          content: "*";
          color: red;
          position: absolute;
          top: 0px;
          right: -8px;
        }
      }

      .ss-item-input {
        height: 36px;
        line-height: 36px;
        width: 280px;
        border: 1px solid #eee;
        padding: 0 8px;
        outline: none;
        &:focus {
          border: solid 1px #105CFB;
        }
      }

      .ss-item-textarea {
        width: 280px;
        height: 68px;
        padding: 8px;
        border: 1px solid rgba(242, 242, 242, 1);
        outline: none;
        resize: none;
        &:focus {
          border: solid 1px #105CFB;
        }
      }

      .ss-upload-pic {
        position: relative;
        width: 80px;
        height: 82px;
        background: #F5F7FA;
        border-radius: 4px;
        border: 1px solid #EEEEEE;
        display: inline-block;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: hidden;
        .ss-img-pic,
        .ss-empty-pic {
          display: inline-block;
          width: 80px;
          height: 80px;
          border-radius: 2px;
        }

        .ss-empty-pic {
          background: #eee;
        }
        .ss-upload-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          flex-direction: column;
          background: rgba(250, 251, 252, 1);
          border-radius: 2px;
          line-height: 20px;
          font-size: 12px;
          color: #999999;
          text-align: center;
          cursor: pointer;
        }
        .rechoose{
          display: none;
          position: absolute;
          top:0;
          left:0;
          height:100%;
          width:100%;
          line-height: 80px;
          text-align: center;
          z-index:10;
          color: rgba(255,255,255,0.7);
          cursor:pointer;
          background-color: rgba(0 , 0, 0,0.5);
        }
        &:hover{
          .rechoose{
            display: block;
          }
        }
        
      }
    }
  }
  .ss-tip {
      padding-left:72px;
      margin-top:6px;
      width: 330px;
      font-size: 14px;
      color: #999999;
      line-height: 20px;

    }
  .ss-use-tip {
    padding-top: 16px;
    color: #b2b2b2;
    a {
      color: #105CFB;
      text-decoration: none;
    }
  }
}
</style>
