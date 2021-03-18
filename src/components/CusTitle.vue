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
export default {
  name: 'App',
  props: {
    titleType: {
      type: String,
      required: true,
    },
  },
  emits: ['toolTarget'],
  setup(props, context) {
    const handleTool = () => {
      context.emit('toolTarget', props.titleType);
    };

    return {
      handleTool,
    };
  },
};
</script>

<style lang="scss" scoped>
$cusTitleH: 20px;

.cus-title {
  width: 100%;
  height: $cusTitleH;
  line-height: $cusTitleH;
  background-color: #307ecc;
  color: #fff;
  padding: 0 10px 0 10px;
  .text {
    letter-spacing: 2px;
  }
  .tool {
    cursor: pointer;
  }
}
</style>
