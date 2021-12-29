import NameReplacer from '../../../src/components/nameReplacer/index.vue'

require('./agentConfig')
NameReplacer.install = function(Vue) {
  Vue.component(NameReplacer.name, NameReplacer);
};

export default NameReplacer
