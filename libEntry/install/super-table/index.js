import SuperTable from '../../../src/components/superTable'

SuperTable.install = function(Vue) {
  Vue.component(SuperTable.name, SuperTable);
};

export default SuperTable