<template>
  <el-input
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-input>
</template>

<script>
import FormMixin from "@/mixins/form-mixin";

export default {
  name: "CommonFormInput",
  mixins: [FormMixin]
};
</script>
