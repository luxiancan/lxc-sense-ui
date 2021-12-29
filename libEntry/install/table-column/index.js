import TableColumn from '../../../src/components/table/table-column'

/* istanbul ignore next */
TableColumn.install = function (Vue) {
  Vue.component(TableColumn.name, TableColumn);
};

export default TableColumn;
