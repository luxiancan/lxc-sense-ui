<template>
  <div class="container">
    <div class="home-body">
      <div class="home-left">
        <div class="home-left-title">sense 组件列表</div>
        <div class="home-left-list">
          <div v-for="(value, key) of menu" :key="key">
            <div class="home-left__item-group">{{ key }}　{{groupMap[key]}}</div>
            <router-link
              :to="item.path"
              class="home-left__item"
              active-class="home-left__item-active"
              v-for="(item, index) in value"
              :key="index"
            >
              <span class="home-left__item-name">{{ item.name }}</span>
              <span class="home-left__item-title">{{ item.meta.title }}</span>
            </router-link>
          </div>
        </div>
        
      </div>
      <div class="home-right">
        <header class="home-right-header">
          <div class="home-right-header_left">
            <span class="home-right-header_title">{{ $route.meta.title }}</span>
            <span class="home-right-header_des" 　v-if="$route.meta.des"
              >（{{ $route.meta.des }}）</span
            >
          </div>
          <div class="home-right-header_right">
            <a
              href="http://111.230.199.61:8090/docs/sense/alert.html"
              target="_blank"
              class="home-document"
              >文档地址</a
            >
          </div>
        </header>
        <div class="home-right-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  routes,
  basic,
  form,
  data,
  nav,
  notice,
  sub,
  other,
} from "../router/index";
export default {
  components: {},
  data() {
    return {
      children: routes.children,
      groupMap: {
        form: '表单',
        basic: '基础',
        data: '展示数据',
        nav: '导航',
        notice: '通知',
        sub: '业务相关',
        other: '其他'
      }
    };
  },
  computed: {
    menu() {
      let menu = this.children.reduce(
        (acc, curr) => {
          if (acc[curr.meta.type]) {
            acc[curr.meta.type].push(curr);
          }
          return acc;
        },
        {
          [basic]: [],
          [form]: [],
          [data]: [],
          [nav]: [],
          [notice]: [],
          [other]: [],
          [sub]: [],
        }
      );

      return menu;
    },
  },
  methods: {},
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

.home-body {
  display: flex;
}
.home-left {
  width: 274px;
  background-color: #fafafa;
}
.home-left-list{
  overflow-y: auto;
  height: calc(100vh - 60px)
}
.home-right {
  flex: 1;
}
.home-left__item {
  height: 40px;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  padding-left: 56px;
  line-height: 40px;
  display: block;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #1472ff;
  }
}
.home-left__item-active {
  color: #1472ff;
}
.home-left__item-name {
  margin-right: 5px;
}
.home-left-title {
  background-color: #1472ff;
  color: #fff;
  text-align: center;
  font-size: 28px;
}
.container {
  padding: 0;
  margin: 0;
}
.home-left-title {
  height: 60px;
  line-height: 60px;
}
.home-right-header {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 60px;
  box-sizing: border-box;
  line-height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  .home-right-header_title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    padding-right: 20px;
  }
  .home-right-header_des {
    color: #f56c6c;
    font-size: 12px;
  }
  .home-document{
    font-size: 18px;
    color: #1472ff;
    text-decoration: none;
  }
}
.home-right-content {
  padding: 20px;
}
.home-left__item-group {
  height: 40px;
  padding-left: 40px;
  color: #ccc;
  line-height: 50px;
}
</style>
