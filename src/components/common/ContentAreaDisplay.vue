<template>
  <div class="content-area-display">
    <!-- <el-skeleton :rows="5" animated /> -->
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumb"
        :key="index"
        :to="item.path">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 内容组件 -->
    <transition :name="transitionName">
      <component
        :is="Component"
        :transferData="transferData"
        @changeComponent="changeComponent"
        class="cus-component"></component>
    </transition>
  </div>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: 'ContentAreaDisplay',
  setup() {
    const state = reactive({
      breadcrumb: [
        {
          name: '首页',
          path: '/home',
        },
        {
          name: 'test1',
          path: '/home',
        },
      ],
      transitionName: 'slide-left',
      Component: 'Index',
      transferData: null,
    });

    const changeComponent = (params: any) => {
      state.Component = params.to;
      state.transferData = params.data;
    };

    return {
      ...toRefs(state),
      changeComponent,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-area-display {
  grid-row-start: arvr2;
  grid-row-end: arvr3;
  grid-column-start: arvc2;
  grid-column-end: arvc3;
  display: grid;
  grid-template-rows: [cadr1] 30px [cadr2] auto [cadr3];
  .breadcrumb {
    border-bottom: 1px solid #e5e5e5;
    background-color: #d2eefd;
    line-height: 30px;
    padding: 0 0 0 12px;
  }
  .cus-component {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
