<template>
  <div class="core-contanier">
    {{ formConfig }}
    <el-form size="small" label-width="80px">
      <draggable
        class="drawing-board"
        :animation="340"
        group="componentsGroup"
        :list="drawingList"
        draggable=".drawingList-item"
      >
        <draggable-item
          v-for="(item, index) in formConfig"
          :key="index"
          :drawing-list="formConfig"
          :col="item"
          :formModel="formModel"
          :options="options"
          :layout="layout"
          class="drawingList-item"
        />
        <div v-show="!drawingList.length" class="empty-info">
          从左侧拖入或点选组件进行设计
        </div>
      </draggable>
    </el-form>
  </div>
</template>
<script>
import Draggable from "vuedraggable";
import DraggableItem from "../DraggableItem";
// import { mapGetters } from "vuex";
export default {
  name: "CoreContanier",
  components: {
    Draggable,
    DraggableItem
  },
  data() {
    return {
      drawingList: [],
      formModel: {},
      formConfig: [],
      options: {},
      layout: { gutter: 16, justify: "start" }
    };
  },
  watch: {
    drawingList: {
      handler(list) {
        this.formConfig = [];
        list.forEach(item => {
          this.formConfig.push(item.__default_config__);
          this.$set(this.formModel, item.__default_config__.prop, "");
        });
      },
      deep: true
    }
    // ...mapGetters(["drawingList"])
  }
};
</script>
<style scoped lang="less">
.core-contanier {
  flex: 1;
}
</style>
