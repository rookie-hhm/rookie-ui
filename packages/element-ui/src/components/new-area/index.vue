<template>
  <div class="area-selector-wrapper" v-click-outside="hidePannel">
    <el-input ref="reference" v-bind="$attrs" v-on="$listeners" :value="value" @click.native.stop="togglePannel"></el-input>
    <new-area-down-picker
      ref="propper"
      v-bind="$attrs"
      v-model="isShow"
      @confirm="onConfirm"
      @close="onClose"
      :placement="placement"
    ></new-area-down-picker>
  </div>
</template>

<script>
import ClickOutside from 'element-ui/lib/utils/clickoutside'
export default {
  name: 'my-new-area-selector',
  inject: {
    elForm: {
      default: ''
    }
  },
  directives: {
    ClickOutside
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    processValue: { // 自定义地址的返回值
      type: Function
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom-start'
    }
  },
  computed: {
    selectDisabled () {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  watch: {
    value (newVal) {
      if (!newVal) {
        this.reset()
        if (this.$refs.propper) {
          this.$refs.propper.resetInfo()
        }
      }
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    togglePannel () {
      if (!this.selectDisabled) {
        this.isShow = !this.isShow
      }
    },
    hidePannel () {
      this.isShow = false
      this.$emit("close", this.options)
    },
    defaultProcessValue ({ province, city, district }) { // 默认返回的地址格式
      return province + city + district
    },
    onConfirm (value) {
      let processValueFn = this.processValue || this.defaultProcessValue
      this.$emit('input', processValueFn(value))
      this.$emit('change', { ...value, ...this.options})
      this.hidePannel()
    },
    onClose () {
      this.hidePannel()
    }
  }
}
</script>
<style lang='scss' scoped>
// .area-selector-wrapper {
//   position: relative;
// }
</style>

