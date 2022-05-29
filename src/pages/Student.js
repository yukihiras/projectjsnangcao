const Student = {
  render: async () => {
    // đã có {} phải có return
    //1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
    //2. fetch trả về 1 promise => sẽ có await ở trước fetch để chờ kq
    //3. fetch nhận đường dẫn APT endpoint của BE
    const response = await fetch(
      "https://6293446c089f87a57abd19e0.mockapi.io/students"
    );
    //4. lần đợi fetch đầu tiên sẽ trả về obj Response
    console.log("response", response);
    //5. lần đợi tiếp theo là response trả dữ liệu về dạng json
    const students = await response.json();
    console.log("students", students);
    return `<div>
        ${students
          .map(
            (student) =>
              `            
                <div>${student.id}</div>
                <div>${student.name}</div>
                <div>${student.msv}</div>
            `
          )
          .join("")}
    </div>`;
  },
};
export default Student;
