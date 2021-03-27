<template>
  <div class="hidden-danger-report-panel">
    <!-- Tree -->
    <article class="tree-panel">
      <!-- 隐患分类树标题 -->
      <component
        :is="titleComponent"
        titleType="hiddenDangerSort"
        titleHeight="27px"
        titleBGColor="#5090c1">
        <template v-slot:default>隐患分类</template>
      </component>
      <!-- 树型数据 -->
      <el-tree
        :data="hiddenDangerReportTreeData"
        :props="hiddenDangerReportTreeDataProps"
        :highlight-current="true"
        empty-text="暂无数据"
        @node-click="handleTreeNode"></el-tree>
    </article>
    <!-- Search -->
    <article class="search-panel">
      <!-- 搜索栏标题 -->
      <component
        :is="titleComponent"
        titleType="hiddenDangerIndexQuery"
        @toolTarget="toolTarget">
        <template v-slot:default>隐患指标查询</template>
        <template v-slot:tool>
          <!-- 自定义动画过渡组件进行包裹 -->
          <component :is="animateComponent">
            <i
              v-if="!isFold"
              key="iconTop"
              class="el-icon-caret-top"></i>
            <i
              v-else
              key="iconBottom"
              class="el-icon-caret-bottom"></i>
          </component>
        </template>
      </component>
      <!-- 搜索栏内容 -->
      <section class="search-content">
        <!-- 隐患级别 -->
        <div>
          <label for="hiddenDangerLevel">隐患级别:</label>
          <el-select
            id="hiddenDangerLevel"
            v-model="searchFormData.hiddenDangerLevel"
            placeholder="请选择隐患级别">
            <el-option
              v-for="(item, index) in hiddenDangerLevels"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <!-- 排查项目 -->
        <div>
          <label for="checkItem">排查项目:</label>
          <el-input
            id="checkItem"
            v-model="searchFormData.checkItem"
            placeholder="请输入排查项目"></el-input>
        </div>
        <!-- 排查内容 -->
        <div>
          <label for="checkContent">排查内容:</label>
          <el-input
            id="checkContent"
            v-model="searchFormData.checkContent"
            placeholder="请输入排查内容"></el-input>
        </div>
        <!-- 整改期限 -->
        <div>
          <label for="rectificationPeriod">整改期限:</label>
          <el-date-picker
            v-model="searchFormData.rectificationPeriod"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <!-- 扣分 -->
        <div>
          <label for="deductionRange">扣分:</label>
          <div class="deduction-range-item">
            <el-input-number
              v-model="searchFormData.deductionRangeStart"
              :min="0"
              :max="10"
              controls-position="right"
              placeholder="起始分数"></el-input-number>
            <span class="range-separator">至</span>
            <el-input-number
              v-model="searchFormData.deductionRangeEnd"
              :min="1"
              :max="10"
              controls-position="right"
              placeholder="终止分数"></el-input-number>
          </div>
        </div>
        <!-- 按钮 -->
        <div>
          <div class="search-tool-btn">
            <el-button
              type="primary"
              :loading="searchQuerying"
              :disabled="searchQuerying"
              @click="searchQuery">查询</el-button>
            <el-button
              type="info"
              @click="searchReset">重置</el-button>
          </div>
        </div>
      </section>
    </article>
    <!-- Table -->
    <section class="table-panel">
      <!-- 隐患指标列表标题 -->
      <component
        :is="titleComponent"
        titleType="hiddenDangerIndexTable">
        <template v-slot:default>隐患指标列表</template>
      </component>
      <!-- 隐患指标列表 -->
      <el-table
        :data="hiddenDangerIndexTableData"
        stripe
        border>
        <el-table-column
          type="selection"
          width="55"
          align="center"></el-table-column>
        <el-table-column type="index" align="center"></el-table-column>
        <el-table-column
          prop="firstLevelSort"
          label="一级分类"
          align="center"></el-table-column>
        <el-table-column
          prop="secondLevelSort"
          label="二级分类"
          align="center"></el-table-column>
        <el-table-column
          prop="hiddenDangerLevel"
          label="隐患级别"
          align="center"></el-table-column>
        <el-table-column
          prop="checkItem"
          label="排查项目"
          align="center"
          show-overflow-tooltip></el-table-column>
        <el-table-column
          prop="checkContent"
          label="排查内容"
          align="center"
          show-overflow-tooltip></el-table-column>
        <el-table-column
          prop="deductionAmount"
          label="扣款金额"
          align="center"></el-table-column>
        <el-table-column
          prop="rectificationPeriod"
          label="整改期限(天)"
          align="center"></el-table-column>
        <el-table-column
          prop="deductionFraction"
          label="扣分"
          align="center"></el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent, markRaw, onBeforeMount, onMounted, reactive, toRefs,
} from 'vue';
import Data from '../util/data';

function importComponent(): object {
  const cusTitle = defineAsyncComponent(() => import('../components/common/CusTitle.vue'));
  const cusAnimate = defineAsyncComponent(() => import('../components/common/CusAnimate.vue'));

  const markCusTitle = markRaw(cusTitle);
  const markCusAnimate = markRaw(cusAnimate);

  return { markCusTitle, markCusAnimate };
}

export default {
  name: 'HiddenDangerReport',
  setup() {
    const components: any = importComponent();
    const state = reactive({
      titleComponent: components.markCusTitle,
      animateComponent: components.markCusAnimate,
      hiddenDangerReportTreeData: [{}],
      hiddenDangerReportTreeDataProps: {
        label: 'label',
        children: 'children',
      },
      isFold: false,
      searchFormData: {
        hiddenDangerLevel: '',
        checkItem: '',
        checkContent: '',
        rectificationPeriod: '',
        deductionRangeStart: undefined,
        deductionRangeEnd: undefined,
      },
      hiddenDangerLevels: [{}],
      searchQuerying: false,
      hiddenDangerIndexTableData: [{}],
    });

    // 隐患上报树型数据查询事件
    const getHiddenDangerReportTreeData = () => {
      // TODO axios请求
      state.hiddenDangerReportTreeData = Data.hiddenDangerReportTreeData;
    };
    // 隐患上报树节点点击事件
    const handleTreeNode = () => {
      // TODO axios请求
      console.log('handleTreeNode');
    };
    // 自定义标题栏组件点击按钮事件
    const toolTarget = (target: string) => {
      switch (target) {
        case 'hiddenDangerIndexQuery': {
          state.isFold = !state.isFold;
          break;
        }
        default: break;
      }
    };
    // 隐患级别选项数据查询事件
    const getHiddenDangerLevels = () => {
      // TODO axios请求
      state.hiddenDangerLevels = Data.hiddenDangerLevels;
    };
    // 隐患上报搜索栏查询事件
    const searchQuery = () => {
      // TODO axios请求
      state.searchQuerying = true;
    };
    // 隐患上报搜索栏重置事件
    const searchReset = () => {
      state.searchFormData.hiddenDangerLevel = '';
      state.searchFormData.checkItem = '';
      state.searchFormData.checkContent = '';
      state.searchFormData.rectificationPeriod = '';
      state.searchFormData.deductionRangeStart = undefined;
      state.searchFormData.deductionRangeEnd = undefined;
    };
    // 隐患指标列表查询数据事件
    const getHiddenDangerIndexTableData = () => {
      state.hiddenDangerIndexTableData = Data.hiddenDangerIndexTableData;
    };

    // 挂载之前
    onBeforeMount(() => {
      // 为解决el-select组件中label&value取值为undefined的问题
      getHiddenDangerLevels();
    });
    // 挂载之后
    onMounted(() => {
      getHiddenDangerReportTreeData();
      getHiddenDangerIndexTableData();
    });

    return {
      ...toRefs(state),
      handleTreeNode,
      toolTarget,
      searchQuery,
      searchReset,
      getHiddenDangerIndexTableData,
    };
  },
};
</script>

<style lang="scss" scoped>
.hidden-danger-report-panel {
  display: grid;
  grid-template-rows: [hdrpr1] 130px [hdrpr2] auto [hdrpr3];
  grid-template-columns: [hdrpc1] 250px [hdrpc2] auto [hdrpc3];
  row-gap: 20px;
  column-gap: 20px;
  padding: 8px 20px 0;
  .tree-panel {
    display: grid;
    grid-template-rows: 27px auto;
    row-gap: 20px;
    grid-row-start: hdrpr1;
    grid-row-end: hdrpr3;
    grid-column-start: hdrpc1;
    grid-column-end: hdrpc2;
  }
  .search-panel {
    display: grid;
    grid-template-rows: 20px auto;
    grid-row-start: hdrpr1;
    grid-row-end: hdrpr2;
    grid-column-start: hdrpc2;
    grid-column-end: hdrpc3;
    .search-content {
      display: grid;
      grid-template-rows: 50% 50%;
      grid-template-columns: repeat(3, 33.33%);
      place-items: center end;
      > div {
        display: grid;
        grid-template-columns: [hdrpspscdc1] 20% [hdrpspscdc2] 80% [hdrpspscdc3];
        place-items: center end;
        width: 80%;
        margin: 0 auto;
        .deduction-range-item {
          width: 95%;
          .range-separator {
            margin: 0 4% 0 4%;
          }
        }
        .search-tool-btn {
          grid-column-start: hdrpspscdc2;
          grid-column-end: hdrpspscdc3;
        }
      }
    }
  }
  .table-panel {
    grid-row-start: hdrpr2;
    grid-row-end: hdrpr3;
    grid-column-start: hdrpc2;
    grid-column-end: hdrpc3;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-select) {
  width: 95%;
}
:deep(.el-select .el-input) {
  width: 100%;
}
:deep(.el-input) {
  width: 95%;
}
:deep(.el-date-editor) {
  width: 95%;
}
</style>
