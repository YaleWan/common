<template>
  <div class="common-form">
    <el-row
      class="common-form__row"
      v-bind="layout"
      v-for="(row, rowIndex) in formConfig"
      :key="rowIndex"
    >
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid" v-if="!col.hide" :key="colIndex">
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <!-- 具体组件的配置项目 -->
            <common-form-item
              v-bind="col.formItem"
              :prop="col.prop"
              :col="col"
              :model="model"
              :options="options"
              v-on="$listeners"
            >
            </common-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "CommonForm",
  props: {
    formConfig: {
      type: Object,
      default: () => {}
    },
    formModel: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="less"></style>
