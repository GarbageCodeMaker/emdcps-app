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
      <div>
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
          border
          show-summary>
          <el-table-column
            prop="line"
            label="线路"
            width=""></el-table-column>
          <el-table-column
            prop="oneLevel"
            label="一级"
            width=""></el-table-column>
          <el-table-column
            prop="twoLevel"
            label="二级"
            width=""></el-table-column>
          <el-table-column
            prop="treeLevel"
            label="三级"
            width=""></el-table-column>
          <el-table-column
            prop="fourLevel"
            label="四级"
            width=""></el-table-column>
          <el-table-column
            prop="sum"
            label="合计"
            width=""></el-table-column>
        </el-table>
      </div>
      <!-- 预警统计表 -->
      <div></div>
      <!-- 正在通过风险源统计表 -->
      <div></div>
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
  setup() {
    const cusTitle = importComponent();
    const markCusTitle = markRaw(cusTitle);

    const state = reactive({
      titleComponent: markCusTitle,
      hiddenDangerTableData: [
        {
          line: '',
          oneLevel: '',
          twoLevel: '',
          treeLevel: '',
          fourLevel: '',
          sum: '',
        },
      ],
    });
    // 自定义标题栏组件点击按钮事件
    const toolTarget = (target: string) => {
      console.log(target);
    };
    // 隐患上报表格合计行方法
    const hiddenDangerSummaries = (param: object): Array<string> => {
      const { columns, data }: any = param;
      const sums: Array<string> = [];

      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计';
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => Number.isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(value)) return prev + curr;
            return prev;
          }, 0);
          sums[index] = `${sums[index]} 元`;
        } else {
          sums[index] = 'N/A';
        }
      });
      return sums;
    };

    return {
      ...toRefs(state),
      toolTarget,
      hiddenDangerSummaries,
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
    grid-template-columns: repeat(3, 33.33%);
  }
}
</style>
