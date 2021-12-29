import TimePicker from '../../../src/components/time-picker/index'

TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker