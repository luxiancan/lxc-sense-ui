<template>
    <div class="dialog">
        <h1>dialog弹框</h1>
        <div class="first-dialog">
            <h2 class="base">1.基础型</h2>
            <p @click="dialogVisible = true" class="show-dialog">点击点开对话框</p>
            <ss-dialog
                title="提示"
                width="480px"
                :visible.sync="dialogVisible"
                @submit="submit"
                @cancel="dialogVisible = false"
                :submit-btn-loading="submitBtnLoading"
            >
                <span slot="content">这是一段信息这是一段信息</span>
                <span slot="footer"></span>
            </ss-dialog>
        </div>
        <div class="second-dialog">
            <h2 class="base">2.内容超出</h2>
            <p @click="outerVisible = true" class="show-dialog">点开内容超出的dialog</p>
            <ss-dialog 
                title="内容超出的Dialog"
                :visible.sync="outerVisible"
                @submit="outerVisible = false"
                @cancel="outerVisible = false"
                messageTip="辅助提示信息"
            >
                <div slot="content" class="content">这里是内容</div>
                <span slot="footer"></span>
            </ss-dialog>
        </div>
        <div class="third-dialog">
            <h2 class="base">3.带有tab的dialog</h2>
            <p @click="tabDialogVisible = true" class="show-dialog">点开带有tab的dialog</p>
            <ss-dialog
                title="标题"
                :visible.sync="tabDialogVisible"
                tabbar    
                @submit="tabDialogVisible = false"
                @cancel="tabDialogVisible = false"
            >
                <div slot="contentSide">这里是左边的内容</div>
                <div slot="content" class="tag-content">这里是右边的内容</div>
                <span slot="footer"></span>
            </ss-dialog>
        </div>
    </div>
</template>
<script>
import SsDialog from '@/components/dialog/dialog.vue'
export default {
    components: {
        SsDialog,
    },
    data() {
        return {
            dialogVisible: false,
            outerVisible: false,
            tabDialogVisible: false,
            name: '',
            region: '',
            active:'',
            submitBtnLoading: false
        }
    },
    methods: {
        submit() {
            this.submitBtnLoading = true;
            setTimeout(() => {
                this.dialogVisible = false;
                this.submitBtnLoading = false;
            }, 3000)
        }
    }
}
</script>

<style lang="scss">
.base {
    padding: 20px 0;
}
.show-dialog {
    padding: 20px;
    color: blue;
}
.input-item {
    margin: 20px 0;
}
.content {
    height: 1000px;
    background-color: #eee;
}
.tag-content {
    height: 1000px;
    background-color: #eee;
}
</style>
