<template>
  <div class="tabs" @change="childrenChange">
    <div class="tabs-item__wrapper">
      <li
        class="tabs-item"
        v-for="(item, index) in itemList"
        @click="tabChange(item, index)"
        :key="item.label"
        :class="{
            'current-tabs': value === item.name,
            'ss-tabs-disabled':item.disabled,
            'ss-tabs-card':type === 'card'
        }"
        ref="tabsItem"
      >
       {{item.label}}
      </li>
      <div class="tabs-idx-line__wrapper">
        <span :class="{ 'animate': isAnimate, 'tabs-idx-line__card': type === 'card'}" class="tabs-idx-line" ref="line"></span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SsTabs',

  created() {
    this.$root.$on('changeTabs', this.childrenChange);
  },

  mounted() {
    this.$nextTick(() => {
      this.mergeChildInfos();
      setTimeout(() => {
        this.domItemList = [...this.$refs.tabsItem];
        this.tabBottomLineAnimate(this.currentIdx <= -1 ? 0 : this.currentIdx);
        setTimeout(() => {
          this.isAnimate = true;
        }, 500)
      }, 0);
    });
  },

  props: {
    value: String,
    type: {
      type: String,
      default: 'border-card' // card border-card
    }
  },

  data() {
    return {
      itemList: [],
      domItemList: [],
      currentIdx: 0,
      oldIndex: -1,
      isAnimate: false
    };
  },

  methods: {
    mergeChildInfos() {
      let flag = false;
      const childs = this.$children;
      const tmpList = []
      for (let i = 0; i < childs.length; i += 1) {
        const item = childs[i];
        if (item.name && item.$attrs.label) {
          if (this.value === item.name) {
            this.oldIndex = this.currentIdx
            this.currentIdx = i;
            flag = true;
          }
          tmpList.push({
            name: item.name,
            label: item.$attrs.label,
            disabled: item.disabled
          });
        }
      }
      this.itemList = tmpList
      if (!flag) {
        this.$emit('input', childs[0].name);
      }
    },

    tabChange(item, index) {
      if (item.disabled) {
        return
      }
      if (this.currentIdx !== index) {
        this.$emit('input', item.name);
        if (this.$listeners['tab-click']) {
          this.$emit('tab-click', this.$children[index]);
        }
        this.$nextTick(() => {
          this.tabBottomLineAnimate(index);
        });
        this.oldIndex = this.currentIdx
        this.currentIdx = index
      }
    },

    tabBottomLineAnimate(index) { 
      const currentEle = this.domItemList[index];
      //　组件被销毁后就没有DOM了，结束执行，不然会报错
      if (!currentEle) {
        return;
      }
      const paddingLeft = getComputedStyle(currentEle, false).paddingLeft;
      const paddingRight = getComputedStyle(currentEle, false).paddingRight;
      const eleWidth = getComputedStyle(currentEle, false).width;
      const eleWidthBorder = `${Number(eleWidth.substring(0, eleWidth.length - 2)) - 2}px`;
      const contentWidth = `${Number(eleWidth.substring(0, eleWidth.length - 2)) - Number(paddingRight.substring(0, paddingRight.length - 2)) - Number(paddingLeft.substring(0, paddingLeft.length - 2))}px`;
      const offsetLeft = currentEle.offsetLeft + Number(paddingLeft.substring(0, paddingLeft.length - 2));
      if (this.type === 'card') {
        this.$refs.line.style.cssText = `
          transform: translateX(${currentEle.offsetLeft + 1}px);
          width: ${eleWidthBorder};
        `;
      } else {
        this.$refs.line.style.cssText = `
          transform: translateX(${offsetLeft}px);
          width: ${contentWidth};
        `;
      }
    },

    childrenChange() {
      this.$nextTick(() => {
        this.mergeChildInfos();
        setTimeout(() => {
          this.domItemList = [...this.$refs.tabsItem];
          this.tabBottomLineAnimate(this.currentIdx <= -1 ? 0 : this.currentIdx);
        }, 0);
      })
    }
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/packages/tabs.scss';
</style>