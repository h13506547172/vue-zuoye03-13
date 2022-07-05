import request from "@/utils/request";
export const delBook = (params) => {
  return request({
    method: 'GET',
    url: '/api/delbook',
    params: params,
  })
}