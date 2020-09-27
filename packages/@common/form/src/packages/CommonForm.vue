<template>
  <div class="common-form">
    <el-row
      class="common-form__row"
      v-for="(row, rowIndex) in formatedSchema"
      :key="rowIndex"
      v-bind="layout"
    >
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid" v-if="!col.hide" :key="colIndex">
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <!-- 具体组件的配置项目 -->
            <common-form-item
              v-bind="col.formItem"
              :prop="col.prop"
              :col="col"
              :formModel="formModel"
              :options="options"
              v-on="$listeners"
            >
            </common-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
import CommonFormItem from "./CommonFormItem.vue";
import cloneDeep from "lodash.clonedeep";
export default {
  name: "CommonForm",
  components: { CommonFormItem },
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
</script>
