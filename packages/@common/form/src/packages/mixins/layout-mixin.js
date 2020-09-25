import cloneDeep from "lodash.clonedeep";

export default {
  props: {
    layout: {
      // 关于el-row 的拓展
      type: Object,
      default() {
        return {};
      }
    },
    formConfig: {
      // 表单的格局
      type: Array,
      required: true,
      validator(val) {
        return val.every(arr => Array.isArray(arr) && arr.length > 0);
      }
    },
    formModel: {
      // 绑定的value值
      type: Object,
      required: true,
      default() {
        return {};
      }
    },
    options: {
      // 多选值绑定的陪选项目
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    formatedSchema() {
      let _schema = cloneDeep(this.formConfig);
      _schema.map(list => {
        let _showNum = list.filter(item => !item.hide).length || 1;
        list.map(obj => {
          obj.colGrid = obj.colGrid || { span: Math.round(24 / _showNum) };
        });
      });
      return _schema;
    }
  }
};
