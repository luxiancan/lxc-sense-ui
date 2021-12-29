import Col from '../../../src/components/col/src/col'

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col