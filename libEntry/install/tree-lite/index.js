/*
 * @Author: your name
 * @Date: 2020-09-16 10:48:17
 * @LastEditTime: 2020-09-16 11:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sense/lib/install/treeLite/index.js
 */
import TreeLite from '../../../src/components/tree/components/tree-lite.vue'

TreeLite.install = function (Vue) {
  Vue.component(TreeLite.name, TreeLite)
}

export default TreeLite