<template>
  <div>
    <el-row v-bind="layout" type="flex" class="schema-main__row">
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid" :key="colIndex">
          <common-form-item
            :col="col"
            :formModel="formModel"
            :options="options"
            v-on="$listeners"
          />
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    drawingList: {
      type: Array
    },
    row: {
      type: Array
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
