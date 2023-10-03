import AxiosClient from "../AxiosClient";

export default async function getuserdetailsapi() {
  return AxiosClient.get(`/api/v1/profile/getUserDetails`).then(
    (res) => res.data
  );
}
