import Steps from '../../../src/components/steps/index.vue'

Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

export default Steps