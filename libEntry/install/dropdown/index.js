import Dropdown from '../../../src/components/dropdown/index.vue'

Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
};

export default Dropdown