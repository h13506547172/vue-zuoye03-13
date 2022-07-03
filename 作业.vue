<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>

      <MyTable :arr="goodList" @remove="removeFn"></MyTable>

      <tfoot>
        <tr>
          <td>合计:{{allPrice}}</td>
          <td colspan="5"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue';
export default {
  watch: {
    goodList: {
      deep: true, 
      immediate:true,
      handler(val) {
        // console.log(this.allPrice);
      this.allPrice = val.filter(item => item.checked ===true).reduce((sum, item) => {
      return sum += (item.price *item.num)
     },0)
      }
    }
  },
  components: {
    MyTable,
  },
  computed: {
    isAll: {
      get() {
        return this.goodList.every(item => item.checked)
      },
      set(val) {
        this.goodList.forEach(item => item.checked = val)
      }
    },
  },
  data() {
    return {
      allPrice:0,
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  methods: {
    removeFn(index) {
      this.goodList.splice(index,1)
    }
  }
};
</script>

<style></style>
