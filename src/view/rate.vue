
<template>
    <div class="xiaoe-rate">
        <h3>1.基本型：</h3>
        <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <ss-rate v-model="valueColor"></ss-rate>
        </div>
        <div class="block">
            <span class="demonstration">区分颜色</span>
            <ss-rate
                v-model="valueNocolor"
                :colors="colors">
            </ss-rate>
        </div>  
        <h3>2.带文字</h3>
        <div class="block">
            <span class="demonstration">辅助文字</span>
            <ss-rate v-model="valueWord" show-text :texts="texts"></ss-rate>  
        </div>
        <h3>3.带评分</h3>
        <div class="block">
            <span class="demonstration">允许出现半星</span>
            <ss-rate v-model="valueScore" disabled show-score text-color="#ff9900" score-template="{value}"></ss-rate>
        </div>
</div>
</template>

<script>
import SsRate from '@/components/rate/src/main.vue'
export default {
    components: {
        SsRate
    },
    data() {
      return {
        valueColor: null,
        valueNocolor: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        valueWord: null,
        texts:['很差','不好','一般','很棒','太棒了'],
        valueScore: 3.7,
      }
    }
}
</script>
<style lang="scss">
.block {
  padding: 30px;
  border-right: solid 1px #eff2f6;
  display: inline-block;
  box-sizing: border-box;
  &:last-child {
    border-right: none;
  }
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 16px;
  margin-bottom: 20px;
} 
</style>