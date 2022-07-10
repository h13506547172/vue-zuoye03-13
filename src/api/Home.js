import request from "@/utiles/request";
//推荐歌单
export const getRecommendMusic = (params) => {
  return request({
    method: 'GET',
    url: '/personalized',
    params
  })
}
//最新音乐的接口
export const getNewMusic = (params) => {
  return request({
    method: 'GET',
    url: '/personalized/newsong',
    params
  })
}