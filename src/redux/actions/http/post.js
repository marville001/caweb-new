import axios from "axios";

export const post = async (endpoint, body) => {
  const token = localStorage.token;
  const { data } = await axios.post(`http://localhost:5500${endpoint}`, body, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });

  console.log({data});
  return data;
};
