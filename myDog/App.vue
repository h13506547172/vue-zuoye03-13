<template>
  <div>
    <MyDog v-for="(item, index) in list" :key="index" :obj="item" @add="addFn"></MyDog>
    <ul >
      <li v-for="(item, index) in newArr" :key="index">
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import MyDog from './components/MyDog.vue';
export default {
  components: {
    MyDog,
  },
  methods: {
    addFn(name) {
      this.newArr.push(name)
    }   
  },
  data() {
    return {
      list: [
        {
          dogImgUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pig66.com%2Fuploadfile%2F2021%2F0223%2F20210223075016116.jpg&refer=http%3A%2F%2Fwww.pig66.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425785&t=82ee8b47d09e770721232b0c8a92ca66',
          dogName: '博美',
        },
        {
          dogImgUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.zhuanboke.cn%2Fwp-content%2Fuploads%2F2021%2F09%2F20210925_614e86b93ec1e.jpg&refer=http%3A%2F%2Fwww.zhuanboke.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425423&t=93b39e09c10bdf594e125b5da38cbad6',
          dogName: '泰迪',
        },
        {
          dogImgUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h809%2F20180211%2F1a16-fyrkuxt4076995.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425501&t=0cfb1b442248583e92b399369752da95',
          dogName: '金毛',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '哈士奇',
        },
        {
          dogImgUrl:
            'https://img0.baidu.com/it/u=143654580,2727053860&fm=253&fmt=auto&app=138&f=JPEG?w=493&h=313',
          dogName: '阿拉斯加',
        },
        {
          dogImgUrl:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn21%2F622%2Fw528h894%2F20180711%2F9b55-hfefkqq4964458.png&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659425744&t=8c97931bc3c61e9e5c46be93ca0d0d5e',
          dogName: '萨摩耶',
        },
      ],
      newArr: []
    };
  },
};
</script>

<style></style>
