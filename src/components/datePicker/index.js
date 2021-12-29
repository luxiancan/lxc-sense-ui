import SsDatePicker from './src/picker/date-picker';

/* istanbul ignore next */
SsDatePicker.install = function install(Vue) {
  Vue.component(SsDatePicker.name, SsDatePicker);
};

export default SsDatePicker;
