import request from "@/utiles/request";

//获取热门搜索关键词请求
export const getHotSearch = (params) => {
  return request({
    url: '/search/hot',
    params
  })
}
//搜索请求
export const getSearchList = (params) => {
  return request({
    url: '/cloudsearch',
    params
  })
}