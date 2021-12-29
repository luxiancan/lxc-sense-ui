import TabPane from '../../../src/components/tabs/tabPane.vue'

TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane);
};

export default TabPane