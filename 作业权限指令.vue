<template>
  <div>
    <button v-for="(item,index) in arr" :key="index" v-isShow="item">只有有权限的看的见</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //4-5可显示
      arr: [
        { show: 0 },
        { show: 1 },
        { show: 2 },
        { show: 3 },
        { show: 4 },
        { show: 5 },
      ],
    };
  },
  directives: {
    isShow: {
      inserted(el, binding) {
        // console.log(el);
        // console.log(binding.value);
        if (binding.value.show == 0 || binding.value.show == 1 || binding.value.show == 2) {
          el.id = binding.value.show
          const rem = document.getElementById(el.id)
          // console.log(rem);
          rem.remove()
        }
        
      }
    }
  }
};
</script>

<style></style>
