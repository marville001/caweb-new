import axios from "axios";
import { API_URL } from ".";

export const get = async (endpoint, type = "user") => {
  const token = type === "admin" ? localStorage.adminToken : localStorage.token;
  const { data } = await axios.get(
    `${API_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return data;
};
