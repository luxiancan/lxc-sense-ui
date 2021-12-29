<template>
  <div class="ss-preview-img-area">
    <div class="mask" @click="close"></div>
    <div class="preview-content">
        <div class="preview-title" v-if="title">
            {{title}}
        </div>
        <div class="preview-img-item">
            <img :src="img.posterUrl" alt="">

            <!-- 头像 昵称 二维码 绝对定位的元素 -->
                <!-- 头像 -->
            <div
                v-if="img.isShowAvatarAndName == 1 && img.isDefault !== 1"
                class="bigAvatar poster-pre__avatar poster-pre__item"
                ref="bigAvatar"
                :style="{top: `${img.avatarPosition.y}px`, left: `${img.avatarPosition.x}px`}"
            >
                <div class="avatar-box">
                <i class="font_family icon-img_avatar_zhanwei1"></i>
                </div>
            </div>
            <!-- 昵称 -->
            <div
                v-if="img.isShowAvatarAndName == 1 && img.isDefault !== 1"
                class="bigNickname poster-pre__nickname poster-pre__item"
                :class="{'poster-pre__nickname__black':img.nicknameColor ==1}"
                ref="bigNickname"
                :style="{top: `${img.nicknamePosition.y}px`, left: `${img.nicknamePosition.x}px`}"
            >
                <!-- <i class="font_family icon-avatar avatar-box"></i> -->
                <div class="nickname-text">
                <i class="font_family icon-img_name_zhanwei1 nickname-title"></i>
                </div>
            </div>
            <!-- 二维码 -->
            <div
                v-if="(img.isShowQrcode===1 || img.isShowQrcode===0) && img.isDefault !== 1"
                class="bigCodeQr poster-pre__code poster-pre__item"
                :class="{'poster-prc__fingerprint' : img.isShowQrcode ==1}"
                ref="bigCodeQr"
                :style="{top: `${img.qrcodePosition.y}px`, left: `${img.qrcodePosition.x}px`}"
            >
                <i class="font_family icon-img_qrcode_zhanwei1 code-box"></i>
                <img class="fingerprint" v-show="img.isShowQrcode == 1" src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/859093d21aee5d46f4a58d3842f81d0d.png" alt="" >
            </div>
            <!-- 商品详情 -->
            <div class="goods-info" v-if="img.isShowGoodsInfo===1 && img.isDefault !== 1">
                <div class="goods-info-img">
                    <img class="goods-info-img-img" src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/9ed6644ff822ebb17625b89250a96679.png" alt="">
                </div>
                <div class="goods-info-title">
                    <div class="goods-info-price" v-if="img.isShowGoodsPrice===1">
                        ￥<span class="price-number">商品价格</span>
                    </div>
                    <div class="goods-info-title-text" :class="{'no-price':img.isShowGoodsPrice!==1}">商品标题</div>
                </div>
            </div>

        </div>
        <div class="close-box" @click="close">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhYPntKAv5Z+656GA5Zu+5qCHL2ljb25fY2xvc2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWFg+e0oC/ln7rnoYDlm77moIcvaWNvbl9jbG9zZSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwxMSBMMTIsMy41IEMxMiwzLjIyMzg1NzYzIDEyLjIyMzg1NzYsMyAxMi41LDMgQzEyLjc3NjE0MjQsMyAxMywzLjIyMzg1NzYzIDEzLDMuNSBMMTMsMTEgTDIwLjUsMTEgQzIwLjc3NjE0MjQsMTEgMjEsMTEuMjIzODU3NiAyMSwxMS41IEMyMSwxMS43NzYxNDI0IDIwLjc3NjE0MjQsMTIgMjAuNSwxMiBMMTMsMTIgTDEzLDE5LjUgQzEzLDE5Ljc3NjE0MjQgMTIuNzc2MTQyNCwyMCAxMi41LDIwIEMxMi4yMjM4NTc2LDIwIDEyLDE5Ljc3NjE0MjQgMTIsMTkuNSBMMTIsMTIgTDQuNSwxMiBDNC4yMjM4NTc2MywxMiA0LDExLjc3NjE0MjQgNCwxMS41IEM0LDExLjIyMzg1NzYgNC4yMjM4NTc2MywxMSA0LjUsMTEgTDEyLDExIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0IyQjJCMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNTAwMDAwLCAxMS41MDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuNTAwMDAwLCAtMTEuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="">
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'imgPreviewer',
    props:{
        img:{
            type:Object,
        },
        posterType:{
            type:[Number, String],
            default: 1
        },
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return {

        }
    },
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
    .ss-preview-img-area{
        position: fixed;
        z-index:10003;
        left:0;right: 0;
        top:0;bottom: 0;
        .mask{
            width: 100%;
            height:100%;
            background-color: rgba(0,0,0,0.5);
        }
        .preview-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            padding: 40px 50px; 
            top:50%;
            left:50%;
            margin-top:-271px;
            margin-left:-174px;
            width: 347px;
            height: 542px;
            background: #FFFFFF;
            border-radius: 4px;


            .preview-title{
                margin-bottom:24px;
                width: 100%;
                word-break:break-all;
                text-align:center;
                line-height: 24px;
                color:#333333;
            }
            .preview-img-item{
                position: relative;
                width: 220px;
                height: 390px;
                img{
                    width:100%;
                    height:100%;
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
                    }
                }
                .poster-pre__nickname {
                    padding: 5px;
                    width: 58px;
                    height: 24px;
                    color: #e5e5e5;
                    line-height: 1.2;
                    text-align: center;
                    .nickname-text {
                        width: 48px;
                        line-height: 12px;
                        pointer-events: none;
                    }
                }
                .poster-pre__code {
                    height: 54px;
                    width: 54px;
                    padding: 5px;
                }
                .poster-prc__fingerprint {
                    width: 114px;
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
                    color: #e5e5e5;
                    pointer-events: none;
                }
                .fingerprint {
                    margin-left: 10px;
                    height:42px;
                    width:42px;
                }
            }
            .close-box{
                position: absolute;
                top: 20px;
                right: 20px;
                width: 20px;
                height: 20px;
                cursor:pointer;
                img{
                    width: 20px;
                    height: 20px;
                }
            }
        }

    }
    

</style>