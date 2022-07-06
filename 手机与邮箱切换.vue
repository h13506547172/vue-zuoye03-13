<template>
  <div>
    <div>
      <div class="head">
        <h2 @click="isCom = 'MyPhone'">手机注册</h2>
        <h2 @click="fn">邮箱注册</h2>
      </div>
      <div class="main">
        <keep-alive>
          <component :is="isCom">
            <template #text1> 登录密码 </template>
            <template #text2> 邀请码 </template>
            <template #diqu> 地区 </template>
            <template #diqu1> 中国 </template>
            <template #diqu2> 外国 </template>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import MyPhone from './components/MyPhone.vue';
import MyEmail from './components/MyEmail.vue';

export default {
  data() {
    return {
      isCom: 'MyPhone',
    };
  },
  components: {
    MyPhone,
    MyEmail,
  },
  methods: {
    fn() {
      this.isCom = 'MyEmail';
    },
  },
};
</script>

<style>
.head {
  display: flex;
}
h2 {
  margin: 0 20px;
}
</style>
