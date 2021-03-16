<template>
  <!-- 横向导航条 -->
  <el-menu
    mode="horizontal"
    background-color="#0082c9"
    text-color="#fff"
    active-text-color="#6ad4c0"
    @select="handleSelect"
    class="el-menu-demo">
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
  </el-menu>
  <!-- 左侧导航条 -->
  <el-menu
    default-active="1"
    :collapse="false"
    class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <i class="el-icon-setting"></i>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <template #title>Nav1</template>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <template #title>Nav2</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      items: [],
    });
    const handleSelect = () => {
      console.log('select');
    };

    return {
      ...toRefs(state),
      handleSelect,
    };
  },
};
</script>

<style lang="scss" scoped>
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
  float: right !important;
}
.font-white {
  color: #fff !important;
}
.avatar {
  margin-right: 10px;
}
</style>
