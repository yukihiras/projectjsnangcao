import { getProducts, deleteProduct } from "../api/product";
import reRender from "../helpers/reRender";
const Product = {
  render: async () => {
    const response = await getProducts();
    const { data } = response;
    console.log("response", response);
    //dòng thứ 18 phải dùng toán tử so sánh chứ ko phải toán tử gán
    return `      <div>
        ${data
          .map(
            (product) =>
              `        
        <div>id: ${product.id}</div>
        <div>Tên sản phẩm: ${product.name}</div>
        <div>giá: ${product.price}đ</div>
        <div>mô tả: ${product.description}</div>
        <div>tình trạng: ${product.status == 1 ? "hiện" : "ẩn"}</div> 
        <div>
          <a href="/products/${product.id}">
          <button class='btn btn-info'>Chi Tiết</button>
          </a>
          <button class='btn btn-danger' 
          data-id="${product.id}" 
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
        await deleteProduct(btnId);
        // window.location.reload();
        await reRender("#content", Product);
      });
    });
  },
};

export default Product;
