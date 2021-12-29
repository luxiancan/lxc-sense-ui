<template>
  <div class="container">
     <div class="content">
       <div class="item">
         <div class="item-title">基本用法</div>
         <div class="item-sense">
           <ss-input v-model="input" @input="inputChange"></ss-input>
           <ss-input v-model="input" clearable @input="inputChange" placeholder="可清空"></ss-input>
           <ss-input v-model="input" clearable @input="inputChange" :errorMsg="errorMsg" placeholder="错误提示"></ss-input>
           <ss-input v-model="input" :disabled="true" placeholder="不可输入"></ss-input>
           <ss-input v-model="input" :maxlength="9" placeholder="限制字数9，超出无法输入"></ss-input>
           <ss-input v-model="input" showCount :maxlength="9" @change="handleChange" placeholder="限制字数（count提示）"></ss-input>
           <ss-input v-model="input" prefix-icon="sense-icon__search" placeholder="前缀icon"></ss-input>
           <ss-input v-model="input" suffix-icon="sense-icon-status__success" placeholder="后缀icon"></ss-input>
           <ss-input v-model="input" suffix-icon="sense-icon__search" placeholder="点击icon或回车触发search" @change="handleChange" @search="handleSearch" ></ss-input>
           <ss-input v-model="input" clearable placeholder="slot">
             <slot>
               <div>解释型信息呜呜呜呜呜呜</div>
             </slot>
           </ss-input>
         </div>

         <div class="item-title">文本域</div>
           <div class="item-number">
             <ss-input v-model="input" type="textarea" placeholder="常规最原始"></ss-input>
             <ss-input v-model="input" :rows="5" type="textarea" showCount resize="none" :maxlength="200" placeholder="固定高度，出现滚动条"></ss-input>
             <ss-input v-model="input" type="textarea" autosize showCount :maxlength="200" placeholder="自适应高度"></ss-input>
             <ss-input v-model="input" type="textarea" placeholder="自定义宽高class 150*100" class="textarea-height"></ss-input>
             <ss-input v-model="input" type="textarea" size="l" placeholder="支持size(仅指宽度)-size='l'"></ss-input>
           </div>
         </div>

       <div class="item">
         <div class="item-title">设置type</div>
         <div class="item-number">
           <ss-input v-model="input"
                     type="number"
                     placeholder="默认"
           ></ss-input>

           <ss-input v-model="input"
                     type="number"
                     placeholder="最大值9"
                     :max="9"
                     :min="0"
           ></ss-input>

           <ss-input v-model="input"
                     disabled
                     type="number"
                     placeholder="不可用"
           ></ss-input>

           <ss-input v-modess-inputl="input"
                     type="number"
                     input-width="200"
                     placeholder="自定义宽度"
           ></ss-input>

           <ss-input
             v-model="input"
             type="number"
             placeholder="精度"
             :multiple="0.1"
             :precision="2"
           ></ss-input>


         </div>
       </div>
       <div>
         <div class="item-title">尺寸</div>
         <div>
           <ss-input v-model="input" size="xs" placeholder="尺寸 xs（width=104）"/>
           <ss-input v-model="input" size="xs" placeholder="width=104"/>
         </div>
         <div><ss-input v-model="input" size="s" placeholder="尺寸 s（width=216）"></ss-input></div>
         <div><ss-input v-model="input" size="m" placeholder="尺寸 m（width=328）"></ss-input></div>
         <div><ss-input v-model="input" size="l" placeholder="尺寸 l（width=440）"></ss-input></div>
         <div><ss-input v-model="input" size="xl" placeholder="尺寸 xl（width=552）"></ss-input></div>
       </div>
     </div>
  </div>
</template>

<script>
import SsInput from '@/components/input'

export default {
  components: {
    SsInput
  },
  data() {
    return {
      input: '',
      errorMsg: ''
    }
  },
  methods:{
    handleSearch(e){
      console.log('触发--搜索', e);
    },
    handleChange(e){
      console.log('input change ',e)

    },
    inputChange(e){
      console.log('input change ',e)
      if(!e){
        this.errorMsg = ''
        return
      }
      if(e.length > 9){
        this.errorMsg = '错误了'
      }else{
        this.errorMsg = ''
      }
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
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .item + .item {
      margin: 10px 0 0;
    }

    .item-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }

    .item-sense {
      .ss-input {
        width: 216px;
        margin-bottom: 5px;
      }
    }
    .item-number{
      .textarea-height {
        width: 150px;
        height: 100px;
      }
    }
  }

</style>
