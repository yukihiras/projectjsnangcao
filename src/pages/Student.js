import { getStudents, deleteStudent } from "../api/student";
import reRender from "../helpers/reRender";

const Student = {
  render: async () => {
    // đã có {} phải có return
    //1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
    //2. fetch trả về 1 promise => sẽ có await ở trước fetch để chờ kq
    //3.1 CÁCH SỬ DỤNG fetch nhận đường dẫn APT endpoint của BE
    // const response = await fetch(
    //   "https://6293446c089f87a57abd19e0.mockapi.io/students"
    // );
    //3.2 CÁCH SỬ DỤNG axios đã được khởi tạo và sinh ra hàm getStudents
    const response = await getStudents();
    //cách viết tường minh: const data = response.data;

    const { data } = response;
    //4. lần đợi fetch đầu tiên sẽ trả về obj Response

    console.log("response", response);
    //5. lần đợi tiếp theo là response trả dữ liệu về dạng json
    // const students = await response.json();
    // console.log("students", students);
    return `<div>
        ${data
          .map(
            (student) =>
              `            
                <div>${student.id}</div>
                <div>${student.name}</div>
                <div>${student.msv}</div>
                <div>
                    <a href="/students/${student.id}">
                        <button class='btn btn-info'>Chi Tiết</button>
                    </a>
                    <button class='btn btn-danger' 
                    data-id="${student.id}" 
                    data-name="${student.name}"
                    >Xóa</button>

                </div>
            `
          )
          .join("")}
    </div>`;
  },

  afterRender: () => {
    //Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xóa
    //1. Tìm toàn bộ nút xóa và thêm sự kiện click cho nó
    const deleteBtns = document.querySelectorAll(".btn-danger");
    deleteBtns.forEach((btn) => {
      // const data = btn.dataset;
      //addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
      btn.addEventListener("click", async () => {
        const btnId = btn.dataset.id; //đây là cách lấy id trên thuộc tính của thẻ html
        //thực hiện xóa
        await deleteStudent(btnId);
        // window.location.reload();
        await reRender("#content", Student);
      });
    });
  },
};
export default Student;
