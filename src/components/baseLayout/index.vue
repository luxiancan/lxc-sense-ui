<template>
  <div class="baseLayoutWrap">
      <dialog-box v-if="showDialog" @closePop="closePop" @confirmPop="confirmPop" :popInfo="popInfo"/>
      <hint-model v-if="showEditModal" @editLeave="editLeave" @cancelLeave="cancelLeave"/>
      <div id="TopPrompt" class="topPrompt" style="opacity:0;height:0">
        <div class="topPromptContent"></div>
      </div>
  </div>
</template>
  
<script>
import { $JQ } from './utils/findDom';
import dialogBox from './components/dialog.vue'; 
import { readCookie } from './utils/jsTools';
import { permissionList } from './utils/config'; 
import hintModel from './components/hintModel'
import './utils/windowMethods';
const ENTERPRISE_WECHAT_AUTH = '1'; // 企业微信授权用户类型


export default {
  name: 'SsbaseLayout',
  props: {
    loginInfo: {
      type: Object,
      default: ()=>{
          return {
              loginKey:'appsc',
              hasMutiShop:true
          }
      } 
    }
  },
  data() {
    return {
       showDialog:false, 
       popInfo:null,
       showEditModal:false
    };
  }, 
  components:{
    dialogBox,
    hintModel
  },
  created(){
    
    this.$nextTick(()=>{
      this.initEvent();
      this.loadingTime(); //页面加载时间统计
      this.initLoginState(); // 轮询登录态变化
      this.initCheckbox(); // checkbox 初始化 
      this.initWindowMethods();// 初始化window方法
      this.initUnActiveTabClick(); // 无权限的检查
      this.techSuportClick();//小鹅通技术支持    
      this.hideScrollBar(); // 火狐浏览器影藏滚动条 
    })
  },
  mounted(){
  },
  computed: {
  },
  methods:{
     // 初始化事件 -待处理
     initEvent(){      
          //插件版本过期提醒
            $JQ('body').on('click', '.plug_overtime',function () {               
                    let text = '该功能需要在开通标准版的基础上进行付费使用，建议尽快升级至标准版，再购买该功能的使用权限';
                    if (this.hasClass('no_need_buy')) {
                        text = '该功能需要在开通标准版的基础上进行使用，建议尽快升级至标准版';
                    }
                    if (this.hasClass("distributionShop")) {
                        text = '该功能需要在开通标准版基础上方可使用。您当前为分销版店铺，如需使用建议升级至标准版，升级后即可购买该服务使用';
                    }
                    
                    this.popInfo = {
                        text,
                        type:'info',
                        oktext:'立即升级'
                    }
                    // 弹出框
                    this.showDialog = true;
                    this.confirmPop =  () => {
                            window.location.href = '/personal_service/service_buy';
                      }
                    this.closePop = () => {
                            window.location.href = '/personal_service/service_buy';
                      }
                    
                             
            })
            //版本过期提醒
            $JQ('body').on('click','.ver_overtime',  function (event) {
                event.preventDefault();
                let text = '该功能需要在开通标准版基础上方可使用。您的标准版服务已到期，建议尽快续费标准版，续费后可继续使用该功能';
                let btnText = '立即续费';
                if (globVersionType == 0) {
                    text = '该功能需要在开通标准版基础上方可使用。您的试用期已过，建议尽快升级至标准版，升级后可继续使用该功能';
                    btnText = '立即升级';

                }
                // 企学院-试用版
                if (globVersionType == 170) {
                    
                    // 针对企业微信授权用户
                    if (window.__shop_type === ENTERPRISE_WECHAT_AUTH) {
                        text = '该功能需要开通企学院正式版方可使用。您的试用期已过，请前往企业微信应用管理升级正式版，升级后即可继续使用该功能';
                        btnText = '好的';
                    } else {
                        text = '该功能需要开通企学院正式版方可使用。您的试用期已过，建议尽快升级正式版，升级后即可继续使用该功能';
                        btnText = '立即升级';
                    }
                }

                // 企学院-正式版
                if (globVersionType == 171) {
                    if (window.__shop_type === ENTERPRISE_WECHAT_AUTH) {
                        text = '该功能需要在开通企学院正式版上方可使用。您的服务已到期，请前往企业微信应用管理进行续费，续费后即可继续使用该功能'
                        btnText = '好的'
                    } else {
                        text = '该功能需要开通企学院正式版方可使用。您的服务已到期，建议尽快续费，续费后即可继续使用该功能';
                        btnText = '立即续费';
                    }
                }

                if (globVersionType == 1 || globVersionType == 2 || globVersionType == 3) {
                    text = '当前版本不支持该功能，请先升级至标准版';
                    btnText = '立即升级';
                }
                if ((globVersionType == 170 || globVersionType == 171) &&
                    window.__shop_type === ENTERPRISE_WECHAT_AUTH) {
                    
                    
                    this.popInfo = {
                        text,
                        type:'info',
                        oktext:btnText
                    }
                    // 弹出框
                    this.showDialog = true;
                    this.confirmPop =  () => {}
                    this.closePop = () => {}
                    

                } else{
                    
                    this.popInfo = {
                        text,
                        type:'info',
                        oktext:btnText
                    }
                    // 弹出框
                    this.showDialog = true;
                    this.confirmPop =  () => { window.location.href = '/personal_service/service_buy'; }
                    this.closePop = () => {  window.location.href = '/personal_service/service_buy';}
                    
                }
                                            
            });
            //分销版没有权限的提示
            if ($JQ('#forbidAccess').val()) {                
                if (!window.history.forward()) {
                   window.baseUtils && window.baseUtils.show.redTip($JQ('#forbidAccess').val());
                    $JQ('#forbidAccess').val('');

                }
            }

            // 小鹅通埋点点击事件统计，在需要统计的按钮上加上data-xiaoe-count=string,string以_隔开 
            $JQ('body').on('click','[data-xiaoe-count]', function (e) {
                    let $target = e.target;
                    let count = $target.getAttribute('data-xiaoe-count') 
                                || $target.parentNode.getAttribute('data-xiaoe-count')
                    
                    if (count) {
                        let arr = [{
                            et: 1,
                            actn: count
                        }];
                        window._YS_report && window._YS_report.push(arr);
                    }             
            })

            // 按钮组按下状态
            !(function () {
                //普通按钮
                if( $JQ(".xeBtnDefault")[0] ){
                    $JQ(".xeBtnDefault")[0].onmousedown= function () {
                        this.addClass("xeBtnDefaultDown")
                    }
                    $JQ(".xeBtnDefault")[0].onmouseup = function () {
                        this.removeClass("xeBtnDefaultDown")
                    }
                }
                
                //蓝色按钮
                if( $JQ(".btnBlue")[0] ){
                   $JQ(".btnBlue")[0].onmousedown= function () {
                        this.addClass("btnBlueDown")
                    }
                    $JQ(".btnBlue")[0].onmouseup = function () {
                        this.removeClass("btnBlueDown")
                    }
                }
                
                //红色按钮
                if( $JQ(".btnRed")[0] ){
                    $JQ(".btnRed")[0].onmousedown= function () {
                        this.addClass("btnRedDown")
                    }
                    $JQ(".btnRed")[0].onmouseup = function () {
                        this.removeClass("btnRedDown")
                    }
                }
               
            })();
     },
     // 轮询登录态变化
     initLoginState(){
        //轮询本地cookie是否发生变化
            let appsc = this.loginInfo.loginKey || 'appsc';
            if (window.__app_env === 'inside') {
                appsc = `${appsc}_inside`
            } else if (window.__app_env === 'test') {
                appsc = `${appsc}_test`
            } 
            let accountCookieId = readCookie(appsc);        
            let checkAccountState = setInterval(() => {
                if (readCookie(appsc) != accountCookieId && this.loginInfo.hasMutiShop) {
                    let text = '您已切换到其他店铺，当前页面需要刷新后才能继续操作';
                    if (typeof readCookie(appsc) == 'undefined' && typeof accountCookieId != 'undefined') {
                        text = '您的登录已过期，请在刷新后重新登录。';
                    }
                    
                    this.loginStateHint(text);
                   
                    clearInterval(checkAccountState);
                }else{
                    if (typeof readCookie(appsc) == 'undefined' && typeof accountCookieId != 'undefined') {
                         console.log('企微助手检查登录失效')
                         let text = '您的登录已过期，请在刷新后重新登录。';
                         this.loginStateHint(text);
                         clearInterval(checkAccountState);
                    }                                                                        
                }

            }, 1000);
        
     },
     // 登录提示
     loginStateHint(text){
         // 清除侧边栏缓存
        window.removeSidebarInfo();
        this.popInfo = {
            text,
            type:'info',
            isShowCancelBtn:false
        }
        this.showDialog = true;
        this.confirmPop =  () => {
                window.location.href = '/index';
            }
        this.closePop = () => {
                window.location.href = '/index';
            }
     },
     // checkbox 初始化
     initCheckbox(){
        $JQ('.checkbox-base').each(function (elm) {
            if (elm.getAttribute && elm.getAttribute('checked')) {
                elm.classList.add('checkbox-base');
            }
        });

        $JQ('body').on('click', '.checkbox-base',function (elm) {
            console.log('elm',elm)
            if(!elm.getAttribute){
               return;
            }
            if (elm.getAttribute('checked')) {
                elm.classList.add('checkbox-active');
            } else {
                elm.classList.remove('checkbox-active');
            }
        });
     },
     // 无权限的检查
     initUnActiveTabClick(){
        $JQ(".baseUnActiveTab").on('click',function () {
            window.baseUtils && window.baseUtils.show.redTip('您的账号没有相关操作权限，如有疑问请联系店铺管理员');
        });
     },
     // 点击xiaoe_tech
     techSuportClick(){
          $JQ('#techSuport').on('click',function () {
                window.open('https://www.xiaoe-tech.com/')
            })
     },
     //页面加载时间统计
     loadingTime() {
            //指定合法路由
            let validArr = [
                '/resource_list_page',   //资源列表
                '/comment_admin',        //评论列表
                '/customer',             //用户列表
                '/new/customer',             //用户列表
                '/order_manage/order_list',                //订单列表
                '/finance_manage/revenue_record',           //我的资产
                '/open_detail',        ///渠道页面统计
            ];

            let pathName = window.location.pathname;
            let performanceTime = parseInt(window.performance.now());//页面加载时间
            let appid = $JQ('#xet_app_id').val();

            for (let index = 0; index < validArr.length; index++) {
                if (pathName.startsWith(validArr[index])) {
                    let customer_2 = '/new/customer';
                    if (pathName === customer_2) {
                        pathName = '/customer';
                    }
                    pathName = 'b_' + pathName.substring(1);
                    window.action_spend_time_report && window.action_spend_time_report(performanceTime, pathName, appid);
                }
            }
     },
     // 是否有问答
     getQAInfo(){
        Axios.get("/QA/isHaveQA",{
            headers: { 'Content-Type': 'application/json;charset=UTF-8'}
        }).then((data)=>{
            if (data.code == 0) { // 已经有问答 则跳往详情
                window.location.href = "/QA/questionAndAnswerDetail";
            } else if (data.code == 1) { // 还没有问答 则跳往创建
                window.location.href = "/QA/createQuestionAndAnswer";
            }
        }).catch((err)=>{
            console.log(err);
            baseUtils.show.redTip("网络错误，请稍后再试！");
        }) 
     },   
     /*
       侧边栏改版后的逻辑 18/12/5
       href-传过来的路由 isVueRoute-是否是vue前端路由      
     */    
     leaveCurpageHint(href, isVueRoute) {
        let tempCurHref = window.location.href.split('://')[1];
        let curIndex = tempCurHref.indexOf('/');
        let curhref = tempCurHref.substring(curIndex);
        // 点击侧边栏的
        let gotoHerf = function (isVueRoute) {
             // 如果是isVueRoute-false后端路由或者中间页路由启动公共loading
            if (!isVueRoute || href.indexOf('entry/') > -1) {
                window.sideTimer = setTimeout(window.showLoading, 1200);
                console.log('VueRoute', isVueRoute);
                /*
                 当前页面路径就是传入路径或者 当前路径是前端路由并且跳转目标路径也是前端路由
                 如果重复点击，间隔一段时间隐藏loading、
                */ 
                if ((curhref == href) || (curhref.indexOf('#') > -1 && href.indexOf('#') > -1)) {  
                    setTimeout(function () {
                        clearTimeout(window.sideTimer);
                        hideLoading();
                    }, 2200)
                }
            }
            console.log('href', href)
            window.location.href = href;
        }
        if (href) {
            if (window.getSaveFlag && window.getSaveFlag()) {    // 编辑离开时浮层提醒
                   this.showEditModal = true;
                   // 重写离开的函数
                    this.editLeave =()=>{
                        gotoHerf(isVueRoute);
                        this.showEditModal = false;
                    }
            }else {
                gotoHerf(isVueRoute);
            }
        }
     },
     // 初始化window方法
     initWindowMethods(){
        // 清除侧边栏localstorage数据的缓存
        window['removeSidebarInfo'] = () => {
            let len = localStorage.length;
            for(let i = 0;i < len; i++) {
                let key = localStorage.key(i);
                if(key && key.includes("_sidebarInfo")) {
                    localStorage.removeItem(key);
                }
            }
        }
        // 侧边栏跳转
        window['leavepageHint'] =  (href, isVueRoute)=> {
             this.leaveCurpageHint(href, isVueRoute);
        }

        //版本判断的函数
        window._versionCheck = {
            overdueAlert(text, oktext) {
                // 弹出框
                this.popInfo = {
                    text,
                    type:'info',
                    oktext
                }
                this.showDialog = true;
                this.confirmPop =  () => { window.location.href = '/personal_service/service_buy'; }
                this.closePop = () => {  window.location.href = '/personal_service/service_buy';}
                
            },
            versionHasPlugin(version, plugin) {
                console.log(permissionList)
                return permissionList['version' + version].indexOf(plugin) >= 0
            },
            success(success) {
                if (typeof success === 'string') {
                    window.location.href = success;
                } else if (typeof success === 'function') {
                    success();
                }
            },
            checkPluginState(plugin, pluginState, versionState, success, session) {
                let notOverdue = pluginState == 0 || pluginState == 1 || plugin == ''; //功能包未过期
                if (versionState == 3) { //试用版过期
                    //标准版内功能包
                    if (plugin == '' || permissionList.version4.indexOf(plugin) >= 0) {
                        this.overdueAlert('该功能需要在开通标准版基础上方可使用。您的试用期已过，建议尽快升级至标准版，升级后可继续使用该功能', '立即升级');
                        return false;
                    } else { //需要购买的功能包
                        this.overdueAlert('该功能需要在开通标准版基础上方可使用。您的试用期已过，建议尽快升级至标准版，升级后即可购买该服务', '立即升级');
                        return false;
                    }
                } else if (versionState == 4) { //试用版未过期
                    if (notOverdue) {
                        if (plugin == 'question_answer') { //问答特殊处理
                            this.getQAInfo()
                            return;
                        }

                        this.success(success);
                        return true;
                    } else {
                        this.overdueAlert('您当前处于试用期阶段，请升级至标准版后购买该服务即可使用', '立即升级');
                        return false;
                    }
                }

                //标准版已过期
                if (versionState == 1) {
                    if (notOverdue) {
                        this.overdueAlert('该功能需要在开通标准版基础上方可使用。您的标准版服务已到期，建议尽快续费标准版，续费后可继续使用该功能', '立即续费');
                        return false;
                    } else {
                        this.overdueAlert('您的标准版服务已到期，建议尽快续费。续费后可享有该功能', '立即续费');
                        return false;
                    }
                }

                //老版本判断
                if ([6, 8, 10].indexOf(versionState) >= 0) {
                    if (plugin == '') {
                        this.success(success);
                        return true;
                    }

                    if (versionState == 6) { //基础版
                        if (permissionList.version1.indexOf(plugin) == -1) {
                            if (permissionList.buy_version.indexOf(plugin) >= 0) {
                                window.location.href = '/entry/' + plugin;
                                return false;
                            }
                            this.overdueAlert('当前版本不支持该功能，请先升级至标准版', '立即升级');
                            return false;
                        }
                    }

                    if (versionState == 8) { //成长版
                        if (permissionList.version2.indexOf(plugin) == -1) {
                            if (permissionList.buy_version.indexOf(plugin) >= 0) {
                                window.location.href = '/entry/' + plugin;
                                return false;
                            }
                            this.overdueAlert('当前版本不支持该功能，请先升级至标准版', '立即升级');
                            return false;
                        }
                    }

                    if (versionState == 10) { //专业版
                        if (permissionList.version3.indexOf(plugin) == -1) {
                            if (permissionList.buy_version.indexOf(plugin) >= 0) {
                                window.location.href = '/entry/' + plugin;
                                return false;
                            }
                            this.overdueAlert('当前版本不支持该功能，请先升级至标准版', '立即升级');
                            return false;
                        }
                    }
                }
                if (notOverdue) {
                    if (
                        localStorage[plugin] ||
                        plugin == '' ||
                        this.versionHasPlugin(globVersionType, plugin)
                    ) {
                        if (plugin == 'question_answer') { //问答特殊处理
                            this.getQAInfo();
                            return true;
                        }
                        this.success(success);
                        return true;
                    } else {
                        localStorage[plugin] = plugin;
                        window.location.href = '/entry/' + plugin;
                        return;
                    }
                } else {
                    if (plugin === 'punch_card') {
                        window.location.href = '/punch_card/punchCalendar'
                        return false
                    }

                    // 以下代码针对分销版店铺，页面统计不是功能包不需要购买
                    if (session === 5) {
                        if (plugin === 'page_count') {
                            this.success(success);
                            return false
                        }
                    }

                    //没有权限，跳转前往购买
                    window.location.href = '/entry/' + plugin;
                }
                return false;
            }
        };
    },
    // 火狐浏览器影藏侧边滚动条
    hideScrollBar(){
        let userAgent = navigator.userAgent;
        let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        if (isFF) {  //如果是火狐浏览器，调用niceScroll插件，隐藏滚动条
            let nice = $("html").niceScroll();
            $("#base_slide").getNiceScroll().show();
            $("#base_slide").getNiceScroll().resize();
            $("#base_slide").niceScroll(
                {
                    cursorborder: "",
                    cursorcolor: "#F6F8F9",
                    boxzoom: false,
                    cursorwidth: "0px",
                    preventmultitouchscrolling: true,
                    nativeparentscrolling: false,
                    enablescrollonselection: false,
                    smoothscroll: false,
                }
            );
        }
    },
     // 关闭弹窗
     closePop(){
        this.showDialog = false;
     },
     confirmPop(){
        this.showDialog = false;
     },
     // 模态框取消
     cancelLeave(){
         this.showEditModal = false;
     },
     // 模态框离开
     editLeave(){}
  }

};
</script>

<style lang="scss" scoped>
</style>
