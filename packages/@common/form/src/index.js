import CommonForm from "./packages/CommonForm";
import CommonFormItem from "./packages/CommonFormItem";
import CommonFormInput from "./packages/components/CommonFormInput";

// 组件列表
const components = [CommonForm, CommonFormItem, CommonFormInput];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
