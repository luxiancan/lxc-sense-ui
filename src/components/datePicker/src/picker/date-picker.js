/**
 * @description日期选择器
 */
import Picker from '../picker';
import DatePanel from '../panel/date';
import DateRangePanel from '../panel/date-range';
import DateTimeRangePanel from '../panel/date-time-range';
import MonthRangePanel from '../panel/month-range';

const getPanel = function (type) {
  if (type === 'daterange') {
    return DateRangePanel;
  } else if (type === 'monthrange') {
    return MonthRangePanel;
  } else if (type === 'datetimerange') {
    return DateTimeRangePanel
  }
  return DatePanel;
};

export default {
  mixins: [Picker],

  name: 'SsDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type(type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(type);
        this.mountPicker();
      } else {
        this.panel = getPanel(type);
      }
    }
  },

  created() {
    this.panel = getPanel(this.type);
  }
};
