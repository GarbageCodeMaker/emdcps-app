<template>
  <div>
    <!-- 用户信息一级弹框 -->
    <el-dialog
      :model-value="dialogShowControl"
      title="用户信息"
      width="30%"
      destroy-on-close
      :modal="true"
      @close="close">
      <div class="user-info-panel">
        <!-- 姓名 -->
        <div>
          <label for="userName">姓名:</label>
          <el-input
            id="userName"
            v-model="userInfoData.userName"
            :readonly="true"></el-input>
        </div>
        <!-- 登录账号 -->
        <div>
          <label for="account">登录账号:</label>
          <el-input
            id="account"
            v-model="userInfoData.account"
            :readonly="true"></el-input>
        </div>
        <!-- 用户组 -->
        <div>
          <label for="userGroup">用户组:</label>
          <el-input
            id="userGroup"
            v-model="userInfoData.userGroup"
            :readonly="true"></el-input>
        </div>
        <!-- 用户类型 -->
        <div>
          <label for="userType">用户类型:</label>
          <el-input
            id="userType"
            v-model="userInfoData.userType"
            :readonly="true"></el-input>
        </div>
        <!-- 手机号码 -->
        <div>
          <label for="telephone">手机号码:</label>
          <el-input
            id="telephone"
            v-model="userInfoData.telephone"
            :readonly="true"></el-input>
        </div>
        <!-- 职位 -->
        <div>
          <label for="position">职位:</label>
          <el-input
            id="position"
            v-model="userInfoData.position"
            :readonly="true"></el-input>
        </div>
        <!-- 主要职责 -->
        <div class="main-duty-position">
          <label for="mainDuty">主要职责:</label>
          <el-input
            id="mainDuty"
            v-model="userInfoData.mainDuty"
            type="textarea"
            :rows="2"
            :readonly="true"></el-input>
        </div>
        <!-- 用户权限 -->
        <div class="user-authority-position">
          <label for="userAuthority">用户权限:</label>
          <el-table
            :data="userInfoData.userAuthorityTableData"
            border
            height="200"
            size="mini">
            <el-table-column
              type="index"
              label="序号"
              header-align="center"
              align="center"></el-table-column>
            <el-table-column
              prop="ownedProject"
              label="所属工程"
              header-align="center"
              align="center"></el-table-column>
            <el-table-column
              prop="authorityName"
              label="权限名称"
              header-align="center"
              align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="userInfoApply">用户信息申请</el-button>
          <el-button @click="close">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 用户信息二级弹框 -->
    <el-dialog
      v-model="userInfoChangeDialog"></el-dialog>
  </div>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: 'UserInfo',
  model: {
    prop: 'dialogShowControl',
    event: 'dialogShowChange',
  },
  props: {
    dialogShowControl: {
      type: Boolean,
    },
  },
  emits: ['dialogShowChange'],
  setup(props, context) {
    const state = reactive({
      userInfoData: {
        userName: '',
        account: '',
        userGroup: '',
        userType: '',
        telephone: '',
        position: '',
        mainDuty: '',
        userAuthorityTableData: [{}],
      },
    });
    // 用户信息申请事件
    const userInfoApply = () => {
      context.emit('dialogShowChange', false);
    };
    // 修改密码弹框关闭事件
    const close = () => {
      context.emit('dialogShowChange', false);
      console.log('close');
    };

    return {
      ...toRefs(state),
      userInfoApply,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-info-panel {
  display: grid;
  grid-template-rows: [uipr1] 40px [uipr2] 40px [uipr3] 40px [uipr4] 80px [uipr5] 200px [uipr6];
  grid-template-columns: [uipc1] 50% [uipc2] 50% [uipc3];
  row-gap: 20px;
  height: 300px;
  place-items: center end;
  overflow-x: hidden;
  overflow-y: auto;
  .main-duty-position {
    grid-row-start: uipr4;
    grid-row-end: uipr5;
    grid-column-start: uipc1;
    grid-column-end: uipc3;
  }
  .user-authority-position {
    grid-row-start: uipr5;
    grid-row-end: uipr6;
    grid-column-start: uipc1;
    grid-column-end: uipc3;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-input) {
  width: 250px;
  margin: 0 20px 0 10px;
  font-size: 12px;
}
:deep(.el-input__inner) {
  height: 26px;
  line-height: 26px;
}
:deep(.el-textarea) {
  width: 611px;
  margin: 0 20px 0 10px;
}
:deep(.el-table) {
  width: 611px;
  margin: 0 20px 0 10px;
}
</style>
