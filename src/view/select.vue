<template>
  <div class="container">
    <div class="demo">
      <ss-select v-model="baseValue" placeholder="基础用法" @change="handleChange">
        <ss-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ss-option>
      </ss-select>

      <br/>
      <ss-select v-model="baseValue" disabled placeholder="不可用" @change="handleChange">
        <ss-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ss-option>
      </ss-select>

      <br/>
      <ss-select v-model="baseValue" filterable clearable placeholder="有禁用项" @change="handleChange">
        <ss-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </ss-option>
      </ss-select>
      <br/>
      <ss-select v-model="baseValue" filterable clearable placeholder="滚动条" @change="handleChange">
        <ss-option
          v-for="item in options11"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </ss-option>
      </ss-select>

      <br/>
      <ss-select v-model="value2" multiple filterable  placeholder="多选" @change="handleChange">
        <ss-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </ss-option>
      </ss-select>
      <br/>
      <ss-select v-model="value1" placeholder="分组">
        <ss-option-group
          v-for="group in options2"
          :key="group.label"
          :label="group.label">
          <ss-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </ss-option>
        </ss-option-group>
      </ss-select>
      <br/>

      <ss-select v-model="valueEmpty" placeholder="list为空">
        <ss-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ss-option>
      </ss-select>

      <br/>
      <ss-select v-model="baseValue" size="m" placeholder="支持size=m" @change="handleChange">
        <ss-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ss-option>
      </ss-select>
    </div>

  </div>
</template>

<script>
  import SsSelect from '@/components/select/index'
  import SsOption from '@/components/select/option'
  import SsOptionGroup from '@/components/select/option-group'

  export default {
    components: {
      SsSelect,
      SsOption,
      SsOptionGroup
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙金糕黄金糕abcdefg123456789'
        }],
        options1: [{
          value: '选项1',
          label: '黄金糕黄金糕abcdefg123456789'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '啥东西的'
        }, {
          value: '选项5',
          label: '再凑'
        }],
        options11: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }, {
          value: '选项3',
          label: '蚵仔煎'
        },{
          value: '选项4',
          label: '黄金糕4'
        }, {
          value: '选项5',
          label: '双皮奶5',
        }, {
          value: '选项6',
          label: '蚵仔煎6'
        },{
          value: '选项7',
          label: '黄金糕7'
        }, {
          value: '选项8',
          label: '双皮奶8',
        }, {
          value: '选项9',
          label: '蚵仔煎9'
        }],
        options2: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        options4: [],
        value1: '',
        value2: [],
        valueEmpty: '',

        baseValue: '',
      }
    },
    methods: {
      handleChange(e) {
        console.log('选中', e)
      },
      handleBlur(e) {
        console.log('blur', e)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }

  div{
    margin-bottom: 20px;
  }
</style>
