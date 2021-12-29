import DropdownMenu from '../../../src/components/dropdown/dropdownMenu.vue'

DropdownMenu.install = function(Vue) {
    Vue.component(DropdownMenu.name, DropdownMenu);
  };
  
  export default DropdownMenu