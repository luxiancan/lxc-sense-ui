<template>
  <div class="tooltip">
    <div>
      <ss-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
        <ss-button>下右</ss-button>
      </ss-tooltip>
      <ss-tooltip class="item" content="Right Center 提示文字" placement="right">
        <ss-button>右边</ss-button>
      </ss-tooltip>
      <ss-tooltip class="item" content="Left Top 提示文字" placement="left-start">
        <ss-button>左上</ss-button>
      </ss-tooltip>

      <ss-tooltip class="item" content="Top Left 提示文字" placement="top-start">
        <ss-button>上左</ss-button>
      </ss-tooltip>
      <ss-tooltip class="item" content="Top Center 提示文字"
                  placement="top"
      >
        <ss-button>上边</ss-button>
      </ss-tooltip>
    </div>
    <div>
      <ss-tooltip content="Bottom center" placement="bottom" effect="dark">
        <ss-button>Dark</ss-button>
      </ss-tooltip>
      <ss-tooltip content="Bottom center" placement="top-start" effect="dark">
        <ss-button>Dark</ss-button>
      </ss-tooltip>
    </div>
    <div>
      <ss-tooltip placement="top">
        <div slot="content">多行信息<br/>第二行信息</div>
        <ss-button>多行信息</ss-button>
      </ss-tooltip>
    </div>
    <div>
      <ss-tooltip placement="top">
        <div slot="content">文本 <a href="http://admin.inside.xiaoe-tech.com" target="_blank" class="link">我是链接</a></div>
        <ss-button>纯文本+文字链接</ss-button>
      </ss-tooltip>
    </div>
    <div>
      <ss-tooltip
        placement="top"
        type="warning"
        title="标题"
        ok-text="确认"
        cancel-text="取消"
        @confirm="confirm"
        @cancel="cancel">
        <span slot="icon" class="sense-icon-loading"></span>
        <div slot="content">描述内容描述内容描述内容</div>
        <ss-button>二次确认</ss-button>
      </ss-tooltip>
    </div>

  </div>
</template>

<script>
  import SsButton from '@/components/button'
  import SsTooltip from '@/components/tooltip'
  export default {
    components: {
      SsButton,
      SsTooltip,
    },
    methods:{
      confirm(){
        this.$message.success('确认');
      },
      cancel(){
        this.$message.info('取消');
      }
    }
  }
</script>

<style scoped lang="scss">
  .tooltip {
    div {
      margin-bottom: 10px;
    }

    a.link {
      color: #1472ff;
      text-decoration: none;
    }

    button {
      margin-right: 10px;
    }
  }
</style>
