import { createStudent } from "../api/student";

const StudentAdd = {
  render: () => {
    return `      <div>
        <form>
          <div>
            <form>
              <div class="form-group">
                <label for="">Tên</label>
                <input class="form-control" id="name" />
              </div>
              <div class="form-group">
                <label for="">msv</label>
                <input class="form-control" id="msv"/>
              </div>
              <div class="form-group">
                <label for="">avatar</label>
                <input class="form-control" id="avatar"/>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-success" id="btn">Tạo Mới</button>
              </div>
            </form>
          </div>
        </form>
      </div>`;
  },

  afterRender: () => {
    const submitBtn = document.querySelector("#btn");
    submitBtn.addEventListener("click", async () => {
      const name = document.querySelector("#name").value;
      const msv = document.querySelector("#msv").value;
      const avatar = document.querySelector("#avatar").value;
      const submitData = {
        name: name,
        msv: msv,
        avatar: avatar,
      };
      console.log(submitData);
      await createStudent(submitData);
      window.location.replace("/students");
    });
  },
};

export default StudentAdd;
