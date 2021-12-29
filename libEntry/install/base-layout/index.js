import baseLayout from '../../../src/components/baseLayout/index.vue'

baseLayout.install = function(Vue) {
  Vue.component(baseLayout.name, baseLayout);
};

export default baseLayout