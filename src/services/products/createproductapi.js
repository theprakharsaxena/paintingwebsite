// createproductapi.js
import AxiosClient from "../AxiosClient";

export default async function createproductapi(
  name,
  description,
  price,
  quantity,
  photo,
  category
) {
  const productData = new FormData();
  productData.append("name", name);
  productData.append("description", description);
  productData.append("price", price);
  productData.append("quantity", quantity);
  productData.append("photo", photo);
  productData.append("category", category);

  return AxiosClient.post(`/api/v1/product/create-product`, productData).then(
    (res) => res.data
  );
}
