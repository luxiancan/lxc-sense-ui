<template >
  <div class="ss-modal">
    <div class="ss-modal__wrapper" ref="modal">
      <div class="ss-modal-main">
        <div class="ss-modal-main-header">
          <i class="ss-modal__close sense-icon-close" @click.stop="close"></i>
        </div>

        <div class="ss-modal-main-content">
          <div class="ss-modal-icon__wrapper" v-show="iconType">
            <i class="ss-modal-icon"
              :class="[
                iconType && `ss-modal-icon-color-${iconType}`,
                iconType && `sense-icon-status__${iconType}`
              ]"
            ></i>
          </div>
          <p class="ss-modal-title" v-show="title">{{ title }}</p>
          <p class="ss-modal-content" v-show="content"> {{ content }} </p>
          <div class="ss-modal-slot__extra" v-if="$slots.default">
              <slot></slot>
          </div> 
          <p class="ss-modal-btn">
            <ss-button
              v-if="btnText.cancel"
              class="ss-modal__cancel"
              :type="iconType" 
              @click="cancel">
              {{ btnText.cancel }}
            </ss-button>
            <ss-button
              v-if="btnText.confirm"
              :type="iconType" 
              @click="confirm">
              {{ btnText.confirm }}
            </ss-button>
          </p>
        </div>
      </div>
    </div>

    <transition 
      name="mask-fade"
      @after-leave="maskAfterLeave">
      <div class="ss-modal-mask"
        v-show="maskControl.isShow"
        @click="close"
        ref="mask"
      >
      </div>
    </transition>
  </div>
</template>
<script>
import ssButton from '../button/index'

export default {
  name: 'SsModal',

  components: {
    ssButton
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default: '540px'
    },

    iconType: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    btnText: {
      type: Object,
      default: () => ({
        confirm: '知道',
        cancel: '取消'
      })
    },

    validation: {
      type: Function,
      default: () => {}
    }
  },

  mounted() {
    const mousePosition = {
      x: document.documentElement.offsetWidth / 2,
      y: document.documentElement.offsetHeight / 2
    }
    this.mousePosition = mousePosition
    document.addEventListener('click', this.docClickListener, true)
  },

  data() {
    const mainSize = {}
    const clientSize = {}
    const isOpen = false
    return {
      maskControl: {
        isShow: false
      },
      isOpen,
      mousePosition: { x: 0, y: 0 },
      clientSize,
      mainSize
    }
  },

  watch: {
    visible(val, test) {
      if (val) {
        this.isOpen = true
        this.maskControl.isShow = true
        this.initMainPosition()
        window.addEventListener('resize', this.lastMainPosition, false)
      }
    }
  },

  methods: {
    docClickListener(event) {
      const e = event || window.event
      if (!this.Open) {
        this.mousePosition = {
          x: e.clientX,
          y: e.clientY
        }
      }
    },
    initMainPosition() {
      this.$refs.modal.style.cssText = `
        width: ${this.width};
        left: ${this.mousePosition.x}px;
        top: ${this.mousePosition.y}px;
      `
      this.$nextTick(this.lastMainPosition)
    },

    lastMainPosition() {
      this.$refs.modal.style.cssText = `
        width: ${this.width};
        left: ${this.mousePosition.x}px;
        top: ${this.mousePosition.y}px;
        transform: translate(${this.calcMoveDistance('x')}, ${this.calcMoveDistance('y')}) scale(1);
        opacity: 1;
      `
    },

    getEleStyle() {
      const reg = /px/g
      this.mainSize = {
        wd: parseFloat(getComputedStyle(this.$refs.modal, false).width.replace(reg, '')),
        hi: parseFloat(getComputedStyle(this.$refs.modal, false).height.replace(reg, ''))
      }
      this.clientSize = {
        wd: document.documentElement.clientWidth,
        hi: document.documentElement.clientHeight
      }
    },

    calcMoveDistance(mark) {
      this.getEleStyle()
      const tmpIdx = mark === 'x' ? 'wd' : 'hi'
      return `${parseFloat((this.clientSize[tmpIdx] / 2) - this.mousePosition[mark] - (this.mainSize[tmpIdx] / 2))}px`
    },

    close() {
      this.maskControl.isShow = false
      this.$refs.modal.style.cssText = `
        width: ${this.width};
        left: ${this.mousePosition.x}px;
        top: ${this.mousePosition.y}px;
        transform: translate(0, 0) scale(0);
      `
    },

    confirm() {
      // 这里比较坑爹，在组件内build的时候default是带下划线的，在外部应用组件时编译是不带的
      if (this.validation.name !== '_default' && this.validation.name !== 'default') {
        if (!this.validation()) { 
          return 
        } 
      }

      this.$emit('confirms')
      this.close()
    },

    cancel() {
      this.$emit('cancel')
      this.close()
    },

    maskAfterLeave() {
      this.isOpen = false
      this.$emit('update:visible', false)
      window.removeEventListener('resize', this.lastMainPosition, false)
      this.closed()
    },

    closed() {
      this.$refs.modal.style.cssText = ''
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/modal.scss';
</style>