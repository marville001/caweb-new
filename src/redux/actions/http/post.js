import axios from "axios";

export const post = async (endpoint, body) => {
  const token = localStorage.token;
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}${endpoint}`, body, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });

  return data;
};
