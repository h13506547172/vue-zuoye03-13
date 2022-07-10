<template>
  <div class="search-container">
    <van-search shape='round' v-model="value" placeholder="请输入搜索关键词" @input="inputFn" />
    <component :is="whoShow" :arr="hotkeyWordsList" @search="searchFn" :searchList="searchList" @load="loadFn"
      ref="xxx" ></component>
  </div>
</template>

<script>
import myHot from "@/components/myHot.vue";
import searchList from "@/components/searchList.vue";
import { getHotSearchAPI, getSearchListAPI } from "@/api/index";
export default {
  data() {
    return {
      value: '',
      hotkeyWordsList: [],
      whoShow: 'myHot',
      searchList: [],
      page: 0,
      timer: null
    };
  },
  components: {
    myHot,
    searchList
  },
  //初始化数据后发送请求获取热门搜索
  created() {
    this.getHotList()
  },
  methods: {
    //获取热搜关键词方法
    async getHotList() {
      const res = await getHotSearchAPI({
        limit: 10
      })
      // console.log(res);
      this.hotkeyWordsList = res.data.result.hots
    },
    //获取搜索列表方法
    async getHotSearchList() {
      try {
        const res = await getSearchListAPI({
          keywords: this.value,
          limit: 20,
          offset: (this.page - 1) * 20
        })
        //如果数据存在就合并数组
        if (res.data.result.songs) {
          // console.log(res);
          this.searchList = [...this.searchList, ...res.data.result.songs]
          // console.log(this.searchList);
          this.$refs.xxx._data.loading = false
        } else {
          //没用更多数据了就设置为加载完成
          this.$refs.xxx._data.finished = true
        }
      } catch (err) {
        this.$toast.fail('获取数据失败，请稍后再试');
      }
    },
    //点击热搜关键词触发搜索事件
    searchFn(name) {
      // 给当前表单赋值
      this.value = name
      this.whoShow = 'searchList'
      //点击和输入的时候设置为空数组,page重置
      this.searchList = []
      this.page = 1
      //打开加载模式
      this.$refs.xxx._data.finished = false
      this.getHotSearchList()
      //数据更新后将加载中改为完成状态
      this.$refs.xxx._data.loading = false
    },
    //输入时触发搜索事件
    inputFn() {
      if (this.value.trim().length <= 0) {
        return this.whoShow = 'myHot'
      }
      
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        console.log(2);
        this.whoShow = 'searchList'
        //点击和输入的时候设置为空数组,page重置
        this.searchList = []
        this.page = 1
        //打开加载模式
        this.$refs.xxx._data.finished = false
        this.getHotSearchList()
        //数据更新后将加载中改为完成状态
        this.$refs.xxx._data.loading = false
      }, 500)

    },
    //滚动到底部触发加载函数
    loadFn() {
      this.page++
      this.getHotSearchList()
      console.log(1);
      // console.log(this.$refs.xxx);
    }
  }
}
</script>

<style lang="less" scoped>
</style>