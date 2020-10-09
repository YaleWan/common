<template>
  <div class="generator">
    <LeftPanel />
    <CoreContanier />
    <RightPanel />
  </div>
</template>
<script>
import { LeftPanel, RightPanel, CoreContanier } from "./components";
export default {
  components: {
    LeftPanel,
    RightPanel,
    CoreContanier
  }
};
</script>
<style lang="less" scoped>
.generator {
  height: 100vh;
  display: flex;
}
.left {
}
.right {
  background-color: skyblue;
}
</style>
