import Step from '../../../src/components/step/index.vue'

Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};

export default Step