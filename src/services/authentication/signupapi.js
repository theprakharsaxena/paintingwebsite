import AxiosClient from "../AxiosClient";

export default async function signupapi({
  name,
  email,
  password,
  phone,
  address,
  answer,
}) {
  return AxiosClient.post(`/api/v1/auth/register`, {
    name,
    email,
    password,
    phone,
    address,
    answer,
  }).then((res) => res.data);
}
