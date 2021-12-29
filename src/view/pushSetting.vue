<template>
  <div class="container">
    <div class="title">pushSettingDialog</div>
    <div class="content">
      <div @click="showDialog = true">选择推送方式</div>
      <ss-push-setting v-if="showDialog"
          :wxState="wxState"
          :appState="appState"
          :smsState="smsState"
          :channels="['wx', 'app', 'sms']"
          businessId="course_live"
          @confirmEvent="confirmEvent"
        @cancelEvent="showDialog = false">
      </ss-push-setting>
    </div>
  </div>
</template>

<script>
import SsPushSetting from '@/components/pushSettingDialog'

export default {
  name: 'pushSetting',
  components: {
    SsPushSetting
  },
  data() {
    return {
      showDialog: false,
      wxState: true,
      appState: true,
      smsState: true
    }
  },
  methods: {
    confirmEvent(obj) {
      console.log(obj)
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
</style>
