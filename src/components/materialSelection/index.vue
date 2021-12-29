<script>
import Vue from "vue";
import MaterialBox from "@xiaoe/material_center_box";
import ICON_UPLOAD from "./add.png";
import ICON_DELETE from "./delete.png";
import ICON_CROP from "./crop.png";
import SsCropper from "../cropper/cropper";
import "@xiaoe/material_center_box/static/index.css";
import Axios from "axios";
import Upload from "./uploadV4";
import SsButton from "@/components/button";
Vue.use(MaterialBox);

// 裁剪容器尺寸
const CROPPER_HEIGHT = 344;
const CROPPER_WIDTH = 344;

const byte2KB = (byte, precision = 3) => {
    const temp = Math.pow(10, precision);
    return (Math.ceil((byte / 1024) * temp) / temp).toFixed(precision);
};

// 根据短边长计算等腰三角形的斜边长
const getTriangleWidth = (width) => Math.sqrt(Math.pow(width, 2) * 2);

// 根据斜边长计算等腰三角形的短边长
const getTriangleShortWidth = (width) => Math.sqrt((width * width) / 2);

export default {
    name: "SsMaterialSelection",
    components: { SsCropper, SsButton },
    mixins: [],
    props: {
        // 宽高比
        size: {
            default: 1 / 1,
        },
        // 裁剪框比例选项 [ [1,1], [16,9] ]
        cropSize: {},
        // 是否为自由裁剪模式
        freeCrop: {
            default: true,
        },
        // 是否有重新选择按钮
        hasReSelect: {
            default: true,
        },
        // 最大尺寸，单位 KB
        maxSize: {
            default: 1024 * 5,
        },
        // 需要关联的素材 Url
        relatedMaterialUrl: {},
        // 裁剪框是否不能超过图片
        centerBox: {
            default: true,
        },
        // 默认裁剪框比例
        defaultFixedNumber: {
            default: () => [1, 1],
        },
        // 是否不能修改素材
        disabled: {
            default: false,
        },
        // 选择框基础宽度
        baseWidth: {
            default: 120,
        },
        // 是否为圆形
        circle: {
            default: false,
        },
        // 为 false 时，再次进行裁剪时仍然裁剪原素材（而非被裁剪后的素材）
        cropContinue: {
            default: false,
        },
    },
    data() {
        return {
            cropMaterial: null, // 当前正在裁剪的素材
            currentMaterial: null, // 当前选中素材
            maskVisible: false, // 遮罩层是否展示
            cropperDialogVisible: false, // 裁剪弹框是否展示
            UploadTool: null, // 上传组件弹窗
            progress: 0, // 当前进度
            uploading: false, // 是否正在上传
            fixedNumber: this.defaultFixedNumber, // 裁剪框比例
            fixed: !this.freeCrop, // 裁剪框尺寸调整是否固定
        };
    },
    computed: {
        formatMaxSize({ maxSize }) {
            if (maxSize < 1024) {
                return `${maxSize}KB`;
            }
            return `${(maxSize / 1024).toFixed(2)}MB`;
        },
        cropSizeProps({ fixedNumber }) {
            const scale = fixedNumber[0] / fixedNumber[1];
            return {
                autoCropHeight:
                    scale < 1 ? CROPPER_HEIGHT / scale : CROPPER_HEIGHT,
                autoCropWidth:
                    scale > 1 ? CROPPER_WIDTH * scale : CROPPER_WIDTH,
            };
        },
        selectionSize({ size, baseWidth }) {
            return {
                height: `${size < 1 ? baseWidth / size : baseWidth}px`,
                width: `${size > 1 ? baseWidth * size : baseWidth}px`,
            };
        },
        deleteIconStyle({ baseWidth, circle }) {
            const deviation = circle
                ? getTriangleShortWidth(
                      getTriangleWidth(baseWidth / 2) - baseWidth / 2
                  )
                : 0;
            return {
                position: "absolute",
                top: `${-12 + deviation}px`,
                right: `${-12 + deviation}px`,
                width: `24px`,
                height: `24px`,
                cursor: "pointer",
            };
        },
    },
    created() {
        MaterialBox.setDefaults({
            zIndex: 7000,
            beforeClose: (action, vm, close) => {
                console.log(action);
                if (action === "confrim") {
                    const data = Object.values(vm.materials)[0];
                    if (data.material_size > this.maxSize) {
                        this.$message.warning(
                            `图片大小不能超过${this.formatMaxSize}`
                        );
                        return;
                    }
                }
                close();
            },
        });
        this.$on("upload-start", () => (this.uploading = true));
        this.$on("upload-success", () => (this.uploading = false));
        this.$on("upload-fail", () => (this.uploading = false));
        this.$on("material-change", (data) => {
            this.uploading = false;
            console.log("当前素材为：", data);
        });
    },
    mounted() {},
    methods: {
        genSize(base, scale) {
            return {
                height: `${scale > 1 ? base / scale : base}px`,
                width: `${scale < 1 ? base * scale : base}px`,
            };
        },
        setCurrentMaterial(material) {
            this.currentMaterial = material;
            this.cropMaterial = material;
            this.$emit("material-change", material);
        },
        // 素材选择
        handleSelect() {
            if (this.disabled) return;
            this.$material
                .picture({ multiple: false })
                .then(({ data }) => {
                    if (data && data.length) {
                        if (data[0].material_size < this.maxSize) {
                            this.currentMaterial = data[0];
                            this.cropMaterial = this.currentMaterial;
                            this.$emit("material-change", data[0]);
                        } else {
                            this.$message.warning(
                                `图片大小不能超过${this.formatMaxSize}`
                            );
                        }
                    }
                    window.console.log(data);
                })
                .catch(window.console.error);
        },
        handleCrop() {
            this.cropperDialogVisible = true;
        },
        // 上传文件
        handleUpload(file) {
            const fileObj = {
                size: file.size,
                name: file.name,
                file,
            };
            console.log(fileObj);
            const tmpUrl = window.URL.createObjectURL(file); //
            const image = new Image();
            image.src = tmpUrl;
            image.onload = () => {
                fileObj.width = image.width;
                fileObj.height = image.height;
                this.UploadTool = new Upload();
                this.$emit("upload-start", fileObj);
                this.UploadTool.uploadFile(
                    this.getSuccessCallBack(fileObj),
                    this.getErrorCallBack(fileObj),
                    this.getProgressCallBack(fileObj),
                    fileObj
                );
                window.URL.revokeObjectURL(tmpUrl);
            };
        },
        getSuccessCallBack(fileObj) {
            return (res) => {
                window.console.log("成功上传至腾讯云", res);
                fileObj.access_url = res.data.access_url;
                this.$emit("upload-success", fileObj);
                this.sendToMaterialCenter(fileObj);
            };
        },
        getErrorCallBack(fileObj) {
            return (err) => {
                this.$emit("upload-fail", fileObj);
                window.console.log(err, fileObj);
            };
        },
        getProgressCallBack(fileObj) {
            return (res) => {
                window.console.log("当前进度：", res);
                this.progress = res * 100;
            };
        },
        // 上报素材中心
        sendToMaterialCenter(fileObj) {
            const fileData = {
                title: fileObj.file.name,
                old_url: this.currentMaterial.url || this.relatedMaterialUrl,
                new_url: fileObj.access_url,
                material_property: `${fileObj.width}*${fileObj.height}`,
                material_size: byte2KB(fileObj.size),
            };
            Axios.post("/api/material/upload/edit_pic", {
                app_id: window.__app_id,
                data: [fileData],
            });
            this.handleCurrentMaterialChange(fileData, fileObj);
        },
        // 更新当前素材
        handleCurrentMaterialChange(fileData, { width, height }) {
            fileData = Object.assign({}, fileData, { material_id: "" });
            fileData.url = fileData.new_url;
            if (this.currentMaterial.material_id) {
                fileData.material_id = this.currentMaterial.material_id;
            } else {
                Axios.post("/api/material/get_material_info_by_url", {
                    app_id: window.__app_id,
                    material_url: fileData.old_url,
                }).then((res) => {
                    const { code, data } = res.data;
                    if (code == 0) {
                        fileData.material_id = data.material_id;
                        this.currentMaterial = fileData;
                        this.$emit(
                            "material-change",
                            Object.assign(fileData, {
                                material_property: { width, height },
                            })
                        );
                    }
                });
            }
            this.currentMaterial = fileData;
            this.$emit(
                "material-change",
                Object.assign(fileData, {
                    material_property: { width, height },
                })
            );
        },
        renderCropperDialog() {
            const {
                cropMaterial,
                currentMaterial,
                cropperDialogVisible,
                cropSize,
                fixedNumber,
                cropSizeProps,
                fixed,
                centerBox,
                cropContinue,
            } = this;
            const cancel = () => {
                const handleDestroyed = this.$refs.cropper.handleDestroyed;
                handleDestroyed();
                this.cropperDialogVisible = false;
                setTimeout(() => {
                    handleDestroyed && handleDestroyed();
                }, 600);
            };
            const submit = () => {
                this.$refs.cropper.getCropBlob((data) => {
                    this.handleUpload(
                        new File([data], "test.png", {
                            type: "image/png",
                        })
                    );
                    cancel();
                });
            };
            const SsCropperAttr = {
                ref: "cropper",
                props: {
                    img:
                        (!cropContinue && cropMaterial && cropMaterial.url) ||
                        (currentMaterial && currentMaterial.url) ||
                        "",
                    autoCrop: true,
                    ...cropSizeProps,
                    fixedNumber,
                    centerBox,
                    fixed,
                },
            };
            const cropSizeList = cropSize && (
                <div class="ss-size-list">
                    <div
                        class={[
                            "ss-size-item",
                            !fixed && "ss-size-item-active",
                        ]}
                        on-click={() => {
                            this.fixed = false;
                        }}
                    >
                        <div
                            class="ss-crop-demo"
                            style={{ width: "32px", height: "20px" }}
                        ></div>
                        <div>自由比例</div>
                    </div>
                    {cropSize.map((size) => (
                        <div
                            class={[
                                "ss-size-item",
                                fixed &&
                                    size[0] === fixedNumber[0] &&
                                    size[1] === fixedNumber[1] &&
                                    "ss-size-item-active",
                            ]}
                            on-click={() => {
                                this.fixedNumber = size;
                                this.fixed = true;
                            }}
                        >
                            <div
                                class="ss-crop-demo"
                                style={this.genSize(24, size[0] / size[1])}
                            ></div>
                            <div>
                                {size[0]}:{size[1]}
                            </div>
                        </div>
                    ))}
                </div>
            );
            return (
                <transition name="dialog-fade">
                    {cropperDialogVisible && (
                        <div class="ss-cropper-dialog-wrap">
                            <div class="ss-cropper-dialog-mask"></div>
                            <div class="ss-cropper-dialog">
                                <div class="ss-cropper-dialog-header">
                                    <span class="ss-dialog-header-title">
                                        裁剪
                                    </span>
                                    <div
                                        type="button"
                                        class="ss-dialog-header-btn"
                                        aria-label="Close"
                                        on-click={cancel}
                                    >
                                        <i class="ss-dialog__close sense-icon-close"></i>
                                    </div>
                                </div>
                                <div class="ss-cropper-box" slot="content">
                                    <div class="ss-cropper-wrap">
                                        <ss-cropper
                                            {...SsCropperAttr}
                                        ></ss-cropper>
                                    </div>
                                    {cropSizeList}
                                </div>
                                <div class="ss-cropper-dialog-footer">
                                    <ss-button type="plain" on-click={cancel}>
                                        取消
                                    </ss-button>
                                    <ss-button type="primary" on-click={submit}>
                                        确认
                                    </ss-button>
                                </div>
                            </div>
                        </div>
                    )}
                </transition>
            );
        },
    },
    render() {
        const {
            currentMaterial,
            maskVisible,
            progress,
            uploading,
            selectionSize,
            hasReSelect,
            disabled,
            circle,
            deleteIconStyle,
            baseWidth,
        } = this;
        const SsMaterialSelectionAttr = {
            style: selectionSize,
            class: "ss-material-selection",
            on: {
                mouseenter: () => {
                    this.maskVisible = true;
                },
                mouseleave: () => {
                    this.maskVisible = false;
                },
            },
        };

        const uploadBox = (
            <div class="ss-upload-box" on-click={this.handleSelect}>
                <div class="ss-upload-content">
                    <img src={ICON_UPLOAD} />
                    {baseWidth > 60 && (
                        <div class="ss-upload-text ss-handle-upload">
                            点击上传
                        </div>
                    )}
                </div>
            </div>
        );
        const imgMask = (
            <transition name="fade">
                <div class="ss-img-mask">
                    <img
                        class="ss-crop"
                        on-click={this.handleCrop}
                        src={ICON_CROP}
                    />
                    <img
                        style={deleteIconStyle}
                        src={ICON_DELETE}
                        on-click={() => {
                            this.$emit("material-change", null);
                            this.currentMaterial = null;
                            this.cropMaterial = null;
                        }}
                    />
                </div>
            </transition>
        );
        const progressBox = (
            <div class="ss-progress-box">
                {baseWidth > 60 && <div class="ss-upload-text">图片上传中</div>}
                <div class="ss-progress-wrap">
                    <div
                        class="ss-progress"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        );
        const reselectBtn = (
            <div class="ss-re-select" on-click={this.handleSelect}>
                重新选择
            </div>
        );
        const showUploadBox = !uploading && !currentMaterial;
        return (
            <div
                class={[
                    circle && "ss-circle-mode",
                    showUploadBox && "ss-upload-box-show",
                    "ss-material-selection-wrap",
                ]}
            >
                <div {...SsMaterialSelectionAttr}>
                    {showUploadBox && uploadBox}
                    {!uploading && currentMaterial && (
                        <img class="ss-current-img" src={currentMaterial.url} />
                    )}
                    {!disabled &&
                        !uploading &&
                        currentMaterial &&
                        maskVisible &&
                        imgMask}
                    {uploading && progressBox}
                </div>
                {!disabled && hasReSelect && currentMaterial && reselectBtn}
                {this.renderCropperDialog()}
            </div>
        );
    },
    destroyed() {},
};
</script>

<style lang="scss" >
@import "@/assets/scss/packages/material-selection.scss";
</style>
