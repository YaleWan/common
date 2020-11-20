import CommonTable from "./App";

const install = Vue => {
  Vue.component(CommonTable.name, CommonTable);
};

export default install;

export { CommonTable };

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
