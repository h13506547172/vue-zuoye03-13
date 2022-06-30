<template>
  <div>
    <table>
      <tr>
        苹果10元每斤，折扣8折
      </tr>
      <tr>
        请输入你要买的斤数
        <input type="text" name="" id="" v-model="iptVal"/>
      </tr>
      <tr>
        <button @click="fn">结账买单</button>
      </tr>
      <tr>
        结账单：总价：{{total}}元 折后价：{{discount}} 省了 {{total - discount}}元
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iptVal: 0,
      unitPrice: 10,
      total: 0,
      discount: 0, 
    }
  },
  methods: {
    fn() {
      this.total = this.iptVal * this.unitPrice
      this.discount = this.total * 0.8
      
    }
  }
  
};
</script>

<style>
table,
tr {
  border: 1px solid red !important;
  height: 50px;
  width: 400px;
  text-align: center;
  line-height: 50px;
}
table {
  margin: 100px auto;
}
</style>
