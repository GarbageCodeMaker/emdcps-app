<template>
  <div>
    <!-- 通知公告组件 -->
    <div
      @click="handleAnnouncement"
      class="announcement-item">
      <span
        :title="announcementData.announcementMsg"
        class="announcement-msg">{{ announcementData.announcementMsg }}</span>
      <span class="announcement-date">{{ announcementData.announcementDate }}</span>
    </div>
    <!-- 通知公告弹出框 -->
    <el-dialog
      v-model="announcementDetailShow"
      title="通知公告"
      width="30%"
      destroy-on-close
      :modal="true"
      :fullscreen="false"
      @open="getAnnouncementDetailData">
      <div class="announcement-detail-panel">
        <h1>{{ announcementData.announcementMsg }}</h1>
        <div
          v-for="(item, index) in detailItems"
          :key="index"
          class="announcement-detail-item">
          <span class="detail-item-name">{{ item.detailItemName }}</span>
          <span class="detail-item-date">{{ item.detailItemDate }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';
import Data from '../../util/data';

export default {
  name: 'Announcement',
  props: {
    announcementData: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const state = reactive({
      announcementDetailShow: false,
      detailItems: [{}],
    });

    // 通知公告组件打开详情弹出框事件
    const handleAnnouncement = () => {
      state.announcementDetailShow = true;
      console.log('set true');
    };
    // 通知公告详情弹出框数据查询事件
    const getAnnouncementDetailData = () => {
      console.log('open');
      // TODO axios请求
      state.detailItems = Data.detailItemsData;
    };

    return {
      ...toRefs(state),
      handleAnnouncement,
      getAnnouncementDetailData,
    };
  },
};
</script>

<style lang="scss" scoped>
.announcement-item {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  .announcement-msg {
    display: inline-block;
    width: 75%;
    color: #9c3bef;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .announcement-date {
    float: right;
    color: #c1b8b8;
  }
}
</style>

<style lang="scss" scoped>
.announcement-detail-panel {
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  .announcement-detail-item {
    height: 30px;
    line-height: 30px;
    margin: 10px 0 10px 0;
    padding: 0 10px 0 10px;
    background-color: rgba(240, 223, 241, 0.5);
    .detail-item-name {
      display: inline-block;
      width: 50%;
      color: #5f5b5b;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .detail-item-date {
      float: right;
      color: #afa7a7;
    }
  }
  h1 {
    color: #666;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
}
</style>
