import axios from "axios";

const PINATA_API_KEY = "YOUR_PINATA_API_KEY";
const PINATA_SECRET = "YOUR_PINATA_SECRET";

export const uploadToIPFS = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET
      }
    }
  );

  return response.data.IpfsHash;
};
