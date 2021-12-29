import Vue from 'vue';
import App from './App';
import router from './router';
import Message from './components/message';
import MessageBox from './components/messageBox';
import Loading from './components/loading/directive';
import { Pagination, ShareModal } from '../libEntry/install/index'
import service from './components/loading/service';

Vue.use(Loading)

Vue.use(Pagination)
Vue.use(ShareModal)

Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用

  // eslint-disable-next-line no-console
  console.log('vue config errorHandler监听的错误', err, vm, info)
}
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$loading = service;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
