import Alert from '../../../src/components/alert/index.vue'

Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert