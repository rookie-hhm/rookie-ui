<template>
  <div class="hello">
    <my-pagination :total="100"></my-pagination>
    <!-- table-one -->
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
    <!-- table-two -->
    <el-form ref="form" :model="model">
      <my-table ref="table" :data="model.list" :columns="columns2" dataKey="list">	
      </my-table>
    </el-form>
    <!-- table-three -->
    <div>
      <my-table ref="table" :data="data3" :columns="columns3" selectedKey="id" :selectedList="selectedList">
      </my-table>
      <el-button @click="select">选择</el-button>
    </div>
    <my-select v-model="value" :options="selectOptions"></my-select>
    {{ value }}
    <!-- form表单1 -->
    <my-form :model="formModel" :formItems="items"></my-form>
    <!-- 表单2 -->
    <my-form :model="formModel1" :formItems="items1" :columnNumber="2" label-width="50px"></my-form>
    <!-- 表单3 -->
    <my-form :model="formModel1" :formItems="items1" :columnNumber="2" :isCustomerEnd="true" label-width="50px"></my-form>
    <!-- 表单4 -->
    <my-form 
      ref="form" :model="formModel2" :formItems="items2" :rules="rules" label-width="50px">
    </my-form>
    <button @click="validate">校验</button>
    <!-- 表单插槽 -->
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
    <my-dialog></my-dialog>
  </div>
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
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    model() {
      return {
        list: this.data2
      }
    }
  },
  data() {
    return {
      data: [{ age: 18, name: '下位机掉', description: '123' }],
      columns: [
        { label: '呼叫主题', prop: 'name', slotName: 'formTheme' },
        { isCustomizeHeader: true, label: '描述', prop: 'description' },
      ],
      data2: [{ name: '下位机掉线', description: '123' }],
     	columns2: [
        { label: '呼叫主题', prop: 'name', component: textComponent }, // 必须指定prop的值
        { label: '描述', prop: 'description', component: textComponent }
      ],
      data3: [{ name: '下位机掉线' }, { name: '辅助通道的向好和下位机重复' }],
     	columns3: [{ type: 'selection' }, { type: 'link', label: '呼叫主题', prop: 'name' }],
      selectedList: [],
      selectOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
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
      formModel1: { name: 'lxb', age: '18', sex: '女', date: '' },
      items1: [
        { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字' }, isEnd: true },
        { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄' } },
        { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男', value: '男' }, { label: '女', value: '女' }]  }, itemAttrs: { label: '性别' } },
        { tag: 'date', attrs: { prop: 'date', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期' }, isRender: this.dateRender }
      ],
      rules: {
			  name: [{ required: true }]
      },
      formModel2: { name: 'lxb', age: '18', sex: '女', date: '' },
      items2: [
          { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字', prop: 'name' }, isEnd: true },
          { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄', prop: 'age' } },
          { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男' }, { label: '女' }] }, itemAttrs: { label: '性别', prop: 'sex', rules: [{ required: true, trigger: ['blur', 'change'] }] } },
          { tag: 'date', attrs: { prop: 'date', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期', prop: 'date' } }
      ],
      rules3: {
        age: [{ required: true }]
      },
      formModel3: { name: 'lxb', age: '18', sex: '女', date: '' },
      items3: [
        { tag: 'text', attrs: { prop: 'name'}, itemAttrs: { label: '名字', prop: 'name' }, isEnd: true },
    // 插槽
        { tag: 'number', attrs: { prop: 'age' }, itemAttrs: { label: '年龄', prop: 'age' } , slotName: 'age' },
        { tag: 'select', attrs: { prop: 'sex', options: [{ label: '男' }, { label: '女' }] }, itemAttrs: { label: '性别', prop: 'sex' } },
        { tag: 'date', attrs: { prop: 'date', 'value-format': 'yyyy-MM-dd' }, itemAttrs: { label: '日期', prop: 'date' } }
      ]
    }
  },
  methods: {
    dateRender (model) {
      return model.age >= 20 // 当年龄小于20，就不渲染
    },
    validate () {
      this.$refs.form.validate(isValid => {
        if (!isValid) return
        // ....
      })
    },
    select () {
      let selectList = this.$refs.table.getSelectionList()
      this.selectedList = selectList
      console.log(selectList, 'selectList')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
