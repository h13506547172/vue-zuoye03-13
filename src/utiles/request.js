import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3000"
//如果一个项目中有多个根地址，再新建一个文件就可以了
const request = axios.create({
  baseURL: "http://localhost:3000"
})
export default request