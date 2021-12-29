import shareModalVue from './main.vue';

// 素材弹窗选择器
import MaterialBox from "@xiaoe/material_center_box";
import "@xiaoe/material_center_box/static/index.css";
import Radio from '../radio'
import Modal from '../modal'

// 定义插件对象
const ShareModal = {};
// vue的install方法，用于定义vue插件
ShareModal.install = function (Vue, options) {
    const MessageBoxInstance = Vue.extend(shareModalVue);
    let currentModal;
    const initInstance = () => {
        // 实例化vue实例
        currentModal = new MessageBoxInstance();
        let currentModalEl = currentModal.$mount().$el;
        document.body.appendChild(currentModalEl);
    };
    // 在Vue的原型上添加实例方法，以全局调用
    Vue.use(MaterialBox);
    Vue.use(Radio);
    Vue.use(Modal); 

    Vue.prototype.$share = function (options) {
        if (!currentModal) {
            initInstance();
        }

        Object.assign(currentModal, options )

        currentModal.showModal().then(val => {
            currentModal = null;
            return Promise.resolve(val);
        })

    }
};
export default ShareModal;