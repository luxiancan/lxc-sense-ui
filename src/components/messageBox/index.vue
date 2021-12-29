<template>
    <div role="dialog" class="ss-message-box-wrapper" :class="customClass" v-show="visible">
        <transition name="slide-fade">
            <div class="ss-message-box" :class="[{'ss-message-box-big': layout === 'vertical'}]" ref="messageBox">
                <div class="sense-icon-close ss-message-close"  @click="handleAction('cancel')" v-if="layout === 'vertical' && closeIcon"></div>
                <div class="ss-message-box-main">
                    <div class="ss-message-box-icon">
                        <i :class="initIconClass"></i>
                    </div>
                    <div class="ss-message-box-content" :style="{width: boxWidth ? boxWidth - 40 + 'px' : 'auto'}">
                        <div class="content__title" v-if="initTitle">
                            <!-- 这是一条提示信息 -->
                            {{initTitle}}
                        </div>
                        <div class="content__message">
                            <div v-if="!dangerouslyUseHTMLString">{{message}}</div>
                            <div v-else v-html="message"></div>
                            <div class="content__input" v-if="showInput">
                                <ss-input v-model="inputValue" :type="inputType" :placeholder="inputPlaceholder"></ss-input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ss-message-box__btn" 
                    :class="[confirmButtonPosition == 'left'&& 'flex-row-reverse',
                    buttonPosition && `ss-button__${buttonPosition}`     
                    ]">
                    <ss-button type="plain" :class="cancelButtonClass" v-if="showCancelButton" @click="handleAction('cancel')">{{cancelButtonText || '取消'}}</ss-button>
                    <ss-button  :loading="confirmButtonLoading" :type="buttonType" :class="confirmButtonClass" v-if="showConfirmButton" @click="handleAction('confirm')">{{confirmButtonText || '确认'}}</ss-button>
                </div>
            </div>
        </transition>
      <transition name="mask-fade">
            <div class="ss-message-modal-box"
                v-show="maskControl.isShow"
                @click="handleWrapperClick"
                ref="mask">
            </div>
    </transition>
    </div>
</template>

<script>
import ssButton from '../button/index'
import ssInput from '../input/index';
import Dialog from './aria-dialog'; 

const iconMap = {
  success: 'sense-icon-status__success',
  info: 'sense-icon-status__primary',
  warning: 'sense-icon-status__warning',
  error: 'sense-icon-status__warning'
};
const titleMap = {
  success: '成功',
  info: '提示',
  warning: '确认信息',
  error: '错误'
}
let messageBox;
export default {
  name: 'SsMessageBox',
  components: {
    ssButton,
    ssInput
  },
  props: {
    modal: {
      default: true
    },
    iconClass: { // 自定义icon 会覆盖 type
      type: String,
      default: ''
    },
    iconColor: {
      type: String, // 会覆盖type 图标中的颜色 
      default: '' 
    }
  },
  data() {
    return {
      title: null,
      message: '',
      type: '',
      maskControl: {
        isShow: false
      },
      visible: false,
      uid: 1,
      customClass: '', // 自定义类名
      showInput: false,
      inputValue: '',
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null, // 输入校验正则
      inputPatternType: 'regex', // 'regex 正则' 'str'
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: true,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonClass: '', // 确认按钮类名
      cancelButtonClass: '',  // 取消按钮类名
      confirmButtonDisabled: false,
      editorErrorMessage: null,
      callback: null, // callback 函数，不使用则返回 Promise
      dangerouslyUseHTMLString: false,  // 为true 表示message 将按html处理
      focusAfterClosed: null,
      distinguishCancelAndClose: false,
      closeOnClickModal: true, // 是否可以通过点击遮罩层关闭
      confirmButtonPosition: 'right', // 确认按钮默认在右边
      buttonPosition: 'right', // 底部按钮位置
      layout: '', // 风格，vertical,默认水平
      boxWidth: '',
      confirmButtonLoading: false,
      closeIcon: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('hashchange', this.close);
      this.focusAfterClosed = document.activeElement;
      messageBox = new Dialog(this.$el, this.focusAfterClosed);
      this.initMainPosition()
    });
  },
  computed: {
    buttonType() {
      if (this.type === 'success') {
        return 'success'
      } else if (this.type === 'warning' || this.type === 'error') {
        return 'warning'
      } else {
        return 'default'
      }
    },
    initIconClass() {
      if (this.iconClass) {
        return this.iconClass;
      } else {
        return iconMap[this.type]
      }
    },
    initTitle() {
      if (this.title === '' || this.title) {
        return this.title
      } else if (this.info) {
        return titleMap[this.info]
      } else {
        return ''
      }
    } 
  },
  methods: {
    /**
     * close 关闭弹框
     */
    closeMessage() {
      this.closeMainPosition()
      this.handleAction()
      this.callback('close', this); 
    },
    /**
     * 初始化弹框位置
     */
    initMainPosition() {
      this.$refs.messageBox.style.cssText = `
        left: 50%;
        top: 30%;
        transform: translate(-50%,-50%);
        opacity: 0
      `
      this.$nextTick(this.lastMainPosition)
    },
    /**
     * 弹框最终位置
     */
    lastMainPosition() {
      this.$refs.messageBox.style.cssText = `
        width: ${this.width};
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        opacity: 1;
      `
    },
    /**
     * 关闭弹框后最后消失位置
     */
    closeMainPosition() {
      this.$refs.messageBox.style.cssText = `
        width: ${this.width};
        left: 50%;
        top: 40%;
        opacity: 0;
        transform: translate(-50%,-50%);
      `
      setTimeout(() => {
        this.visible = false;
        messageBox.closeDialog(); 
      }, 200)
    },
    /**
     * 关闭
     */
    doClose() {
      this.closeMainPosition();
      setTimeout(() => {
        if (this.action) {
          this.callback(this.action, this); 
        }
      });
    },

    handleWrapperClick() {
      // 遮罩层 点击事件
      if (!this.closeOnClickModal) return;
      this.handleAction('close');
    },

    handleAction(action) {
      if (this.showInput && !this.validate() && action === 'confirm') {
        return
      }
      this.action = action;
      if(typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
      
          this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    
    getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },

    validate() {
      const inputPattern = this.inputPattern;
      if (this.inputPattern && this.inputPatternType === 'regex' && !inputPattern.test(this.inputValue || '')) {
        if (this.inputErrorMessage) {
          this.$message.warning(this.inputErrorMessage);
        }
        return false 
      } else if (this.inputPattern && this.inputPatternType === 'str' && this.inputValue.indexOf(this.inputPattern) === -1) {
        if (this.inputErrorMessage) {
          this.$message.warning(this.inputErrorMessage);
        }
        return false
      }
      return true;
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.maskControl.isShow = true
      }
    }
  },
  beforeDestroy() {
    window.addEventListener('hashchange', this.doClose);
    setTimeout(() => {
      messageBox.closeDialog();
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/packages/messageBox.scss';
</style>