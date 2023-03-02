<template>
  <my-form
    ref="form" :model="formModel3" :formItems="items3" :rules="rules3" label-width="50px">
    <template v-slot:age="{ model, rowIndex, colIndex, item }">
      <el-form-item label="年龄" prop="age" :rules="[{ required: true }]">
        <el-input size="mini" v-model="model.age"></el-input>
        <p style="font-size: 15px;">当前行 {{ rowIndex + 1 }} 当前列 {{ colIndex + 1 }} </p>
        <p style="font-size: 15px;">
          <span>{{ JSON.stringify(item) }}</span>
        </p>
      </el-form-item>
    </template>
  </my-form>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      rules3: {
        age: [{ required: true }]
      },
      formModel3: { name: 'lxb', age: '18', sex: '女', date: '2022-12-08' },
      items3: [
        { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字', prop: 'name' }, isEnd: true },
    // 插槽
        { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄', prop: 'age' } , slotName: 'age' },
        { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男' }, { label: '女' }] }, itemAttrs: { label: '性别', prop: 'sex' } },
        { tag: 'date', attrs: { prop: 'date', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期', prop: 'date' } }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
