import Tag from '../../../src/components/tag/index.vue'

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag);
};

export default Tag