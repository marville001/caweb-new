import axios from "axios";

export const _delete = async (endpoint, type = "user") => {
  const token = type === "admin" ? localStorage.adminToken : localStorage.token;
  const { data } = await axios.delete(
    `${process.env.REACT_APP_API_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  return data;
};
