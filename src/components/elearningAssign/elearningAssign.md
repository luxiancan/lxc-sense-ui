<!--
 * @Description:
 * @Author: Biytes
 * @Date: 2021-06-22 10:15:53
 * @LastEditors: Biytes
 * @LastEditTime: 2021-07-02 10:53:48
 * @FilePath: \sense\src\components\elearningAssign\elearningAssign.md
-->

###用于企学院学员指派 统一组件

package.josn
"@xiaoe/sense": "2.10.4"

需要引进的页面
import { ElearningAssign } from "@xiaoe/sense";

### Porps

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| selectiveType | 获取类型（all-全部，group-部门，user-成员） | String | 'all' |
| assignVisible | 指派弹窗是否展示 | Boolean | false |
| sureLoading | 确定按钮的loading | Boolean | false |
| disabled | 确定按钮的disabled | Boolean | false |
| checkboxDisabled | 树组件勾选框的禁用 | Boolean | false |
| showDelete | 是否展示已选中列表的删除按钮 | Boolean | true |
| title | 弹窗标题 | String | '指派设置' |
| emptyText | 没有数据的时候展示的文案 | String | '暂无数据' |
| initCheckedData | 已选中列表的数据 | Array | [] |
| isShowClear | 是否展示清除按钮 | Boolean | true |
| isDisabledCheckedList | 是否禁用默认选中的列表【需要给item添加isDefaultSelected = true的字段】 | Boolean | false |
| isSelectReverse | 是否选中，在顶部添加 | Boolean | false |
| isHideRootCheckBox | 是否隐藏根节点的checkbox | Boolean | false |
| retainOperatedData | 是否保留操作过的数据 | Boolean | false |

<!-- 拓展類 -->
| processTreeData | 处理组织架构数据 | Function | true |
| processSearchData | 处理搜索结果的数据 | Function | true |
| searchApi | 搜索Api | String | true |
| searchExtraParams | 搜索的额外参数 | Object | {} |
| getApi | 获取组织架构的api | String | true |
| getExtraParams | 搜索的额外参数 | Object | {} |

### Events

| 事件名 | 说明 | 参数 |
|------|------|------|

| close | 点击取消按钮 | - |
| confirm | 点击确认按钮 | list(最终右边选中的列表) |