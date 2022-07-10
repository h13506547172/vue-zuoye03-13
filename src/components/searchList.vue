<template>
  <div>
    <p class="title">最佳匹配</p>
    <div class="searchList">

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false">
        <van-cell v-for="(item,index) in searchList" :key="index" center :title="item.name"
          :label="item.ar[0].name + '_' + item.name">
          <template #default>
            <van-icon name="play-circle-o" size='28' />
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  props: ['searchList'],
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      // console.log(11);
      this.$emit('load')
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 18px;
  padding-left: 10px;
  color: rgb(87, 81, 81);
}

.searchList {
  padding-bottom: 50px;
}
</style>