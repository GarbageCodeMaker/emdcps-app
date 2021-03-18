<template>
  <div class="app-router-view">
    <router-view></router-view>
  </div>
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
.app-router-view {
  display: grid;
  grid-template-rows: [arvr1] 60px [arvr2] auto [arvr3];
  grid-template-columns: [arvc1] 230px [arvc2] auto [arvc3];
  width: 100vw;
  height: 100vh;
}
</style>
