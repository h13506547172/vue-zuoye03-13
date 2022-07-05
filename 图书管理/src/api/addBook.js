import request from "@/utils/request";

export const addBook = (data) => {
  return request({
    method: 'POST',
    url: '/api/addbook',
    data: data
  })
}