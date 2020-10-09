// 输入型组件 【左面板】
export const inputComponents = [
  {
    // 组件的自定义配置
    __config__: {
      label: "单行文本",
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: "el-input",
      tagIcon: "input",
      defaultValue: undefined,
      required: true,
      layout: "colFormItem",
      span: 24,
      document: "https://element.eleme.cn/#/zh-CN/component/input",
      // 正则校验规则
      regList: []
    }
  },
  {
    __config__: {
      label: "多行文本",
      labelWidth: null,
      showLabel: true,
      tag: "el-input",
      tagIcon: "textarea",
      defaultValue: undefined,
      required: true,
      layout: "colFormItem",
      span: 24,
      regList: [],
      changeTag: true,
      document: "https://element.eleme.cn/#/zh-CN/component/input"
    }
  },
  {
    __config__: {
      label: "密码",
      showLabel: true,
      labelWidth: null,
      changeTag: true,
      tag: "el-input",
      tagIcon: "password",
      defaultValue: undefined,
      layout: "colFormItem",
      span: 24,
      required: true,
      regList: [],
      document: "https://element.eleme.cn/#/zh-CN/component/input"
    }
  },
  {
    __config__: {
      label: "计数器",
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: "el-input-number",
      tagIcon: "number",
      defaultValue: undefined,
      span: 24,
      layout: "colFormItem",
      required: true,
      regList: [],
      document: "https://element.eleme.cn/#/zh-CN/component/input-number"
    }
  },
  {
    __config__: {
      label: "编辑器",
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: "tinymce",
      tagIcon: "rich-text",
      defaultValue: null,
      span: 24,
      layout: "colFormItem",
      required: true,
      regList: [],
      document: "http://tinymce.ax-z.cn"
    }
  }
];
