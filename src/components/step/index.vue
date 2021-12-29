<template>
  <div 
    class="ss-step"
    :class="[ 
      `ss-step__${this.currentStatus}`, 
      nextError && 'ss-step-next-error'
    ]"
  >
    <div class="ss-step-tail"></div>
    <div class="ss-step-icon">
      <span v-if="currentStatus === 'finish'" class="ss-step-icon__icon">
        √
      </span>
      <span v-else-if="currentStatus === 'error'" class="ss-step-icon__icon">
        ×
      </span>
      <span v-else class="ss-step-icon__text">{{ index + 1 }}</span>
    </div>
    <div class="ss-step-content">
      <div class="ss-step-content-title">{{ title }}</div>
      <div class="ss-step-content-desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SsStep',

  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    status: {
      type: String
    },
    icon: {
      type: String
    }
  },

  data() {
    return {
      index: -1,
      nextError: false
    }
  },
  
  computed: {
    currentStatus() {
      const stepIndex = this.$parent.steps.indexOf(this);
      const current = this.$parent.current;
      
      if (stepIndex === current) {
        return this.$parent.status;
      } else if (stepIndex < current) { 
        return 'finish';
      } else { 
        return 'wait';
      }
    }
  },

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  beforeDestroy() {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)

    if (index >= 0) {
      steps.splice(index, 1)
    }
  }

}
</script>

<style lang="scss">
  @import '@/assets/scss/packages/step.scss';
</style>