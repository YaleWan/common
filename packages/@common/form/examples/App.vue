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
        ],
        [
          {
            type: "switch",
            prop: "default_4",
            formItem: { label: "label:" },
            colGrid: { span: 12 }
          },
          {
            type: "radio",
            prop: "default_5",
            formItem: { label: "label:" },
            colGrid: { span: 12 }
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
