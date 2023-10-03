import AxiosClient from "../AxiosClient";

export default async function AddNewCategoryApi(name, description) {
  return AxiosClient.post(`/api/v1/product/createCategory`, {
    name,
    description,
  }).then((res) => res.data);
}
