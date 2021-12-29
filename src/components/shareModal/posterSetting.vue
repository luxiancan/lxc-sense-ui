<template>
  <div class="ss-share-poster-setting">
    <loading v-show="loading"></loading>
    <div class="poster-list-view">
      <div class="poster-title">
        <span>自定义海报</span>
        <div class="poster-title-img">
          <img src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/34c30bfa8b3f8cf8b195477e2d1e4b9e.png" alt="">
          <div class="img-hover-tips">
            1、用户分享时，系统优先展示自定义海报
            <br>
            2、如未设定自定义海报，则优先展示系统推荐海报
            <br>
            3、系统推荐海报无法编辑和删除
          </div>
        </div>
        
      </div>
      <div class="poster-pic" >
        <!-- 固定的添加海报按钮 -->
        <div
          class="poster-item__add poster-item"
          v-if="customizedPosterLength < limitPoster"
          :style="{width: smallPosterSize.width,height:smallPosterSize.height}"
          @click.stop="addPoster"
        >
          <i class="font_family icon-icon_add add-icon"></i>
        </div>
        <section v-for="(item, index) in posterInfo" :key="index">
          <div
            class="poster-item poster-item__pic"
            :class="{'poster-item__acitive':item.isShow}"
            :style="{width: smallPosterSize.width,height:smallPosterSize.height}"
          >
            <img :src="item.posterUrl" alt class="poster-img" @click="previewPoster(item)" v-if="item.posterUrl">
            <!-- 默认的海报显示默认标志 -->
            <template v-if="item.isDefault">
              <div class="default-poster-icon"></div>
            </template>
            <!-- 自定义的海报才能 编辑和删除 -->
            <template v-else>
              <i
                class="font_family icon-icon_closecopy delete-icon"
                @click.stop="toDeletedPoster(item.id , index)"
              ></i>
              <div class="edit-poster" @click="editPoster(item)">编辑</div>
            </template>
          </div>
        </section>
      </div>
      <div class='limit-tips'>{{customizedPosterLengthTips[customizedPosterLength]}}</div>
    </div>
    <!-- 底部按钮 -->
    <div class="handle-btns">
        <div class="restoration-btn cancel-btn" @click='goBack'>返回</div>
    </div>
    <imgPreviewer
      v-if="isShoPreviewImg"
      :img="previewingPoster"
      title="用户可通过悬浮分享按钮进入海报页面，分享该海报"
      @close="isShoPreviewImg = false"
    ></imgPreviewer>
    <!-- 返回前的提示 -->
    <ss-modal
        iconType="error"
        title="删除"
        content="海报删除后不可恢复，确认删除吗？"
        :visible.sync="isShowDeleteAlert"
        :models="false"
        :btnText="{confirm:'确定',cancel:'取消'}"
        @confirms="deletedPoster"
        @cancel="cancelDelete"
      >
      </ss-modal>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../loading";
import imgPreviewer from "./imgPreviewer.vue";


export default {
  name: "SssettingPoster",
  data() {
    return {
      loading:false,
      isShoPreviewImg:false,
      // 删除海报
      isShowDeleteAlert:false,
      toDelIndex:'',
      toDelID:'',
      // 预览海报
      previewingPoster:null,
      // 海报列表
      posterInfo:[],
      limitPoster:3,
      customizedPosterLengthTips:['最多可添加3张自定义海报','还可添加2张自定义海报','还可添加1张自定义海报','自定义海报数量已达上限'],
      smallPosterSize: {
          width: "70px",
          height: "124px"
      },
      defaultPoster:{  // 一个初始的海报组件 没有id 和海报图片
        id:'',                                // 海报的id
        isShowAvatarAndName:1,                // 是否展示头像和昵称
        nicknameColor:1,                      // 昵称颜色
        isShowGoodsInfo:1,                    // 是否展示商品内容
        isShowGoodsPrice:1,                   // 是否展示商品价格
        isShowQrcode:1,                       // 是否展示二维码和样式选择
        avatarPosition:{"x":93,"y":25},       // 头像坐标
        nicknamePosition:{"x":80,"y":58},     // 昵称坐标
        qrcodePosition:{"x":46,"y":326},      // 二维码坐标
        posterUrl:'',                         // 海报图片
      }
    };
  },
  components: {
    Loading,
    imgPreviewer
  },
  created() {
    this.getPosterList();
  },
  computed: {
    // 自定义的海报数量
    customizedPosterLength(){
      return this.posterInfo.filter(val=>!val.isDefault).length;
    },
    isCompany() {
      let version = window.globVersionType;
      if ([170, 171].indexOf(version) > -1) {
        return true;
      }
      return false;
    }
  },
  props:{
    resourceType:{                // 商品类型
      type:[String , Number],
    },
    businessId:{                  // 商品id
      type:String,
    },
  },
  methods: {
    // 根据id 获取商品的 海报列表  当前海报限制3张，所以不需要翻页，直接定死page 和per_page
    getPosterList(){
      this.loading = true;
      let params = {
        'resource_id':  this.businessId,                 //	资源id
        'resource_type':  this.resourceType,             //	资源类型
        'per_page': 20,                                  //	每页数量 默认20
        'page': 1,                                       //	页码 默认1
        'page_opt':2                                     // 是否分页 1分 2不分 默认2
      }
      axios
        .post("/poster_share/get_poster_list", params)
        .then(({ data }) => {
          this.loading = false;

          if (data.code === 0) {
            this.total = data.data.total;
            this.posterInfo = this.handlePosterList(data.data.list);
          } else {
            this.$message.warning("获取海报列表失败");
          }
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
          this.$message.warning("获取海报列表失败");
        });
    },
    // 接口返回的海报列表 处理数据格式 映射成前端字段
    handlePosterList(list){
      return list.map(val=>{
        let avatar_position = JSON.parse(val.avatar_position);
        let nickname_position = JSON.parse(val.nickname_position);
        let qrcode_position = JSON.parse(val.qrcode_position);
        return {
          id: val.id || '',                                         // 海报的id
          isShowAvatarAndName: val.is_show_avatar,                  // 是否展示头像和昵称
          nicknameColor: val.nickname_color,                        // 昵称颜色
          isShowGoodsInfo: val.is_show_goods,                       // 是否展示商品内容
          isShowGoodsPrice: val.is_show_price,                      // 是否展示商品价格
          isShowQrcode: val.is_show_fingerprints,                   // 是否展示二维码和样式选择

          avatarPosition: val.avatar_position?{          // 头像坐标  兼容老数据 需要减去间距
            x:avatar_position.x - 4,
            y:avatar_position.y - 4
          } : null,                      
          nicknamePosition: val.nickname_position?{  // 昵称坐标  兼容老数据 需要减去间(距
            x:nickname_position.x - 6,
            y:nickname_position.y - 12
          }: null,                  
          qrcodePosition: val.qrcode_position?{      // 二维码坐标  兼容老数据 需要减去间距
            x:qrcode_position.x - 5,
            y:qrcode_position.y - 5
          } : null,                      
          posterUrl:val.poster_url,                                 // 海报图片
          isDefault: val.is_default,                                // 是否是默认海报
        }
        
      })
    },
    // 返回分享设置页
    goBack(){
      this.$parent.isSettingPoster = false;
    },
    // 添加海报
    addPoster(){
      // 添加一个默认的 海报 并进入海报编辑页
      this.$parent.edittingPoster = this.defaultPoster;
      this.$parent.isSettingEditor = true;
      this.$parent.isSettingPoster = false;
    },
    // 删除海报前确认
    toDeletedPoster(id,index){
      this.isShowDeleteAlert = true;
      this.toDelID = id;
      this.toDelIndex = index;
    },
    // 取消 删除
    cancelDelete(){
      this.isShowDeleteAlert = false;
      this.toDelID = '';
      this.toDelIndex = '';
    },
    // 删除海报
    deletedPoster(){
      this.loading = true;
      axios
        .post("/poster_share/del_poster", {poster_id:this.toDelID})
        .then(({ data }) => {
          this.loading = false;
          if (data.code === 0) {
            this.$message.info("删除成功");
            this.posterInfo.splice(this.toDelIndex,1);
          } else {
            this.$message.warning("删除海报失败，请稍后再试");
          }
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
          this.$message.warning("删除海报失败，请稍后再试");
        });
    },
    // 预览海报
    previewPoster(poster){
      this.previewingPoster = poster;
      this.isShoPreviewImg = true;
    },
    // 编辑 海报
    editPoster(item){
      this.$parent.edittingPoster = item;
      this.$parent.isSettingEditor = true;
      this.$parent.isSettingPoster = false;
    },
  }
};
</script>

<style lang="scss">
.ss-share-poster-setting {
  margin-top: 16px;
  
  .poster-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
    font-size: 14px;
    color: #353535;
    line-height: 20px;
    &-img{
      position:relative;
      margin-left: 8px;
      width:14px;
      height:14px;
      line-height:14px;
      &:hover{
        .img-hover-tips{
          display: block;
        }
      }
      .img-hover-tips{
        display: none;
        line-height: 20px;
        position: absolute;
        left:24px;
        top:-10px;
        padding:16px ;
        width: 273px;
        background: #FFFFFF;
        box-shadow: 0px 2px 8px 0px rgba(200, 201, 204, 0.5);
        z-index: 10;

        &::after{
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          top: 12px;
          left: -5px;
          border-color: transparent #fff transparent transparent;
          border-style: solid;
          border-width: 5px 7px 5px 0;
        }
        &::before{
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          top: 12px;
          left: -7px;
          border-color: transparent #eaeaea transparent transparent;
          border-style: solid;
          border-width: 5px 7px 5px 0;
        }
      }
      img{
        width:14px;
        height:14px;
      }

    }
  }

  .poster-pic{
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;


    .poster-item__add {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #979797;
      border:1px dashed rgba(151,151,151,1);
      cursor: pointer;
      .add-icon {
        font-size: 18px;
        line-height: 18px;
      }
    }
    .poster-item__pic {
      border: 1px solid #eeeeee;
      &:hover{
        .default-poster-icon{
          display: block;
        }
      }
    }
    .poster-item {
      position: relative;
      margin-right: 16px;
      cursor: pointer;
      margin-bottom: 16px;
      .edit-poster{
        position: absolute;
        bottom: 0;
        left:0;
        width:100%;
        height:28px;
        line-height:28px;
        text-align:center;
        color:#fff;
        background:rgba(0,0,0,0.5);
      }
      .delete-icon {
        position: absolute;
        right: -8px;
        top: -8px;
        width: 16px;
        height: 16px;
        color: #999999;
        border-radius: 50%;
        background-color: #fff;
        font-size: 16px;
      }
      .poster-img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
      }

      .default-poster-icon{
        display: none;
        position: absolute;
        top:0;right:-3px;
        width:60px;
        height:20px;
        background: url("http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/4515324f95fea15cb30b432c6ad204ba.png");
        background-size: cover;

      }
    }

  }
}
.limit-tips{
  height: 20px;
  font-size: 14px;
  color: #999999;
  line-height: 20px;
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
  .restoration-btn {
    width: 100px;
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    text-align: center;
    border-radius:4px;
    cursor: pointer;
    color:#243042;
    border: 1px solid #E5E7EB;
  }
  .cancel-btn{
    &:active {
        background-color: #E5E7EB;
      }
  }

}
</style>