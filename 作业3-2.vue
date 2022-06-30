<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>

          <td>
            <button @click="removeFn(index)">删除</button>
            <button @click="redactFn(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAdd: true,
      redactIndex: '',
      name: '',
      age: '',
      sex: '男',
      arr: [],
    };
  },
  methods: {
    addFn() {
      if (this.isAdd) {
        if (this.name.trim().length <= 0 || this.age.trim().length <= 0) {
          return alert('输入框不能为空');
        }
        let id = this.arr.length == 0 ? 1 : this.arr.length + 1;
        // console.log(id);
        this.arr.push({
          id: id,
          name: this.name,
          age: this.age,
          sex: this.sex,
        });
        // this.name = '';
        // this.age = '';
      } else {
        this.$set(this.arr[this.redactIndex],'name',this.name)
        this.$set(this.arr[this.redactIndex], 'age', this.age)
        // console.log(this.arr);
        this.isAdd = true
      }
    },
    removeFn(index) {
      this.arr.splice(index, 1);
    },
    redactFn(id) {
      const index = this.arr.findIndex((item) => {
        return id === item.id;
      });
      this.name = this.arr[index].name;
      this.age = this.arr[index].age;
      this.isAdd = false;
      this.redactIndex = index
    },
  },
};
</script>
