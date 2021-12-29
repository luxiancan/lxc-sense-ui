<template>
    <div>
        <div class="block">
          <div>基础使用-选择时间</div>
          <ss-time-picker
            v-model="value"
            placeholder="请选择时间"
            @change="handleTimer"
          >
          </ss-time-picker>
        </div>
      <div class="block">
        <div>时间戳-{{value3}}</div>
        <ss-time-picker
          v-model="value3"
          format="HH:mm:ss"
          value-format="timestamp"
          placeholder="请选择时间"
          @change="handleTimer"
        >
        </ss-time-picker>
      </div>
      <div class="block">
        <div>格式化-{{value33}}</div>
        <ss-time-picker
          v-model="value33"
          format="HH:mm:ss"
          value-format="HH-mm-ss"
          placeholder="请选择时间"
          @change="handleTimer"
        >
        </ss-time-picker>
      </div>
        <!--TODO：待实现范围-->
        <!--<div class="block">
          <div>选择时间范围</div>
            <ss-time-picker
              is-range
              v-model="value22"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </ss-time-picker>
        </div>-->
      <div class="block">
        <div>选择时间范围-{{value222}}</div>
        <ss-time-picker
          is-range
          v-model='value222'
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
          value-format="HH:mm:ss"
        >
        </ss-time-picker>
      </div>
      <div class="block">
          <ss-time-picker
              v-model="value1"
              :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
              }"
              placeholder="任意时间点">
          </ss-time-picker>
      </div>
    </div>
</template>

<script>
import SsTimePicker from '../components/time-picker'
import SsTimeSelect from '../components/time-select'

export default {
    components: {
        SsTimePicker,
        SsTimeSelect,
    },
    data() {
        return {
            value: '',
            value1: '',
            value2: '',
            value22: '',
            value222: '',
            value3: '',
            value33: '',
        }
    },
    methods:{
        handleTimer(e){
            console.log('-handleTimer---', e)
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
  margin: 10px;
}
</style>