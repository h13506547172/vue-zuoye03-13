<template>
  <div class="home-container">
    <van-cell title="推荐歌单" class="title" :border="false" />
    <van-row gutter="5" class="main">
      <!-- gutter不带px，增加列间隔 -->
      <van-col span="8" v-for="item in recommendMusic" :key="item.id">
        <van-image width="100%" :src="item.picUrl" />
        <p class="music-name mu-row">{{ item.name }}</p>
      </van-col>
    </van-row>
    <van-cell title="最新音乐" class="title" :border="false" />
    <!-- 最新音乐的一行 -->
    <div class="newMusicList">
      <van-cell v-for="item in newMusic" :key="item.id" center :title="item.name"
        :label="item.song.artists[0].name + '_' + item.name">
        <template #default>
          <van-icon name="play-circle-o" size='28' />
        </template>
      </van-cell>
    </div>


  </div>
</template>

<script>
import { getRecommendMusicAPI, getNewMusicAPI } from "@/api/index";
export default {
  //在初始化之后发送请求，并获取数据
  async created() {
    //推荐歌单请求
    try {
      const res = await getRecommendMusicAPI({
        limit: 6
      })
      // console.log(res);
      this.recommendMusic = res.data.result
    } catch (err) {
      console.log(err);
    }
    //最新音乐请求
    try {
      const res1 = await getNewMusicAPI({
        limit: 20
      })
      // console.log(res1);
      this.newMusic = res1.data.result
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      recommendMusic: [],
      newMusic: [],
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .main {
    padding: 10px 0
  }


  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  .newMusicList {
    padding-bottom: 50px;
  }

  /deep/.van-grid-item__content {
    padding-bottom: 50px;
  }
}
</style>