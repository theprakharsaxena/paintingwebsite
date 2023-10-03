import AxiosClient from "../AxiosClient";

export default async function loginapi({ email, password }) {
  return AxiosClient.post(`/api/v1/auth/login`, {
    email,
    password,
  }).then((res) => res.data);
}
