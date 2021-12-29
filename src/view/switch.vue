<template>
  <div>
    <div class="title">switch</div>
    <div class="content">
      <ss-switch
        v-model="isOpen"
        inactive-color="#dcdfe6"
        inactive-text="已关闭"
        active-text="已开启"
        text-active-color="#C2C2C2"
        text-inactive-color='#C2C2C2'
        text-num='1'
        :limit="limit"
        disabled
        @changeSwitch="handleChange"
      ></ss-switch>
    </div>
    <div class="wrapper" v-show="showBox">
      <div class="wrapper-box">
        <button @click="handleCancel">取消</button>
        <button @click="handleConfirm">确定</button>
      </div>
    </div>
  </div>

</template>

<script>
import SsSwitch from '@/components/switch'

export default {
  data() {
    return {
      isOpen: false,
      limit: false,
      showBox: false
    }
  },
  components: {
    SsSwitch
  },
  mounted() {
    this.limit = !!this.isOpen;
  },
  methods: {
    handleChange(objSwitch) {
      if (objSwitch.activeSwitch) {
        this.limit = true;
        this.isOpen = true;
        return;
      }
      this.showBox = true;
    },
    handleCancel() {
      this.showBox = false;
    },
    handleConfirm() {
      this.showBox = false;
      this.limit = false;
      this.isOpen = false;
    }
  }
}
</script>

<style scoped>
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }

  .content {
    padding: 20px;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
  }

  .wrapper-box {
    width: 400px;
    height: 400px;
    background-color: #fff;
  }

  button {
    width: 50px;
    height: 20px;
    border: 0;
    background-color: #dcdfe6;
    margin: 15px;
  }
</style>
