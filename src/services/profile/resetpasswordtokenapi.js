import AxiosClient from "../AxiosClient";

export default async function resetpasswordapi(email) {
  return AxiosClient.post(`/api/v1/auth/reset-password-token`, {
    email,
  }).then((res) => res.data);
}
