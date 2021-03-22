<template>
  <el-dialog
    :model-value="dialogShowControl"
    title="用户信息"
    width="30%"
    destroy-on-close
    :modal="true"
    @close="close">
    <div></div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="userInfoApply">用户信息申请</el-button>
        <el-button @click="close">关闭</el-button>
      </span>
    </template>
  </el-dialog>
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
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
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

</style>
