import pushSetting from '../../../src/components/pushSettingDialog/index'

pushSetting.install = function(Vue) {
  Vue.component(pushSetting.name, pushSetting);
};

export default pushSetting
