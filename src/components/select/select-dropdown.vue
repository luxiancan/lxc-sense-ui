<template>
  <div
    class="ss-select-dropdown"
    :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
    :style="Object.assign({ width: minWidth }, style)">
    <!--:style="{ minWidth: minWidth }">-->
    <slot></slot>
  </div>
</template>

<script type="text/babel">
import Popper from '@/utils/vue-popper';

export default {
  name: 'SsSelectDropdown',

  componentName: 'SsSelectDropdown',

  mixins: [Popper],

  props: {
    placement: {
      default: 'start'
    },

    boundariesPadding: {
      default: 0
    },

    popperOptions: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },

    visibleArrow: {
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      minWidth: '',
      style: {},
      selfHeight: 0,
      bodyHeight: 0
    };
  },

  computed: {
    popperClass() {
      return this.$parent.popperClass;
    }
  },

  watch: {
    '$parent.inputWidth'() {
      this.minWidth = `${this.$parent.$el.getBoundingClientRect().width}px`;
    }
  },

  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el;
    // eslint-disable-next-line
    this.$parent.popperElm = this.popperElm = this.$el;
    this.bodyHeight = document.documentElement.clientHeight
    this.$nextTick(() => {
      this.initMenuPlacement()
      this.updateMenuPlacement()
    })
    this.$on('updatePopper', () => {
      if (this.$parent.visible) {
        this.updatePopper()
        this.updateMenuPlacement();
      }
    });
    this.$on('destroyPopper', this.destroyPopper);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setBodyHeight)
    window.removeEventListener('scroll', this.updateMenuPlacement)
  },
  methods: {
    initMenuPlacement() {
      const placement = this.$parent.placement
      const parent = this.$parent.$el.getBoundingClientRect()
      if (placement === 'bottomRight') {
        this.style.right = '1px'
      } else if (placement === 'bottomCenter') {
        const selfWidth = this.$el.clientWidth
        this.style.left = `${(parent.width - selfWidth) / 2}px`
      } else {
        this.style.left = '1px'
      }
      this.style.top = `${parent.height}px`
    },
    setSelfHeight() {
      this.selfHeight = this.$el.clientHeight
    },
    updateMenuPlacement() {
      this.$nextTick(() => {
        this.setSelfHeight()
        const parent = this.$parent.$el.getBoundingClientRect()
        if (parent.bottom + this.selfHeight > this.bodyHeight - 10) {
          this.style.top = `-${this.selfHeight + 10}px`
          this.style.transformOrigin = '50% 100%'
        } else {
          this.style.top = `${parent.height}px`
          this.style.transformOrigin = '50% 0%'
        }
      })
    }
  }
};
</script>
