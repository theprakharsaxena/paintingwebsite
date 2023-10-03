import AxiosClient from "../AxiosClient";

export default async function updateresetpasswordapi(
  password,
  confirmPassword,
  token
) {
  return AxiosClient.post(`/api/v1/profile`, {
    password,
    confirmPassword,
    token,
  }).then((res) => res.data);
}
