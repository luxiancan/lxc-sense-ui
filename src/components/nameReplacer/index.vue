<template>
  <span>
    <span v-if="!isAuthShop">{{ name }}</span>
    <span v-else-if="orgType == 999">
      <ww-open-data
        :openid="id"
        :type="nameTypes[type]"
        v-if="type == 0"
      ></ww-open-data>
      <ww-open-data
        :openid="id"
        :type="nameTypes[type]"
        v-else-if="type == 1"
      ></ww-open-data>
      <span v-else-if="isGetOpenId && type == 2">
        <ww-open-data
          :openid="employId"
          :type="nameTypes[type]"
          v-if="isValidData"
        ></ww-open-data>
        <span v-else>{{ displayText }}</span>
      </span>
    </span>
    <span v-else-if="orgType == 1">
      <ww-open-data
        :corpid="corpid"
        v-if="nameObj.isOpenId"
        :openid="nameObj.name"
        :type="nameTypes[type]"
      ></ww-open-data>
      <span v-else>{{ nameObj.name }}</span>
    </span>
  </span>
</template>

<script>
import Axios from "axios";
const TRAINING_FETCH_API = "/training_api/v2/employee/info/v2";
export default {
  name: "SsNameReplacer",
  data() {
    return {
      nameTypes: {
        0: "userName",
        1: "departmentName",
        2: "userName",
      },
      isGetOpenId: false,
      employId: "",
      isAuthShop: false,
      isValidData: false,
      displayText: "",
      orgType: "",
      nameObj: {},
    };
  },
  props: {
    id: {
      type: [String, Number], // shop_type为1的时候传(type 0 传eployId（openid） type 1 传departmentId（openid）type 2 通过userid拿openid)
    },
    type: {
      type: [String, Number],
      required: true,
    }, // 需要展示的名称类型  0 姓名 1 部门名称 2 需要通过userid走接口拿openid的姓名
    name: {
      type: String,
      default: "",
    }, // 未企业微信授权时展示的文案
    isAuth: {
      type: Boolean,
      default: undefined,
    },
  },
  computed: {
    corpid() {
      return window.__qywx_corp_id
    },
  },
  mounted() {
    this.nameRepalcerInit();
  },
  methods: {
    nameRepalcerInit() {
      if (this.isAuth !== undefined) {
        // 先去判断外部有没有传isAuth字段，如果有就以外面的为准，没有就去判断window.__shop_type
        if (this.isAuth === true) {
          this.isAuthShop = true;
        }
        // shop_type为1 已授权企业微信的企学院 org_type为1 已授权企业微信的知识店铺
      } else if (window.__shop_type == 1 || window.__org_type == 1) {
        this.isAuthShop = true;
        if(window.__shop_type == 1){
          this.orgType = '999'; // 企业微信的企学院orgType
        }else{
          this.orgType = window.__org_type;
        }
        this.orgTypeHandler(this.orgType)
      }
    },
     orgTypeHandler(orgType){
       if(orgType == 999){
          this.qywxTrainingShopHandler(this.type);
       }else if(orgType == 1){
          this.qywxShopHandler();
       }else{
         console.log('nameReplacer异常')
         this.isAuthShop = false;
       }
    },
    // 企学院企业微信环境
    qywxTrainingShopHandler(type) {
      // type 2 通过userid拿openid
      if (type == 2) {
        this.getOpenIdByUserId();
      }else {
        setTimeout(()=>{
          WWOpenData.bindAll(document.querySelectorAll('ww-open-data'))
        },1000)
      }
    },
    // 知识店铺企业微信环境
    qywxShopHandler() {
      this.nameObj = this.openIdParser(this.name);
    },
    openIdParser(name) {
      let reg = /##.*?##/g;
      let temp = name.match(reg);
      if (temp) {
        const openIdStr = temp[0];
        const openId = openIdStr.slice(2, openIdStr.length - 2);
        return {
          name: openId,
          isOpenId: true,
        };
      } else {
        return {
          name,
          isOpenId: false,
        };
      }
    },
    async getOpenIdByUserId() {
      try {
        let params = {
          user_id: [this.id],
        };
        const res = await Axios.get(TRAINING_FETCH_API, {
          params: params,
        });
        const { code, data, msg } = res.data;
        if (code === 0) {
          this.employId = data.users[0].employee_id;
          if (this.employId) {
            this.isValidData = true;
          } else {
            const userName = data.users[0].user_name;
            this.displayText = userName || this.name;
          }
        } else {
          this.displayText = this.name;
        }
        this.isGetOpenId = true;
        setTimeout(()=>{
          WWOpenData.bindAll(document.querySelectorAll('ww-open-data'))
        },1000)
      } catch (e) {
        console.log(e, "error location in nameReplacer");
      }
    },
  },
};
</script>

<style lang="scss">
/* @import '@/assets/scss/index.scss';*/
</style>