import axios from "axios";
import * as type from "./actionTypes";
import { User } from "../../types/types";

export const getAllUsersStart = () => {
    return (dispatch:any) => {
        axios
        .get("https://mels-news-api.herokuapp.com/api/users")
        .then((response) => {
            dispatch(getAllUsersSuccess(response.data.users))
        }).catch((error) => {
            dispatch(getAllUsersFail(error))
        })
    }
}

export const getAllUsersSuccess = (users: User[]) => {
    return {
        type: type.GET_USERS_SUCCESS,
        users: users
    };
}

export const getAllUsersFail = (error: string) => {
    return {
        type: type.GET_USERS_FAIL,
        error: error
    }
}