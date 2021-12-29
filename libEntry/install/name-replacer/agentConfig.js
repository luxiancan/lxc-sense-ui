import Axios from 'axios'
let agentConfigApi = "/teas/wework/agent_js_init_data"
async function getAgentConfigData(url) {
    let params = {
        page_url: url
    }
    const res = await Axios.get(agentConfigApi,
        {
            params
        }
    )
    const { code, data, msg } = res.data
    console.log(data,'_______data_________')
    if (code === 0) {
        console.log('agentConfig!!!!!')
        window.__qywx_corp_id = data.corpid;
        wx.agentConfig(
            {
                corpid: data.corpid, // 必填，企业微信的corpid，必须与当前登录的企业一致
                agentid: data.agentid, // 必填，企业微信的应用id （e.g. 1000247）
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录-JS-SDK使用权限签名算法
                jsApiList: ['selectExternalContact'], //必填
                success: function (res) {
                    console.log(res,'angentConfig Success~!!!!!!!!!!!!!!')
                },
                fail: function (res) {
                    console.log(res, 'angentConfig fail!!!')
                    if (res.errMsg.indexOf('function not exist') > -1) {
                        alert('版本过低请升级')
                    }
                }
            }
        )
    }
}
// 企学院企业微信环境
if(window.__shop_type && window.__shop_type == 1){
    agentConfigApi = "/training_api/v2/qywx/agent_js_init_data"
    const { href } = window.location
    getAgentConfigData(href)
}

// 知识店铺企业微信环境
if(window.__org_type && window.__org_type == 1){
    console.log('开始agentConfig!!!!!')
    const { origin, pathname } = window.location
    getAgentConfigData(origin + pathname)
}