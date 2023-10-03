import AxiosClient from "../AxiosClient";

export default async function getaproductdetailsapi(productId) {
  return AxiosClient.post(`/api/v1/product/getProductDetails`, {
    productId,
  }).then((res) => res.data);
}
