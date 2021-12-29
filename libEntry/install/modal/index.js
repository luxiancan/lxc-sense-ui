import Modal from '../../../src/components/modal/index.vue'

Modal.install = function(Vue) {
  Vue.component(Modal.name, Modal);
};

export default Modal