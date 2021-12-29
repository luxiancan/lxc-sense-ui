export default {
  functional: true,
  props: {
    render: {
      type: Function,
      default: null,
    },
    rowData: {
      type: Object,
      default() {
        return {}
      },
    },
    rowIndex: {
      type: [String, Number],
      default: '-1',
    },
    columnData: {
      type: Object,
      default() {
        return {}
      },
    },
    type: {
      type: [String],
      default: 'row',
      validator(value) {
        return ['row', 'header'].includes(value)
      },
    },
    emptyNodes: {
      type: Array,
      default() {
        return undefined
      },
    },
    refreshTable: {
      type: Function || undefined,
      default: undefined
    }
  },
  render(createElement, context) {
    const {
      render,
      emptyNodes,
      type,
      rowData,
      columnData,
      rowIndex,
      refreshTable
    } = context.props
    if (emptyNodes) {
      return createElement('template', { slot: 'empty' }, emptyNodes)
    }
    if (type === 'row') {
      return render(createElement, rowData, rowIndex, refreshTable)
    } else {
      return render(createElement, columnData, rowIndex, refreshTable)
    }
  },
}
