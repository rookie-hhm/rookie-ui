<template>
  <div>
    <my-form
      ref="form" :model="formModel2" :formItems="items2" :rules="rules" label-width="50px">
    </my-form>
    <el-button @click="validate">校验</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      rules: {
			  name: [{ required: true }]
      },
      formModel2: { name: 'lxb', age: '18', sex: '女', date: '' },
      items2: [
          { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字', prop: 'name' }, isEnd: true },
          { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄', prop: 'age' } },
          { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男' }, { label: '女' }] }, itemAttrs: { label: '性别', prop: 'sex', rules: [{ required: true, trigger: ['blur', 'change'] }] } },
          { tag: 'date', attrs: { prop: 'name', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期', prop: 'date' } }
      ]
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate(isValid => {
        if (!isValid) return
        // ....
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
