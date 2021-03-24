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
          <template #title>{{ item.navName }}</template>
        </el-menu-item>
        <el-submenu v-else :index="item.index">
          <template #title>
            <span>{{ item.navName }}</span>
          </template>
          <el-menu-item
            v-for="(child, i) in item.children"
            :key="i"
            :index="child.index">
            <template #title>{{ child.navName }}</template>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <!-- 页面主体内容展示区 -->
    <component :is="contentAreaDisplayComponent" ref="contentAreaDisplayRef"></component>
    <!-- 导航栏弹出框组件 -->
    <component
      :is="navDialogComponent"
      :dialogShowControl="dialogShowControl"
      @dialogShowChange="dialogShowChange"></component>
  </div>
</template>

<script lang="ts" scoped>
import {
  defineAsyncComponent, markRaw, onMounted, reactive, Ref, ref, toRefs,
} from 'vue';
import Data from '../util/data';

function importComponent(): object {
  const contentAreaDisplay = defineAsyncComponent(() => import('../components/common/ContentAreaDisplay.vue'));
  const editPassword = defineAsyncComponent(() => import('../components/home/EditPassword.vue'));
  const userInfo = defineAsyncComponent(() => import('../components/home/UserInfo.vue'));

  const markContentAreaDisplay = markRaw(contentAreaDisplay);
  const markEditPassword = markRaw(editPassword);
  const markUserInfo = markRaw(userInfo);

  return { markContentAreaDisplay, markEditPassword, markUserInfo };
}

export default {
  name: 'Home',
  setup() {
    const components: any = importComponent();
    const state = reactive({
      transitionName: 'slide-left',
      contentAreaDisplayComponent: components.markContentAreaDisplay,
      navDialogComponent: components.markEditPassword,
      dialogShowControl: false,
      bellNum: 0,
      leftNavItems: [{}],
    });
    // 左侧导航栏数据查询事件
    const getLeftNavItemsData = () => {
      // TODO axios请求
      state.leftNavItems = Data.leftNavItems;
    };
    // 头部导航栏选择事件
    const headNavSelect = (index: string) => {
      switch (index) {
        case '3-1': {
          state.navDialogComponent = components.markEditPassword;
          state.dialogShowControl = true;
          break;
        }
        case '3-2': {
          state.navDialogComponent = components.markUserInfo;
          state.dialogShowControl = true;
          break;
        }
        default: break;
      }
    };
    const dialogShowChange = () => {
      state.dialogShowControl = false;
    };
    // 左侧导航栏选择事件
    const contentAreaDisplayRef: Ref<any> = ref('contentAreaDisplayRef');
    const leftNavSelect = (index: string) => {
      const params = {
        data: null,
        to: index,
      };
      contentAreaDisplayRef.value.changeComponent(params);
    };

    // mounted
    onMounted(() => {
      getLeftNavItemsData();
    });

    return {
      ...toRefs(state),
      headNavSelect,
      leftNavSelect,
      dialogShowChange,
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
    overflow-x: hidden;
    overflow-y: auto;
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
