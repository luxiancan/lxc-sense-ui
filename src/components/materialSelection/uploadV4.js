import Axios from "axios";

const COS = require("cos-js-sdk-v4");

const getUploadSign = params => Axios.get("/getUploadSign", { params });

const getSuffix = (fileName = "") => {
  const suffixIndex = fileName.lastIndexOf(".");
  if (suffixIndex === -1) {
    return "";
  }
  return fileName.substring(suffixIndex);
};

// 腾讯云配置
const COS_APPID = "1252524126";
const COS_BUCKET = "wechatapppro";
const COS_REGION = "sh";
export default class UploadTool {
  constructor() {}

  // 上传一个文件   /// 如果是视频上传的话, 要改成云点播上传
  uploadFile(successCallBack, errorCallBack, progressCallBack, fileObj) {
    const that = this;
    const cos = new COS({
      appid: COS_APPID,
      bucket: COS_BUCKET,
      region: COS_REGION,
      ProgressInterval: 1000,
      getAppSign(callback) {
        getUploadSign({
          app_id: this.appId, // 这里要动态变化
          sign_type: "appSign" // 这里要动态变化
        })
          .then(res => {
            if (res.data.code == 0) {
              window.clearTimeout(fileObj.getAppSignTimeOut);
              callback(encodeURIComponent(res.data.data.sign));
            } else {
              window.console.log("获取签名错误", res);
              errorCallBack()
            }
          })
          .catch(err => {
            window.clearTimeout(fileObj.getAppSignTimeOut);
            fileObj.getAppSignTimeOut = setTimeout(() => {
              that.cancelTask(fileObj);
              errorCallBack();
            }, 7000);
            window.console.log("-----getAppSign--err-", err);
          });
      },
      getAppSignOnce(callback) {
        getUploadSign(
          {
            sign_type: "appSign_once",
            path: ""
          },
          "get"
        )
          .then(res => {
            if (res.data.code == 0) {
              window.clearTimeout(fileObj.getAppSignTimeOut);
              callback(encodeURIComponent(res.data.data.sign));
            } else {
              window.console.log("获取签名错误", res);
              errorCallBack()
            }
          })
          .catch(err => {
            window.clearTimeout(fileObj.getAppSignTimeOut);
            fileObj.getAppSignTimeOut = setTimeout(() => {
              that.cancelTask(fileObj);
              errorCallBack();
            }, 7000);
            window.console.log("-----getAppSignOnce--err-", err);
          });
      }
    });
    fileObj.cosCloud = cos;
    const filePostfix = getSuffix(fileObj.file.name);
    // 为保证唯一, 文件名使用md5 + 时间戳 +  一个随机数
    const filename =
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .replace(".", "");
    fileObj.fileUniqueName = filename.substring(0, 12) + filePostfix;
    // 上传路径
    // this.cosCloud.uploadFile(
    fileObj.cosCloud.uploadFile(
      successCallBack,
      errorCallBack,
      progressCallBack,
      COS_BUCKET,
      this.uploadPath + fileObj.fileUniqueName,
      fileObj.file,
      0,
      taskId => {
        fileObj.taskId = taskId;
      }
    );
  }

  // 删除一个文件
  deleteFile(successCallBack, errorCallBack, fileObj) {
    window.console.log("--deleteFile-从腾讯云删除文件--", fileObj);
    fileObj.cosCloud.deleteFile(
      successCallBack,
      errorCallBack,
      COS_BUCKET,
      this.uploadPath + fileObj.fileUniqueName
    );
  }

  // 取消任务
  cancelTask(fileObj) {
    fileObj.cosCloud.cancelTask(fileObj.taskId);
  }

  cancleAllTask(fileList) {
    window.console.log("------cancleAllTask----");
    fileList.forEach(fileObj => {
      this.cancelTask(fileObj);
    });
  }
}
