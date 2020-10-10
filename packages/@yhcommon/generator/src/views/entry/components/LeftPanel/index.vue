<template>
  <el-scrollbar class="left-panel">
    <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
      <div class="components-title">
        <svg-icon icon-class="component" />
        {{ item.title }}
      </div>
      <draggable
        class="components-draggable"
        :list="item.components"
        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
        :clone="cloneComponent"
        draggable=".components-item"
        :sort="false"
        @end="onEnd"
      >
        <div
          v-for="(element, index) in item.components"
          :key="index"
          class="components-item"
        >
          <div class="components-body">
            <svg-icon :icon-class="element.__component_description__.tagIcon" />
            {{ element.__component_description__.label }}
          </div>
        </div>
      </draggable>
    </div>
  </el-scrollbar>
</template>
<script>
import draggable from "vuedraggable";
import { formComponents } from "@/utils/config";
import cloneDeep from "lodash.clonedeep";
export default {
  name: "LeftPanel",
  components: {
    draggable
  },
  data() {
    return {
      leftComponents: [
        {
          title: "表单组件",
          components: formComponents
        }
      ]
    };
  },
  methods: {
    cloneComponen() {},
    onEnd(obj) {
      console.log("obj", obj);
      // this.$store.dispatch("drawer/saveDrawingList", obj);
    },
    cloneComponent(origin) {
      const tempActiveData = cloneDeep(origin);
      return tempActiveData;
    }
  }
};
</script>
<style scoped lang="less">
.svg-icon {
  color: #666;
  font-size: 18px;
}
.left-panel {
  width: 240px;
  padding: 20px;
  border-right: 1px solid #eee;
  .components-draggable {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .components-item {
    width: 48%;
    background-color: #f6f7ff;
    margin-top: 10px;
    font-size: 12px;
    .components-body {
      padding: 8px;
      &:hover {
        outline: 1px dashed #787be8;
        cursor: move;
        color: #787be8;
      }
    }
  }
}
</style>
