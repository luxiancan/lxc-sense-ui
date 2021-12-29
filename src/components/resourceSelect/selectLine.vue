<style lang="scss" scoped>
.select-line {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.radio-icon {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  margin-left: 12px;
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transition: 0.3s ease;
    box-sizing: border-box;
  }
  &::before {
    border: 1px solid #5a5a5a;
  }
  &::after {
    transform: scale(0);
  }
}
.selected-radio {
  &::before {
    border: 1px solid #2a75ed;
  }
  &::after {
    background-color: #2a75ed;
    transform: scale(0.7);
  }
}

.checkbox-icon {
  display: inline-block;
  position: relative;
  width: 14px;
  height: 14px;
  margin-left: 12px;
  border-radius: 2px;
  border: 1px solid #B2B2B2;
  box-sizing: border-box;
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 4px;
    width: 5px;
    height: 10px;
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    box-sizing: border-box;
    transform: rotate(45deg) scaleY(0);
    transition: transform .15s ease-in .05s;
    transform-origin: center;
  }
}
.selected-box {
  background-color: #2a75ed;
  border-color: #2a75ed;
  &::after {
    transform: rotate(45deg) scaleY(1);
  }
}

.disabled-style {
  cursor: not-allowed;
  .radio-icon::before {
    border-color: #dcdfe6;
    background-color: #edf2fc;
  }
  .checkbox-icon {
    border-color: #dcdfe6;
    background-color: #edf2fc;
  }
}

.select-label {
  width: 698px;
  height: auto;
}
</style>

<template>
  <section class="select-line" :class="{'disabled-style': !isAvailable}" @click="handleClick">
    <span 
      v-if="selectType === 1"
      class="radio-icon" 
      :class="{'selected-radio': isSelected && isAvailable}">
    </span>
    <span 
      v-if="selectType === 2"
      class="checkbox-icon" 
      :class="{'selected-box': isSelected && isAvailable}">
    </span>
    <div class="select-label">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'selectLine',
  props: {
    /**
     * 类型 1：表示单选，2：表示多选；
     */
    'select-type': {
      type: Number,
      default: 1
    },
    /**
     * 是否可选 1：可选，0：不可选
     */
    'is-available': {
      type: Number,
      default: 1
    },
    /**
     * 是否处于选中状态
     */
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  watch: {
    value() {
      this.isSelected = this.value;
    },
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  created() {
    this.isSelected = this.value;
  },
  methods: {
    handleClick() {
      // 禁止不可选状态的资源被选中
      if (this.isAvailable) {
        this.$emit('update', !this.isSelected);
        this.$emit('select', !this.isSelected);
      }
    }
  }
}
</script>
