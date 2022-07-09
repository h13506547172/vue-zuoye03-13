<template>
  <div>
    <div>
      <router-link to="/index">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/sports">体育</router-link>

    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>