<!--
 * @Author: your name
 * @Date: 2020-09-04 09:47:34
 * @LastEditTime: 2020-10-09 17:16:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edito
 * @FilePath: /sense/src/view/tree.vue
-->
<template>
  <div v-show="true">
    <ss-tree
          class="org-tree"
          node-key="id"
          :check-strictly="true"
          @check-change="changeCheck"
          :props="defaultProps"
          :highlight-current="true"
          :searchContent.sync="searchContent"
          :searchData="searchList"
          :load="loadNode"
          ref="tree"
          @search="search"
          :checkedList.sync="selectList"
          :node-tools="nodeTools"
          @option-click="optionClick"
          @tool-click="toolClick"
          :show-checkbox="true"
          :data="treeData"
        >
    </ss-tree>
  </div>
</template>

<script>
import tree from "@/components/tree/index";

const treeData = [
    {
        "id":"g_appB175NoiY5777",
        "type":"group",
        "name":"组织架构接入知识店铺组织架构接入知识店铺",
        "image":"",
        "attr":{
            "group_id":"g_appB175NoiY5777",
            "name":"组织架构接入知识店铺组织架构接入知识店铺",
            "parent_id":"appB175NoiY5777",
            "path":"",
            "children":[
                {
                    "group_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                    "name":"企业产品中心",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[
                        {
                            "group_id":"g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
                            "name":"编辑测试1",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_483c1d1d-632d-449f-b313-942bd40fde09",
                            "name":"学习产品组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_a4cc6856-0429-4c42-b062-ddb216fdf770",
                            "name":"学习后台二组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
                            "name":"学习后台一组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        }
                    ]
                },
                {
                    "group_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                    "name":"云产品中心",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[
                        {
                            "group_id":"g_88fd45e9-df85-4375-92f8-1b7a1936f25b",
                            "name":"云产品组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[
                                {
                                    "group_id":"g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                    "name":"111",
                                    "parent_id":"g_88fd45e9-df85-4375-92f8-1b7a1936f25b",
                                    "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df/g_88fd45e9-df85-4375-92f8-1b7a1936f25b",
                                    "children":[
                                        {
                                            "group_id":"g_17c0d5d8-5048-4111-b79f-3f9de85f4517",
                                            "name":"6666666666666666",
                                            "parent_id":"g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df/g_88fd45e9-df85-4375-92f8-1b7a1936f25b/g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                            "children":[
                                              {
                                                  "group_id":"g_2ddb1771-9519-465f-9570-db03b205cc802",
                                                  "name":"在111添加",
                                                  "parent_id":"g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                                  "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df/g_88fd45e9-df85-4375-92f8-1b7a1936f25b/g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                                  "children":[
                                                    {
                                                        "group_id":"g_2ddb1771-9519-465f-9570-db03b205cc803",
                                                        "name":"在111添加",
                                                        "parent_id":"g_4e6faa0a-3615-43fe-9722-ce5fa745363b4",
                                                        "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df/g_88fd45e9-df85-4375-92f8-1b7a1936f25b/g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                                        "children":[
                                                          {
                                                              "group_id":"g_2ddb1771-9519-465f-9570-db03b205cc805",
                                                              "name":"在111添加",
                                                              "parent_id":"g_4e6faa0a-3615-43fe-9722-ce5fa745363b6",
                                                              "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df/g_88fd45e9-df85-4375-92f8-1b7a1936f25b/g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                                              "children":[

                                                              ]
                                                          }
                                                        ]
                                                    }
                                                  ]
                                              }
                                            ]
                                        },
                                        {
                                            "group_id":"g_2ddb1771-9519-465f-9570-db03b205cc80",
                                            "name":"在111添加",
                                            "parent_id":"g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df/g_88fd45e9-df85-4375-92f8-1b7a1936f25b/g_4e6faa0a-3615-43fe-9722-ce5fa745363b",
                                            "children":[

                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "group_id":"g_a9bd76ec-b9a9-43cd-bc0b-43dbc43c8edc",
                            "name":"云前端组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_24041dce-bb71-4426-b4a9-683f3c5a707b",
                            "name":"云后台组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_1373a135-7e0a-4d8c-8d5c-b5921340f658",
                            "name":"计费营销组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_514a9710-3740-44eb-ad50-dedcee1d9033",
                            "name":"系统架构组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_0c96a19f-e874-471a-a915-1e59a56fdf2c",
                            "name":"数据平台组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_818a1f8f-562b-4436-ba70-469e757a205a",
                            "name":"云产品组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_d5af8417-525a-4ed9-b1cc-46482b5de029",
                            "name":"云产品组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_598941b9-bdf4-4f27-9e90-39e532c5434e",
                            "name":"云前端组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_09fdc25e-7e4c-446a-bf71-b3e9053795aa",
                            "name":"云后台组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_bdbb3287-88f7-4c62-9510-fac6f3ba093c",
                            "name":"计费营销组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_91c816a4-8a1e-4ec5-9760-c944225bf74c",
                            "name":"系统架构组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_a7933dbd-4436-4815-9aea-56eb7ebbcbc8",
                            "name":"数据平台组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_87f38e81-d5ee-4e30-b981-8eb2111534fb",
                            "name":"云产品组",
                            "parent_id":"g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "path":"/g_appB175NoiY5777/g_4041462d-420d-4c14-a5cf-c1349772d8df",
                            "children":[

                            ]
                        }
                    ]
                },
                {
                    "group_id":"g_772f682e-f4f3-4227-9f62-ca3da7eb8d4d",
                    "name":"1",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_cbffb17e-bed4-4253-b18b-9166e224a767",
                    "name":"11",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_16b6e3a9-dc2d-46ab-bdde-23056d491e5c",
                    "name":"1",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_63a05d2b-7f91-4886-b3b3-1e0d6cc45f89",
                    "name":"子分组",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_ae229ebd-f8cc-44c8-9ed4-cfe09e44dbc9",
                    "name":"雷吉很强组",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_abb98d15-4462-4e05-9b51-2bce0fe96bb9",
                    "name":"雷吉很狗组",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_c5f1758b-092b-4102-b8f6-904d32774f97",
                    "name":"雷吉吃饭组",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_5e2e4e18-a8ce-4b7a-9fd2-37ae4d525a6c",
                    "name":"雷吉吃饭组",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[

                    ]
                },
                {
                    "group_id":"g_9b5f5ef0-734d-4865-9411-ec11b5e11287",
                    "name":"haode",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"g_appB175NoiY5777",
                    "children":[

                    ]
                }
            ]
        },
        "children":[
          {
            attr: null,
            children: null,
            id: "u_5f6dcbb2de79a_CgYvrqUHAs",
            image: "https://wechatavator-1252524126.cos.ap-shanghai.myqcloud.com/aaa/default.svg",
            name: "张三",
            type: "user",
          },
            {
                "id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                "type":"group",
                "name":"企业产品中心",
                "image":"",
                "attr":{
                    "group_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                    "name":"企业产品中心",
                    "parent_id":"g_appB175NoiY5777",
                    "path":"/g_appB175NoiY5777",
                    "children":[
                        {
                            "group_id":"g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
                            "name":"编辑测试1",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_483c1d1d-632d-449f-b313-942bd40fde09",
                            "name":"学习产品组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_a4cc6856-0429-4c42-b062-ddb216fdf770",
                            "name":"学习后台二组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        {
                            "group_id":"g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
                            "name":"学习后台一组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        }
                    ]
                },
                "children":[
                    {
                        "id":"g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
                        "type":"group",
                        "name":"编辑测试1",
                        "image":"",
                        "attr":{
                            "group_id":"g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
                            "name":"编辑测试1",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        "children":[

                        ]
                    },
                    {
                        "id":"g_483c1d1d-632d-449f-b313-942bd40fde09",
                        "type":"group",
                        "name":"学习产品组",
                        "image":"",
                        "attr":{
                            "group_id":"g_483c1d1d-632d-449f-b313-942bd40fde09",
                            "name":"学习产品组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        "children":[

                        ]
                    },
                    {
                        "id":"g_a4cc6856-0429-4c42-b062-ddb216fdf770",
                        "type":"group",
                        "name":"学习后台二组",
                        "image":"",
                        "attr":{
                            "group_id":"g_a4cc6856-0429-4c42-b062-ddb216fdf770",
                            "name":"学习后台二组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        "children":[

                        ]
                    },
                    {
                        "id":"g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
                        "type":"group",
                        "name":"学习后台一组",
                        "image":"",
                        "attr":{
                            "group_id":"g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
                            "name":"学习后台一组",
                            "parent_id":"g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "path":"/g_appB175NoiY5777/g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
                            "children":[

                            ]
                        },
                        "children":[

                        ]
                    }
                ]
            }]
    }
]

const data = {
  "code": 0,
  "msg": "success",
  "data": [
    {
      "id": "g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
      "type": "group",
      "name": "学习产品中心",
      "image": "",
      "attr": null,
      "children": [
        {
          "id": "g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
          "type": "group",
          "name": "学习前端组",
          "image": "",
          "attr": null,
          "children": []
        },
        {
          "id": "g_483c1d1d-632d-449f-b313-942bd40fde09",
          "type": "group",
          "name": "学习产品组",
          "image": "",
          "attr": null,
          "children": []
        },
        {
          "id": "g_a4cc6856-0429-4c42-b062-ddb216fdf770",
          "type": "group",
          "name": "学习后台二组",
          "image": "",
          "attr": null,
          "children": []
        },
        {
          "id": "g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
          "type": "group",
          "name": "学习后台一组",
          "image": "",
          "attr": null,
          "children": []
        }
      ]
    },
    {
      "id": "g_483c1d1d-632d-449f-b313-942bd40fde09",
      "type": "group",
      "name": "学习产品组",
      "image": "",
      "attr": null,
      "children": []
    },
    {
      "id": "g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
      "type": "group",
      "name": "学习前端组",
      "image": "",
      "attr": null,
      "children": []
    },
    {
      "id": "g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
      "type": "group",
      "name": "学习后台一组",
      "image": "",
      "attr": null,
      "children": []
    },
    {
      "id": "g_a4cc6856-0429-4c42-b062-ddb216fdf770",
      "type": "group",
      "name": "学习后台二组",
      "image": "",
      "attr": null,
      "children": []
    },
    {
      "id": "u_5f583ef60ebfd_75DudrpTxQ",
      "type": "user",
      "name": "regzou",
      "image": "https://wechatavator-1252524126.cos.ap-shanghai.myqcloud.com/aaa/default.svg",
      "attr": null,
      "children": null
    },
    {
      "id": "u_5f583ef60fc55_jZGQjLIoqb",
      "type": "user",
      "name": "jeffery",
      "image": "https://wechatavator-1252524126.cos.ap-shanghai.myqcloud.com/aaa/default.svg",
      "attr": null,
      "children": null
    }
  ]
};

const getTree = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    })
  })
}


const getSearchData = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        // {
        //   "code": 0,
        //   "msg": "success",
        //   "data": [
        //     {
        //       "id": "g_a817b2dc-16b0-4ee2-8722-0f44c1ad8dd8",
        //       "type": "group",
        //       "name": "学习产品中心",
        //       "image": "",
        //       "attr": null,
        //       "children": [
        //         {
        //           "id": "g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
        //           "type": "group",
        //           "name": "学习前端组",
        //           "image": "",
        //           "attr": null,
        //           "children": []
        //         },
        //         {
        //           "id": "g_483c1d1d-632d-449f-b313-942bd40fde09",
        //           "type": "group",
        //           "name": "学习产品组",
        //           "image": "",
        //           "attr": null,
        //           "children": []
        //         },
        //         {
        //           "id": "g_a4cc6856-0429-4c42-b062-ddb216fdf770",
        //           "type": "group",
        //           "name": "学习后台二组",
        //           "image": "",
        //           "attr": null,
        //           "children": []
        //         },
        //         {
        //           "id": "g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
        //           "type": "group",
        //           "name": "学习后台一组",
        //           "image": "",
        //           "attr": null,
        //           "children": []
        //         }
        //       ]
        //     },
        //     {
        //       "id": "g_483c1d1d-632d-449f-b313-942bd40fde09",
        //       "type": "group",
        //       "name": "学习产品组",
        //       "image": "",
        //       "attr": null,
        //       "children": []
        //     },
        //     {
        //       "id": "g_cb1976e2-8764-4bae-aab5-da5f8c5723a8",
        //       "type": "group",
        //       "name": "学习前端组",
        //       "image": "",
        //       "attr": null,
        //       "children": []
        //     },
        //     {
        //       "id": "g_32f49aa4-3441-407b-af1e-1e92622f0d0f",
        //       "type": "group",
        //       "name": "学习后台一组",
        //       "image": "",
        //       "attr": null,
        //       "children": []
        //     },
        //     {
        //       "id": "g_a4cc6856-0429-4c42-b062-ddb216fdf770",
        //       "type": "group",
        //       "name": "学习后台二组",
        //       "image": "",
        //       "attr": null,
        //       "children": []
        //     },
        //     {
        //       "id": "u_5f583ef60ebfd_75DudrpTxQ",
        //       "type": "user",
        //       "name": "regzou",
        //       "image": "https://wechatavator-1252524126.cos.ap-shanghai.myqcloud.com/aaa/default.svg",
        //       "attr": null,
        //       "children": null
        //     },
        //     {
        //       "id": "u_5f583ef60fc55_jZGQjLIoqb",
        //       "type": "user",
        //       "name": "jeffery",
        //       "image": "https://wechatavator-1252524126.cos.ap-shanghai.myqcloud.com/aaa/default.svg",
        //       "attr": null,
        //       "children": null
        //     }
        //   ]
        // }

      )
    }, 2000)
  })
}

export default {
  name: "tree.vue",
  components: {
    SsTree: tree
  },
  data() {
    return {
      data: [],
      isShowTree: false,
      defaultProps: {
        label: "name",
        children: "children",
        isLeaf(data, node) {
          return !!data.image;
        },
      },
      searchContent: "",
      searchResult: [],
      searchList: [
{"id":"u_5f682b5a4e497_DAaatYJ6G2","type":"user","name":"ab","image":"http://wechatavator-1252524126.file.myqcloud.com/appB175NoiY5777/image/compress/u_5f682b5a4e497_DAaatYJ6G2.png","attr":null,"children":null},{"id":"u_5f583ef60ebfd_75DudrpTxQ","type":"user","name":"aregzou","image":"https://wechatavator-1252524126.cos.ap-shanghai.myqcloud.com/aaa/default.svg","attr":null,"children":null}
      ],
      nodeTools: [
        {
          id: 1,
          icon: require("./assets/images/tree/icon_add.svg"),
          hoverIcon: require("./assets/images/tree/icon_add_hover.svg"),
          requireToLeaf: true,
        },
        {
          id: 2,
          icon: require("./assets/images/tree/icon_more.svg"),
          hoverIcon: require("./assets/images/tree/icon_more_hover.svg"),
          hoverOption: [
            {
              id: "delete",
              label: "添加子分组",
              requireToRoot: false
            },
            {
              id: "rename",
              label: "重命名",
            },
          ],
          requireToLeaf: true,
        },
      ],
      showCheckbox: true,
      checkedKeys: ["444"],
      selectList: [],
      treeData
    };
  },
  mounted() {
    setTimeout(() =>{
      this.isShowTree = true
    }, 2000)
    setTimeout(() => {
      this.checkedKeys = ["444", "555", "888"];
    }, 5000);
    console.log(this.$refs.tree.getTreeInstance());
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    optionClick(hoverOption, operationItem) {
      console.log('option-click')
      console.log(hoverOption);
      // console.log(operationItem)
    },
    operationClick(operationItem) {
      console.log(operationItem);
    },
    nodeClick(data) {
      console.log(data);
    },
    nodeCheckedChange(data) {
      console.log(data);
    },

    toolClick (data) {
      console.log('tool-click')
      console.log(data)
    },
    changeCheck(node, isChecked, childrenIsChecked) {
      // if (isChecked) {
      //   this.selectList.push(node);
      //   return;
      // }
      // this.removeSelectListItem(node);
    },

    search () {
      console.log('this.value', this.searchContent)
      getSearchData().then((res) => {
        if (res.data){
          console.log(res.data)
          this.searchList = res.data.filter((item) => {
            return item.type === 'user'
          })
          console.log(this.searchList)
        }
      })
    },

    removeSelectListItem(node) {
      const index = this.selectList.findIndex((item) => {
        return item.id === node.id;
      });

      this.selectList.splice(index, 1);
    },

     loadNode(node, resolve) {
      const { data } = node;

      if (data.type === "user") {
        return resolve([]);
      }

      if (node.level === 0) {
        this.initMainNode(node, resolve);
      } else {
        getTree().then((res) =>{
          if (res) {
           resolve(res.data.children);
          }
        });
      }
    },

     initMainNode(node, resolve) {
      getTree().then((res) => {
        if (res) {
          resolve(res.data);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.org-tree {
  width: 230px;
  border: 1px solid #000;
  margin-left: 20px;
  height: 600px;
  overflow: scroll;
}
</style>
