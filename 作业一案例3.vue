<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
      <span>{{ item }}</span>
      <button @click="remove(index)">删除</button>
      </li>
    </ul>
    <button @click="fn">点击增加随机数</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 5, 3],
    };
  },
  methods: {
    fn() {
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
      }
      let random = getRandomIntInclusive(0, 100)
      this.arr.push(random)      
    },
    remove(index) {
      this.arr.splice(index, 1)
    }

  },
};
</script>

<style></style>
