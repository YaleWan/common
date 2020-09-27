import CommonForm from "./CommonForm";
import CommonFormItem from "./CommonFormItem";
import CommonFormInput from "./components/CommonFormInput";
import CommonFormSelect from "./components/CommonFormSelect";
import CommonFormCheckbox from "./components/CommonFormCheckbox";
import CommonFormCascader from "./components/CommonFormCascader";
import CommonFormDatepicker from "./components/CommonFormDatepicker";
import CommonFormRadio from "./components/CommonFormRadio";
import CommonFormSwitch from "./components/CommonFormSwitch";
import CommonFormSlider from "./components/CommonFormSlider";

// 组件列表
const components = [
  CommonForm,
  CommonFormItem,
  CommonFormInput,
  CommonFormSelect,
  CommonFormCheckbox,
  CommonFormCascader,
  CommonFormDatepicker,
  CommonFormRadio,
  CommonFormSwitch,
  CommonFormSlider
];
import FormMixin from "./mixins/form-mixin";

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component);
  });
};
export default install;

export { CommonForm, CommonFormItem, FormMixin };

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
