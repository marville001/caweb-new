import parseError from "../../../utils/parseError";
import {
    ADD_USER,
    CREATE_ADMIN,
    GET_ADMINS,
    GET_USERS,
    USERS_SEARCH,
} from "../../types";
import { get, post } from "../http";

export const addUser = (user) => async (dispatch) => {
    dispatch({ type: ADD_USER.REQUEST });
    try {
        const data = await post("auth/register", user, "admin");
        dispatch({ type: ADD_USER.SUCCESS, user: data.user });
        return { success: true, message: "User added successfully" };
    } catch (error) {
        dispatch({
            type: ADD_USER.FAIL,
            error:
                error?.response?.data?.message ||
                "An error occurred. Please try again",
        });
        return {
            success: false,
            message: parseError(error),
        };
    }
};

export const getUsers = (params) => async (dispatch) => {
    dispatch({ type: GET_USERS.REQUEST });
    try {
        const data = await get(
            `users?pagesize=${params?.pageSize || 5}&page=${params?.page || 1}`,
            "admin"
        );
        dispatch({
            type: GET_USERS.SUCCESS,
            users: data.users,
            total: data.total,
        });
    } catch (error) {
        dispatch({
            type: GET_USERS.FAIL,
            error: parseError(error),
        });
    }
};

export const searchUsersaction = (params) => async (dispatch) => {
    dispatch({ type: USERS_SEARCH.REQUEST });
    try {
        const data = await get(
            `users/search?search=${params?.search}&pagesize=${
                params?.pageSize || 5
            }&page=${params?.page || 1}`,
            "admin"
        );
        dispatch({
            type: USERS_SEARCH.SUCCESS,
            users: data.users,
            total: data.total,
        });
    } catch (error) {
        dispatch({
            type: USERS_SEARCH.FAIL,
            error: parseError(error),
        });
    }
};

export const createAdmin = (email) => async (dispatch) => {
    dispatch({ type: CREATE_ADMIN.REQUEST });
    try {
        const data = await post("users/admin", { email }, "admin");
        dispatch({ type: CREATE_ADMIN.SUCCESS, admin: data.admin });
        return { success: true, message: data.message };
    } catch (error) {
        dispatch({
            type: CREATE_ADMIN.FAIL,
            error: parseError(error),
        });
        return {
            success: false,
            message: parseError(error),
        };
    }
};

export const getAdmins = () => async (dispatch) => {
    dispatch({ type: GET_ADMINS.REQUEST });
    try {
        const data = await get(`users/admin`, "admin");
        dispatch({
            type: GET_ADMINS.SUCCESS,
            admins: data.admins,
        });
    } catch (error) {
        dispatch({
            type: GET_ADMINS.FAIL,
            error: parseError(error),
        });
    }
};
