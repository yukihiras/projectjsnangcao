// nơi cấu hình base cho axios
import axios from "axios";

//khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create({
  baseURL: "https://6293446c089f87a57abd19e0.mockapi.io/",
});

export default apiAxios;
