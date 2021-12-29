import SimpleStep  from '../../../src/components/step/simple-step.vue'

SimpleStep.install = function(Vue) {
    console.log(`simpleStep `, SimpleStep.name)
  Vue.component(SimpleStep.name, SimpleStep);
};

export default SimpleStep
