import axios from "axios";
  
export const get = async (endpoint)=>{
    const token = localStorage.token;
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          }
    })
    return data
}