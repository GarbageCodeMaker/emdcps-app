<template>
  <div class="cus-title">
    <span class="text">
      <slot></slot>
    </span>
    <span @click="handleTool" class="tool">
      <slot name="tool"></slot>
    </span>
  </div>
</template>

<script lang="ts" scoped>
import { reactive, toRefs } from 'vue';

export default {
  name: 'CusTitle',
  props: {
    titleType: {
      type: String,
      required: true,
    },
    titleHeight: {
      type: String,
      default: '20px',
    },
  },
  emits: ['toolTarget'],
  setup(props, context) {
    const state = reactive({
      cusTitleH: props.titleHeight,
    });

    const handleTool = () => {
      context.emit('toolTarget', props.titleType);
    };

    return {
      ...toRefs(state),
      handleTool,
    };
  },
};
</script>

<style lang="scss" scoped>
$cusTitleH: v-bind(cusTitleH);

.cus-title {
  width: 100%;
  height: $cusTitleH;
  line-height: $cusTitleH;
  background-color: #307ecc;
  color: #fff;
  .text {
    letter-spacing: 2px;
    padding-left: 20px;
  }
  .tool {
    float: right;
    padding-right: 20px;
    cursor: pointer;
  }
}
</style>
