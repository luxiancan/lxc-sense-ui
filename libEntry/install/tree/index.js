/*
 * @Author: your name
 * @Date: 2020-09-11 11:07:59
 * @LastEditTime: 2020-09-16 10:49:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sense/lib/install/tree/index.js
 */
import Tree from '../../../src/components/tree/index.vue'

Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree)
}

export default Tree