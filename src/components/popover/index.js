/*
 * @Author: your name
 * @Date: 2020-10-07 15:15:53
 * @LastEditTime: 2020-10-07 15:37:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /sense/src/components/newPopover/index.js
 */
import Vue from 'vue';
import Popover from './index.vue';
import directive from './directive';

Vue.directive('popover', directive);

// eslint-disable-next-line no-shadow
Popover.install = function (Vue) {
  Vue.directive('popover', directive);
  Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

export default Popover;
