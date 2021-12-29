<template>
  <div>
    <div class="title">topTips</div>
    <div class="content">
      <ss-top-tips :app_id="''" :module_id="'ddd'"></ss-top-tips>
    </div>
  </div>

</template>

<script>
import SsTopTips from '@/components/topTips'

export default {
  data() {
    return {}
  },
  components: {
    SsTopTips
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped>
</style>
