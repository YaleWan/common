<template>
  <div>
    <el-form
      size="small"
      label-position="left"
      label-width="70px"
      :model="formModel"
    >
      <common-form
        :layout="layout"
        :formModel="formModel"
        :formConfig="formConfig"
        :options="options"
      >
        <template slot="name1">
          <el-button type="primary">123</el-button>
        </template>
      </common-form>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 表单布局
      layout: { gutter: 16, justify: "start" },
      // 表单绑定模型
      formModel: { abc: "", bcd: "" },
      // 表单 schema
      formConfig: [
        [
          {
            type: "input",
            prop: "abc",
            formItem: { label: "测试" },
            colGrid: { span: 8 },
            attrs: {
              clearable: true
            },
            on: { change: this.onNameChange, focus: this.onNameFocus }
          },
          {
            slot: "name1",
            colGrid: { span: 8 }
          },
          {
            type: "select",
            prop: "bcd",
            formItem: { label: "测试" },
            colGrid: { span: 8 },
            attrs: {
              clearable: true,
              filterable: true,
              multiple: true
            },
            on: { change: this.onNameChange, focus: this.onNameFocus }
          }
        ]
      ],
      options: {
        bcd: [
          { name: "123", label: "123" },
          { name: "456", label: "456" }
        ]
      }
    };
  },
  methods: {
    onNameChange(value) {
      console.log("value", value);
    },
    onNameFocus(e) {
      console.log("e", e);
    }
  }
};
</script>
