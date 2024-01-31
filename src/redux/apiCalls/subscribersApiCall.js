import { request } from "../../utils/request";
import {
    getUsers,
    getCodes,
    getCenters,
    setLoading,
} from "../slices/subscribersSlice";

//Get All Users:
export const GetUsers = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await request.get("/users/profile");
            dispatch(getUsers(data.users));
        } catch (error) {
            console.log(error);
        }
        dispatch(setLoading());
    };
};
//Get All Codes:
export const GetCodes = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await request.get("/codes");
            dispatch(getCodes(data.codes));
        } catch (error) {
            console.log(error);
        }
        dispatch(setLoading());
    };
};
//Get All Centers:
export const GetCenters = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await request.get("/centers");
            dispatch(getCenters(data));
        } catch (error) {}
        dispatch(setLoading());
    };
};
