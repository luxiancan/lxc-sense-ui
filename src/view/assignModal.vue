<template>
    <div>
        <ss-button type="success" @click="showModal">点击展示指派弹框</ss-button>
        <ss-button type="success" @click="saveAssign">最终指派</ss-button>
        <ss-button type="success" @click="deleteAll">删除所有</ss-button>
        <div v-for="(item,index) in choseList" :key='index'>{{item.name}} <span @click="clickSingle(item)">删除单个</span></div>
        <assignDialog 
            ref="assignDialog"
            @cancleEvent="cancleFunc"
            @confirmEvent="confirmFunc"
            @closeEvent="show=false"
            @getAssignedSuccessEvent='getAssignedSuccessEvent'
            @getAssignedFailEvent='getAssignedFailEvent'
            @authorizedSuccessEvent='authorizedSuccessEvent'
            @authorizedFailEvent='authorizedFailEvent'
            :title='title'
            :isShowUsers='isShowUsers'
            >
        </assignDialog>
    </div>
</template>

<script>
import assignDialog from '@/components/assignModal'
import SSButton from '@/components/button'

export default {
  components: {
    assignDialog,
    'ss-button': SSButton
  },
  data() {
    return {
      hasClosed: false,
      data:{},
      show:false,
      serachTreeResult:[],
      assignUserList:[],
      isLoading:false,
      title:'自定义头部名称',
      isShowUsers:true,
      choseList:[]
    }
  },
  created(){
      
  },
  methods: {
    showModal() {
        let that=this;
        //that.show=true;
        // that.isLoading=true;
        // let params={};
        that.$refs.assignDialog.show();
        //that.$refs.assignDialog.getAssignedUserList(params);
    },
    searchEvent(){
        let that=this;
        that.isLoading=true;
        
    },
    clickToNextLevel(){
        let that=this;
        that.isLoading=true;
        
    },
    cancleFunc(){
       this.show=false;
    },
    confirmFunc(choseList){
       this.choseList=choseList;
       this.$refs.assignDialog.hide();
       console.log(choseList,"choseListchoseList确定选中的人")
       this.show=false;
    },
    deleteAll(){
       this.$refs.assignDialog.deleteAll();
    },
    clickSingle(item){
       this.$refs.assignDialog.deleteSingle(item);
    },
    //获取指派人员接口成功
    getAssignedSuccessEvent(){

    },
    //获取指派人员接口失败
    getAssignedFailEvent(){

    },
    //最终授权成功
    authorizedSuccessEvent(){

    },
    //最终授权失败
    authorizedFailEvent(){

    },
    saveAssign(){
       let courseParams={
          resource_id:'1111',
          resource_type:''
       }
       let trainingParams={
          resource_id:'1111',
          resource_type:''
       }
       this.$refs.assignDialog.authorizeEvent(courseParams);
    }
  }
};
</script>

<style lang='scss' scoped>
.margin-container>div {
  margin: 10px;
}
</style>