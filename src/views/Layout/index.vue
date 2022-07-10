<template>
  <div>
    <van-nav-bar :title="$route.meta.title" />
    <div>
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
    <!-- tarbar的路由模式切换页面 -->
      <van-tabbar-item icon="home-o" route to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" route to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
export default {
  data() {
    return {
      active: this.$route.meta.num,
    };
  },
}
</script>

<style>
</style>