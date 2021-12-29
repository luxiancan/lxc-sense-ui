<template>
    <div>
        <materialSelection
            ref="materialSelection"
            :size="size"
            :freeCrop="false"
            :defaultFixedNumber="[16, 9]"
            :baseWidth="120"
            :centerBox="false"
            :cropContinue="true"
            @material-change="onChange"
        ></materialSelection>
        <div class="wrapper">
            <p>设置上传框尺寸</p>
            <button
                @click="
                    () => {
                        this.size = 1 / 1;
                    }
                "
            >
                1/1
            </button>
            <button
                @click="
                    () => {
                        this.size = 16 / 9;
                    }
                "
            >
                16/9
            </button>
            <button
                @click="
                    () => {
                        this.size = 9 / 16;
                    }
                "
            >
                9/16
            </button>
        </div>
        <div>
            <button
                @click="
                    () => {
                        this.hasDefUrl = !this.hasDefUrl;
                    }
                "
            >
                {{ hasDefUrl ? "关闭" : "开启" }}默认图
            </button>
        </div>
    </div>
</template>

<script>
import materialSelection from "../components/materialSelection";
export default {
    name: "",
    components: { materialSelection },
    mixins: [],
    props: {},
    data() {
        return {
            size: 16 / 9,
            hasDefUrl: true,
        };
    },
    computed: {},
    watch: {
        hasDefUrl: {
            immediate: true,
            handler(val) {
                const material = val
                    ? {
                          url:
                              "http://wechatapppro-1252524126.file.myqcloud.com/undefinedkpccwqw408w9.png",
                      }
                    : null;
                this.$nextTick(() => {
                    this.$refs.materialSelection.setCurrentMaterial(material);
                });
            },
        },
    },
    created() {
        window.__user_id = "b_u_5b73e35149a67_ypMtbWtO";
        window.__app_id = "apppcHqlTPT3482";
    },
    mounted() {
        // this.$refs.materialSelection.fixedNumber = [3,4]
    },
    methods: {
        onChange(file) {
            // console.log("当前素材为：", file);
        },
    },
    destroyed() {},
};
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 24px;
}
</style>