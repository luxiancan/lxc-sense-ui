/**
 * @description 表格配置
 */

/**
 * 属性配置
 */
export const tableOptions= function (self){
  return  {
    selectionOptions: {
      uniqueKey: 'resource_id',
      events: {
        'on-select-change'(rows) {
          self.handleSelectChange(rows)
        }
      },
      checkSelectable(row) {
        return row.name !== '王王王';
      }
    },
    pagination: {  //pagination配置举例
      /*total: 30,
      current: 2,
      pageSize: 10,
      small: true,
      pageSizeOptions: [5,15,25],
      showSizeChanger: false,
      showQuickJumper: false,*/
    },
    'row-class-name': 'super-name',
  }
}

export const filterOptionsSpaceBetween = function () {
  return [
    {
      toolbarType: 'button',
      type: 'primary',
      text: '按钮',
      align: 'left',
      disable: false,
      onClickCallback() {
        alert('aaa')
        // TODo
      }
    },
    {
      toolbarType: 'text',
      align: 'left',
      text: '我是一段文字描述'
    },
    {
      toolbarType: 'search',
      key: 'namea',
      defaultValue: null,
      align: 'right',
      component: {
        name: 'ss-input',
        props: {
          placeholder: '请输入姓名',
        },
        events: {
        }
      }
    }
  ]
}


/**
 * 筛选
 */
export const filterOptions = function (self) {
  return [
    {
      key: 'date',
      formatter(val) {
        return val
      },
      title: '文本',
      component: {
        name: 'ss-select',
        props: {
          placeholder: '日期',
        },
        clearable: true,
        options: dateOptions,
        events: {
          change(e){
            console.log('日期----',e);
            self.handleSearch()
          }
        }
      }
    },
    {
      key: 'name',
      title: '姓名',
      defaultValue: null,
      component: {
        name: 'ss-input',
        props: {
          placeholder: '请输入姓名',
        },
        events: {
          /*blur(e){
            console.log('姓名----',e);
            self.handleSearch()
          }*/
        }
      }
    },
    {
      key: '11',
      title: '姓名',
      defaultValue: null,
      component: {
        name: 'ss-input',
        props: {
          placeholder: '请输入姓名',
        },
        events: {
          /*blur(e){
            console.log('姓名----',e);
            self.handleSearch()
          }*/
        }
      }
    },
  ]
}

/**
 * 表格头部配置
 * @param
 */
export const tableHeader  = function () {
  return [
    {
      props: {
        prop: 'date',
        label: '日期',
        'show-overflow-tooltip': true,
        'sortable': true
      },
    },
    {
      props: {
        prop: 'name',
        label: '姓名',
      },
      popover: {
        content: 'aaa'
      }
      // headerConfig: {
      //   columnDes: '我是列说明文字',
      //   columnDesIcon: '---'
      // }

    },
    {
      props: {
        prop: 'address',
        label: '地址',
      }
    },
    {
      props: {
        prop: 'note',
        label: '备注',
        align: 'right'
      }
    },
  ]
}

export const fetchOptions = () => {
  return {
    url: '/sense/super-table/demo',
    method: 'get',  //暂支持post、get，默认post
    params:{
      list_type: 1,
      //page: ['page','page_size'],
    },
    //showError: false,  //报错后是否提示错误，默认true
    formatter(list) {
      console.log('fetchOptions',list)
      return list
    }
  }
}


export const dateOptions = [
  {
    value: '2021-01-01',
    label: '2021-01-01'
  }, {
    value: '2021-01-02',
    label: '2021-01-02',
  }, {
    value: '2021-01-03',
    label: '2021-01-03'
  }
]
