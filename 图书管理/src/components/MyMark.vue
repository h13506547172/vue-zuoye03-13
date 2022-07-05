<template>

    <div class="panel">
      <div>{{showObj.bookname}}</div>
      <div>{{showObj.author}}</div>
      <div>{{showObj.publisher}}</div>

    </div>

</template>

<script>
export default {
  props: ['showObj']
}
</script>

<style>
.panel {
  position: absolute;
  border: 1px solid red;
  width: 500px;
  height: 500px;
  margin-left: 1000px;
}
</style>