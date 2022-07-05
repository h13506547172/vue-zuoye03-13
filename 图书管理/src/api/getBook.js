import request from "@/utils/request";

export const getBook = (params) => {
  return request({
    url: '/api/getbooks',
    params: params
  })
}