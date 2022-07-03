<template>
  <tbody>
    <tr v-for="(item,index) in arr" :key="index">
      <td><input type="checkbox" name="" id="" v-model="item.checked"></td>
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <td><input type="text" name="" id="" v-model="item.num"></td>
      <td>{{item.price * item.num}}</td>
      <td><button @click="passRemove(index)">删除</button></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ['arr'],
  methods: {
    passRemove(index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<style>

</style>