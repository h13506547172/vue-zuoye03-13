<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名字</th>
          <th>年龄</th>
          <th>ImgUrl</th>
        </tr>
      </thead>
      <tbody>
        <MyZuoYe v-for="item in list" :key="item.id">
          <template #slot1>{{item.id}}</template>
          <template #slot2>{{item.name}}</template>
          <template #slot3>{{item.age}}</template>
          <template #slot4>{{item.headImgUrl}}</template>
        </MyZuoYe>
      </tbody>
    </table>
    <hr>
        <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名字</th>
          <th>年龄</th>
          <th>ImgUrl</th>
        </tr>
      </thead>
      <tbody>
        <MyZuoYe v-for="item in list" :key="item.id">
          <template #slot1>{{item.id}}</template>
          <template #slot2>{{item.name}}</template>
          <template #slot3>{{item.age}}</template>
          <template #slot5>
            <a :href="item.headImgUrl">{{item.headImgUrl}}</a>
          </template>
        </MyZuoYe>
      </tbody>
    </table>
    <hr>
            <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名字</th>
          <th>年龄</th>
          <th>ImgUrl</th>
        </tr>
      </thead>
      <tbody>
        <MyZuoYe v-for="item in list" :key="item.id">
          <template #slot1>{{item.id}}</template>
          <template #slot2>{{item.name}}</template>
          <template #slot3>{{item.age}}</template>
          <template #slot6>
            <img :src="item.headImgUrl" alt="">
          </template>
        </MyZuoYe>
      </tbody>
    </table>
  </div>
</template>

<script>
import MyZuoYe from './components/MyZuoYe.vue';
export default {
  components: {
    MyZuoYe,
  },
  data() {
    return {
      list: [
        {
          id: 100,
          name: '小传同学',
          age: 18,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg',
          type: 0, // 0 显示成a标签
        },
        {
          id: 101,
          name: '小黑同学',
          age: 25,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg',
          type: 1, // 1 显示成图片
        },
        {
          id: 102,
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
          type: 1, // 1 显示成图片
        },
        {
          id: 103,
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
          type: 2, // 2 显示成文本
        },
      ],
    };
  },
};
</script>

<style></style>
