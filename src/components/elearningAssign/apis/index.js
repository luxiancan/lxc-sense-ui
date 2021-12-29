/*
 * @Description:
 * @Author: Biytes
 * @Date: 2021-06-22 11:12:47
 * @LastEditors: Biytes
 * @LastEditTime: 2021-07-06 10:21:15
 * @FilePath: \sense\src\components\elearningAssign\apis\index.js
 */

import Axios from 'axios';

//  获取部门树的列表
export const getOrgTree = (params) => {
  // 支持自定义参数

  const {
    url, rootId, fetchUser = 1, isAuth = 1
  } = params

  delete params.url

  return Axios.get(
    url,
    {
      params: {
        ...params,
        root_id: rootId,
        fetch_user: fetchUser,
        is_auth: isAuth
      }
    }
  )
}

/**
 * 获取组织
 */
export const searchOrg = (params) => {
  // 支持自定义参数
  const {
    url, keyword, type = 'all', isAuth = 1
  } = params

  delete params.url

  return Axios.get(
    url,
    {
      params: {
        ...params,
        name: keyword,
        is_auth: isAuth,
        type,
      }
    }
  )
}