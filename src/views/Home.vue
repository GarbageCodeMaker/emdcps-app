<template>
  <div class="home">
    <!-- 横向导航条 -->
    <el-menu
      mode="horizontal"
      background-color="#0082c9"
      text-color="#fff"
      active-text-color="#6ad4c0"
      @select="headNavSelect"
      class="head-nav">
      <el-menu-item index="1">
        <el-image
          :src="require('@/assets/images/logo.png')"
          fit="fill"
          class="logo"></el-image>
      </el-menu-item>
      <el-menu-item index="2">
        <span class="project-title">工程建设期应急管理平台</span>
      </el-menu-item>
      <el-submenu index="3" class="user">
        <template #title>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            size="large"
            alt="系统管理员"
            class="avatar"></el-avatar>
          <span>欢迎系统管理员您使用系统</span>
        </template>
        <el-menu-item index="3-1">
          <i class="el-icon-s-tools font-white"></i>
          <template #title>密码修改</template>
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-s-custom font-white"></i>
          <template #title>用户信息</template>
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon-s-order font-white"></i>
          <template #title>系统帮助</template>
        </el-menu-item>
        <el-menu-item index="3-4">
          <i class="el-icon-s-order font-white"></i>
          <template #title>管理办法</template>
        </el-menu-item>
        <el-menu-item index="3-5">
          <i class="el-icon-switch-button font-white"></i>
          <template #title>退出</template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="4" class="bell">
        <el-badge :value="bellNum">
            <i class="el-icon-bell bell-icon"></i>
          </el-badge>
      </el-menu-item>
    </el-menu>
    <!-- 左侧导航条 -->
    <el-menu
      :unique-opened="true"
      default-active="1"
      :collapse="false"
      background-color="#0082c9"
      text-color="#fff"
      active-text-color="#6ad4c0"
      @select="leftNavSelect"
      class="left-nav">
      <div v-for="(item, index) in leftNavItems" :key="index">
        <el-menu-item
          v-if="!item.children"
          :index="item.index">
          <i class="el-icon-setting"></i>
          <template #title>{{ item.navName }}</template>
        </el-menu-item>
        <el-submenu v-else :index="item.index">
          <template #title>
            <i class="el-icon-setting"></i>
            <span>{{ item.navName }}</span>
          </template>
          <el-menu-item
            v-for="(child, i) in item.children"
            :key="i"
            :index="child.index">
            <i class="el-icon-setting"></i>
            <template #title>{{ child.navName }}</template>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <!-- 页面主体内容展示区 -->
    <component :is="Component"></component>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent, markRaw, reactive, toRefs,
} from 'vue';

export default {
  name: 'Home',
  setup() {
    const asyncComponents = defineAsyncComponent(() => import('../components/ContentAreaDisplay.vue'));
    const markComponents = markRaw(asyncComponents);

    const state = reactive({
      transitionName: 'slide-left',
      Component: markComponents,
      bellNum: 0,
      leftNavItems: [
        {
          index: '1',
          navName: '首页',
          path: '/home',
        },
        {
          index: '2',
          navName: '测试',
          children: [
            {
              index: '2-1',
              navName: 'test1',
              path: '/test1',
            },
            {
              index: '2-2',
              navName: 'test2',
              path: '/test2',
            },
          ],
        },
      ],
    });
    // 头部导航栏选择事件
    const headNavSelect = (index: string) => {
      console.log(index);
    };
    // 左侧导航栏选择事件
    const leftNavSelect = (index: string, indexPath: Array<string>) => {
      console.log(index);
      console.log(indexPath);
    };

    return {
      ...toRefs(state),
      headNavSelect,
      leftNavSelect,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: [arvr1] 60px [arvr2] auto [arvr3];
  grid-template-columns: [arvc1] 230px [arvc2] auto [arvc3];
  width: 100vw;
  height: 100vh;
  .head-nav {
    grid-row-start: arvr1;
    grid-row-end: arvr2;
    grid-column-start: arvc1;
    grid-column-end: arvc3;
    border-bottom: none;
  }
  .logo {
    img {
      width: 70px;
      text-align: center;
      vertical-align: middle;
    }
  }
  .project-title {
    font-family: 'icomoon', 'Courier New', Courier, monospace;
    font-weight: 500;
    font-size: 25px;
  }
  .user {
    float: right;
  }
  .bell {
    float: right;
    .bell-icon {
      font-size: 20px;
      color: #fff;
    }
  }
  .font-white {
    color: #fff !important;
  }
  .avatar {
    margin-right: 10px;
  }
  .left-nav {
    grid-row-start: arvr2;
    grid-row-end: arvr3;
    grid-column-start: arvc1;
    grid-column-end: arvc2;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-badge__content) {
  border: 1px solid #757474;
}
:deep(.el-badge__content.is-fixed) {
  top: 20px;
  right: 20px;
}
:deep(.el-badge__content--primary) {
  background-color: #ff4040;
}
</style>
