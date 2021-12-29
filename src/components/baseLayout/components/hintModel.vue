<template>
<!-- 这里迁移并部分改写侧边栏的编辑离开后的提示框 20201228大车 -b端优化概况加速部分 -->
 <div class="editDailogWrap editmodal-open">
    <div class="editmodal-backdrop" @click="cancel"></div>
    <div class="editmodal fade in" id="upload_EditModal">
        <div class="editmodal-dialog">
            <div class="editmodal-content" style="padding-left: 10px">
                <div class="editmodal-body">
                    <div style="text-align: center;font-size: 1.4em">
                        <p>此时离开将丢失已编辑的内容，是否离开？</p>
                    </div>
                </div>
                <div class="editmodal-footer">
                    <button type="button" class="btnMid xeBtnDefault"
                            @click="cancel">
                        取消
                    </button>
                    <button id="leavePage" 
                            type="button" 
                            class="btnMid btnBlue" 
                            style="margin-left: 10px" 
                            @click="handleLeave">
                        确定
                    </button>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>

export default {
  data() {
    return {
        showModal:false
    };
  },
  computed: {
  },
  methods:{
    cancel(){
         this.$emit('cancelLeave');
    },
    handleLeave(){
        this.$emit('editLeave')
    }
  }

};
</script>

<style lang="scss" scoped>
.editDailogWrap{
    height: 100vh;
}
.editmodal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    filter: alpha(opacity=50);
    opacity: .5
}

.editmodal-open {
    overflow: hidden
}
.editmodal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0
}

.editmodal.fade .editmodal-dialog {
    transition: transform .3s ease-out;
    transform: translate(0, -25%)
}

.editmodal.in .editmodal-dialog {
    transform: translate(0, 0)
}

.editmodal-open .editmodal {
    overflow-x: hidden;
    overflow-y: auto
}

.editmodal-dialog {
    position: relative;
    width: auto;
    margin: 10px
}

.editmodal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    outline: 0;
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5)
}

.editmodal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000
}

.editmodal-backdrop.fade {
    filter: alpha(opacity=0);
    opacity: 0
}

.editmodal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5
}

.editmodal-header {
    min-height: 16.43px;
    padding: 15px;
    border-bottom: 1px solid #e5e5e5
}

.editmodal-header .close {
    margin-top: -2px
}

.editmodal-title {
    margin: 0;
    line-height: 1.42857143
}

.editmodal-body {
    position: relative;
    padding: 15px
}

.editmodal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
    &:after,&:before{
        display: table;
        clear: both;    
        content: " ";
    }
}

.editmodal-footer .btn + .btn {
    margin-bottom: 0;
    margin-left: 5px
}

.editmodal-footer .btn-group .btn + .btn {
    margin-left: -1px
}

.editmodal-footer .btn-block + .btn-block {
    margin-left: 0
}

.editmodal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

@media (min-width: 768px) {
    .editmodal-dialog {
        width: 600px;
        margin: 30px auto
    }

    .editmodal-content {
        box-shadow: 0 5px 15px rgba(0, 0, 0, .5)
    }

    .editmodal-sm {
        width: 300px
    }
}

@media (min-width: 992px) {
    .editmodal-lg {
        width: 900px
    }
}
</style>

