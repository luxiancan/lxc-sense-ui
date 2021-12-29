import { getPropByPath } from '@/utils/util';
import SsCheckbox from '../checkbox';

export const cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 40,
    minWidth: 40,
    realWidth: 40,
    order: '',
    className: 'ss-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

// 这些选项不应该被覆盖
export const cellForced = {
  selection: {
    renderHeader(h, { store }) {
      return <SsCheckbox
        disabled={ store.states.data && store.states.data.length === 0 }
        indeterminate={ store.states.selection.length > 0 && !this.isAllSelected }
        nativeOn-click={ this.toggleAllSelection }
        value={ this.isAllSelected } />;
    },
    renderCell(h, {
      row, column, store, $index
    }) {
      return <SsCheckbox
        nativeOn-click={ event => event.stopPropagation() }
        value={ store.isSelected(row) }
        disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
        on-input={ () => {
          store.commit('rowSelectedChanged', row);
        } } />;
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader(h, { column }) {
      return column.label || '#';
    },
    renderCell(h, { $index, column }) {
      let i = $index + 1;
      const index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return <div>{ i }</div>;
    },
    sortable: false
  },
  expand: {
    renderHeader(h, { column }) {
      return column.label || '';
    },
    renderCell(h, { row, store }) {
      const classes = ['ss-table__expand-icon'];
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('ss-table__expand-icon--expanded');
      }
      const callback = function (e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return (<div class={ classes }
        on-click={callback}>
        <i class='ss-icon ss-icon-arrow-right'></i>
      </div>);
    },
    sortable: false,
    resizable: false,
    className: 'ss-table__expand-column'
  }
};

export function defaultRenderCell(h, { row, column, $index }) {
  const property = column.property;
  const value = property && getPropByPath(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return value;
}

export function treeCellPrefix(h, { row, treeNode, store }) {
  if (!treeNode) {
    return null;
  }
  const ele = [];
  const callback = function (e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(<span class="ss-table__indent" style={{ 'padding-left': `${treeNode.indent}px` }}></span>);
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    const expandClasses = ['ss-table__expand-icon', treeNode.expanded ? 'ss-table__expand-icon--expanded' : ''];
    let iconClasses = ['el-icon-arrow-right'];
    if (treeNode.loading) {
      iconClasses = ['el-icon-loading'];
    }
    ele.push(<div class={ expandClasses }
      on-click={ callback }>
      <i class={ iconClasses }></i>
    </div>);
  } else {
    ele.push(<span class="ss-table__placeholder"></span>);
  }
  return ele;
}
