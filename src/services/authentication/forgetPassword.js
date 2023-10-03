import AxiosClient from "../AxiosClient";

export default async function forgetPassword({ email, sports, newPassword }) {
  return AxiosClient.post(`/api/v1/auth/forgot-password`, {
    email,
    answer: sports,
    newPassword,
  }).then((res) => res.data);
}
