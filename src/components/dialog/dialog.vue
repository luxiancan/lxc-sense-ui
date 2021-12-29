<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      v-show="visible"
      class="ss-dialog__wrapper"
      @click.self="handleWrapperClick"
    >
      <div
        role="dialog"
        :key="key"
        aria-modal="true"
        :aria-label="title || 'dialog'"
        :class="[
          'ss-dialog',
          { 'is-fullscreen': fullscreen, 'ss-dialog--center': center },
          customClass,
        ]"
        ref="dialog"
        :style="style"
      >
        <div class="ss-dialog__header">
          <slot name="title">
            <span class="ss-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="ss-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose"
          >
            <i class="ss-dialog__close sense-icon-close"></i>
          </button>
        </div>
        <div class="dialog-body">
          <div class="contentSide" v-if="$slots.contentSide">
            <slot name="contentSide"></slot>
            </div>
          <div class="contentMain">
            <div class="ss-dialog__body" v-if="rendered">
              <slot name="content"></slot>
            </div>
            <div class="ss-dialog__footer" v-if="$slots.footer">
              <slot name="messageTip">
                <img
                src="../../view/assets/images/tree/icon_messageTip.svg"
                alt=""
                class="icon-messagetip"
                v-if="messageTip"
                >
                <span class="messagetip">{{ messageTip }}</span>
              </slot>
              <ss-button type="plain"
                         :loading="cancelBtnLoading"
                         @click="cancel">{{ btnText.cancel }}</ss-button>
              <ss-button type="primary"
                        :loading="submitBtnLoading"
                        @click="submit">{{ btnText.submit }}</ss-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from '@/utils/popup';
import Migrating from '@/mixins/migrating';
import emitter from '@/mixins/emitter';
import SsButton from '@/components/button';

export default {
  name: 'SsDialog',
  mixins: [Popup, emitter, Migrating],
  components: {
    SsButton
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    messageTip: {
      type: String,
      default: '',
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalAppendToBody: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },

    lockScroll: {
      type: Boolean,
      default: true,
    },

    closeOnClickModal: {
      type: Boolean,
      default: true,
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },

    showClose: {
      type: Boolean,
      default: true,
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: '',
    },

    btnText: {
      type: Object,
      default: () => ({
        submit: '确定',
        cancel: '取消'
      })
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: Boolean,
    // 确认按钮loading
    submitBtnLoading: Boolean,
    cancelBtnLoading: Boolean,
  },

  data() {
    return {
      closed: false,
      key: 0,
    };
  },

  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) {
          this.$emit('close');
        }
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++;
          });
        }
      }
    },
  },

  computed: {
    style() {
      const style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    },
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          size: 'size is removed',
        },
      };
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) {
        return
      }
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper');
      this.broadcast('ElDropdownMenu', 'updatePopper');
    },
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    },
    cancel() {
      this.$emit('cancel')
    },
    submit() {
      this.$emit('submit')
    }
  },

  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },

  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/packages/dialog.scss';
</style>
