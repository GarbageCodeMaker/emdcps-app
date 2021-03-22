<template>
  <div class="statistics-details-panel">
    <!-- 标题组件 -->
    <component
      :is="titleComponent"
      titleType="hiddenDangerDetail"
      titleHeight="40px"
      @toolTarget="toolTarget">
      <template v-slot:default>隐患统计详情</template>
      <template v-slot:tool>返回</template>
    </component>
    <!-- 统计表格 -->
    <div class="table-card">
      <h4>隐患统计表</h4>
      <el-table
        :data="transferData"
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
    <!-- 数据统计图 -->
    <div class="echarts-card">
      <div
        v-for="(item, index) in transferData"
        :key="index"
        :id="`chart-${index}`"
        class="charts-item"></div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent,
  markRaw,
  onMounted,
  reactive,
  toRefs,
} from 'vue';
import * as echarts from 'echarts';

// 导入组件函数
function importComponent(): object {
  const cusTitle = defineAsyncComponent(() => import('../common/CusTitle.vue'));

  return cusTitle;
}

export default {
  name: 'StatisticsDetails',
  props: {
    transferData: {
      type: Array,
    },
  },
  emits: ['changeComponent'],
  setup(props, context) {
    const cusTitle = importComponent();
    const markCusTitle = markRaw(cusTitle);

    const state = reactive({
      titleComponent: markCusTitle,
    });

    // 自定义标题栏组件点击按钮事件
    const toolTarget = () => {
      const params = {
        // hiddenDangerTableData: state.hiddenDangerTableData,
        to: 'Index',
      };
      context.emit('changeComponent', params);
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
    const echartInit = () => {
      const chartSourceData = props.transferData as Array<object>;
      chartSourceData.forEach((item, index) => {
        const chartItem = echarts.init(document.getElementById(`chart-${index}`) as HTMLElement);
        const option = {
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          },
          yAxis: {
            type: 'value',
          },
          series: [{
            data: [150, 230, 224, 218, 135, 147, 260, 177, 192, 202, 123, 43],
            type: 'line',
          }],
        };

        chartItem.setOption(option);
      });
    };

    // 挂载之后
    onMounted(() => {
      echartInit();
    });

    return {
      ...toRefs(state),
      hiddenDangerSummaries,
      toolTarget,
      echartInit,
    };
  },
};
</script>

<style lang="scss" scoped>
.statistics-details-panel {
  display: grid;
  grid-template-rows: [sdpr1] 40px [sdpr2] 245px [sdpr3] auto [sdpr4];
  row-gap: 20px;
  place-items: center center;
  .table-card {
    width: 75%;
    box-shadow: 3px 3px 6px 0px #ddd;
    h4 {
      text-align: center;
      font-size: 20px;
      font-weight: normal;
      height: 35px;
    }
  }
  .echarts-card {
    width: 75%;
    box-shadow: 3px 3px 6px 0px #ddd;
    .charts-item {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
