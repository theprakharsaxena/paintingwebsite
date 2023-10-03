import AxiosClient from "../AxiosClient";

export default async function getallcategoryapi() {
  return AxiosClient.get(`/api/v1/product/showAllCategories`).then(
    (res) => res.data
  );
}
