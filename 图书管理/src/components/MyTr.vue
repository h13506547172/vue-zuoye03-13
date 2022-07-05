<template>
  <tr>
    <td>{{obj.id}}</td>
    <td>{{obj.bookname}}</td>
    <td>{{obj.author}}</td>
    <td>{{obj.publisher}}</td>
    <td><a href="javaScript:;" @click="passId(obj.id)">详情</a> / <a href="javaScript:;" @click="passDel(obj.id)">删除</a></td>
  </tr>
</template>

<script>
export default {
  props: ['obj'],
  methods: {
    passDel(id) {
      this.$emit('del', id)
    },
    //显示详情
    passId(id) {
      this.$emit('show', id)
    }
  }
};
</script>

<style></style>
