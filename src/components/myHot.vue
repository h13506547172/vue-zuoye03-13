<template>
<div>
      <p class="hotText">热门搜索</p>
      <div class="hotList">
      <span class="hotItem" v-for="(item, index) in arr" :key="index" @click="passName(item.first)">{{item.first}}</span>
    </div>
</div>
</template>

<script>
export default {
  props: ['arr'],
  methods: {
    passName(name) {
      this.$emit('search', name)
    }
  }
}
</script>

<style lang="less" scoped>
  .hotText {
    font-size: 18px;
    padding-left: 10px;
    color: rgb(87, 81, 81);
  }
  .hotList {
    padding: 10px;
  }

  .hotItem {
    border: 1px solid #ccc;
    border-radius: 20px;
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    color: #333;
  }
</style>