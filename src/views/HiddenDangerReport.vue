<template>
  <div class="hidden-danger-report-panel">
    <!-- Tree -->
    <article class="tree-panel">
      <!-- 树标题 -->
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
        <template v-slot:default>隐患分类</template>
        <template v-slot:tool>
          <transition>
            <i v-if="!isFold" class="el-icon-caret-top"></i>
            <i v-else class="el-icon-caret-bottom"></i>
          </transition>
        </template>
      </component>
    </article>
    <!-- Table -->
    <section class="table-panel"></section>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent, markRaw, onMounted, reactive, toRefs,
} from 'vue';
import Data from '../util/data';

function importComponent(): object {
  const cusTitle = defineAsyncComponent(() => import('../components/common/CusTitle.vue'));

  const markCusTitle = markRaw(cusTitle);

  return { markCusTitle };
}

export default {
  name: 'HiddenDangerReport',
  setup() {
    const components: any = importComponent();
    const state = reactive({
      titleComponent: components.markCusTitle,
      hiddenDangerReportTreeData: [{}],
      hiddenDangerReportTreeDataProps: {
        label: 'label',
        children: 'children',
      },
      isFold: false,
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

    // 挂载之后
    onMounted(() => {
      getHiddenDangerReportTreeData();
    });

    return {
      ...toRefs(state),
      handleTreeNode,
      toolTarget,
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
    grid-row-start: hdrpr1;
    grid-row-end: hdrpr2;
    grid-column-start: hdrpc2;
    grid-column-end: hdrpc3;
  }
  .table-panel {
    grid-row-start: hdrpr2;
    grid-row-end: hdrpr3;
    grid-column-start: hdrpc2;
    grid-column-end: hdrpc3;
  }
}
</style>
