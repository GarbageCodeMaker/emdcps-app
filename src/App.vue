<template>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
  font-size: 13px;
}
#app {
  overflow-x: hidden;
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(50, 36, 101, 0.8);
  box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-track {
  border-radius: 0;
  background: rgba(242, 235, 249, 0.8);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
}
</style>
