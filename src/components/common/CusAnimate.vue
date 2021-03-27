<template>
  <transition :name="animateName" :mode="animateMode">
      <slot></slot>
  </transition>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: 'CusAnimate',
  props: {
    animateName: {
      type: String,
      default: 'fade',
    },
    animateMode: {
      type: String,
      default: 'out-in',
    },
  },
  setup(props) {
    const state = reactive({
      cusAnimateName: props.animateName,
      cusAnimateMode: props.animateMode,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
