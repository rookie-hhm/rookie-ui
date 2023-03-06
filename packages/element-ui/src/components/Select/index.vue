<template>
  <el-select
    class="my-select-wrapper"
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
  >
    <el-option
      v-for="item in $attrs.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    value: {
      default: ''
    }
  },
  methods: {
    onInput (val) {
      this.$emit('input', val)
    }
  },
  created () {

  },
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
</style>