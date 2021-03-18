<template>
  <div class="login-page">
    <header>
      <el-image
        :src="require('@/assets/images/logo.png')"
        fit="fill"
        class="logo"></el-image>
      <h1 class="title">工程建设期应急管理平台</h1>
    </header>
    <section>
      <div class="login-panel">
        <h2 class="title">用户登录</h2>
        <el-form
          ref="form"
          :model="loginForm">
          <el-form-item>
            <el-input
              v-model="loginForm.userName"
              prefix-icon="el-icon-user"
              :clearable="true"
              placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="el-icon-unlock"
              :clearable="true"
              :show-password="true"
              placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="loginForm.rememberMe" label="记住我"></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="mini"
              :loading="loginLoading"
              :disabled="loginDisabled"
              @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <div class="blank-page"></div>
    <footer></footer>
  </div>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: 'Login',
  setup() {
    const state = reactive({
      loginForm: {
        userName: '',
        password: '',
        rememberMe: false,
      },
      loginLoading: false,
      loginDisabled: false,
    });

    const handleLogin = () => {
      state.loginLoading = true;
      state.loginDisabled = true;
      // TODO
      console.log('登录');
    };

    return {
      ...toRefs(state),
      handleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin titleClass() {
  font-weight: bolder;
  color: #222;
}

.login-page {
  display: grid;
  grid-template-rows: [lpr1] 100px [lpr2] 420px [lpr3] auto [lpr4] 60px [lpr5];
  height: 100vh;
  align-items: center;
  header {
    display: grid;
    grid-template-columns: [lhc1] 150px [lhc2] 352px [lhc3] auto [lhc4];
    column-gap: 20px;
    height: 50px;
    line-height: 50px;
    .logo {
      margin-left: 20px;
    }
    .title {
      @include titleClass();
    }
  }
  section {
    display: grid;
    grid-template-columns: [lsc1] auto [lsc2] 400px [lsc3] 228.36px [lsc4];
    align-items: center;
    height: 420px;
    background: {
      image: url('../assets/images/login_bg.png');
    }
    .login-panel {
      display: grid;
      grid-template-rows: 65px auto;
      align-items: center;
      justify-items: center;
      grid-column-start: lsc2;
      grid-column-end: lsc3;
      height: 340px;
      padding: 20px 50px 20px 50px;
      background: #fff;
      border-radius: 3px;
      .title {
        @include titleClass();
      }
    }
  }
  footer {
    grid-row-start: lpr4;
    grid-row-end: lpr5;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-input__inner) {
  height: 26px;
}
:deep(.el-button, .el-button--primary) {
  width: 100%;
  background-color: #005ca7;
  border: 2px solid #005ca7;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 5px;
}
</style>
