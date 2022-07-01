<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price >= 100 }">{{ item.price }}</td>
            <td>{{ item.time | disTime }}</td>
            <td><a href="javascript:;" @click="removeFn(item.id)">删除</a></td>
          </tr>
          <tr style="background-color: #eee">
            <td>统计:</td>
            <td colspan="2">总价钱为: {{ allPrice.toFixed(2) }}</td>
            <td colspan="2">平均价: {{ svgPrice.toFixed(2) }}</td>
          </tr>
        </tbody>

        <tfoot v-if="list.length == 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      name: '', // 名称
      price: 0, // 价格
      list:
      JSON.parse(localStorage.getItem('list')) || []
      //   [
      //   { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
      //   { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
      //   { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
      //   { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      // ],
    };
  },
  methods: {
    addFn() {
      const id =
        this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 100;
      let obj = {
        id: id,
        name: this.name,
        price: this.price,
        time: new Date(),
      };
      //非空判断
      if (this.name.trim() == '' || this.price <= 0) {
        return alert('请输入正确的值');
      }
      // console.log(obj);
      this.list.push(obj);
      this.name = '';
      this.price = 0;
    },
    removeFn(id) {
      let index = this.list.findIndex((item) => {
        return item.id == id;
      });
      // console.log(index);
      this.list.splice(index, 1);
    },
  },
  filters: {
    disTime(val) {
      return moment(val).format('YYYY年MM月DD日');
    },
  },
  computed: {
    allPrice() {
      return this.list.reduce((sum, item) => {
        return sum + +item.price
      },0)
    }, 
    svgPrice() {
      return this.allPrice / this.list.length
    }
  },
  watch: {
    list: {
      handler(newval) {
      // console.log(newval);
      localStorage.setItem('list', JSON.stringify(newval));
      },
      deep: true,
    immediate: true
    },
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
