<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">
      <input type="checkbox" name="" id="" v-model="checkArr" :value="item">
      {{item}}
      </li>
    </ul>
    <div>总和{{sum}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkArr: []
    }
  },
  computed: {
    sum() {
     return this.checkArr.reduce((sum, item) => {
       return sum += item
      },0)
    }
  }
}
</script>

<style>

</style>