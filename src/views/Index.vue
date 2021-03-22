<template>
  <div class="index-page">
    <!-- earth -->
    <div id="earth"></div>
    <!-- tabs -->
    <el-tabs type="border-card">
      <el-tab-pane label="公司简介">
        <span>{{ companyProfile }}</span>
      </el-tab-pane>
      <el-tab-pane label="快轨新闻"></el-tab-pane>
      <el-tab-pane label="通知公告">
        <component
          v-for="(item, index) in announcementItems"
          :key="index"
          :is="announcementComponent"
          :announcementData="item.announcementData"></component>
      </el-tab-pane>
      <el-tab-pane label="最新风险事件">
        <component
          v-for="(item, index) in riskEventItems"
          :key="index"
          :is="riskEventComponent"
          :riskEventData="item.riskEventData"></component>
      </el-tab-pane>
    </el-tabs>
    <!-- tables -->
    <div class="tables-panel">
      <!-- 隐患统计表 -->
      <div class="table-card">
        <component
          :is="titleComponent"
          titleType="hiddenDanger"
          @toolTarget="toolTarget">
          <template v-slot:default>隐患统计</template>
          <template v-slot:tool>高级查看</template>
        </component>
        <el-table
          :data="hiddenDangerTableData"
          :summary-method="hiddenDangerSummaries"
          height="210"
          size="mini"
          border
          show-summary>
          <el-table-column
            prop="line"
            label="线路"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="oneLevel"
            label="一级"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="twoLevel"
            label="二级"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="treeLevel"
            label="三级"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="fourLevel"
            label="四级"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="sum"
            label="合计"
            header-align="center"
            align="center"></el-table-column>
        </el-table>
      </div>
      <!-- 预警统计表 -->
      <div class="table-card">
        <component
          :is="titleComponent"
          titleType="preliminary"
          @toolTarget="toolTarget">
          <template v-slot:default>预警统计</template>
          <template v-slot:tool>高级查看</template>
        </component>
        <el-table
          :data="preliminaryTableData"
          :summary-method="preliminarySummaries"
          :header-cell-class-name="preliminaryHeadCellStyle"
          height="210"
          size="mini"
          border
          show-summary>
          <el-table-column
            prop="line"
            label="线路"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="redLevel"
            label="红色"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="orangeLevel"
            label="橙色"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="yellowLevel"
            label="黄色"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="sum"
            label="合计"
            header-align="center"
            align="center"></el-table-column>
        </el-table>
      </div>
      <!-- 正在通过风险源统计表 -->
      <div class="table-card">
        <component
          :is="titleComponent"
          titleType="riskSource">
          <template v-slot:default>正在通过风险源统计</template>
        </component>
        <el-table
          :data="riskSourceTableData"
          :summary-method="riskSourceSummaries"
          height="210"
          size="mini"
          border
          show-summary>
          <el-table-column
            prop="line"
            label="线路"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="notPass"
            label="未通过"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="passing"
            label="正通过"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="passed"
            label="已通过"
            header-align="center"
            align="center"></el-table-column>
          <el-table-column
            prop="sum"
            label="合计"
            header-align="center"
            align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent, markRaw, onMounted, reactive, toRefs,
} from 'vue';
import Data from '../util/data';

function importComponent(): object {
  const cusTitle = defineAsyncComponent(() => import('../components/common/CusTitle.vue'));
  const riskEvent = defineAsyncComponent(() => import('../components/index/RiskEvent.vue'));
  const announcement = defineAsyncComponent(() => import('../components/index/Announcement.vue'));

  const markCusTitle = markRaw(cusTitle);
  const markRiskEvent = markRaw(riskEvent);
  const markAnnouncement = markRaw(announcement);

  return { markCusTitle, markRiskEvent, markAnnouncement };
}

export default {
  name: 'Index',
  emits: ['changeComponent'],
  setup(props, context) {
    const components: any = importComponent();
    const state = reactive({
      companyProfile: '',
      announcementItems: [{}],
      riskEventItems: [{}],
      announcementComponent: components.markAnnouncement,
      riskEventComponent: components.markRiskEvent,
      titleComponent: components.markCusTitle,
      hiddenDangerTableData: [{}],
      preliminaryTableData: [{}],
      riskSourceTableData: [{}],
    });
    // 隐患统计表格数据查询事件
    const getHiddenDangerTableData = () => {
      // TODO axios请求
      state.hiddenDangerTableData = Data.hiddenDangerTableData;
    };
    // 预警统计表格数据查询事件
    const getPreliminaryTableData = () => {
      // TODO axios请求
      state.preliminaryTableData = Data.preliminaryTableData;
    };
    // 风险源统计表格数据查询事件
    const getRiskSourceTableData = () => {
      // TODO axios请求
      state.riskSourceTableData = Data.riskSourceTableData;
    };
    // 最新风险事件数据查询事件
    const getRiskEventItemsData = () => {
      // TODO axios请求
      state.riskEventItems = Data.riskItemsData;
    };
    // 通知公告数据查询事件
    const getAnnouncementItemsData = () => {
      // TODO axios请求
      state.announcementItems = Data.announcementItemsData;
    };
    // 公司简介数据查询事件
    const getCompanyProfileData = () => {
      state.companyProfile = Data.companyProfileData;
    };
    // 自定义标题栏组件点击按钮事件
    const toolTarget = (target: string) => {
      switch (target) {
        case 'hiddenDanger': {
          const params = {
            data: state.hiddenDangerTableData,
            to: 'StatisticsDetails',
          };
          context.emit('changeComponent', params);
          break;
        }
        case 'preliminary': {
          const params = {
            data: state.preliminaryTableData,
            to: 'StatisticsDetails',
          };
          context.emit('changeComponent', params);
          break;
        }
        default: break;
      }
    };
    // 隐患上报表格合计行方法
    const hiddenDangerSummaries = (param: object): Array<string> => {
      const { columns, data }: any = param;
      const sums: Array<string> = [];
      // 遍历所有表格列
      columns.forEach((column, index) => {
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => Number.isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(value)) return prev + curr;
            return prev;
          }, 0);
        } else {
          sums[index] = '合计';
        }
      });
      return sums;
    };
    // 预警统计表格合计行方法
    const preliminarySummaries = (param: object): Array<string> => {
      const { columns, data }: any = param;
      const sums: Array<string> = [];
      // 遍历所有表格列
      columns.forEach((column, index) => {
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => Number.isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(value)) return prev + curr;
            return prev;
          }, 0);
        } else {
          sums[index] = '合计';
        }
      });
      return sums;
    };
    // 正在通过风险源统计表合计行方法
    const riskSourceSummaries = (param: object): Array<string> => {
      const { columns, data }: any = param;
      const sums: Array<string> = [];
      // 遍历所有表格列
      columns.forEach((column, index) => {
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => Number.isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(value)) return prev + curr;
            return prev;
          }, 0);
        } else {
          sums[index] = '合计';
        }
      });
      return sums;
    };
    // 预警信息表头部样式函数
    const preliminaryHeadCellStyle = (row): string => {
      switch (row.columnIndex) {
        case 1: return 'red-level';
        case 2: return 'orange-level';
        case 3: return 'yellow-level';
        default: return '';
      }
    };
    // 挂载之后
    onMounted(() => {
      getHiddenDangerTableData();
      getPreliminaryTableData();
      getRiskSourceTableData();
      getRiskEventItemsData();
      getAnnouncementItemsData();
      getCompanyProfileData();
    });

    return {
      ...toRefs(state),
      toolTarget,
      hiddenDangerSummaries,
      preliminarySummaries,
      riskSourceSummaries,
      preliminaryHeadCellStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  display: grid;
  grid-template-rows: [ipr1] 70% [ipr2] 30% [ipr3];
  grid-template-columns: [ipc1] auto [ipc2] 400px [ipc3];
  .tables-panel {
    grid-row-start: ipr2;
    grid-row-end: ipr3;
    grid-column-start: ipc1;
    grid-column-end: ipc3;
    display: grid;
    grid-template-columns: repeat(3, 32.66%);
    column-gap: 1%;
    .table-card {
      box-shadow: 3px 3px 6px 0px #ddd;
    }
  }
}
</style>

<style lang="scss">
.red-level {
  color: #fff;
  background: #ce1b1b !important;
}
.orange-level {
  color: #fff;
  background: #f38342 !important;
}
.yellow-level {
  color: #fff;
  background-color: #c3e213 !important;
}
</style>

<style lang="scss" scoped>
:deep(.el-tab-pane) {
  overflow-x: hidden;
  overflow-y: auto;
  height: 500px;
}
</style>
