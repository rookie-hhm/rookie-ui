<template>
  <div>
    <my-table ref="table" :data="data3" :columns="columns3" selectedKey="id" :selectedList="selectedList">
    </my-table>
    <el-button @click="select">选中</el-button>
    <el-button @click="clear">清除</el-button>
    <div class="text">{{ selectedList }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data3: [{ name: '下位机掉线', id: 5 }, { name: '辅助通道的向好和下位机重复', id: 6 }],
     	columns3: [{ type: 'selection' }, { type: 'link', label: '呼叫主题', prop: 'name' }],
      selectedList: []
    }
  },
  methods: {
    select () {
      let selectList = this.$refs.table.getSelectionList()
      this.selectedList = selectList
      console.log(selectList, 'selectList')
    },
    clear() {
      this.$refs.table.clearSelection()
      this.selectedList = []
    }
  }
}
</script>

<style lang='scss' scoped>
.text {
  color: purple;
}
</style>

