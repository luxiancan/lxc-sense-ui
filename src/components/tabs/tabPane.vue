<template>
  <div class="tabs-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SsTabPane',

  props: {
    name: String,
    disabled: Boolean
  },

  data() {
    return {
      idx: -1
    };
  },

  created() {
    this.$nextTick(this.getEleIdx)
  },
  
  computed: {
    active() {
      return this.name === this.$parent.value;
    }
  },

  destroyed() {
    this.$root.$emit('changeTabs')
  },

  methods: {
    getEleIdx() {
      for (let i = 0; i < this.$parent.itemList.length; i += 1) {
        if (this.$parent.itemList[i].name === this.name) {
          this.idx = i;
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* @import '@/assets/scss/index.scss';*/ 
</style>

