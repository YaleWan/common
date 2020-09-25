<template>
  <div class="common-form">
    <el-row
      class="common-form__row"
      v-for="(row, rowIndex) in formatedSchema"
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
              :formModel="formModel"
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
import CommonFormItem from "./CommonFormItem.vue";
import LayoutMixin from "./mixins/layout-mixin";
export default {
  name: "CommonForm",
  components: { CommonFormItem },
  mixins: [LayoutMixin]
};
</script>
