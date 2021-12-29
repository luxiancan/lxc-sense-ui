<template>
  <transition name='ss-alert-fade'>
    <div 
      class='ss-alert'
      :class='[ 
        `ss-alert__${this.type}`, 
        closable && "ss-alert__closable" 
      ]'
      v-show='visible'
    >
      <i 
        v-if='showIcon' 
        class='ss-alert-status-icon' 
        :class='[ `sense-icon-status__${this.type}` ]'
        :style='{ fontSize: iconSize }'
      >
      </i>
      <div class='ss-alert-title'> 
        <span  v-html="title">
        </span>
        <a class="ss-target-link" :href="link" :target="target" v-if="linkText" >{{linkText}}</a>
      </div>
      
      <i 
        class='ss-alert-closebtn sense-icon-close' 
        v-show='closable' 
        @click='close'
      >
      </i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SsAlert',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null 
    },
    linkText: {
      type: String,
      default: ''
    },
    linkMode: {
      type: String,
      default: 'self' // self 当前页面打开 blank 打开新窗口
    }
  },

  data() {
    return {
      visible: true
    };
  },
  computed: {
    target() {
      return `_${this.linkMode}`
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/packages/alert.scss';
</style>