<template>
  <div>
    <div class="block">
      <div class="demonstration">日期范围</div>
      <ss-date-picker
        v-model="value"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </ss-date-picker>
      <!--<ss-date-panel
        v-model="value33"
        type="dates"
        :picker-options="pickerOptions"
        @change="handleMultiChange"
        @click="handleMultiClick"
      ></ss-date-panel>-->
    </div>

    <div class="block">
      <div class="demonstration">选择日期+时间</div>
      <ss-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期+时间"
      >
      </ss-date-picker>
    </div>

    <div class="block">
      <div class="demonstration">日期+时间范围 (目前还没有使用场景，当前库暂时还没实现)</div>
      <ss-date-picker
        v-model="value2"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </ss-date-picker>
    </div>

    <div class="block">
      <div>选择多个日期</div>
      <ss-date-picker
      v-model="value3"
      type="dates"
      @change="handleMultiP"
      placeholder="选择多个日期">
      </ss-date-picker>
    </div>

    <div class="block">
      <div>多选日期面板（纯面板）</div>
      <div class="panel">
        <ss-date-panel
          v-model="panelValue"
          type="dates"
          @change="handleMultiChange"
          @click="handleMultiClick"
        ></ss-date-panel>

        <ss-date-panel
          v-model="panelValue"
          type="dates"
          :default-dates="dates"
          :picker-options="pickerOptions"
          @change="handleMultiChange"
          @click="handleMultiClick"
        ></ss-date-panel>
      </div>
    </div>

    <div class="block">
      <div>基本用法-选择日期</div>
      <ss-date-picker
        v-model="value4"
        type="date"
        placeholder="选择日期">
      </ss-date-picker>
    </div>

    <div class="block">
      <div>带禁用日期</div>
      <ss-date-picker
        v-model="value4"
        type="date"
        :picker-options="pickerOptions"
        placeholder="选择日期">
      </ss-date-picker>
    </div>

    <div class="block">
      <div>选择日期</div>
      <div class="selectdate">时间戳的值：{{ value5 }}</div>
      <ss-date-picker
      v-model="value5"
      value-format="timestamp"
      type="date"
      placeholder="选择日期">
      </ss-date-picker>
    </div>

    <div class="block">
      <div>选择日期</div>
      <div class="selectdate">yyyy-MM-dd：{{ value55 }}</div>
      <ss-date-picker
        v-model="value55"
        value-format="yyyy-MM-dd"
        type="date"
        placeholder="选择日期">
      </ss-date-picker>
    </div>

    <div class="block">
      <div>选择年</div>
      <ss-date-picker
      v-model="value6"
      type="year"
      placeholder="选择年">
      </ss-date-picker>
    </div>


  </div>
</template>

<script>
import SsDatePicker from '../components/datePicker'
import SsDatePanel from '../components/datePicker/src/panel/date'

export default {
  components : {
    SsDatePicker,
    SsDatePanel
  },
  data() {
    return {
      value:'',
      value1: '',
      value2:'',
      value3: '',
      value4:'',
      value5:'',
      value55:'',
      value6:'',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      panelValue: '',
      dates: [new Date('2021-04-01'),new Date('2021-04-02')]
    }
  },
  methods: {
    handleMultiClick(e){
      console.log('纯面板click-多选', e)
    },
    handleMultiChange(e){
      console.log('纯面板change-多选', e)
    },
    handleMultiP(e){
      console.log('弹框的-多选', e)
    },
  }
}
</script>

<style lang="scss" scoped>
.block {
  margin: 10px;
}
.selectdate {
  margin: 5px;
  color: #666;
}
  .panel{
    display: flex;
    .ss-date-picker{
      margin-right: 10px;
    }
  }
</style>
