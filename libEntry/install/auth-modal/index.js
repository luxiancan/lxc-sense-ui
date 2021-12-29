import AuthModal from '../../../src/components/authModal/index.vue'

AuthModal.install = function(Vue) {
  Vue.component(AuthModal.name, AuthModal);
};

export default AuthModal