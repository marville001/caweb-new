export { get } from "./get";
export { post } from "./post";
export { put } from "./put";
export { _delete } from "./_delete";

// export const API_URL = "http://localhost:5500/api/"
export const API_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5500/api/"
        : "https://caweb-api.herokuapp.com/api/";
// export const API_URL = "https://api.dekutcatholicchaplaincy.org/api/"
