import Form from '../../../src/components/form/form.vue'

Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};

export default Form