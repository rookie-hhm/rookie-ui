<template>
  <el-form ref="form" :model="model">
    <my-table ref="table" :data="model.list" :columns="columns2" dataKey="list">	
    </my-table>
  </el-form>
</template>

<script>
const rulesItem = [{ required: true, trigger: 'blur' }]
const textComponent = {
    tag: 'text', // 映射成el-input 具体映射配置参考项目中/src/components/global/componentsMap.js
    attrs: {}, // 组件的属性值 $attrs
    on: {}, // 组件监听的事件 $listeners，不支持原生事件，只支持组件
    itemAttrs: { // el-form-item属性
    rules: rulesItem
  }
}
export default {
  computed: {
    model() {
      return {
        list: this.data2
      }
    }
  },
  data () {
    return {
      data2: [{ name: '下位机掉线', description: '123' }],
     	columns2: [
        { label: '呼叫主题', prop: 'name', component: textComponent }, // 必须指定prop的值
        { label: '描述', prop: 'description', component: textComponent }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
