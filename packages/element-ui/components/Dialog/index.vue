<template>
  <el-dialog
    ref="dialog"
    class="my-dialog-wrapper"
    :class="{ fullscreen: attrs.fullscreen }"
    v-el-drag-dialog
    v-loading.fullscreen="loading"
    v-bind="attrs"
    v-on="$listeners"
    :visible.sync="dialogVisible"
    @click.native.stop
    @closed="onClosed"
  >
    <el-row type="flex" align="middle" class="title-wrapper" slot="title">
      <slot name="title">
        <template v-if="title">
          <el-row type="flex" align="middle" :style="titleStyle">
            <div class="my-dialog-icon"></div>
            <span class="my-dialog-title">{{ title }}</span>
          </el-row>
        </template>
      </slot>
    </el-row>
    <slot></slot>
    <div slot="footer" class="dialog-footer" style="text-align: center">
      <slot name="footer">
        <template v-if="isShowBtn && newBtnList.length">
          <el-button
            v-for="btnItem in newBtnList"
            class="btn-item"
            :class="[
              btnItem.className,
              {
                'customer-btn-class': !btnItem.type
              }
            ]"
            :key="btnItem.btnText"
            :type="btnItem.type || 'primary'"
            @click="btnItem.handleClick(btnItem.options || {})"
            :size="btnItem.size || 'mini'"
            :loading="btnItem.loading === true"
            >{{ btnItem.btnText }}</el-button
          >
        </template>
      </slot>
    </div>
  </el-dialog>
</template>

<script>
import elDragDialog from '../../directive/el-dragDialog'
import { defaultConfig } from './default'
import elementResizeDetectorMaker from 'element-resize-detector'
const erd = elementResizeDetectorMaker() //创建实例
export default {
  name: 'my-dialog',
  directives: {
    elDragDialog
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isShowBtn: {
      type: Boolean,
      default: true
    },
    btnList: {
      type: Array,
      default() {
        return []
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    titleStyle: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    attrs() {
      return Object.assign({}, defaultConfig, this.$attrs)
    },
    newBtnList() {
      return this.btnList.filter(item => !!(item.isShow === undefined ? true : item.isShow))
    }
    // dialogVisible: {
    //   get () {
    //     return this.dialogVisible
    //   },
    //   set (val) {
    //     this.$emit('update:visible', val)
    //   }
    // }
  },
  watch: {
    dialogVisible() {
      console.log(this.dialogVisible, 'dialogVisible')
    }
  },
  data() {
    return {
      // dialogVisible: false,
      dialogVisible: false,
      key: 0
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
      this.$emit('update:visible', true)
    },
    close() {
      this.dialogVisible = false
      this.$emit('update:visible', false)
    },
    onClosed() {
      this.dragDom && (this.dragDom.style.cssText = this.dragDom.cachDragCssText)
    },
    resetInfo() {
      // this.key++
    }
  },
  created() {},
  mounted() {
    this.dialogElm = this.$refs.dialog.$el
    this.dragDom = this.dialogElm.querySelector('.el-dialog')
    erd.listenTo(this.dragDom, el => {
      // 监听变化 重新赋值cachDragCssText
      this.dragDom.cachDragCssText = el.style.cssText
    })
  },
  destroyed() {
    erd.uninstall(this.dragDom)
  }
}
</script>
<style lang='scss' scoped>
.my-dialog-wrapper {
  &.fullscreen {
    ::v-deep.el-dialog__body {
      height: calc(100% - 39px - 60px);
    }
  }
  // overflow-y: hidden;
  .title-wrapper {
    position: relative;
    .my-dialog-icon {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      border-radius: 4px;
      background-color: #f8b500;
    }
    .my-dialog-title {
      margin-left: 15px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  &::v-deep {
    .el-dialog__header {
      overflow: hidden;
      min-height: 37px;
      padding: 10px 0 !important;
      margin: 0 10px !important;
      border-bottom: 1px solid #f2f2f3;
      .el-dialog__headerbtn {
        top: 10px;
        right: 7px;
        .el-dialog__close {
          font-weight: bold;
          color: #222;
        }
      }
    }
    .el-dialog__footer {
      padding: 10px 20px;
      box-shadow: 0 -2px 1px 0px #eee, 0 2px 1px 0px #eee;
    }
    .el-form-item__label {
      font-size: 12px !important;
      font-weight: normal !important;
    }
    .el-form-item.el-form-item--small {
      margin-bottom: 8px;
    }
    .el-form-item.is-error.is-required.el-form-item--small {
      margin-bottom: 18px;
    }
  }
  &::v-deep .el-dialog__body {
    padding: 10px !important;
  }
  .btn-item {
    margin: 0 10px;
    border: 1px solid #dcdfe6;
    &.danger {
      background-color: #d9001b;
    }
    &.outline {
      background-color: #fff;
      color: #f8b500;
      border: 1px solid #f8b500;
    }
    &.close {
      background-color: #fff;
      color: black;
    }
  }
}
</style>