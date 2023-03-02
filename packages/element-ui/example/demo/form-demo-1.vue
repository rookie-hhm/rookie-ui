<template>
  <div>
    <my-form :model="formModel" :formItems="items"></my-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formModel: { name: 'lxb', age: '40', sex: '女', date: '' },
      items: [
        // el-input
        { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字' } },
        // el-input-number
        { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄' } },
        // el-select
        { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男', value: '男' }, { label: '女', value: '女' }] }, itemAttrs: { label: '性别' } },
        // el-date-picker
        { tag: 'date', attrs: { prop: 'date', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期' }, isRender: this.dateRender }
      ],
    }
  },
  methods: {
    dateRender (model) {
      return model.age >= 20 // 当年龄小于20，就不渲染
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
