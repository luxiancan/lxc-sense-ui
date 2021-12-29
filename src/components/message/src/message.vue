<template>
  <div
    class="ss-message__wrapper"
    :style="{ top: top ? `${top}px` : 'auto' }"
  >
    <transition name="move-up" @after-leave="doDestory">
      <div
        class="ss-message"
        :class="{ [`ss-message__${type}`]: type }"
        v-show="visible"
      >
        <i class="ss-message-icon" :class="iconClass" v-if="showIcon"></i>
        <span class="ss-message-content">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      duration: 3000,
      type: 'info',
      icon: '',
      visible: false,
      timer: null,
      closed: false,
      onClose: null,
      top: null,
      showIcon: true
    }
  },
  computed: {
    iconClass() {
      const classArr = {
        info: 'sense-icon-status__primary'
      }
      return this.icon || classArr[this.type] || `sense-icon-status__${this.type}`
    }
  },
  watch: {
    closed(val) {
      if (val) {
        this.visible = false
      }
    }
  },
  methods: {
    doDestory() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    startTimer() {
      if (this.duration) {
        this.timer = setTimeout(() => {
          !this.closed && this.close()
        }, this.duration)
      }
    },
    clearTimer() {
      this.timer && clearTimeout(this.timer)
    }
  },
  mounted() {
    this.startTimer()
  }
}
</script>


<style lang="scss">
  @import '@/assets/scss/packages/message.scss';
</style>

