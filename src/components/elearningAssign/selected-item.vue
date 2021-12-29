<template>
  <div class="ss-assign-checked-item-wrapper">
    <ul>
      <li class="ss-assign-checked-item" v-for="item in list" :key="item.id">
        <div class="ss-assign-checked-item--group" v-if="item.type === 'group'">
          <div class="ss-assign-checked-item-left">
            <img src="./images/file.svg" alt="" />
            <span
              class="ss-assign-checked-item-name xe-ellipsis select-name-group"
              :title="item.name"
            >
              <ss-name-replacer :id="item.name" :name="item.name" type="1" />
            </span>
          </div>
          <!-- 不是默认选中的，就展示删除按钮 -->
          <div
            v-if="showDelete && !item.isDefaultSelected"
            class="ss-assign-checked-item-right"
            @click="deleteNode(item)"
          />
        </div>
        <div class="ss-assign-checked-item--user" v-if="item.type === 'user'">
          <div class="ss-assign-checked-item-left">
            <img :src="item.image" class="ss-assign-checked-item-user-image" alt="" />
            <span class="ss-assign-checked-item-name xe-ellipsis" :title="item.name">
              <ss-name-replacer :id="item.name" :name="item.name" type="0" />
            </span>
          </div>
          <!-- 不是默认选中的，就展示删除按钮 -->
          <div
            v-if="showDelete && !item.isDefaultSelected"
            class="ss-assign-checked-item-right"
            @click="deleteNode(item)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * @description 已选组织列表
 */

export default {
  name: 'selectedItem',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    showDelete: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    deleteNode(node) {
      this.$emit('delete', node);
    },

    scrollToBottom() {
      const listDOM = this.$el.querySelector('ul');
      this.$el.scrollTop = listDOM.offsetHeight - this.$el.clientHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.ss-assign-checked-item-wrapper {
  padding: 8px 0 0;
  box-sizing: border-box;
  max-height: calc(100% - 32px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 129px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 5px;
  }

  .ss-assign-checked-item {
    display: flex;
    align-items: center;
    height: 32px;
    padding-right: 4px;
    color: #333;

    &--group,
    &--user {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    &-left {
      width: 200px;
      display: flex;
      flex: 1;
    }

    &-right {
      display: flex;
      align-items: center;
      &:before {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url("./images/delete.svg") center center;
        cursor: pointer;
        }
    }

    &-name {
      margin-left: 4px;
      vertical-align: middle;
      text-align: left;
      flex: 0 0 184px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &.select-name-group {
        flex: 0 0 calc(100% - 16px);
      }
    }

    .ss-assign-checked-item-user-image {
      width: 24px;
      height: 24px;
      border-radius: 4px;
    }
  }
}
</style>
