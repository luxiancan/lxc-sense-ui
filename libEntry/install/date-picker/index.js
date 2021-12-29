import DatePicker from '../../../src/components/datePicker/src/picker/date-picker'

DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker
