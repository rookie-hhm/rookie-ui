<template>
  <my-form :model="formModel1" :formItems="items1" :columnNumber="2" label-width="50px"></my-form>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      formModel1: { name: 'lxb', age: '18', sex: '女', date: '' },
      items1: [
        { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字' }, isEnd: true },
        { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄' } },
        { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男', value: '男' }, { label: '女', value: '女' }]  }, itemAttrs: { label: '性别' } },
        { tag: 'date', attrs: { prop: 'name', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期' }, isRender: this.dateRender }
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
