<template>
  <div>
    <!-- 风险事件组件 -->
    <div
      @click="handleRiskEvent"
      class="risk-event-item">
      <span
        :title="riskEventData.riskEventMsg"
        class="risk-event-msg">{{ riskEventData.riskEventMsg }}</span>
      <span class="risk-event-date">{{ riskEventData.riskEventDate }}</span>
    </div>
    <!-- 风险事件详细内容弹出框 -->
    <el-dialog
      v-model="riskEventDetailShow"
      title="预警处置详情"
      destroy-on-close
      :modal="false">
      <div class="risk-event-detail-panel">
        <!-- 组织类型 -->
        <div>
          <label for="organizationType">组织类型:</label>
          <el-input
            id="organizationType"
            v-model="organizationType"
            placeholder="请输入组织类型"></el-input>
        </div>
        <!-- 所属部门 -->
        <div>
          <label for="department">所属部门:</label>
          <el-input
            id="department"
            v-model="department"
            placeholder="请输入所属部门"></el-input>
        </div>
        <!-- 上报人 -->
        <div>
          <label for="reporter">上报人:</label>
          <el-input
            id="reporter"
            v-model="reporter"
            placeholder="请输入上报人"></el-input>
        </div>
        <!-- 上报时间 -->
        <div>
          <label for="reportTime">上报时间:</label>
          <el-input
            id="reportTime"
            v-model="reportTime"
            placeholder="请输入上报时间"></el-input>
        </div>
        <!-- 预警分类 -->
        <div>
          <label for="preliminaryType">预警分类:</label>
          <el-input
            id="preliminaryType"
            v-model="preliminaryType"
            placeholder="请输入预警分类"></el-input>
        </div>
        <!-- 预警等级 -->
        <div>
          <label for="preliminaryLevel">预警等级:</label>
          <el-input
            id="preliminaryLevel"
            v-model="preliminaryLevel"
            placeholder="请输入预警等级"></el-input>
        </div>
        <!-- 风险发生点 -->
        <div>
          <label for="riskOccurrence">风险发生点:</label>
          <el-input
            id="riskOccurrence"
            v-model="riskOccurrence"
            placeholder="请输入风险发生点"></el-input>
        </div>
        <!-- 指标名称 -->
        <div>
          <label for="indexName">指标名称:</label>
          <el-input
            id="indexName"
            v-model="indexName"
            placeholder="请输入指标名称"></el-input>
        </div>
        <!-- 指标内容 -->
        <div>
          <label for="indexContent">指标名称:</label>
          <el-input
            id="indexContent"
            v-model="indexContent"
            placeholder="请输入指标名称"></el-input>
        </div>
        <!-- 点位数目 -->
        <div>
          <label for="pointNum">点位数目:</label>
          <el-input
            id="pointNum"
            v-model="pointNum"
            placeholder="请输入点位数目"></el-input>
        </div>
        <!-- 治理状态 -->
        <div>
          <label for="governanceStatus">治理状态:</label>
          <el-input
            id="governanceStatus"
            v-model="governanceStatus"
            placeholder="请输入治理状态"></el-input>
        </div>
        <!-- 描述 -->
        <div>
          <label for="description">描述:</label>
          <el-input
            id="description"
            v-model="description"
            placeholder="请输入描述"></el-input>
        </div>
        <!-- 测点信息 -->
        <div></div>
        <!-- 处置前附件 -->
        <div></div>
        <!-- 处置描述 -->
        <div></div>
        <!-- 处置后附件 -->
        <div></div>
        <!-- 审批历史 -->
        <div></div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: '',
  props: {
    riskEventData: {
      type: Object,
      require: true,
    },
  },
  setup() {
    const state = reactive({
      riskEventDetailShow: false,
    });
    // 风险事件组件打开详情弹出框事件
    const handleRiskEvent = () => {
      // TODO axios请求
      state.riskEventDetailShow = true;
    };
    // 风险事件详情弹出框取消事件
    const cancel = () => {
      state.riskEventDetailShow = false;
    };

    return {
      ...toRefs(state),
      handleRiskEvent,
      cancel,
    };
  },
};
</script>

<style lang="scss" scoped>
.risk-event-item {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  .risk-event-msg {
    display: inline-block;
    width: 75%;
    color: #9c3bef;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .risk-event-date {
    float: right;
    color: #c1b8b8;
  }
}
</style>

<style lang="scss" scoped>
.risk-event-detail-panel {
  display: grid;
  grid-template-rows: [redpr1] 40px [redpr2] 40px [redpr3] 40px [redpr4] 40px [redpr5]
    80px [redpr6] 40px [redpr7] 80px [redpr8] 200px [redpr9] 80px [redpr10] 80px [redpr11]
    80px [redpr12] 200px [redpr13];
  grid-template-columns: [redpc1] 50% [redpc2] 50% [redpc3];
  row-gap: 20px;
  height: 300px;
  place-items: center center;
  overflow-x: hidden;
  overflow-y: auto;
  div {
    width: 75%;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-input) {
  width: 350px;
  font-size: 12px;
}
:deep(.el-input__inner) {
  height: 26px;
  line-height: 26px;
}
</style>
