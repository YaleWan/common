<template>
  <el-form size="small" label-width="80px" :model="formModel">
    <common-form
      :formModel="formModel"
      :options="options"
      :formConfig="schema"
      :layout="layout"
    />
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      layout: { gutter: 29, justify: "start" },
      // 表单绑定模型
      model: {
        default_1: "",
        default_2: [],
        default_3: "",
        default_4: false,
        default_5: ""
      },
      // 表单 schema
      schema: [
        {
          type: "select",
          prop: "default_2",
          formItem: { label: "label:" },
          colGrid: { span: 8 }
        }
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
        ],
        default_5: [
          { label: "选择A", value: "A" },
          { label: "选择B", value: "B" }
        ]
      }
    };
  },
  methods: {
    onChange(val) {
      console.log("val", val);
    }
  }
};
</script>
