<template>
<!-- 这里改写jquery的alert弹框 20201228大车 -b端优化概况加速部分 -->
 <div class="jqDailogWrap" v-if="showPop">
    <div class="jqDailog">
        <div class="popBox">
             <a class="clsBtn" @click="closePop"></a>
             <div class="iconContent">
                 <!-- custom类型没有图标 -->
                <img :src="iconUrl" v-if="iconUrl">
                <p class="title">{{popData.title}}</p>
             </div>
             <div class="txtBox">
                <p v-html="popData.text"></p>
             </div>
            <div class="btn-area">
                <div class="btnGroup">
                   <a class="sgBtn _cancel" @click="closePop" v-if="popData.isShowCancelBtn">{{popData.canceltext}}</a>
                   <a class="sgBtn _ok" @click="confirmPop">{{popData.oktext}}</a>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
import { popIcon} from '../utils/mapTool';

export default {
  props: {
        popInfo: {
            type: Object,
            default: () => {
                return {};
            }
        }
   },
  data() {
    return {
        showPop:true,
        popDefault:{
            type:'info',
            text:'提示',
            title: '提示',
            btn: 2,
            canClose: true,
            oktext:'确定',
            canceltext:'取消',
            isShowCancelBtn:true
        }
    };
  },
  created(){
  },
  mounted(){
  },
  computed: {
    //弹框图标
    iconUrl(){
        return popIcon[this.popInfo.type] || null;
    },
    popData(){
        console.log('popData',this.popInfo,Object.prototype.toString.call(this.popInfo))
        if( this.popInfo && Object.prototype.toString.call(this.popInfo) === '[object Object]'){
            return Object.assign(this.popDefault,this.popInfo);
        }else{
            return this.popInfo
        }       
    }
  },
  methods:{
     closePop(){
         this.showPop = false;
         this.$emit('closePop');
     },
     confirmPop(){
         this.showPop = false;
         this.$emit('confirmPop');
     }
  }

};
</script>

<style lang="scss" scoped>
.verticalAlign{ 
    vertical-align:middle; 
    display:inline-block; 
    height:100%; 
    margin-left:-1px;
}
/*图层*/
.jqDailog{ 
    transition: opacity .5s;
	position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    background-color: rgba(0,0,0,.3); 
    z-index: 100000;
}
/*提示框大小*/
.jqDailog .popBox {
	padding: 20px;
	border-radius: 4px;
	background-color: #ffffff;
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: 1000001;
	width: 540px;
	min-height: 300px;
	margin-left: -270px;
	font-weight: bold;
	color: #353535;
}
/*关闭按钮*/
.jqDailog .popBox .clsBtn{
	display: block;
	width: 24px;
	height: 24px;
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	background: url('../images/icon_Pop-ups_close.svg') center no-repeat;
}

.jqDailog .popBox .iconContent{
	text-align: center;
}
/*标题*/
.jqDailog .popBox .iconContent .title{
	margin: 0 auto 10px;
	line-height: 1;
	font-size: 18px;
	font-weight: 600;
	color: #353535;
}
.jqDailog .popBox .iconContent img {
	margin-top: 20px;
	width: 60px;
	height: 60px;
	float: none;
}
.jqDailog .popBox .iconContent img + .title{
	margin-top: 20px;
}

/*段落*/
.jqDailog .popBox .txtBox{
	width:400px;
	margin: 10px auto;
	overflow: hidden;
	text-align: center;
	font-style: normal;
	font-weight: normal;
	margin-bottom:60px;
}

.jqDailog .popBox .txtBox p {
	font-size: 14px;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: auto;
}
.jqDailog .popBox .txtBox p a{
	display: inline-block;
}
.jqDailog .popBox .btnGroup{
	text-align: center;
}
.jqDailog .popBox .btnGroup .sgBtn{
    margin-top: 14px; 
    margin: 0 10px;
}
.jqDailog .popBox .sgBtn{
	display: inline-block;
	cursor: pointer;
	width: 100px;
	height: 36px;
	line-height: 36px;
	text-align: center;
	font-weight: normal;
	border-radius: 2px;
}
.jqDailog .popBox .sgBtn._ok{
	background-color: #2a75ed;
	color: #fff;
}
.jqDailog .popBox .sgBtn._delete{
	background-color: #FB6161;
	color: #fff;
}
.jqDailog .popBox .sgBtn._disabled{
	pointer-events: none;
	background-color: #FFDBDB;
	color: #fff;
}
.jqDailog .popBox .sgBtn._cancel{
	pointer-events: all;
	background-color: #fafbfc;
	color: #353535;
	border: solid 1px #e5e7eb;
}

.btn-area {
	position:  absolute;
	bottom: 40px;
	width: 500px;
}
/*提示内容新增自定义样式*/
.jqDailog .popBox .txtBox p .msgdiv{
    line-height: 26px; 
    overflow-x: hidden; 
    overflow-y: auto;
    margin:26px 25px 10px 1px;
}

.jqDailog .popBox #removePackageList {
	max-height: 240px;
	background-color: #F5F7FA;
	padding: 0 10px;
	overflow-y: auto;
}
.jqDailog .popBox .confirm {
	text-align: center;
}
.jqDailog .popBox #confirmDelete {
	width: 100%;
	height: 36px;
	background: rgba(255,255,255,1);	
	margin-top: 10px;
    padding: 7px 10px;
	font-size: 14px;
	border: 1px solid rgba(238,238,238,1);
    border-radius: 2px;	
}
.jqDailog .popBox #confirmDelete.sortInput {
	width: 340px;
}
</style>

