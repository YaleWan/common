<template>
  <el-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-option
      v-for="(option, idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    />
  </el-select>
</template>

<script>
import FormMixin from "@/mixins/form-mixin";
export default {
  name: "CommonFormSelect",
  mixins: [FormMixin]
};
</script>
