import Switch from '../../../src/components/switch/index.vue'

Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch