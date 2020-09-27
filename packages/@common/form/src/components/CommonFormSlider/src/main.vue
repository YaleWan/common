<template>
  <el-slider
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  />
</template>

<script>
import FormMixin from "@/mixins/form-mixin";
export default {
  name: "CommonFormSlider",
  mixins: [FormMixin]
};
</script>
