import axios from "axios";
  
export const get = async (endpoint)=>{
    const token = localStorage.token;
    console.log(token);
    const {data} = await axios.get(`http://localhost:5500${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          }
    })
    return data
}