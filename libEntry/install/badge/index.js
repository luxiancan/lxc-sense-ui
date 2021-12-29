import Badge from '../../../src/components/badge/index.vue'

Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge);
};

export default Badge