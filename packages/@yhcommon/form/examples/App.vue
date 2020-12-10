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
      formModel: {
        default_1: "",
        default_2: 123
      },
      // 表单 schema
      schema: [
        {
          type: "text",
          prop: "default_2",
          formItem: { label: "label:" },
          attrs: {
            placeholder: "请输入支付渠道名称",
            clearable: true
          }
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
