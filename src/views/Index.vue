<template>
  <div class="index-page">
    <!-- earth -->
    <div id="earth"></div>
    <!-- tabs -->
    <el-tabs type="border-card">
      <el-tab-pane label="公司简介"></el-tab-pane>
      <el-tab-pane label="快轨新闻"></el-tab-pane>
      <el-tab-pane label="通知公告"></el-tab-pane>
      <el-tab-pane label="最新风险视频"></el-tab-pane>
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
          titleType="riskSource"
          @toolTarget="toolTarget">
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
  defineAsyncComponent, markRaw, reactive, toRefs,
} from 'vue';

function importComponent(): object {
  const cusTitle = defineAsyncComponent(() => import('../components/CusTitle.vue'));

  return cusTitle;
}

export default {
  name: 'Index',
  emits: ['changeComponent'],
  setup(props, context) {
    const cusTitle = importComponent();
    const markCusTitle = markRaw(cusTitle);

    const state = reactive({
      titleComponent: markCusTitle,
      hiddenDangerTableData: [
        {
          line: '11号线',
          oneLevel: 0,
          twoLevel: 39,
          treeLevel: 2320,
          fourLevel: 2202,
          sum: 4561,
        },
        {
          line: '16号线',
          oneLevel: 0,
          twoLevel: 1038,
          treeLevel: 18781,
          fourLevel: 13455,
          sum: 33274,
        },
        {
          line: '22号线',
          oneLevel: 0,
          twoLevel: 2,
          treeLevel: 53,
          fourLevel: 42,
          sum: 97,
        },
        {
          line: '机场西延',
          oneLevel: 0,
          twoLevel: 20,
          treeLevel: 490,
          fourLevel: 490,
          sum: 1000,
        },
        {
          line: '平西府',
          oneLevel: 0,
          twoLevel: 10,
          treeLevel: 212,
          fourLevel: 137,
          sum: 359,
        },
        {
          line: '16号线',
          oneLevel: 0,
          twoLevel: 37,
          treeLevel: 273,
          fourLevel: 149,
          sum: 459,
        },
      ],
      preliminaryTableData: [
        {
          line: '11号线',
          redLevel: 0,
          orangeLevel: 0,
          yellowLevel: 0,
          sum: 0,
        },
      ],
      riskSourceTableData: [
        {
          line: '11号线',
          notPass: 0,
          passing: 0,
          passed: 0,
          sum: 0,
        },
      ],
    });
    // 自定义标题栏组件点击按钮事件
    const toolTarget = (target: string) => {
      switch (target) {
        case 'hiddenDanger': {
          const params = {
            hiddenDangerTableData: state.hiddenDangerTableData,
            to: 'StatisticsDetails',
          };
          context.emit('changeComponent', params);
          break;
        }
        case 'preliminary': {
          break;
        }
        case 'riskSource': {
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
