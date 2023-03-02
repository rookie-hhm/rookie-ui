<template>
  <my-table ref="table" :data="data" :columns="columns">
    <!-- 自定义表头 -->
    <template v-slot:description_header="{ label }">
      <span>{{ label }}</span>
    </template>
    <!-- 自定义内容插槽 -->
    <template v-slot:formTheme="{ row }">
      <el-input v-model="row.name"></el-input>
      <!-- 也可以直接绑定表单元素 -->
    </template>
  </my-table>
</template>

<script>
export default {
  data () {
    return {
      data: [{ age: 18, name: '下位机掉', description: '123' }],
      columns: [
        
        { label: '呼叫主题', prop: 'name', slotName: 'formTheme' },
        { isCustomizeHeader: true, label: '描述', prop: 'description' },
      ]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
