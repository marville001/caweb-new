import parseError from "../../utils/parseError";
import { FETCH_ABOUT, SAVE_ABOUT } from "../types";
import { get, post, put } from "./http";

export const createAboutAction =
    (about, id = "") =>
    async (dispatch) => {
        dispatch({ type: SAVE_ABOUT.REQUEST });
        try {
            if (id) {
                await put("about/" + id, about, "admin");
            } else {
                await post("about/", about, "admin");
            }

            dispatch({ type: SAVE_ABOUT.SUCCESS });
            return { success: true, message: "About saved successfully" };
        } catch (error) {
            dispatch({
                type: SAVE_ABOUT.FAIL,
            });
            return {
                success: false,
                message: parseError(error),
            };
        }
    };

export const fetchAboutAction =
    (type = "user") =>
    async (dispatch) => {
        dispatch({ type: FETCH_ABOUT.REQUEST });
        try {
            const data = await get("about", type);
            dispatch({
                type: FETCH_ABOUT.SUCCESS,
                about: data.about,
            });
        } catch (error) {
            dispatch({
                type: FETCH_ABOUT.FAIL,
                error: parseError(error),
            });
        }
    };
