<template>
  <div :class="['ss-switch', {'is-checked': activeSwitch, 'ss-disabled': disabled}]" @click="handleChange">
    <span class="ss-switch_label ss-switch_label-left" ref="labelLeft" v-if="textNum == 2 && activeText && inactiveText">{{inactiveText}}</span>
    <span :class="['ss-switch_core', {'ss-switch_core_dis': !activeSwitch}]" ref="core" :style="{width: `${width}px`}"></span>
    <span class="ss-switch_label ss-switch_label-right" ref="labelRight" v-if="activeText && inactiveText">{{changeText}}</span>
  </div>
</template>

<script>
export default {
  name: 'SsSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    textFontSize: {
      type: Number,
      default: 12
    },
    textActiveColor: {
      type: String,
      default: ''
    },
    textInactiveColor: {
      type: String,
      default: ''
    },
    textNum: {
      type: [String, Number],
      default: 2
    }
  },
  data() {
    return {
      activeSwitch: this.value
    }
  },
  watch: {
    activeSwitch() {
      this.setBackgroundColor();
      this.setFontColor();
    },
    value() {
      this.activeSwitch = this.value;
    }
  },
  computed: {
    changeText() {
      if (this.textNum == 2) {
        return this.activeText;
      } else if (this.textNum == 1) {
        if (this.activeSwitch) {
          return this.activeText;
        } else {
          return this.inactiveText;
        }
      }
    }
  },
  mounted() {
    this.setBackgroundColor();
    this.setFontSize();
    this.setFontColor();
  },
  methods: {
    handleChange() {
      const objSwitch = {};
      if (!this.disabled && !this.limit) {
        this.activeSwitch = !this.activeSwitch;
        objSwitch.activeSwitch = this.activeSwitch;
      } else {
        objSwitch.activeSwitch = false;
      }
      this.$emit('changeSwitch', objSwitch);
    },
    setBackgroundColor() {
      if (this.activeColor || this.inactiveColor) {
        const newColor = this.activeSwitch ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      }
    },
    setFontSize() {
      const spanDom = document.querySelectorAll('.ss-switch_label');
      spanDom.forEach((item) => {
        item.style.fontSize = `${this.textFontSize}px`;
      })
    },
    setFontColor() {
      const labelLeft = this.$refs.labelLeft;
      const labelRight = this.$refs.labelRight;
      this.$nextTick(() => {
        if (this.textActiveColor || this.textInactiveColor) {
          if (this.textNum == 2) {
            if (this.activeSwitch) {
              labelLeft.style.color = this.textInactiveColor;
              labelRight.style.color = this.textActiveColor;
            } else {
              labelLeft.style.color = this.textActiveColor;
              labelRight.style.color = this.textInactiveColor;
            }
          } else if (this.textNum == 1) {
            if (this.activeSwitch) {
              labelRight.style.color = this.textActiveColor;
            } else {
              labelRight.style.color = this.textInactiveColor;
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/switch.scss';
</style>