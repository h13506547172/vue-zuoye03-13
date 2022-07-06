<template>
  <div>
    <van-cell-group>
      <van-field v-model="value" label="邮箱" placeholder="请输入用户名" />
       <van-field v-model="digit" type="digit" label="验证码" />
    </van-cell-group>
    
    <div>
      <slot name="text1">默认文字</slot>
      <input type="password" name="" id="">
      <input type="password" name="" id="">

    </div>
    <div>
      <slot name="text2">默认文字</slot>
      <input type="password" name="" id="">
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ""
    }
  }
};
</script>

<style></style>
