// 获取字符串长度（汉字算两个字符，字母数字算一个）
export const getByteLen = function (val) {
  let len = 0;
  for (let i = 0; i < val.length; i++) {
    const a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }
  return len;
};
// 按照汉字两个字符，字母一个字符的方式截取字符串
export const getByteSubString = function (val, num) {
  let len = 0;
  let temp = '';
  for (let i = 0; i < val.length; i++) {
    const a = val.charAt(i);
    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
    if (len > num) {
      return temp;
    } else {
      temp += a;
    }
  }
  return temp;
};
export const merge = function (target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {};
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }
  return target;
};