import AxiosClient from "../AxiosClient";

export default async function getAllProductsApi() {
  return AxiosClient.get(`/api/v1/product/get-product`).then(
    (res) => res.data
  );
}
