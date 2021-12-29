/**
 * readCookie 读取cookies
 * @param {str} name
 */
export function readCookie(name){
    let arr = null;
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (document.cookie && (arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}


export default {
    readCookie
}