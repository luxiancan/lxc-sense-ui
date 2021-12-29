// eslint-disable-next-line import/extensions
import Popover from '../../../src/components/popover/index.vue'
import directive from '../../../src/components/popover/directive';


Popover.install = function (Vue) {
  Vue.directive('popover', directive);
  Vue.component(Popover.name, Popover);
};

export default Popover;
