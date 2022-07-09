<template>
  <div>
    <h1>体育</h1>
    <p>体育改变人生</p>
    <div>
      <router-link to="/sports/guonei">国内赛事</router-link>
      <router-link to="/sports/guowai">国外赛事</router-link>
      <button @click="fn">随机跳转</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      const arr = ['/sports/guonei', '/sports/guowai']
      const ram = Math.floor(Math.random()* 2)
      console.log(ram);
      this.$router.push({
        path: arr[ram]
      })
    }
  }
}
</script>

<style>
.router-link-active {
  background-color: red;
}
</style>