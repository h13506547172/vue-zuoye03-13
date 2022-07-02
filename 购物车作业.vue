<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <!-- <tr>
        <td><input type="checkbox" /></td>
        <td>商品</td>
        <td>单价</td>
        <td><span>-</span><input type="text" /><span>+</span></td>
        <td>小记</td>
        <td><button>删除</button></td>
      </tr> -->
      <tr v-for="(item, index) in list" :key="item.id">
        <td><input type="checkbox" name="" id="" v-model="item.c" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="subCount(item)">-</span
          ><input type="text" v-model="item.count" /><span
            @click="addCount(item)"
            >+</span
          >
        </td>
        <td>{{ item.count * item.price }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="checkRemove">删除选中商品</button>
    <button @click="emptyCar">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ allCount }}</p>
      <p>总价{{ allPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        {
          id: 1,
          name: '奔驰',
          time: '2020-08-01',
          c: true,
          price: 100000,
          count: 6,
        },
        {
          id: 2,
          name: '宝马',
          time: '2020-08-02',
          c: false,
          price: 200000,
          count: 2,
        },
        {
          id: 3,
          name: '奥迪',
          time: '2020-08-03',
          c: true,
          price: 500000,
          count: 1,
        },
      ],
    };
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    addCount(item) {
      item.count++;
    },
    subCount(item) {
      if (item.count > 0) {
        return item.count--;
      }
    },
    checkRemove() {
      this.list = this.list.filter((item) => item.c === false);
    },
    emptyCar() {
      this.list = [];
    },
  },
  computed: {
    isAll: {
      get() {
        return this.list.every((item) => {
          return item.c === true;
        });
      },
      set(value) {
        this.list.forEach((item) => {
          item.c = value;
        });
      },
    },
    allCount() {
      return this.list
        .filter((item) => {
          return item.c === true;
        })
        .reduce((sum, item) => {
          return (sum += item.count);
        }, 0);
    },
    allPrice() {
      return this.list
        .filter((item) => {
          return item.c === true;
        })
        .reduce((sum, item) => {
          return (sum += item.count * item.price);
        }, 0);
    },
  },
  watch: {
    list: {
      // immediate: true,
      deep: true,
      handler(newVal) {
        localStorage.setItem('list', JSON.stringify(newVal));
      },
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
