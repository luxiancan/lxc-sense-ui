import DropdownItem from '../../../src/components/dropdown/dropdownItem.vue'

DropdownItem.install = function(Vue) {
  Vue.component(DropdownItem.name, DropdownItem);
};

export default DropdownItem