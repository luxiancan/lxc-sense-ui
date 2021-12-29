<template>
    <div class='margin-container'>
      <SsinformationSelect 
          :resourceType="resource_type"
          :information-data="information_data"
          ref="information"
          @update-information="updateInformation">
      </SsinformationSelect>
    </div>
</template>

<script>
import SsinformationSelect from '@/components/informationSelect';
export default {
  components: {
    SsinformationSelect
  },
  data() {
    return {
      resource_type:'1',
      information_data:{
        in_id:'',
        form_name:'',
        scene:['buy_page']
      }
    }
  },
};
</script>

<style lang='scss' scoped>
.margin-container>div {
  margin: 10px;
}
</style>