<style lang="scss" scoped>
.__ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.res-list {
  width: auto;
}
ul, li {
  list-style: none;
}
.body-item {
  color: #353535;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  &:hover {
    background: #FAFAFA;
  }
}
/* 知识商品 */
.content-1 {
  height: 74px;
  display: flex;
  position: relative;
  .cover-picture {
    width: 56px;
    height: 42px;
    margin: 16px 8px 0 0;
    border-radius: 2px;
  }
  .res-name {
    width: 360px;
    line-height: 74px;
  }
  .state-text {
    position: absolute;
    right: 24px;
    top: 26px;
    line-height: 22px;
    color: #888888;
  }
}
/* 打卡 + 测试 */
.content-2 {
  height: 74px;
  position: relative;
  .cover-picture {
    width: 75px;
    height: 42px;
    margin: 16px 8px 0 0;
    border-radius: 2px;
    float: left;
  }
  .res-info {
    width: 500px;
    padding-top: 16px;
    float: left;
    .res-name {
      line-height: 20px;
    }
    .create-time {
      line-height: 20px;
      margin-top: 4px;
      font-size: 12px;
      color: #888888;
    }
  }
  .type-text {
    position: absolute;
    right: 12px;
    top: 26px;
    line-height: 22px;
    color: #888888;
  }
}
/* 社群 */
.content-3 {
  height: 74px;
  .cover-picture {
    width: 42px;
    height: 42px;
    margin: 16px 8px 0 0;
    border-radius: 2px;
    float: left;
  }
  .res-info {
    width: 500px;
    padding-top: 16px;
    float: left;
    .res-name {
      line-height: 20px;
    }
    .create-time {
      line-height: 20px;
      margin-top: 4px;
      font-size: 12px;
      color: #888888;
    }
  }
}
/* 作业本 */
.content-4 {
  height: 52px;
  line-height: 52px;
  padding: 0 36px 0 12px;
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  .arrow-icon {
    position: absolute;
    right: 14px;
    top: 20px;
    width: 10px;
    height: 10px;
    border-radius: 1px;
    border-left: 1px solid #353535;
    border-bottom: 1px solid #353535;
    transform: rotate(-45deg);
  }
  .rotate-arrow {
    top: 24px;
    transform: rotate(135deg);
  }
}
/* 作业本展开 */
.exercise-list {
  padding-left: 28px;
  background: #FFFFFF;
  .loading-text {
    height: 52px;
    line-height: 36px;
    text-align: center;
  }
  .exercise-item {
    height: 52px;
    border-top: 1px solid #EEEEEE;
    position: relative;
    &:hover {
      background: #FAFAFA;
    }
    .exercise-name {
      padding-left: 12px;
      line-height: 52px;
      width: 360px;
    }
    .theme-text,.theme-reason-text{
      position: absolute;
      top: 16px;
      right: 15px;
      color: #888888;
    }
  }
  .exercise-pagination {
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }
}
/* 考试 */
.content-5 {
  height: 74px;
  display: flex;
  position: relative;
  .cover-picture {
    width: 75px;
    height: 42px;
    margin: 16px 8px 0 0;
    border-radius: 2px;
  }
  .res-name {
    width: 360px;
    line-height: 74px;
  }
  .reason-text {
    position: absolute;
    right: 12px;
    top: 26px;
    line-height: 22px;
    color: #888888;
  }
}
/* 表单 */
.content-6 {
  height: 52px;
  position: relative;
  .res-name {
    width: 360px;
		height: 52px;
		line-height: 52px;
	}
  .reason-text {
    position: absolute;
    right: 12px;
    top: 16px;
    line-height: 22px;
    color: #888888;
  }
}
/* 活动 */
.content-8 {
  height: 74px;
  .cover-picture {
    width: 56px;
    height: 42px;
    margin: 16px 8px 0 0;
    border-radius: 2px;
    float: left;
  }
  .res-info {
    width: 500px;
    padding-top: 16px;
    float: left;
    .res-name {
      line-height: 20px;
    }
    .create-time {
      line-height: 20px;
      margin-top: 4px;
      font-size: 12px;
      color: #888888;
    }
  }
}
/* 问答 */
.content-9 {
  height: 72px;
  .cover-picture {
    width: 40px;
    height: 40px;
    margin: 16px 8px 0 0;
    border-radius: 50%;
    float: left;
	}
	.res-name {
		width: 360px;
    line-height: 72px;
	}
}
/* 微页面 + 商品分组 + 首页 + 限时折扣 + 秒杀 + 优惠券  */
.content-10 {
  height: 54px;
  position: relative;
  .res-name {
		width: 360px;
		height: 54px;
		line-height: 54px;
	}
  .type-text {
    position: absolute;
    right: 12px;
    top: 16px;
    line-height: 22px;
    color: #353535;
  }
}
/* 训练营打卡 */
.content-22 {
  height: 64px;
  line-height: 30px;
  padding: 17px 180px 0 12px;
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  .cover-picture {
    width: 40px;
    height: 30px;
    margin: 0 8px 0 0;
    border-radius: 2px;
    float: left;
  }
  .type-text {
    position: absolute;
    right: 32px;
    top: 16px;
    line-height: 22px;
    color: #353535;
  }
  .reason-text {
    position: absolute;
    right: 32px;
    top: 16px;
    line-height: 22px;
    color: #888888;
  }
  .arrow-icon {
    position: absolute;
    right: 14px;
    top: 20px;
    width: 10px;
    height: 10px;
    border-radius: 1px;
    border-left: 1px solid #353535;
    border-bottom: 1px solid #353535;
    transform: rotate(-45deg);
  }
  .rotate-arrow {
    top: 24px;
    transform: rotate(135deg);
  }
}
.disabled-clock {
  cursor:not-allowed;
}

.empty-list {
	width: 100%;
	text-align: center;
	padding-top: 64px;
	.icon {
		width: 96px;
		height: 96px;
		display: inline-block;
		img {
			width: 100%;
			height: 100%;
			float: left;
		}
	}
	.text {
		height: 22px;
		line-height: 22px;
		margin-top: 12px;
	}
}
</style>

<template>
  <section class="res-list">
    <ul>
      <template v-for="item in resList">
        <li class="body-item" :key="item.id">

          <!-- 非训练营项目（除去 作业本） + 训练营项目（除去 打卡、作业本） -->
          <template v-if="(projectId !== 2 && activeTabId !== 11) || (projectId === 2 && activeTabId !== 11 && activeTabId !== 16)">
            <select-line
              v-model="item.is_selected"
              :is-available="item.is_available"
              :select-type="selectType"
              @select="onSelectRadio1(item.id)"
            >
              <!-- 知识商品 -->
              <div class="content-1" v-if="[1, 2, 3, 4, 5, 6, 8, 20, 22, 25, 28, 45].indexOf(activeTabId)>-1">
                <img class="cover-picture" :src="item.picture" alt="封面" />
                <div class="res-name __ellipsis" :title="item.name">{{item.name}}</div>
                <span class="state-text">{{upStateText(item)}}</span>
              </div>

              <!-- 打卡 -->
              <div class="content-2" v-else-if="activeTabId === 16">
                <img class="cover-picture" :src="item.picture" alt="封面" />
                <div class="res-info">
                  <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                  <p class="create-time">创建时间：{{item.create_time}}</p>
                </div>
                <span class="type-text">{{ {2:'日历打卡',3:'作业打卡',4:'闯关打卡'}[item.type] }}</span>
              </div>

              <!-- 社群 -->
              <div class="content-3" v-else-if="activeTabId === 7">
                <img class="cover-picture" :src="item.picture" alt="封面" />
                <div class="res-info">
                  <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                  <p class="create-time">创建时间：{{item.create_time}}</p>
                </div>
              </div>

              <!-- 考试 -->
              <div class="content-5" v-else-if="activeTabId === 12">
                <img class="cover-picture" :src="item.picture" alt="封面" />
                <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                <span class="reason-text" v-if="!item.is_available">{{item.reason}}</span>
              </div>

              <!-- 表单 -->
              <div class="content-6" v-else-if="activeTabId === 13">
                <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                <span class="reason-text" v-if="!item.is_available">{{item.reason}}</span>
              </div>

              <!-- 测试 -->
              <div class="content-2" v-else-if="activeTabId === 14">
                <img class="cover-picture" :src="item.picture" alt="封面" />
                <div class="res-info">
                  <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                  <p class="create-time">起止时间：{{item.start_at}}至{{item.end_at}}</p>
                </div>
              </div>

              <!-- 活动 -->
              <div class="content-8" v-else-if="activeTabId === 9">
                <img class="cover-picture" :src="item.picture" alt="封面" />
                <div class="res-info">
                  <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                  <p class="create-time">活动时间：{{item.start_at}}至{{item.end_at}}</p>
                </div>
              </div>

              <!-- 问答 -->
              <div class="content-9" v-else-if="activeTabId === 10">
                <img class="cover-picture" :src="item.picture" alt="头像" />
                <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
              </div>

              <!-- 微页面、商品分组 activeTabId = -->
              <div class="content-10" v-else-if="activeTabId === 19 || activeTabId === 18">
                <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                <span class="type-text">{{item.create_time}}</span>
              </div>

              <!-- 首页 -->
              <div class="content-10" v-else-if="activeTabId === 17">
                <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                <span class="type-text">{{item.create_time}}</span>
              </div>

              <!-- 限时折扣、秒杀、优惠券 -->
              <div class="content-10" v-else-if="[21, 23, 24].indexOf(activeTabId)>-1">
                <p class="res-name __ellipsis" :title="item.name">{{item.name}}</p>
                <span class="type-text" v-if="activeTabId == 21 && item.discount_way && item.valid_after !== -1">
                  {{`领券${item.valid_after == 0 ? '当' : '次'}日起${item.valid_day}天内可用`}}
                </span>
                <span v-else class="type-text">{{item.start_at}}至{{item.end_at}}</span>
              </div>

            </select-line>
          </template>
          <!-- 作业本 -->
          <template v-else-if="activeTabId === 11">
            <div class="content-4 __ellipsis" @click="spreadExerciseList(item.id)">
              {{item.name}}
              <i class="arrow-icon" :class="{'rotate-arrow': spreadExerciseId === item.id}"></i>
            </div>
            <ul class="exercise-list" v-if="spreadExerciseId === item.id">
              <p class="loading-text" v-if="exerciseList.length === 0">{{loadingText}}</p>
              <!-- 作业列表 -->
              <template v-for="value in exerciseList" v-else>
                <li class="exercise-item" :key="value.id">
                  <select-line
                    v-model="value.is_selected"
                    :is-available="item.is_available"
                    :select-type="selectType"
                    @select="onSelectRadio2(value.id)"
                  >
                    <p class="exercise-name">{{value.name}}</p>
                  </select-line>
                </li>
              </template>
              <div class="exercise-pagination" v-if="totalCount > pageSize">
                <ss-pagination
                  :total="totalCount"
                  :current="pageIndex"
                  :pageSize="pageSize"
                  :showQuickJumper="true"
                  @change="onInnerPaginationChange1">
                </ss-pagination>
              </div>
            </ul>
          </template>
          <!-- 训练营打卡 -->
          <template v-else-if="activeTabId === 16">
            <div class="content-22 __ellipsis" :class="{'disabled-clock': !item.is_available}" @click="spreadClockList(item)">
              <img class="cover-picture" :src="item.picture" alt="封面" />
              {{item.name}}
              <span class="type-text" v-if="item.is_available">{{ {2:'日历打卡',3:'作业打卡',4:'闯关打卡'}[item.type] }}</span>
              <span class="reason-text" v-else>{{item.reason}}</span>
              <i v-if="item.is_available" class="arrow-icon" :class="{'rotate-arrow': spreadClockId === item.id}"></i>
            </div>
            <ul class="exercise-list" v-if="spreadClockId === item.id">
              <p class="loading-text" v-if="clockList.length === 0">{{loadingText}}</p>
              <!-- 打卡主题列表 -->
              <template v-for="value in clockList" v-else>
                <li class="exercise-item" :key="value.id">
                  <select-line
                    v-model="value.is_selected"
                    :is-available="value.is_available"
                    :select-type="selectType"
                    @select="onSelectRadio3(value.id)"
                  >
                    <p class="exercise-name __ellipsis">{{value.name}}</p>
                    <span class="theme-text" v-if="value.is_available&&value.type === 2">{{value.theme_date}}</span>
                    <span class="theme-text" v-if="value.is_available&&value.type === 4">第{{value.weight}}课时</span>
                    <span class="theme-reason-text" v-if="!value.is_available">{{value.reason}}</span>
                  </select-line>
                </li>
              </template>
              <div class="exercise-pagination" v-if="totalCount > pageSize">
                <ss-pagination
                  :total="totalCount"
                  :current="pageIndex"
                  :pageSize="pageSize"
                  :showQuickJumper="true"
                  @change="onInnerPaginationChange2">
                </ss-pagination>
              </div>
            </ul>
          </template>
        </li>
      </template>
    </ul>
    <div class="empty-list" v-if="resList.length === 0">
			<i class="icon">
				<img src="./images/empty_state.png" alt="empty" />
			</i>
			<p class="text">暂无数据</p>
		</div>
  </section>
</template>

<script>

import Axios from 'axios';

// 单选 、 多选 组件
import selectLine from './selectLine.vue';

export default {
  name: 'resList',
  components: {
    selectLine
  },
  props: {
    'active-tab-id': {
			type: [String, Number],
			default: '',
    },
		'select-type': {
			type: Number,
      default: 1,
    },
    'project-id': {
      type: Number,
      default: 1
    },
    'sort-order': {
      type: Number,
      default: 0
    },
    'sort-by': {
      type: Number,
      default: 0
    },
    'extra-params': {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * 经过处理的资源列表数据
     * 格式：
     * {
     *    id: '资源id',
     *    name: '资源名字',
     *    picture: '封面图片腾讯云地址',
     *    target_url: '资源跳转链接',
     *    is_available: 1, // 是否可选 1：可选，0：不可选
     *    reason: '', // 不可选原因，可选时字段为空
     *
     *    is_selected: false, // 是否已经选中
     * }
     */
    'res-list': {
			type: Array,
			default: () => [],
		},
  },
  data() {
    return {
      spreadExerciseId: '', // 展开的作业本id
      exerciseList: [], // 作业本中的 作业列表
      checkedExerciseId: '', // 选中的作业id

      spreadClockId: '', // 展开的打卡id
      clockList: [], // 打卡关联的主题列表

      loadingText: '',

      // 作业本列表
      totalCount: 0,
      pageIndex: 1,
      pageSize: 10,

    };
  },
  methods: {
    /**
     * 生成上架状态的文案
     */
    upStateText(item) {
      // 显示上架时间
      if ([1, 2, 3, 4, 20, 25, 28].indexOf(item.res_type) > -1) {
        if (item.state === 1) {
          return '已下架';
        }
        return '上架时间：' + item.up_time;
      }
      // 显示上架状态
      else if ([5, 6, 8].indexOf(item.res_type) > -1) {
        if (item.state === 1) {
          return '已下架';
        }
        return '已上架';
      }
      return '';
    },
    /**
     * 选择器选中一个选项(非作业列表)
     * 携带参数：资源id
     */
    onSelectRadio1(resId) {
      if (this.selectType === 1) {
        this.resList.forEach(item => {
          if (item.id !== resId) {
            item.is_selected = false;
          }
        });
      }
      const arr = this.resList.filter(item => item.is_selected === true);
      this.$emit('select', arr);
    },
    /**
     * 选择作业列表
     */
    onSelectRadio2(resId) {
      if (this.selectType === 1) {
        this.exerciseList.forEach(item => {
          if (item.id !== resId) {
            item.is_selected = false;
          }
        });
      }
      const arr = this.exerciseList.filter(item => item.is_selected === true);
      this.$emit('select', arr);
    },
    /**
     * 选择打卡主题列表
     */
    onSelectRadio3(resId) {
      if (this.selectType === 1) {
        this.clockList.forEach(item => {
          if (item.id !== resId) {
            item.is_selected = false;
          }
        });
      }
      const arr = this.clockList.filter(item => item.is_selected === true);
      this.$emit('select', arr);
    },
    /**
     * 展开作业列表
     */
    spreadExerciseList(id) {
      if (this.spreadExerciseId === id) {
        this.spreadExerciseId = '';
      }
      else {
        this.spreadExerciseId = id;
        this.pageIndex = 1;
				this.getExerciseList();
      }
    },
    /**
     * 切换分页器页码
     */
    onInnerPaginationChange1(index) {
      this.pageIndex = index;
      this.getExerciseList();
    },
    /**
		 * 获取作业列表
		 */
		getExerciseList() {
			const appId = document.getElementById('xet_app_id') ? document.getElementById('xet_app_id').value : 'apppcHqlTPT3482';
			let params = {
				app_id: appId,
				res_type: 15,
				sub_res_id: this.spreadExerciseId,
				page_index: this.pageIndex,
        page_size: this.pageSize,
        sort_order: this.sortOrder,
        sort_by: this.sortBy,
      };
      const extra = 15 in this.extraParams ? this.extraParams[15] : '';
      if (extra) {
        Object.assign(params, extra);
      }
      this.exerciseList = [];
      this.totalCount = 0;
			this.loadingText = '加载数据中...';
			Axios.post('/king_select/popup_resource_list', params).then(
        res => {
          if (res.data.code === 0) {
            this.loadingText = '暂无数据';
            this.totalCount = res.data.data.total;
						this.exerciseList = this.handleList(res.data.data.list);
          }
          else {
            this.loadingText = '加载失败，请稍后再试';
						console.error(res);
						this.$message.warning('请求列表失败，请稍后再试');
          }
        }
      ).catch(
        err => {
          this.loadingText = '加载失败，请稍后再试';
          console.error(err);
        }
      );
    },
    /**
     * 处理作业列表数据
     */
    handleList(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return [];
      }
      let currentArr = [];
      data.forEach(item => {
        // 在后台的字段基础上再添加两个自定义字段
        let target = {
          res_type: 15,
          is_selected: false,
        };
        Object.assign(target, item);
        currentArr.push(target);
      });
      return currentArr;
    },
    /**
     * 展开打卡主题列表
     */
    spreadClockList(item) {
      if (!item.is_available) {
        return ;
      }
      if (this.spreadClockId === item.id) {
        this.spreadClockId = '';
      }
      else {
        this.spreadClockId = item.id;
        this.pageIndex = 1;
				this.getClockList();
      }
    },
    /**
     * 切换分页器页码
     */
    onInnerPaginationChange2(index) {
      this.pageIndex = index;
      this.getClockList();
    },
    /**
     * 获取打卡主题列表
     */
    getClockList() {
      const appId = document.getElementById('xet_app_id') ? document.getElementById('xet_app_id').value : 'apppcHqlTPT3482';
			let params = {
				app_id: appId,
				res_type: 27,
				sub_res_id: this.spreadClockId,
				page_index: this.pageIndex,
        page_size: this.pageSize,
        sort_order: this.sortOrder,
        sort_by: this.sortBy,
      };
      const extra = 27 in this.extraParams ? this.extraParams[27] : '';
      if (extra) {
        Object.assign(params, extra);
      }
      this.clockList = [];
      this.totalCount = 0;
			this.loadingText = '加载数据中...';
			Axios.post('/king_select/popup_resource_list', params).then(
        res => {
          if (res.data.code === 0) {
            this.loadingText = '暂无数据';
            this.totalCount = res.data.data.total;
						this.clockList = this.handleClockList(res.data.data.list);
          }
          else {
            this.loadingText = '加载失败，请稍后再试';
						console.error(res);
						this.$message.warning('请求列表失败，请稍后再试');
          }
        }
      ).catch(
        err => {
          this.loadingText = '加载失败，请稍后再试';
          console.error(err);
        }
      );
    },
    /**
     * 处理打卡主题列表数据
     */
    handleClockList(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return [];
      }
      let currentArr = [];
      data.forEach(item => {
        // 在后台的字段基础上再添加两个自定义字段
        let target = {
          res_type: 27,
          is_selected: false,
        };
        Object.assign(target, item);
        currentArr.push(target);
      });
      return currentArr;
    }
  }
}
</script>
