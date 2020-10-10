<template>
  <div class="core-contanier">
    {{ drawingList }}
    <draggable
      class="drawing-board"
      :animation="340"
      group="componentsGroup"
      :list="drawingList"
    >
      <div v-for="(item, index) in drawingList" :key="index">
        {{ item.__default_config__.label }}
      </div>
      <div v-show="!drawingList.length" class="empty-info">
        从左侧拖入或点选组件进行表单设计
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
// import { mapGetters } from "vuex";
export default {
  name: "CoreContanier",
  components: {
    draggable
  },
  data() {
    return {
      drawingList: []
    };
  },
  computed: {
    // ...mapGetters(["drawingList"])
  }
};
</script>
<style scoped lang="less">
.core-contanier {
  flex: 1;
}
</style>
