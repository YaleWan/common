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
      type: false,
      msg: "",
      // 表单绑定模型
      formModel: {
        default_2: 123
      },
      attrs: {
        placeholder: "123"
      },
      // 表单 schema
      schema: [
        {
          type: () => (this.type ? "input" : "text"),
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
    abc() {
      console.log("123", 123);
    },
    onChange(val) {
      console.log("val", val);
    }
  }
};
</script>
