<template>
  <el-dialog
    :model-value="dialogShowControl"
    title="修改密码"
    width="30%"
    destroy-on-close
    :modal="true"
    @close="close">
    <div class="edit-password-panel">
      <!-- 原密码 -->
      <div>
        <label>原密码:</label>
        <el-input
          :value="oldPassword"
          type="password"
          :show-password="true"
          :readonly="true"></el-input>
      </div>
      <!-- 新密码 -->
      <div>
        <label>新密码:</label>
        <el-input
          v-model="newPassword"
          type="password"
          :show-password="true"></el-input>
      </div>
      <!-- 确认密码 -->
      <div>
        <label>确认密码:</label>
        <el-input
          v-model="confirmPassword"
          type="password"
          :show-password="true"></el-input>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="determine">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: 'EditPassword',
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
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });

    // 修改密码弹框关闭事件
    const close = () => {
      context.emit('dialogShowChange', false);
      console.log('close');
    };
    // 修改密码弹框确定保存事件
    const determine = () => {
      // TODO axios请求
      console.log('determine');
      context.emit('dialogShowChange', false);
    };
    // 修改密码弹框取消事件
    const cancel = () => {
      context.emit('dialogShowChange', false);
      console.log('cancel');
    };

    return {
      ...toRefs(state),
      determine,
      cancel,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.edit-password-panel {
  display: grid;
  grid-template-rows: repeat(3, 33.33%);
  place-items: center end;
  height: 150px;
  div {
    width: 80%;
    margin: 0 auto;
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-input) {
  width: 350px;
  margin: 0 20px 0 10px;
  font-size: 12px;
}
:deep(.el-input__inner) {
  height: 26px;
  line-height: 26px;
}
</style>
