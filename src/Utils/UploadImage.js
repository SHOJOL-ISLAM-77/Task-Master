import axios from "axios";

export const UploadImg = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=6866edd7bf49735b92c911bd9338e159`,formData);
  return data;
};
