
###授权组件

package.josn 
"@xiaoe/sense": "1.1.5"

需要引进的页面
import {AuthModal} from '@xiaoe/sense';
import '@xiaoe/sense/static/index.css';

### Porps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| searchType | 搜索方式（all-全部，employee-成员，department-部门） | String | 'all' | 
| assignType | 指派类型，课程 course, 培训计划 training | String | 'course' |
| title | 弹出框的头部标题 | String | '指派设置' |
| placeholderText | 搜索框的文案 | String | '请输入部门或者人员' |
| leftButtonText | 左边按钮的文案 | String | '取消' |
| rightButtonText | 右边按钮的文案 | String | '确定' |
| isShowUsers | 左边的组织架构是否展示学员 | Boolean | true |

### Events

| 事件名 | 说明 | 参数 |
|------|------|------|

| cancleEvent | 点击取消按钮 | - |
| confirmEvent | 点击确认按钮 | list(最终右边选中的列表) |
| deleteEvent | 右边删除选择的人或者部门 | - |
| closeEvent | 点击右上角的 x | - |
| getAssignedSuccessEvent | 获取上一次选择的课件范围列表成功 | 1.list(上一次授权的列表) 2.is_all(Boolean值,true代表课程范围全部可见，false代表部分可见)|
| getAssignedFailEvent | 获取上一次选择的课件范围列表失败 | msg(失败的原因) |
| authorizedSuccessEvent | 最终授权可见范围成功 | msg(授权成功的描述) |
| authorizedFailEvent | 最终授权可见范围失败 | msg(失败的原因) |
| getTreeSuccessEvent | 获取组织架构成功 | -- |

### methods
| 方法名 | 说明 | 参数 |
|------|------|------|
| getAssignedUserList | 获取上一次可见范围的人员列表 | { "resource_id": "i_xda1kmmnj"} 具体参数参照接口文档 |
| authorizeEvent | 最终调用授权操作 | { "resource_id": "i_xda1kmmnj",resource_type：1}具体参数参照接口文档 |
| show | 展示该组件 | -- |
| hide | 隐藏该组件 | -- |
| deleteSingle | 删掉单独的用户或者部门 | 传入当前用户或者部门的参数{name:'',cid:''}} |
| deleteAll | 清空选择的用户和部门 | -- |   
| allAuthorizeEvent | 课程可见范围的全部授权操作 | { "resource_id": "i_xda1kmmnj",resource_type：1} | 