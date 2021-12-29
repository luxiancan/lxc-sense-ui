<template>
    <div>
        <div class="message-box-wrapper" @click="openMessageBox">点击打开</div>
        <div class="message-box-wrapper" @click="openMessageAlert">
            打开alert
        </div>

        <div @click="openBeforeClose">测试beforeClose</div>
    </div>
</template>
<script>
import MessageBox from "../components/messageBox/index";

export default {
    methods: {
        openBeforeClose() {
            MessageBox({
                title: "1",
                showCancelButton: true,

                beforeClose(action, instance, done) {
                    instance.confirmButtonLoading = true;

                    setTimeout(() => {
                        instance.confirmButtonLoading = false;
                        done();
                    }, 2000);
                    console.log("0-----");
                },
            });
        },
        openMessageBox() {
            this.$confirm(
                "这是一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。",
                {
                    // type: 'error',
                    title: "提示",
                    layout: "vertical",
                    boxWidth: 540,
                    closeIcon: false,
                }
            )
                .then((a) => {
                    console.log(3333, a);
                })
                .catch(() => {
                    console.log(55555);
                });
        },
        openMessageBox2() {
            //   this.$confirm({
            //     title: '我是message2'
            //   })
        },
        openMessageAlert() {
            MessageBox.alert("aaaaaaa", {
                title: "提示",
            });
        },
    },
};
</script>