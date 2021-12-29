import Tooltip from '../../../src/components/tooltip'

Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip
