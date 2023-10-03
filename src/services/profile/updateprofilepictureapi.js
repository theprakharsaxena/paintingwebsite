import AxiosClient from "../AxiosClient";

export default async function updateprofilepictureapi() {
  return AxiosClient.put(`/api/v1/profile/updateDisplayPicture`).then(
    (res) => res.data
  );
}
