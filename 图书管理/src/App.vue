<template>
  <div>
    <MyMark v-if="isShow" :showObj="showObj"></MyMark>
    <div>
      搜索框：<input
        type="text"
        name=""
        id=""
        v-model="search.bookname"
        @keyup.enter="searchFn"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyTr
          v-for="item in arr"
          :key="item.id"
          :obj="item"
          @del="delFn"
          @show="showFn"
        ></MyTr>
      </tbody>
    </table>
    <div>
      <input type="text" placeholder="书名" v-model="addData.bookname" /> <br />
      <input type="text" placeholder="作者" v-model="addData.author" /> <br />
      <input type="text" placeholder="出版社" v-model="addData.publisher" />
      <br />
      <button @click="addFn" ref="addbtn">点击添加</button>
    </div>
  </div>
</template>

<script>
import { getBookApi, addBookApi, delBookApi } from '@/api/index';
import MyTr from './components/MyTr.vue';
import MyMark from './components/MyMark.vue';

export default {
  components: {
    MyTr,
    MyMark,
  },
  async created() {
    //在挂载钩子函数中，等待请求的结果，并赋值
    const res = await getBookApi();
    // console.log(res);
    this.arr = res.data.data;
    // console.log(this.arr);
  },
  data() {
    return {
      arr: [],
      //搜索传参
      search: {
        bookname: '',
      },
      //添加传参
      addData: {
        bookname: '',
        author: '',
        publisher: '',
      },
      //右边详情框
      isShow: false,
      showObj: {},
    };
  },
  methods: {
    async searchFn() {
      const res = await getBookApi(this.search);
      // console.log(res);
      this.arr = res.data.data;
    },
    //添加事件
    async addFn() {
      this.$refs.addbtn.disabled = true;
      const res = await addBookApi(this.addData);
      // console.log(res);
      if (res.data.status == 201) {
        const res = await getBookApi();
        this.arr = res.data.data;
        this.$refs.addbtn.disabled = false;
      } else {
        alert('添加失败')
        this.$refs.addbtn.disabled = false;

      }
    },
    async delFn(id) {
      const idObj = { id: id };
      const res = await delBookApi(idObj);
      // console.log(res);
      if (res.data.status == 200) {
        const res = await getBookApi();
        this.arr = res.data.data;
      }
    },
    async showFn(id) {
      this.isShow = true;
      const res = await getBookApi({id:id});
      // console.log(res);
      this.showObj = res.data.data[0];
      console.log(this.showObj);
    },
  },
};
</script>

<style>
table {
  margin: 0 auto;
}
</style>
