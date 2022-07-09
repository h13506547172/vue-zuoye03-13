<template>
  <div>
    <h1>体育</h1>
    <p>体育改变人生</p>
    <div>
      <router-link to="/sports/guonei">国内赛事</router-link>
      <router-link to="/sports/guowai">国外赛事</router-link>

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