<template>
  <div>
    <el-row v-bind="layout" type="flex" class="schema-main__row">
      <el-col v-bind="col.colGrid">
        <common-form-item
          :col="col"
          :formModel="formModel"
          :options="options"
          v-on="$listeners"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    drawingList: {
      type: Array
    },
    col: {
      type: Object
    },
    formModel: {
      type: Object
    },
    options: {
      type: Object
    },
    layout: {
      type: Object
    }
  }
};
</script>
