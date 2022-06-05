import { getProduct } from "../api/product";

const ProductDetail = {
  render: async (id) => {
    const response = await getProduct(id);
    const { data } = response;
    return `    <div>
    <div>Id: ${data.id}</div>
    <div>Name: ${data.name}</div>
    <div>description: ${data.description}</div>
    <div>price: ${data.price}</div>
    <div>status: ${data.status}</div>
  </div>`;
  },
};

export default ProductDetail;
