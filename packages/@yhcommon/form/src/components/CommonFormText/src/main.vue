<template>
  <span v-bind="attrsAll" v-on="onEvents">{{ bindVal }}</span>
</template>

<script>
import FormMixin from "@/mixins/form-mixin";
export default {
  name: "CommonFormText",
  mixins: [FormMixin]
};
</script>
