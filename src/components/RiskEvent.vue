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
      :modal="false"
      @open="getRiskEventDetailData">
      <div class="risk-event-detail-panel">
        <!-- 组织类型 -->
        <div>
          <label for="organizationType">组织类型:</label>
          <el-input
            id="organizationType"
            v-model="riskEventDetailData.organizationType"
            :readonly="true"></el-input>
        </div>
        <!-- 所属部门 -->
        <div>
          <label for="department">所属部门:</label>
          <el-input
            id="department"
            v-model="riskEventDetailData.department"
            :readonly="true"></el-input>
        </div>
        <!-- 上报人 -->
        <div>
          <label for="reporter">上报人:</label>
          <el-input
            id="reporter"
            v-model="riskEventDetailData.reporter"
            :readonly="true"></el-input>
        </div>
        <!-- 上报时间 -->
        <div>
          <label for="reportTime">上报时间:</label>
          <el-input
            id="reportTime"
            v-model="riskEventDetailData.reportTime"
            :readonly="true"></el-input>
        </div>
        <!-- 预警分类 -->
        <div>
          <label for="preliminaryType">预警分类:</label>
          <el-input
            id="preliminaryType"
            v-model="riskEventDetailData.preliminaryType"
            :readonly="true"></el-input>
        </div>
        <!-- 预警等级 -->
        <div>
          <label for="preliminaryLevel">预警等级:</label>
          <el-input
            id="preliminaryLevel"
            v-model="riskEventDetailData.preliminaryLevel"
            :readonly="true"></el-input>
        </div>
        <!-- 风险发生点 -->
        <div>
          <label for="riskOccurrence">风险发生点:</label>
          <el-input
            id="riskOccurrence"
            v-model="riskEventDetailData.riskOccurrence"
            :readonly="true"></el-input>
        </div>
        <!-- 指标名称 -->
        <div>
          <label for="indexName">指标名称:</label>
          <el-input
            id="indexName"
            v-model="riskEventDetailData.indexName"
            :readonly="true"></el-input>
        </div>
        <!-- 指标内容 -->
        <div class="index-content-position">
          <label for="indexContent">指标内容:</label>
          <el-input
            id="indexContent"
            v-model="riskEventDetailData.indexContent"
            type="textarea"
            :rows="2"
            :readonly="true"></el-input>
        </div>
        <!-- 点位数目 -->
        <div>
          <label for="pointNum">点位数目:</label>
          <el-input
            id="pointNum"
            v-model="riskEventDetailData.pointNum"
            :readonly="true"></el-input>
        </div>
        <!-- 治理状态 -->
        <div>
          <label for="governanceStatus">治理状态:</label>
          <el-input
            id="governanceStatus"
            v-model="riskEventDetailData.governanceStatus"
            :readonly="true"></el-input>
        </div>
        <!-- 描述 -->
        <div class="description-position">
          <label for="description">描述:</label>
          <el-input
            id="description"
            v-model="riskEventDetailData.description"
            type="textarea"
            :rows="2"
            :readonly="true"></el-input>
        </div>
        <!-- 测点信息 -->
        <div class="measuring-point-position">
          <label for="measuringPointTable">测点信息:</label>
          <el-table
            :data="riskEventDetailData.measuringPointTableData"
            border
            height="200"
            size="mini">
            <el-table-column
              type="index"
              label="序号"
              header-align="center"
              align="center"></el-table-column>
            <el-table-column
              prop="measuringPointCode"
              label="测点编号"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="monitorType"
              label="监测类型"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="preliminaryLevel"
              label="预警等级"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="initialValue"
              label="初始值"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="cumulativeChange"
              label="本次累计变化值"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="rateChange"
              label="本次变化速率"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
        <!-- 处置前附件 -->
        <div class="deal-with-before-annex-position">
          <label for="dealWithBeforeAnnex">处置前附件:</label>
          <div>暂无附件</div>
        </div>
        <!-- 处置描述 -->
        <div class="deal-with-description-position">
          <label for="dealWithDescription">处置描述:</label>
          <el-input
            id="dealWithDescription"
            v-model="riskEventDetailData.dealWithDescription"
            type="textarea"
            :rows="2"
            :readonly="true"></el-input>
        </div>
        <!-- 处置后附件 -->
        <div class="deal-with-after-annex-position">
          <label for="dealWithAfterAnnex">处置后附件:</label>
          <div>暂无附件</div>
        </div>
        <!-- 审批历史 -->
        <div class="approve-history-position">
          <label for="ApproveHistoryTable">审批历史:</label>
          <el-table
            :data="riskEventDetailData.approveHistoryTableData"
            border
            height="200"
            size="mini">
            <el-table-column
              type="index"
              label="序号"
              header-align="center"
              align="center"></el-table-column>
            <el-table-column
              prop="taskName"
              label="任务名称"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="dealStatus"
              label="处理状态"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="responseStatus"
              label="响应状态"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="executor"
              label="执行人"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="instructions"
              label="批示说明"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="开始时间"
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
        </div>
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
      riskEventDetailData: {
        organizationType: '',
        department: '',
        reporter: '',
        reportTime: '',
        preliminaryType: '',
        preliminaryLevel: '',
        riskOccurrence: '',
        indexName: '',
        indexContent: '',
        pointNum: '',
        governanceStatus: '',
        description: '',
        measuringPointTableData: [{}],
        dealWithDescription: '',
        approveHistoryTableData: [{}],
      },
    });
    // 风险事件组件打开详情弹出框事件
    const handleRiskEvent = () => {
      state.riskEventDetailShow = true;
      console.log('set true');
    };
    // 风险事件详情弹出框取消事件
    const cancel = () => {
      state.riskEventDetailShow = false;
    };
    // 风险事件详情弹出框数据查询事件
    const getRiskEventDetailData = () => {
      console.log('open');
      // TODO axios请求
    };

    return {
      ...toRefs(state),
      handleRiskEvent,
      cancel,
      getRiskEventDetailData,
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
  place-items: center end;
  overflow-x: hidden;
  overflow-y: auto;
  .index-content-position {
    grid-row-start: redpr5;
    grid-row-end: redpr6;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
  .description-position {
    grid-row-start: redpr7;
    grid-row-end: redpr8;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
  .measuring-point-position {
    grid-row-start: redpr8;
    grid-row-end: redpr9;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
  .deal-with-before-annex-position {
    grid-row-start: redpr9;
    grid-row-end: redpr10;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
  .deal-with-description-position {
    grid-row-start: redpr10;
    grid-row-end: redpr11;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
  .deal-with-after-annex-position {
    grid-row-start: redpr11;
    grid-row-end: redpr12;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
  .approve-history-position {
    grid-row-start: redpr12;
    grid-row-end: redpr13;
    grid-column-start: redpc1;
    grid-column-end: redpc3;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-input) {
  width: 350px;
  margin: 0 20px 0 10px;
  font-size: 12px;
}
:deep(.el-input__inner) {
  height: 26px;
  line-height: 26px;
}
:deep(.el-textarea) {
  width: 966px;
  margin: 0 20px 0 10px;
}
:deep(.el-table) {
  width: 966px;
  margin: 0 20px 0 10px;
}
</style>
