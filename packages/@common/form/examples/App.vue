<template>
  <el-form size="small" label-width="80px" :model="model">
    <common-form
      :layout="layout"
      :formModel="model"
      :formConfig="schema"
      :options="options"
    >
    </common-form>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单布局
      layout: { gutter: 16, justify: "start" },
      // 表单绑定模型
      model: { default_1: "", default_2: [], default_3: "" },
      // 表单 schema
      schema: [
        [
          {
            type: "input",
            prop: "default_1",
            formItem: { label: "label:" },
            colGrid: { span: 8 }
          },
          {
            type: "checkbox",
            prop: "default_2",
            formItem: { label: "label:" },
            colGrid: { span: 8 }
          },
          {
            type: "select",
            prop: "default_3",
            formItem: { label: "label:" },
            colGrid: { span: 8 }
          }
        ]
      ],
      // 表单 options
      options: {
        default_2: [
          { label: "选择A", value: "A" },
          { label: "选择B", value: "B" }
        ],
        default_3: [
          { label: "选择A", value: "A" },
          { label: "选择B", value: "B" }
        ]
      }
    };
  }
};
</script>
