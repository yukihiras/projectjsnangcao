import { createProduct } from "../api/product";

const ProductAdd = {
  render: () => {
    return `      <div>
        <form>
          <div>
            <form>
              <div class="form-group">
                <label for="">name</label>
                <input class="form-control" id="name" />
              </div>
              <div class="form-group">
                <label for="">price</label>
                <input class="form-control" id="price"/>
              </div>
              <div class="form-group">
                <label for="">description</label>
                <input class="form-control" id="description"/>
              </div>
              <div class="form-group">
              <label for="">status</label>
              <select id="status">
              <option value="1">hiện</option>
              <option value="0">ẩn</option>
            </select>
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
      const price = document.querySelector("#price").value;
      const description = document.querySelector("#description").value;
      const status = document.querySelector("#status").value;
      // const status2 = document.querySelector("#status2").value;

      const submitData = {
        name: name,
        price: price,
        description: description,
        status: status,
        // status2: status2,
      };
      console.log(submitData);
      await createProduct(submitData);
      window.location.replace("/products");
    });
  },
};
export default ProductAdd;
