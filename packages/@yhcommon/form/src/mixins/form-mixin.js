export default {
  props: {
    value: [Number, String, Array, Object, Boolean, Date], // 绑定值
    prop: String,
    modifier: String,
    dynamicAttrs: Object,
    options: Array,
    onEvents: {
      // 绑定事件
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    bindVal: {
      get() {
        return this.formatVal(this.value);
      },
      set(val) {
        this.$emit("update:value", this.formatVal(val));
      }
    },
    componentName() {
      let _name = this.$options.name;
      return _name.replace("CommonForm", "").toLowerCase() || "";
    },
    attrsAll() {
      return { ...this.$attrs, ...this.dynamicAttrs };
    }
  },
  methods: {
    formatVal(val) {
      if (this.modifier === "number") {
        let n = parseFloat(val);
        return isNaN(n) ? val : n;
      }
      if (this.modifier === "trim" && val) return val.trim();
      return val;
    }
  }
};
