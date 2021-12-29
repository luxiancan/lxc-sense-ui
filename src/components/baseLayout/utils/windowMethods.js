
import { readCookie } from './jsTools';
import Axios from 'axios';
import { $JQ } from './findDom';

const  trigger = (elm,type) => {
    try{
        if(elm.dispatchEvent){
            //创建一个事件对象
            let evt = new Event(type);
            //初始化事件，支持冒泡，支持阻止默认
            evt.initEvent(type,true,true);
            //发配事件
            elm.dispatchEvent(evt)

        }else if(elm.fireEvent){
            elm.fireEvent('on'+type);
        }else{
            console.log('无法触发trigger')
        }
       
    }catch(e){
        console.log(e)
    }
}
//改变阅读状态
window.changeViewState = function(noticeId) {
    Axios.post('/notice/update',{
        id: noticeId
    },{
        headers: { 'Content-Type': 'application/json;charset=UTF-8'}
    }).then(()=>{
        console.log(noticeId);
        console.log(data);
    })
}

// 显示loading
window.showLoading = function() {
    $JQ("#base_loading").show();
    $JQ(".base_content").addClass("contentFilter");
    $JQ('.progress-bar-striped').addClass('active');
}

// 隐藏loading
window.hideLoading = function() {
    $JQ("#base_loading").hide();
    $JQ(".base_content").removeClass("contentFilter");
    $JQ('.progress-bar-striped').attr('aria-valuenow', '100');
    $JQ('.progress-bar-striped').html('100%');
    $JQ('.progress-bar-striped').css('width', '100%')
    $JQ('.progress-bar-striped').removeClass('active');
}


window.reloadPage = function() {
    if (window.location.reload) {
        window.location.reload();
    } else {
        window.location.href = window.location.href;
    }
}


window.keyEnter = function(target) {
    let domList = $JQ("input");
    let inputLength = domList.length;
    if( inputLength ){
        for(let i=0;i<inputLength;i++){
            let elm =domList[i];
            elm.onkeypress = function (e) {//当按下按键时
                if (e.which == 13) {//回车键的键位序号为13
                    trigger(target,"click");//触发登录按钮的点击事件
                }
            }
        }
    }
}

//获取url参数
window.getUrlParam = function(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

//获取字符串长度（汉字算两个字符，字母数字算一个）
window.getByteLen = function(val) {
    let len = 0;
    for (let i = 0; i < val.length; i++) {
        let a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }
        else {
            len += 1;
        }
    }
    return len;
}

//按照汉字两个字符，字母一个字符的方式截取字符串
window.getByteSubString = function(val, num) {
    let len = 0;
    let temp = '';
    for (let i = 0; i < val.length; i++) {
        let a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
        }
        else {
            len += 1;
        }
        if (len > num) {
            return temp;
        } else {
            temp += a;
        }
    }
    return temp;
}

//获取时间的函数
//获取当天时间 或者昨天的前天的日期
window.getNowDay = function(type, count) {
    type = type || 'onlyDay';
    count = count || 0;
    let date = new Date();
    date.setDate(date.getDate() + count);
    let day = date.getDate(),
        month = date.getMonth() + 1,
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 1 && day <= 9) {
        day = "0" + day;
    }
    if (hours >= 1 && hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 1 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 1 && seconds <= 9) {
        seconds = "0" + seconds;
    }

    if (type === 'onlyDay') {
        return date.getFullYear() + '-' + month + '-' + day;
    } else {
        return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }
}

//获取到N天前日期
window.getOneDay = function(N) {
    let date = new Date;
    date.setDate(date.getDate() - N);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 1 && day <= 9) {
        day = "0" + day;
    }
    return date.getFullYear() + '-' + month + '-' + day;
}

//获取当月的第一天
window.getNowMonth = function() {
    let date = new Date();
    let month = date.getMonth() + 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    return date.getFullYear() + '-' + month + '-' + '01';
}

//采用正则表达式获取地址栏参数（name）
window.GetQueryString = function(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

//获取当前页的pathname，拼接参数然后跳转
window.spliceSearchParams = function(obj) {
    let url, searchKey, pathName = window.location.pathname;
    url = pathName + '?';
    for (searchKey in obj) {
        url += searchKey + '=' + obj[searchKey] + '&';
    }
    window.location.href = url;
}

//获取当前页完整url用于回跳
window.resetUrl = function(objUrl) {
    //获取当前页url
    let reurl = encodeURIComponent(window.location.href);
    //转向目标地址
    window.location.href = objUrl + '&reurl=' + reurl;
}


//设置层级页面数据缓存
window.setTopUrlCookie = function(topcookie, resourceInfo) {
    let urlInfo = window.location.href;
    readCookie(topcookie, resourceInfo + '|' + urlInfo, { path: '/' });
}

//显示上下路径 201130-201209
window.setTopUrlInfo = function(cookie_name, innerTo) {
    let topUrlInfos = readCookie(cookie_name);
    innerTo = innerTo ? innerTo : 0;
    if (topUrlInfos) {
        let topcookie = topUrlInfos.split('|');
        let tempDom = document.createElement('span');
        if (innerTo == 0) {
            let addHtml = "<span><a href='" + topcookie[1] + "'>" + topcookie[0] + "</a></span>&nbsp;>&nbsp;";
            tempDom.innerHTML = addHtml;
            $JQ('.base_explain').prepend(tempDom);
        }
        else {
            let addHtml = "<span>&nbsp;>&nbsp;<a href='" + topcookie[1] + "'>" + topcookie[0] + "</a></span>";
            tempDom.innerHTML = addHtml;
            $JQ('.base_explain').append(tempDom);
        }
    }
}

//回跳至编辑内容来路路径
// cookieName,来路cookie,listUrl,原始列表url
window.reListUrl = function(cookieName, listUrl) {
    let cookieInfo = readCookie(cookieName);
    if (cookieInfo) {
        let reListInfo = cookieInfo.split('|')[1];
        if (reListInfo) {
            window.location.href = reListInfo;
        } else {
            window.location.href = listUrl;
        }
    }
    else {
        window.location.href = listUrl;
    }
}


//打印对象
window.writeObj = function(obj) {
    let description = "";
    for (let i in obj) {
        let property = obj[i];
        description += i + " = " + property + "\n";
    }
    alert(description);
}

//JS检查浏览器中的flashplayer版本
window.flashChecker = function() {
    let hasFlash = 0;　　　　//是否安装了flash
    let flashVersion = 0;　　//flash版本
    let browserKernel = 0   //浏览器内核

    if (document.all) {
        let swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (swf) {
            hasFlash = 1;
            VSwf = swf.GetVariable("$version");
            flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
        }
    } else {
        if (navigator.plugins && navigator.plugins.length > 0) {
            let swf = navigator.plugins["Shockwave Flash"]; //writeObj(navigator.plugins["Shockwave Flash"]);
            if (swf) {
                //MacOS
                if (navigator.userAgent.indexOf('Mac OS X') > 0) {
                    hasFlash = 1;
                }
                else if (navigator.userAgent.indexOf("Chrome") >= 0) {//chrome
                    browserKernel = 'chrome';
                    if (swf.filename.indexOf("pepflashplayer") >= 0) {
                        hasFlash = 1;
                        let words = swf.description.split(" ");
                        for (let i = 0; i < words.length; ++i) {
                            if (isNaN(parseInt(words[i]))) continue;
                            flashVersion = parseInt(words[i]);
                        }
                    }
                } else {//firefox
                    hasFlash = 1;
                    let words = swf.description.split(" ");
                    for (let i = 0; i < words.length; ++i) {
                        if (isNaN(parseInt(words[i]))) continue;
                        flashVersion = parseInt(words[i]);
                    }
                }

            }
        }
    }
    return { f: hasFlash, v: flashVersion, b: browserKernel };
}

/*判断IE浏览器版本*/
window.getInternetExplorerVersion = function() {
    let ua = navigator.userAgent;
    //是IE浏览器
    if (ua.indexOf("MSIE") != -1) {
        //判断浏览器版本 低于IE10 做出提示
        if (ua.indexOf("MSIE 9.0") != -1 || ua.indexOf("MSIE 8.0") != -1 || ua.indexOf("MSIE 7.0") != -1) {
            baseUtils.show.redTip('发现您的IE浏览器版本较低，为了不影响您的使用体验，建议您使用Chrome浏览器或将IE浏览器升级为IE 10及以上版本', function () {
            }, 3600, 'top-center');
        }
    }
}


//新建公共方法入口
window.baseUtils = (function () {
    let baseUtils = {
        show: {
            colors: {
                red: '#f06d6b',
                blue: '#2a75ed',
                yellow: '#ffbb5e',
            },
            // 201130-201209 有记录 /courseDetail/member
            defaultTip: function (content, callback, time, color) {
                let $Tip = $JQ('#TopPrompt'),
                    $TipText =$JQ('#TopPrompt .topPromptContent');

                time = time || 2000;

                $TipText.html(content);
                // 默认fadeIn、fadeOut 300ms
                $Tip.css('backgroundColor', this.colors[color]).show().fadeIn();

                setTimeout(function () {
                    $Tip.fadeOut().hide();
                    if (callback) callback.call($Tip);
                }, time);
            },
            //  蓝色顶部提示条
            blueTip: function (content, callback, time) {
                this.defaultTip(content, callback, time, 'blue');
            },
            //  红色顶部提示条
            redTip: function (content, callback, time) {
                this.defaultTip(content, callback, time, 'red');
            },
            //黄色提示
            yellowTip: function (content, callback, time) {
                this.defaultTip(content, callback, time, 'yellow');
            }

        },

        /**
         * 输入的最大价格 100万， 单位：元
         */
        maxInputPrice: 1000000,
    }

    //窗口Id值 // 201130-201209 无记录
    baseUtils.showWindow = function (domId) {
        let tempDom = document.createElement('div');
        let htmlString = '<div class="modal-backdrop in"></div>';
        tempDom.innerHTML = htmlString;
        $JQ("body").append(tempDom);
        privateFun.preventScroll();
        $JQ("#" + domId)
            .css({ "z-index": "1050" })
            .show();
    };
    baseUtils.hideWindow = function (domId) {
        let selfDom = $JQ(".modal-backdrop.in")[0];
        selfDom.parentNode.removeChild(selfDom);
        privateFun.enableScroll();
        $JQ("#" + domId).hide();
    };

    //显示局部 loading 动画 // 201130-201209 无记录
    baseUtils.showLoading = function (loadingId) {
        $JQ("#_localLoading" + loadingId).show();
    };
    baseUtils.hideLoading = function (loadingId) {
        $JQ("#_localLoading" + loadingId).hide();
    };

    let privateFun = {
        preventScroll: function () {
            // 禁止
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '8px';
            window.addEventListener('touchmove', this._preventDefault);
        },
        enableScroll: function () {
            // 恢复
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
            window.removeEventListener('touchmove', this._preventDefault);
        },
        _preventDefault: function (e) {
            e.preventDefault();
        }

    }

    return baseUtils;

})();