<template>
  <div class="core-contanier">
    <draggable
      class="drawing-board"
      :list="drawingList"
      :animation="340"
      group="componentsGroup"
      ><div>23</div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "CoreContanier",
  components: {
    draggable
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.core-contanier {
  flex: 1;
}
</style>
