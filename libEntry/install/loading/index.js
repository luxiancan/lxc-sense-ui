import directive from '../../../src/components/loading/directive';
import service from '../../../src/components/loading/service'

export default {
  install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = service;
  },
  directive,
  service
};
