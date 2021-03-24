<template>
  <div class="hidden-danger-report-panel">
    <!-- Tree -->
    <article class="tree-panel">
      <component
        :is="titleComponent"
        titleType="hiddenDangerSort">
        <template v-slot:default>隐患分类</template>
      </component>
    </article>
    <!-- Search -->
    <article class="search-panel"></article>
    <!-- Table -->
    <section class="table-panel"></section>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent, markRaw, reactive, toRefs,
} from 'vue';

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
    });

    return {
      ...toRefs(state),
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
