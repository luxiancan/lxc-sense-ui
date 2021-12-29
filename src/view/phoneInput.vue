<template>
    <div>
        <div class="container">
            <div class="input-wrap">
                <ss-phone-input
                    ref="phoneInput"
                    :theme="theme"
                    v-model="val"
                    @input="onInput"
                ></ss-phone-input>
            </div>
        </div>
        <div class="container" style="margin-top: 50px">
            <button @click="setCode">设置当前区号为 +886</button>
            <button @click="setPhone">设置当前手机号为 110</button>
            <button @click="setTheme">
                点击切换主题，当前主题为{{ theme }}
            </button>
        </div>
    </div>
</template>

<script>
import SsPhoneInput from "@/components/phoneInput";
export default {
    name: "",
    components: { SsPhoneInput },
    props: {},
    data() {
        return {
            list: [1],
            val: "",
            theme: "border",
        };
    },
    computed: {},
    watch: {
        val(v) {
            window.console.log("父组件：", v);
        },
    },
    created() {},
    mounted() {},
    methods: {
        onInput(v) {
            console.log("input", v);
        },
        setCode() {
            window.console.log(this.$refs.phoneInput);
            this.$refs.phoneInput.setCode("+886");
        },
        setPhone() {
            this.$refs.phoneInput.setPhone("110");
        },
        setTheme() {
            this.theme = this.theme === "border" ? "input" : "border";
        },
    },
    destroyed() {},
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: center;
    .input-wrap {
        // width: 240px;
    }
}
</style>