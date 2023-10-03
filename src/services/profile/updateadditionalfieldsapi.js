import AxiosClient from "../AxiosClient";

export default async function updateadditionalfieldsapi(
  about,
  contactNumber,
  dateOfBirth
) {
  return AxiosClient.put(`/api/v1/profile/updateProfile`, {
    about,
    contactNumber,
    dateOfBirth,
  }).then((res) => res.data);
}
