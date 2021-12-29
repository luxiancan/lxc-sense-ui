import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const basic = 'basic';
export const form = 'form';
export const data = 'data';
export const nav = 'nav';// 导航类
export const notice = 'notice'
export const sub = 'sub';// 业务组件
export const other = 'other'

export const routes = {
  path: '/',
  name: 'index',
  component: () => import('@/view/index'),
  children: [
    {
      path: '/button',
      name: 'button',
      component: () => import('@/view/button'),
      meta: {
        title: '按钮',
        type: basic
      }
    }, {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('@/view/checkbox'),
      meta: {
        title: '复选框',
        type: form
      }
    }, {
      path: '/select',
      name: 'select',
      component: () => import('@/view/select'),
      meta: {
        title: '下拉框',
        type: form
      }
    }, {
      path: '/input',
      name: 'input',
      component: () => import('@/view/input'),
      meta: {
        title: '输入框',
        type: form
      }
    }, {
      path: '/tag',
      name: 'tag',
      component: () => import('@/view/tag'),
      meta: {
        title: '标签',
        type: data
      }
    }, {
      path: '/badge',
      name: 'badge',
      component: () => import('@/view/badge'),
      meta: {
        title: '标记',
        type: data
      }
    }, {
      path: '/radio',
      name: 'radio',
      component: () => import('@/view/radio'),
      meta: {
        title: '单选框',
        type: form
      }
    }, {
      path: '/pagination',
      name: 'pagination',
      component: () => import('@/view/pagination'),
      meta: {
        title: '分页器',
        type: data
      }
    }, {
      path: '/steps',
      name: 'steps',
      component: () => import('@/view/steps'),
      meta: {
        title: '步骤条',
        type: nav
      }
    }, {
      path: '/alert',
      name: 'alert',
      component: () => import('@/view/alert'),
      meta: {
        title: '警告提示',
        type: notice
      }
    }, {
      path: '/modal',
      name: 'modal',
      component: () => import('@/view/modal'),
      meta: {
        title: '模态框',
        des: '不再维护请使用dialog',
        type: notice
      }
    }, {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('@/view/dropdown'),
      meta: {
        title: '下拉菜单',
        type: nav
      }
    }, {
      path: '/popover',
      name: 'popover',
      component: () => import('@/view/popover'),
      meta: {
        title: '弹出框',
        type: other
      }
    }, {
      path: '/message',
      name: 'message',
      component: () => import('@/view/message'),
      meta: {
        title: '消息提示',
        type: notice
      }
    }, {
      path: '/tabs',
      name: 'tabs',
      component: () => import('@/view/tabs'),
      meta: {
        title: '标签页',
        type: nav
      }
    }, {
      path: '/resourceSelect',
      name: 'resourceSelect',
      component: () => import('@/view/resourceSelect'),
      meta: {
        title: '上帝选择器',
        type: sub
      }
    }, {
      path: '/switch',
      name: 'switch',
      component: () => import('@/view/switch'),
      meta: {
        title: '开关',
        type: form
      }
    }, {
      path: '/topTips',
      name: 'topTips',
      component: () => import('@/view/topTips'),
      meta: {
        title: '立即订购',
        type: sub

      }
    }, {
      path: '/assignModal',
      name: 'assignModal',
      component: () => import('@/view/assignModal'),
      meta: {
        title: '授权组件',
        type: sub
      }
    },
    {
      path: '/shareModal',
      name: 'shareModal',
      component: () => import('@/view/shareModal'),
      meta: {
        title: '海报',
        type: sub
      }
    },
    {
      path: '/defaultTips',
      name: 'defaultTips',
      component: () => import('@/view/defaultTips'),
      meta: {
        title: '小黄条',
        type: sub
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/view/tree'),
      meta: {
        title: '树',
        type: data
      }
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: () => import('@/view/messageBox'),
      meta: {
        title: '确认提示',
        type: notice
      }
    },
    {
      path: '/pushSetting',
      name: 'pushSetting',
      component: () => import('@/view/pushSetting'),
      meta: {
        title: '消息推送',
        type: sub
      }
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/view/table'),
      meta: {
        title: '表格',
        type: data
      }
    },
    {
      path: '/superTable',
      name: 'supertable',
      component: () => import('@/view/superTable/index'),
      meta: {
        title: '超级表格',
        type: data,
        des: '集成筛选，分页器'
      }
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('@/view/tooltip'),
      meta: {
        title: '文字提示',
        type: notice
      }
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/view/form'),
      meta: {
        title: '表单',
        type: form
      }
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/view/loading'),
      meta: {
        title: '加载',
        type: notice
      }
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('@/view/dialog'),
      meta: {
        title: '弹出窗口',
        type: notice
      }
    },
    {
      path: '/rate',
      name: 'rate',
      component: () => import('@/view/rate'),
      meta: {
        title: '评分',
        type: form
      }
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: () => import('@/view/datePicker'),
      meta: {
        title: '日期选择器',
        type: form
      }
    },
    {
      path: '/timePicker',
      name: 'timePicker',
      component: () => import('@/view/timepicker'),
      meta: {
        title: '时间选择器',
        type: form
      }
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('@/view/grid'),
      meta: {
        title: '栅格',
        type: form
      }
    },
    {
      path: '/materialSelection',
      name: 'materialSelection',
      component: () => import('@/view/materialSelection'),
      meta: {
        title: '素材选择器',
        type: sub
      }
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: () => import('@/view/cropper'),
      meta: {
        title: '裁剪组件',
        type: sub
      }
    },
    {
      path: '/phoneInput',
      name: 'phoneInput',
      component: () => import('@/view/phoneInput'),
      meta: {
        title: '手机号输入框',
        type: sub
      }
    },
  ]
};

export default new Router({
  routes: [routes]
});
