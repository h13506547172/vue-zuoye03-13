<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <button @click="fn">点击换位</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: ["帅哥", "美女", "程序猿"],
    }
  },
  methods: {
    fn() {
      this.arr.push(this.arr.shift())
    }
  }
}
</script>

<style>

</style>