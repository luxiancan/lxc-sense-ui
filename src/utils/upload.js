
const
  ajax = require('vue-resource');
const CosCloud = require('cos-js-sdk-v4');
const base64 = require('js-base64').Base64;
// browserMD5File = require('browser-md5-file'),
const browserMD5File = require('./browser-md5-file.min.js');

const appid = '1252524126';
const bucket = 'wechatapppro';
// import './browser-md5-file.min.js'
const cos = new CosCloud({
  appid, // APPID 必填参数
  bucket, // bucketName 必填参数
  region: 'sh', // 地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
  getAppSign(callback) {   // 获取签名 必填参数
    // 1.搭建一个鉴权服务器，自己构造请求参数获取签名，推荐实际线上业务使用，优点是安全性好，不会暴露自己的私钥
    // 拿到签名之后记得调用callback
    ajax.Http({
      url: '/getUploadSign?sign_type=appSign',
      responseType: 'json'
    }).then(
      (res) => {
        const sig = res.body.data.sign;
        callback(encodeURIComponent(sig));
      },
      (err) => {
        console.log(err);
        alert('获取签名失败');
      }
    );
  },
  getAppSignOnce(callback) { // 单次签名，必填参数，参考上面的注释即可
    //    //填上获取单次签名的逻辑
    ajax.Http({
      url: '/getUploadSign?sign_type=appSign_once&path='
    }).then(
      (res) => {
        const sig = res.body.data.sign;
        callback(encodeURIComponent(sig));
      },
      (err) => {
        console.log(err);
        alert('获取签名失败');
      }
    );
  }
});

export function getSuffix(name) {
  let suffixIndex = name.lastIndexOf('.');
  if (suffixIndex === -1) {
    return '';
  }
  return name.substring(++suffixIndex);
}

export function isImg(file) {
  console.log('isImg');
  const suffix = getSuffix(file.name);
  return ['jpg', 'png', 'jpeg', 'gif', 'JPG', 'PNG', 'JPEG', 'GIF', 'bmp', 'BMP'].indexOf(suffix) !== -1;
}

export function isAudio(file) {
  const suffix = getSuffix(file.name);
  return ['mp3', 'm4a', 'MP3', 'M4A'].indexOf(suffix) !== -1
}
export function getObjectURL(file) {
  let url = null;
  if (window.createObjectURL !== undefined) { // basic
    url = window.createObjectURL(file);
  } else if (window.URL !== undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL !== undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}
export function removeObjectURL(url) { // 释放资源URL
  if (window.revokeObjectURL !== undefined) {
    window.revokeObjectURL(url);
  } else if (window.URL !== undefined) {
    window.URL.revokeObjectURL(url);
  } else if (window.webkitURL !== undefined) {
    window.webkitURL.revokeObjectURL(url);
  }
}
export function uploadImg(successCallBack, errorCallBack, progressCallBack, file, app_id, file_name = '') {
  console.log('传入文件名', file_name);
  browserMD5File(file, (err, md5) => {
    // 获取文件后缀
    const filePostfix = getSuffix(file.name);
    if (!file_name) {
      file_name = md5;
    } else {
      const encodeStr = base64.encodeURI(file_name);
      file_name = getStrLen(encodeStr) <= 150 ? encodeStr : md5;
    }
    // 上传路径
    const remotePath = `/${app_id}/image/${file_name}.${filePostfix}`;
    console.log('path4image:', remotePath);
    cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, remotePath, file, 0);
  });
}

// 获取字符串字符长度
export function getStrLen(str) {
  let len = 0;
  for (let i = 0; i < str.length; i++) {  
    const c = str.charCodeAt(i);  
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {  
      len += 1;  
    } else {  
      len += 2;  
    }  
  }  
  return len;
}
/**
* 上传音频文件 分片上传直接调用，内部会判断是否需要分片
* @param successCallBack 成功回调
* @param errorCallBack 失败回调
* @param progressCallBack  进度回调
* @param file 文件
* @param app_id
*/
export function uploadAudio(successCallBack, errorCallBack, progressCallBack, file, app_id, file_name = '') {
  browserMD5File(file, (err, md5) => {
    // 文件后缀
    const filePostfix = getSuffix(file.name);
    if (!file_name) {
      file_name = md5;
    } else {
      const encodeStr = base64.encodeURI(file_name);
      file_name = getStrLen(encodeStr) <= 150 ? encodeStr : md5;
    }
    // 上传路径
    const remotePath = `/${app_id}/audio/${file_name}.${filePostfix}`;
    console.log('path4audio:', remotePath);
    cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, remotePath, file, 0);
  });
}

export function uploadCsv(successCallBack, errorCallBack, progressCallBack, file, app_id, file_name = '') {
  browserMD5File(file, (err, md5) => {
    // 文件后缀
    const filePostfix = getSuffix(file.name);
    if (!file_name) {
      file_name = md5;
    } else {
      const encodeStr = base64.encodeURI(file_name);
      file_name = getStrLen(encodeStr) <= 150 ? encodeStr : md5;
    }
    // 上传路径
    const remotePath = `/${app_id}/file/${file_name}.${filePostfix}`;
    console.log('path4csv:', remotePath);
    cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, remotePath, file, 0);
  });
}
