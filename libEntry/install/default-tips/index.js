import DefaultTips from '../../../src/components/defaultTips/index.vue'

DefaultTips.install = function(Vue) {
  Vue.component(DefaultTips.name, DefaultTips);
};

export default DefaultTips