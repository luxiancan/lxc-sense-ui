<template>
  <div>
    <h4  style="margin: 40px 0">常规tabs</h4>
    <tabs v-model="active">
      <tabs-pane name="dir" label="店铺设置">这是目录</tabs-pane>
      <tabs-pane name="comment" label="评论" disabled>这是评论</tabs-pane>
    </tabs>
    <h4 style="margin: 40px 0">卡片tabs</h4>
    <tabs v-model="active" type="card">
      <tabs-pane name="dir1" label="店铺设置">这是目录</tabs-pane>
      <tabs-pane name="comment1" label="店铺评论">这是评论</tabs-pane>
    </tabs>
  </div>
</template>

<script>
import tabs from '@/components/tabs';
import tabsPane from '@/components/tabs/tabPane';

export default {
  components: {
    tabs,
    tabsPane
  },
  data() {
    return {
      active: 'some',
      active2: 'dir1'
    };
  }
};
</script>
