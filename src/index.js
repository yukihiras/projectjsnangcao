import Navigo from "navigo";
import { Header } from "./components/Header";
import { HeaderBoot } from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

//HOME
import News from "./pages/News";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

//STUDENT
import Student from "./pages/Student";
import StudentDetail from "./pages/StudentDetail";
import StudentAdd from "./pages/StudentAdd";

//PRODUCTS
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductsDetail";
import ProductAdd from "./pages/ProductAdd";

//khởi tạo đối tượng router
const router = new Navigo("/", { linksSelector: "a" });

const render = async (content, id) => {
  //Content sẽ là toàn bộ component
  //Cần thêm tham số vào hàm này để truyền id cho những phần detail
  document.querySelector("#header").innerHTML =
    HeaderBoot.render() + Header.render();
  document.querySelector("#content").innerHTML = await content.render(id);
  document.querySelector("#footer").innerHTML = Footer.render();
  //sau khi content đã render xong thì afterRender mới được chạy
  if (content.afterRender()) {
    content.afterRender();
  }
};

router.on({
  //router home
  "/": () => render(Home),
  "/about": () => render(About),
  "/news": () => render(News),

  //router student
  "/students": () => render(Student),
  "/students/add": () => render(StudentAdd),
  "/students/:id": (data) => render(StudentDetail, data.data.id),

  //router product
  "/products": () => render(Product),
  "/products/add": () => render(ProductAdd),
  "/products/:id": (data) => render(ProductDetail, data.data.id),
});

router.resolve();
// render();

// //cú pháp của arrow function:  const ten_ham = () => {};

// const arrowRender = () => {
//   document.querySelector("#header").innerHTML = "<div>Header</div>";
//   document.querySelector("content").innerHTML = "<div>Header</div>";
//   document.querySelector("footer").innerHTML = "<div>Header</div>";
// };

// function sum(a, b) {
//   return a + b;
// }

// //arrow
// const sum1 = (a, b) => {
//   return a + b;
// };
// // nếu chỉ có 1 return
// const sum2 = (a, b) => a + b;

// //nếu chỉ có 1 tham số
// const display = (a) => console.log(a);

// // Callback: là 1 hàm được truyền vào dưới dạng đối số, và thực thi trong 1 hàm
// const display1 = (a) => alert(a);
// const abc = (print) => {
//   const result = sum(2, 3);
//   //có nhiều cách hiển thị khác nhau, và phải nhận kq hiển thị từ result
//   print(result);
//   // display(result);
//   // display1(result);
// };

// //abc (display);
// abc(display1);

// //vd2
// const loadScript = (src, callBack) => {
//   const srciptE = document.createElement("script");
//   srciptE.src = src;
//   srciptE.onload = () => callBack();
// };

// const khoiTaoSv = () => {
//   var sinhVien = {};
// };

// loadScript("moment.min.js", khoiTaoSv);

// // đếm số chữ cái trong thông tin user
// const countString = (string, callback) => {
//   // mang countString2 truyền vào
//   setTimeout(() => {
//     console.log(string);
//     callback(string);
//   }, 1000); //sau khi kết thúc 1s thì mới chạy lần lượt cả 2 đoạn logic
// };
// const countString2 = (string) => console.log(string);

// const receiveUser = (user, callback, callback2) => {
//   // Lấy ra tên
//   const username = user.name;
//   // nhận tham số truyền vào là 1 trong 2 cách hiển thị tên
//   callback(username, callback2);
//   // countString(username);
// };

// // receiveUser({name: 'tuannda3'}, countString); // gọi trước nhưng chậm 1 giây
// // receiveUser({name: 'tuannda4'}, countString2);

// // Promise
// // let a = []; // 1
// // setTimeout(() => {
// //     a = [1, 2, 3]; // 2
// // }, 1000);
// // // console.log(a); // 3

// // Promise là đối tượng xử lý bất đồng bộ ở es6
// // resolve thực thi khi đúng, và gtrị truyền vào resolve sẽ trả ở then
// // reject thực thi khi sai, và giá trị truyền vào reject sẽ trả ở catch
// const setValueA = () =>
//   new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//       if (status) {
//         resolve([1, 2, 3]);
//       } else {
//         reject("bị lỗi");
//       }
//       // a = [1, 2, 3];
//     }, 5000);
//   });

// let a = [];

// setValueA()
//   .then((data) => {
//     data.push(4);
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
// // console.log(a);

// // async/await
// // async : định nghịa 1 hàm có thể xử lý bất đồng bộ
// // await : định nghĩa 1 câu lệnh cần phải được chờ thực thi rồi mới thực câu lệnh tiếp theo
// // Lưu ý: await phải nằm trong 1 hàm async thì mới dùng được
// // Lưu ý: await phải là 1 hàm trả về đối tượng Promise

// //async sẽ là cái để định nghĩa xem 1 hàm có phải là hàm xử lý bất đồng bộ ko ?
// const printA = async () => {
//   // Gọi hàm setValueA để chờ nhận kết quả là mảng [1, 2, 3]
//   // cứ thằng nào có hàm await thì nó sẽ chạy trước và cho đến khi nó chạy xong thì những thằng khác mới được chạy
//   const result = await setValueA(); // giá trị được truyền vào trong resolve()
//   // chờ setValueA thực thi xong và trả về kq [1,2,3];
//   // thì mới chạy dòng tiếp theo là console.log
//   console.log("chờ result nhận kết quả rồi mới ra log này", result);
//   result.push(4);
//   console.log("sau khi thực hiện push ra kết quả này", result);
// };

// printA();
// //vì đã có cái async await này rồi thì ko cần dùng callback để xử lý bất đồng bộ trình từ logic nữa
// //mà sẽ sử dụng nó với các xử lý đơn giản thông thường(đoạn này thầy nói hơn nhanh nên ko nhớ rõ lắm)
