// 表单组件 【左面板】
export const formComponents = [
  {
    // 组件的自定义配置
    __default_config__: {
      type: "input",
      prop: "default_1",
      formItem: { label: "label:" },
      colGrid: { span: 8 },
      attrs: {
        "suffix-icon": "el-icon-date"
      }
    },
    __component_description__: {
      label: "文本框",
      document: "https://element.eleme.cn/#/zh-CN/component/input",
      tagIcon: "input",
      layout: "colFormItem"
    }
  },
  {
    // 组件的自定义配置
    __default_config__: {
      type: "select",
      prop: "default_3",
      formItem: { label: "label:" },
      colGrid: { span: 24 }
    },
    __component_description__: {
      label: "下拉框",
      document: "https://element.eleme.cn/#/zh-CN/component/input",
      tagIcon: "select",
      layout: "colFormItem"
    }
  }
];
// 布局容器

export const layoutComponents = [
  {
    __component_description__: {
      layout: "rowFormItem",
      tagIcon: "row",
      label: "行容器",
      layoutTree: true,
      document:
        "https://element.eleme.cn/#/zh-CN/component/layout#row-attributes"
    },
    __default_config__: {
      type: "default",
      justify: "start",
      align: "top"
    }
  }
];
