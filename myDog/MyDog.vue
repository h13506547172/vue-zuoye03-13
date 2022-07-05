<template>
  <div class="my_div">
    <img
      :src="obj.dogImgUrl"
      alt=""
    />
    <p @click="fn(obj.dogName)" :style="{background: bgc}">{{obj.dogName}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bgc: `rgba(255,255,255)`
    }
  },
  props: ['obj'],
  methods: {
    fn(name) {
      this.bgc = `rgba(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`;  //
      this.$emit('add' , name)
    }
  }
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>