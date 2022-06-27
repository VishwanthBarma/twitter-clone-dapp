import axios from "axios";
const key = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const secret = process.env.NEXT_PUBLIC_PINATA_API_SECRET;

export const pinJSONToIPFS = async (json) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  return axios
    .post(url, json, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjOTg3ZjRmOC01YjRjLTQ2ZDYtYWIyOC02NjhjMmVlZjllOTMiLCJlbWFpbCI6InZpc2h3YW50aGJzYXZwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5NjJjNjc5YjA2ZTQzZjMzNzE0YiIsInNjb3BlZEtleVNlY3JldCI6IjM2YjZjMzVmNGNjZjc5ZjBkN2NmZTNmNWEzMGM0NjM1NmI1NGJhMDFhMWIyYzU0ZDc3M2Q4YmMwNzVjYTU2MDgiLCJpYXQiOjE2NTYzMzE2MTR9.Vfr3-dsySdrpzXlrs__jQc1yjVl0GJxEUrUEFNyaZ5Q",
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then((response) => {
      return response.data.IpfsHash;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const pinFileToIPFS = async (file, pinataMetadata) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();

  data.append("file", file);
  data.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));
  data.append("pinataMetadata", JSON.stringify(pinataMetadata));

  return axios
    .post(url, data, {
      maxBodyLength: "Infinity",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjOTg3ZjRmOC01YjRjLTQ2ZDYtYWIyOC02NjhjMmVlZjllOTMiLCJlbWFpbCI6InZpc2h3YW50aGJzYXZwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI5NjJjNjc5YjA2ZTQzZjMzNzE0YiIsInNjb3BlZEtleVNlY3JldCI6IjM2YjZjMzVmNGNjZjc5ZjBkN2NmZTNmNWEzMGM0NjM1NmI1NGJhMDFhMWIyYzU0ZDc3M2Q4YmMwNzVjYTU2MDgiLCJpYXQiOjE2NTYzMzE2MTR9.Vfr3-dsySdrpzXlrs__jQc1yjVl0GJxEUrUEFNyaZ5Q",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then((response) => response.data.IpfsHash)
    .catch((error) => console.log(error));
};
